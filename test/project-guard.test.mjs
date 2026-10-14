import assert from "node:assert/strict";
import test from "node:test";
import { createMcpHandler } from "agents/mcp/server";
import { McpServer } from "@modelcontextprotocol/server";
import {
  MCP_PROTOCOL_VERSION,
  SUPPORTED_PROTOCOL_VERSIONS,
  parseBearerHeader,
  parsePinnedProjectRoute,
  withVerifiedProject,
} from "../src/project-guard.mjs";
import { createWorkerHandler } from "../src/worker.mjs";

const projectId = "DemoProject2026";
const routePath = `/mcp/projects/Sample-Site--${projectId}`;
const projectUrl = `https://framer.com/projects/Sample-Site--${projectId}`;
const testKey = "unit-test-key-42";
const initializeMessage = {
  jsonrpc: "2.0",
  id: 1,
  method: "initialize",
  params: {
    protocolVersion: MCP_PROTOCOL_VERSION,
    capabilities: {},
    clientInfo: { name: "unit-test", version: "1.0.0" },
  },
};

function rpcRequest({
  path = routePath,
  authorization = `Bearer ${testKey}`,
  host = "framer-server-api-mcp.shifatmasud.workers.dev",
  origin = null,
  protocolHeader = null,
  method = "POST",
  contentType = "application/json",
  accept = "application/json, text/event-stream",
  message = initializeMessage,
} = {}) {
  const headers = new Headers();
  if (contentType !== null) headers.set("content-type", contentType);
  if (accept !== null) headers.set("accept", accept);
  if (host !== null) headers.set("host", host);
  if (authorization !== null) headers.set("authorization", authorization);
  if (origin !== null) headers.set("origin", origin);
  if (protocolHeader !== null) headers.set("mcp-protocol-version", protocolHeader);

  return new Request(`https://framer-server-api-mcp.shifatmasud.workers.dev${path}`, {
    method,
    headers,
    body: method === "POST" ? JSON.stringify(message) : undefined,
  });
}

async function responseJson(response) {
  const body = await response.text();
  const data = body
    .split(/\r?\n/)
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trim())
    .at(-1);
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
        getItems: async () => [{
          id: "item-1",
          slug: "hello",
          fieldData: { title: { type: "string", value: "Hello" } },
          draft: true,
        }],
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
  const parsed = parsePinnedProjectRoute(`https://framer-server-api-mcp.shifatmasud.workers.dev${routePath}`);
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
    await t.test(path, () => assert.equal(parsePinnedProjectRoute(`https://framer-server-api-mcp.shifatmasud.workers.dev${path}`), null));
  }
});

test("invalid, missing, or mismatched Host and any unverified present Origin fail in outer fetch before Framer SDK calls", async () => {
  let sdkCalls = 0;
  const worker = createWorkerHandler({ connectClient: async () => { sdkCalls++; return stubClient(projectId); } });
  const ctx = { waitUntil() {} };

  for (const host of [null, "attacker.example", "framer-server-api-mcp.shifatmasud.workers.dev/extra", "bad host"]) {
    const response = await worker.fetch(rpcRequest({ host }), {}, ctx);
    assert.equal(response.status, 400, `host ${String(host)} must be rejected`);
  }

  for (const origin of ["https://unverified.invalid", "null", ""]) {
    const response = await worker.fetch(rpcRequest({ origin }), {}, ctx);
    assert.equal(response.status, 403, `Origin ${JSON.stringify(origin)} must be rejected`);
  }
  assert.equal(sdkCalls, 0);
});

