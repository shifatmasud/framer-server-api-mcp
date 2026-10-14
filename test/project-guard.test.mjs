import assert from "node:assert/strict";
import test from "node:test";
import { createMcpHandler } from "agents/mcp/server";
import { McpServer } from "@modelcontextprotocol/server";
import { parseBearerHeader, parsePinnedProjectRoute, withVerifiedProject } from "../src/project-guard.mjs";
import { createWorkerHandler } from "../src/worker.mjs";

const projectId = "DemoProject2026";
const routePath = `/mcp/projects/Sample-Site--${projectId}`;
const projectUrl = `https://framer.com/projects/Sample-Site--${projectId}`;
const testKey = "unit-test-key-42";

function rpcRequest({ path = routePath, authorization = `Bearer ${testKey}`, method = "POST", message = { jsonrpc: "2.0", id: 1, method: "initialize", params: { protocolVersion: "2025-11-25", capabilities: {}, clientInfo: { name: "unit-test", version: "1.0.0" } } } } = {}) {
  return new Request(`https://worker.example${path}`, {
    method,
    headers: {
      host: "worker.example",
      ...(authorization === null ? {} : { authorization }),
      "content-type": "application/json",
      accept: "application/json, text/event-stream",
    },
    body: method === "POST" ? JSON.stringify(message) : undefined,
  });
}

async function responseJson(response) {
  const body = await response.text();
  const data = body.split(/\r?\n/).filter((line) => line.startsWith("data:")).map((line) => line.slice(5).trim()).at(-1);
  return JSON.parse(data ?? body);
}

function stubClient(id, calls = []) {
  return {
    getProjectInfo: async () => {
      calls.push("getProjectInfo");
      return { id, name: "Test project" };
    },
    getCollections: async () => [{ id: "collection-1", name: "Articles", slug: "articles" }],
    getCollection: async (collectionId) => {
      assert.equal(collectionId, "collection-1");
      return {
        getItems: async () => [{ id: "item-1", slug: "hello", fieldData: { title: { type: "string", value: "Hello" } }, draft: true }],
        addItems: async () => calls.push("addItems"),
        removeItems: async () => calls.push("removeItems"),
      };
    },
    publish: async () => calls.push("publish"),
    deploy: async () => calls.push("deploy"),
    disconnect: async () => calls.push("disconnect"),
  };
}

test("project route accepts one canonical slug--id path and rejects malformed or unknown selectors", async (t) => {
  const parsed = parsePinnedProjectRoute(`https://worker.example${routePath}`);
  assert.equal(parsed?.projectId, projectId);
  assert.equal(parsed?.projectUrl, projectUrl);
  assert.equal(parsed?.pathname, routePath);

  for (const path of [
    "/mcp/projects/not-a-project",
    `${routePath}/extra`,
    `${routePath}?projectId=other`,
    `/mcp/projects/Sample-Site--short`,
    `/mcp/projects/Sample-Site--${projectId}%2Fother`,
    "/mcp/projects/../other--DemoProject2026",
  ]) {
    await t.test(path, () => assert.equal(parsePinnedProjectRoute(`https://worker.example${path}`), null));
  }
});

test("missing or malformed Bearer credentials are rejected before any SDK call", async () => {
  assert.equal(parseBearerHeader(null), null);
  assert.equal(parseBearerHeader("Basic abc"), null);
  assert.equal(parseBearerHeader("Bearer"), null);
  assert.equal(parseBearerHeader("Bearer abc def"), null);
  assert.equal(parseBearerHeader(`Bearer ${"x".repeat(5000)}`), null);

  let sdkCalls = 0;
  for (const authorization of [null, "Basic abc", "Bearer", "Bearer abc def", `Bearer ${"x".repeat(5000)}`]) {
    const response = await withVerifiedProject(rpcRequest({ authorization }), {
      connect: async () => { sdkCalls++; return stubClient(projectId); },
      invoke: async () => new Response("unexpected"),
    });
    assert.equal(response.status, 401);
  }
  assert.equal(sdkCalls, 0);
});

test("matching key/project succeeds; mismatched project fails once with no fallback", async () => {
  const calls = [];
  const success = await withVerifiedProject(rpcRequest(), {
    connect: async (url, key) => {
      calls.push({ url, key });
      return stubClient(projectId);
    },
    invoke: async ({ route }) => new Response(JSON.stringify({ projectId: route.projectId }), { headers: { "content-type": "application/json" } }),
  });
  assert.equal(success.status, 200);
  assert.deepEqual(calls[0], { url: projectUrl, key: testKey });

  let fallbackAttempts = 0;
  const mismatch = await withVerifiedProject(rpcRequest(), {
    connect: async () => { fallbackAttempts++; return stubClient("OtherProjectId123456789"); },
    invoke: async () => assert.fail("must not dispatch after project mismatch"),
  });
  assert.equal(mismatch.status, 403);
  assert.equal(fallbackAttempts, 1);
});

