const PROJECT_ROUTE = /^\/mcp\/projects\/([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)--([A-Za-z0-9]{8,64})$/;
const MAX_BEARER_LENGTH = 4096;
const BEARER_VALUE = /^[A-Za-z0-9._~+/-]+=*$/;

export function parsePinnedProjectRoute(requestUrl) {
  let url;
  try {
    url = new URL(requestUrl);
  } catch {
    return null;
  }

  if (url.search || url.hash || url.username || url.password) return null;
  const match = PROJECT_ROUTE.exec(url.pathname);
  if (!match) return null;

  const [, slug, projectId] = match;
  const projectSlugAndId = `${slug}--${projectId}`;
  return {
    slug,
    projectId,
    pathname: url.pathname,
    projectUrl: `https://framer.com/projects/${projectSlugAndId}`,
  };
}

export function parseBearerHeader(headerValue) {
  if (typeof headerValue !== "string" || headerValue.length > MAX_BEARER_LENGTH + 7) {
    return null;
  }
  const match = /^Bearer ([A-Za-z0-9._~+/-]+=*)$/i.exec(headerValue);
  if (!match || match[1].length > MAX_BEARER_LENGTH || !BEARER_VALUE.test(match[1])) {
    return null;
  }
  return match[1];
}

function failure(status, code) {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: {
      "cache-control": "no-store",
      "content-type": "application/json; charset=utf-8",
      "x-content-type-options": "nosniff",
    },
  });
}

function responseContainsSecret(value, secret) {
  return typeof value === "string" && value.includes(secret);
}

async function redactResponse(response, secret) {
  if (!(response instanceof Response)) return failure(502, "framer_request_failed");

  try {
    const body = await response.text();
    if (responseContainsSecret(body, secret)) return failure(502, "framer_request_failed");
    return new Response(body || null, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch {
    return failure(502, "framer_request_failed");
  }
}

/**
 * Authenticate and verify a project before invoking its MCP handler. The API
 * key exists only in this request's local scope and is never persisted.
 */
export async function withVerifiedProject(request, { connect, invoke }) {
  const route = parsePinnedProjectRoute(request.url);
  if (!route) return failure(404, "invalid_project_route");

  // Preflight is not an MCP operation and never opens a Framer connection.
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: { allow: "POST, OPTIONS", "cache-control": "no-store" },
    });
  }
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), {
      status: 405,
      headers: {
        allow: "POST, OPTIONS",
        "cache-control": "no-store",
        "content-type": "application/json; charset=utf-8",
        "x-content-type-options": "nosniff",
      },
    });
  }

  const apiKey = parseBearerHeader(request.headers.get("authorization"));
  if (!apiKey) return failure(401, "unauthorized");

  let client;
  try {
    client = await connect(route.projectUrl, apiKey);
    const info = await client.getProjectInfo();
    if (info?.id !== route.projectId) return failure(403, "project_key_mismatch");

    const response = await invoke({ request, route, client });
    return await redactResponse(response, apiKey);
  } catch {
    // SDK and transport errors are intentionally suppressed; they may contain credentials.
    return failure(502, "framer_request_failed");
  } finally {
    try {
      await client?.disconnect();
    } catch {
      // Cleanup errors are suppressed to avoid leaking SDK details.
    }
  }
}