test("invalid Content-Type and Accept fail in outer fetch before any Framer SDK call", async () => {
  let sdkCalls = 0;
  const worker = createWorkerHandler({ connectClient: async () => { sdkCalls++; return stubClient(projectId); } });
  const ctx = { waitUntil() {} };
  const invalidRequests = [
    [rpcRequest({ contentType: null }), 415],
    [rpcRequest({ contentType: "text/plain" }), 415],
    [rpcRequest({ contentType: "application/jsonp" }), 415],
    [rpcRequest({ accept: null }), 406],
    [rpcRequest({ accept: "application/json" }), 406],
    [rpcRequest({ accept: "text/event-stream" }), 406],
    [rpcRequest({ accept: "application/json;q=0, text/event-stream" }), 406],
    [rpcRequest({ accept: "*/*" }), 406],
  ];

  for (const [request, expectedStatus] of invalidRequests) {
    const response = await worker.fetch(request, {}, ctx);
    assert.equal(response.status, expectedStatus);
  }

  const validMediaTypes = await worker.fetch(rpcRequest({
    authorization: null,
    contentType: "application/json; charset=utf-8",
    accept: "application/json;q=0.9, text/event-stream;q=0.8",
  }), {}, ctx);
  assert.equal(validMediaTypes.status, 401);
  assert.equal(sdkCalls, 0);
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

test("only supported initialize versions and supported present post-initialize headers reach the SDK", async () => {
  let sdkCalls = 0;
  const worker = createWorkerHandler({ connectClient: async () => { sdkCalls++; return stubClient(projectId); } });
  const ctx = { waitUntil() {} };
  const invalidRequests = [
    rpcRequest({ message: { ...initializeMessage, params: { ...initializeMessage.params, protocolVersion: "future-or-bogus" } } }),
    rpcRequest({ message: { ...initializeMessage, params: {} } }),
    rpcRequest({ protocolHeader: "future-or-bogus" }),
    rpcRequest({ protocolHeader: "bogus", message: { jsonrpc: "2.0", id: 2, method: "tools/list", params: {} } }),
  ];

  for (const request of invalidRequests) {
    const response = await worker.fetch(request, {}, ctx);
    assert.equal(response.status, 400);
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
    connect: async () => ({
      ...stubClient(projectId, calls),
      disconnect: async () => {
        calls.push("disconnect");
        throw new Error(testKey);
      },
    }),
    invoke: async () => { throw new Error(`synthetic ${testKey}`); },
  });
  assert.equal(calls.filter((entry) => entry === "disconnect").length, 3);
});

test("the installed Cloudflare MCP handler enforces its configured exact path", async () => {
  let serverCreated = 0;
  const handler = createMcpHandler(() => {
    serverCreated++;
    return new McpServer({ name: "route-test", version: "1.0.0" });
  }, { route: routePath, responseMode: "auto", allowedHostnames: ["framer-server-api-mcp.shifatmasud.workers.dev"] });

  const wrongPath = await handler(rpcRequest({ path: `${routePath}/other` }), {}, { waitUntil() {} });
  assert.equal(wrongPath.status, 404);
  assert.equal(serverCreated, 0);

  const exactPath = await handler(rpcRequest(), {}, { waitUntil() {} });
  assert.equal(exactPath.status, 200);
  assert.equal(serverCreated, 1);
  assert.equal((await responseJson(exactPath)).result.serverInfo.name, "route-test");
});

test("initialize supports all official MCP versions (2025-11-25, 2025-06-18, 2025-03-26, 2024-11-05)", async () => {
  const lifecycle = [];
  const worker = createWorkerHandler({
    connectClient: async (url, key) => {
      assert.equal(url, projectUrl);
      assert.equal(key, testKey);
      return stubClient(projectId, lifecycle);
    },
  });
  const ctx = { waitUntil() {} };

  for (const version of SUPPORTED_PROTOCOL_VERSIONS) {
    const initRes = await worker.fetch(rpcRequest({
      message: { ...initializeMessage, params: { ...initializeMessage.params, protocolVersion: version } },
    }), {}, ctx);
    assert.equal(initRes.status, 200, `version ${version} must return 200`);
    const initResult = await responseJson(initRes);
    assert.equal(initResult.result.protocolVersion, MCP_PROTOCOL_VERSION);
    assert.equal(initResult.result.serverInfo.name, "framer-server-api");
  }

  const initialized = await worker.fetch(rpcRequest({
    message: { jsonrpc: "2.0", method: "notifications/initialized" },
  }), {}, ctx);
  assert.equal(initialized.status, 202);
  assert.equal(await initialized.text(), "");

  const list = await worker.fetch(rpcRequest({
    message: { jsonrpc: "2.0", id: 2, method: "tools/list", params: {} },
  }), {}, ctx);
  assert.equal(list.status, 200);
  const tools = (await responseJson(list)).result.tools;
  const names = tools.map((tool) => tool.name);
  assert.ok(names.includes("framer_get_project_info"));
  assert.ok(names.includes("framer_upsert_cms_items"));
  assert.ok(names.includes("framer_delete_cms_items"));
  assert.ok(names.includes("framer_publish_preview"));
  assert.ok(names.includes("framer_deploy_published_version"));

  const gatedNames = ["framer_upsert_cms_items", "framer_delete_cms_items", "framer_publish_preview", "framer_deploy_published_version"];
  for (const name of gatedNames) {
    const schema = tools.find((tool) => tool.name === name)?.inputSchema;
    assert.ok(schema?.properties?.confirm, `${name} schema must expose confirm`);
    assert.ok(schema.required?.includes("confirm"), `${name} must require confirm`);
  }

  const call = await worker.fetch(rpcRequest({
    message: { jsonrpc: "2.0", id: 3, method: "tools/call", params: { name: "framer_get_project_info", arguments: {} } },
  }), {}, ctx);
  assert.equal(call.status, 200);
  const result = (await responseJson(call)).result;
  assert.notEqual(result.isError, true);
  assert.match(result.content[0].text, /Test project/);

  assert.equal(lifecycle.some((entry) => ["addItems", "removeItems", "publish", "deploy"].includes(entry)), false);
});

test("dangerous tools reject missing or false confirmation without invoking any Framer write or release method", async () => {
  const actions = [];
  const worker = createWorkerHandler({ connectClient: async () => stubClient(projectId, actions) });
  const ctx = { waitUntil() {} };
  const cases = [
    ["framer_upsert_cms_items", { collectionId: "collection-1", items: [{ slug: "new-item" }] }],
    ["framer_delete_cms_items", { collectionId: "collection-1", itemIds: ["item-1"] }],
    ["framer_publish_preview", {}],
    ["framer_deploy_published_version", { deploymentId: "deployment-1" }],
  ];

  for (const [name, args] of cases) {
    for (const withFalse of [false, true]) {
      const rejectedArgs = withFalse ? { ...args, confirm: false } : args;
      const response = await worker.fetch(rpcRequest({
        protocolHeader: MCP_PROTOCOL_VERSION,
        message: { jsonrpc: "2.0", id: 10, method: "tools/call", params: { name, arguments: rejectedArgs } },
      }), {}, ctx);
      assert.equal(response.status, 200);
      const reply = await responseJson(response);
      assert.ok(reply.error || reply.result?.isError === true, `${name} without confirm:true must fail`);
    }
  }
  assert.equal(actions.some((entry) => ["addItems", "removeItems", "publish", "deploy"].includes(entry)), false);
});

test("unknown routes and non-POST methods fail before SDK work", async () => {
  let sdkCalls = 0;
  const worker = createWorkerHandler({ connectClient: async () => { sdkCalls++; return stubClient(projectId); } });
  assert.equal((await worker.fetch(rpcRequest({ path: "/mcp/projects/not-valid" }), {}, { waitUntil() {} })).status, 404);
  assert.equal((await worker.fetch(rpcRequest({ method: "GET" }), {}, { waitUntil() {} })).status, 405);
  assert.equal(sdkCalls, 0);
});