test("SDK errors and attempted key-bearing MCP responses are redacted", async () => {
  const thrown = await withVerifiedProject(rpcRequest(), {
    connect: async () => { throw new Error(`synthetic failure ${testKey}`); },
    invoke: async () => new Response("unexpected"),
  });
  assert.equal(thrown.status, 502);
  assert.equal((await thrown.text()).includes(testKey), false);

  const echoed = await withVerifiedProject(rpcRequest(), {
    connect: async () => stubClient(projectId),
    invoke: async () => new Response(JSON.stringify({ text: `unexpected ${testKey}` })),
  });
  assert.equal(echoed.status, 502);
  assert.equal((await echoed.text()).includes(testKey), false);
});

test("disconnect runs after success, mismatch, and operation failure; cleanup errors are suppressed", async () => {
  const calls = [];
  await withVerifiedProject(rpcRequest(), {
    connect: async () => stubClient(projectId, calls),
    invoke: async () => new Response("{}"),
  });
  await withVerifiedProject(rpcRequest(), {
    connect: async () => stubClient("OtherProjectId123456789", calls),
    invoke: async () => assert.fail("must not run on mismatch"),
  });
  await withVerifiedProject(rpcRequest(), {
    connect: async () => ({ ...stubClient(projectId, calls), disconnect: async () => { calls.push("disconnect"); throw new Error(testKey); } }),
    invoke: async () => { throw new Error(`synthetic ${testKey}`); },
  });
  assert.equal(calls.filter((entry) => entry === "disconnect").length, 3);
});

test("the installed Cloudflare MCP handler enforces its configured exact path", async () => {
  let serverCreated = 0;
  const handler = createMcpHandler(() => {
    serverCreated++;
    return new McpServer({ name: "route-test", version: "1.0.0" });
  }, { route: routePath, responseMode: "json", allowedHostnames: ["worker.example"] });

  const wrongPath = await handler(rpcRequest({ path: `${routePath}/other` }), {}, { waitUntil() {} });
  assert.equal(wrongPath.status, 404);
  assert.equal(serverCreated, 0);

  const exactPath = await handler(rpcRequest(), {}, { waitUntil() {} });
  assert.equal(exactPath.status, 200);
  assert.equal(serverCreated, 1);
  assert.equal((await responseJson(exactPath)).result.serverInfo.name, "route-test");
});

test("real initialize, tools/list, and a safe read pass through the same project guard", async () => {
  const lifecycle = [];
  const worker = createWorkerHandler({
    connectClient: async (url, key) => {
      assert.equal(url, projectUrl);
      assert.equal(key, testKey);
      return stubClient(projectId, lifecycle);
    },
  });
  const ctx = { waitUntil() {} };

  const initialize = await worker.fetch(rpcRequest(), {}, ctx);
  assert.equal(initialize.status, 200);
  const initResult = await responseJson(initialize);
  assert.equal(initResult.result.serverInfo.name, "framer-server-api");

  const list = await worker.fetch(rpcRequest({ message: { jsonrpc: "2.0", id: 2, method: "tools/list", params: {} } }), {}, ctx);
  assert.equal(list.status, 200);
  const tools = (await responseJson(list)).result.tools;
  const names = tools.map((tool) => tool.name);
  assert.ok(names.includes("framer_get_project_info"));
  assert.ok(names.includes("framer_upsert_cms_items"));
  assert.ok(names.includes("framer_delete_cms_items"));
  assert.ok(names.includes("framer_publish_preview"));
  assert.ok(names.includes("framer_deploy_published_version"));

  const call = await worker.fetch(rpcRequest({ message: { jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: "framer_get_project_info", arguments: {} } } }), {}, ctx);
  assert.equal(call.status, 200);
  const result = (await responseJson(call)).result;
  assert.notEqual(result.isError, true);
  assert.match(result.content[0].text, /Test project/);

  assert.equal(lifecycle.filter((entry) => entry === "disconnect").length, 3);
  assert.equal(lifecycle.some((entry) => ["addItems", "removeItems", "publish", "deploy"].includes(entry)), false);
});

test("unknown routes and non-POST methods fail before SDK work", async () => {
  let sdkCalls = 0;
  const worker = createWorkerHandler({ connectClient: async () => { sdkCalls++; return stubClient(projectId); } });
  assert.equal((await worker.fetch(rpcRequest({ path: "/mcp/projects/not-valid" }), {}, { waitUntil() {} })).status, 404);
  assert.equal((await worker.fetch(rpcRequest({ method: "GET" }), {}, { waitUntil() {} })).status, 405);
  assert.equal(sdkCalls, 0);
});
