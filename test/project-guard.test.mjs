import assert from "node:assert/strict";
import test from "node:test";
import {
  parseBearerHeader,
  parsePinnedProjectRoute,
  withVerifiedProject,
} from "../src/project-guard.mjs";

const projectId = "DemoProject2026";
const routePath = `/mcp/projects/Sample-Site--${projectId}`;
const projectUrl = `https://framer.com/projects/Sample-Site--${projectId}`;
const testKey = "unit-test-key-42";

function request({ path = routePath, authorization = `Bearer ${testKey}`, method = "POST", body = { jsonrpc: "2.0", id: 1, method: "initialize" } } = {}) {
  return new Request(`https://worker.example${path}`, {
    method,
    headers: {
      ...(authorization === null ? {} : { authorization }),
      "content-type": "application/json",
      accept: "application/json, text/event-stream",
    },
    body: method === "POST" ? JSON.stringify(body) : undefined,
  });
}

function stubClient(id, calls = []) {
  return {
    getProjectInfo: async () => {
      calls.push("getProjectInfo");
      return { id };
    },
    disconnect: async () => calls.push("disconnect"),
  };
}

test("project route accepts one canonical slug--id path and rejects malformed selectors", async (t) => {
  const parsed = parsePinnedProjectRoute(`https://worker.example${routePath}`);
  assert.equal(parsed?.projectId, projectId);
  assert.equal(parsed?.projectUrl, projectUrl);

  for (const path of [
    "/mcp/projects/not-a-project",
    `${routePath}/extra`,
    `${routePath}?projectId=other`,
    `/mcp/projects/Sample-Site--short`,
    `/mcp/projects/Sample-Site--${projectId}%2Fother`,
  ]) {
    await t.test(path, () => assert.equal(parsePinnedProjectRoute(`https://worker.example${path}`), null));
  }
});

test("missing or malformed Bearer is rejected before any SDK call", async () => {
  assert.equal(parseBearerHeader(null), null);
  assert.equal(parseBearerHeader("Basic abc"), null);
  assert.equal(parseBearerHeader("Bearer"), null);
  assert.equal(parseBearerHeader(`Bearer ${"x".repeat(5000)}`), null);

  let sdkCalls = 0;
  for (const authorization of [null, "Basic abc", "Bearer", `Bearer ${"x".repeat(5000)}`]) {
    const result = await withVerifiedProject(request({ authorization }), {
      connect: async () => { sdkCalls++; return stubClient(projectId); },
      run: async () => ({ ok: true }),
    });
    assert.equal(result.status, 401);
  }
  assert.equal(sdkCalls, 0);
});

test("matching Framer key/project succeeds; wrong-project key fails without fallback", async () => {
  const calls = [];
  const success = await withVerifiedProject(request(), {
    connect: async (url, key) => {
      calls.push({ url, key });
      return stubClient(projectId);
    },
    run: async ({ route }) => ({ projectId: route.projectId, readOnly: true }),
  });
  assert.equal(success.status, 200);
  assert.deepEqual(calls[0], { url: projectUrl, key: testKey });

  let fallbackAttempts = 0;
  const mismatch = await withVerifiedProject(request(), {
    connect: async () => {
      fallbackAttempts++;
      return stubClient("OtherProjectId123456789");
    },
    run: async () => assert.fail("must not dispatch after project mismatch"),
  });
  assert.equal(mismatch.status, 403);
  assert.equal(fallbackAttempts, 1);
});

test("SDK errors and attempted key-bearing results are redacted", async () => {
  const thrown = await withVerifiedProject(request(), {
    connect: async () => { throw new Error(`synthetic failure ${testKey}`); },
    run: async () => ({ ok: true }),
  });
  assert.equal(thrown.status, 502);
  assert.equal(JSON.stringify(thrown).includes(testKey), false);

  const echoed = await withVerifiedProject(request(), {
    connect: async () => stubClient(projectId),
    run: async () => ({ text: `unexpected ${testKey}` }),
  });
  assert.equal(echoed.status, 502);
  assert.equal(JSON.stringify(echoed).includes(testKey), false);
});

test("disconnect is attempted after success, project mismatch, and operation failure", async () => {
  const calls = [];
  const connect = async (_url, key) => {
    assert.equal(key, testKey);
    return stubClient(projectId, calls);
  };
  await withVerifiedProject(request(), { connect, run: async () => ({ ok: true }) });
  await withVerifiedProject(request(), {
    connect: async () => stubClient("OtherProjectId123456789", calls),
    run: async () => assert.fail("must not run on mismatch"),
  });
  await withVerifiedProject(request(), {
    connect,
    run: async () => { throw new Error(`synthetic ${testKey}`); },
  });
  assert.equal(calls.filter((entry) => entry === "disconnect").length, 2);
});

test("initialize, tools/list, and a safe tools/call pass through the same project guard", async () => {
  const methods = ["initialize", "tools/list", "tools/call"];
  const dispatched = [];
  for (const method of methods) {
    const result = await withVerifiedProject(request({ body: { jsonrpc: "2.0", id: 7, method } }), {
      connect: async (url, key) => {
        assert.equal(url, projectUrl);
        assert.equal(key, testKey);
        return stubClient(projectId);
      },
      run: async ({ request: guardedRequest, route }) => {
        const message = await guardedRequest.clone().json();
        dispatched.push({ method: message.method, projectId: route.projectId });
        return { jsonrpc: "2.0", id: message.id, result: { accepted: true } };
      },
    });
    assert.equal(result.status, 200);
  }
  assert.deepEqual(dispatched.map((entry) => entry.method), methods);
  assert.ok(dispatched.every((entry) => entry.projectId === projectId));
});
