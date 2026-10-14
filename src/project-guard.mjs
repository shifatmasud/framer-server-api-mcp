const PROJECT_ROUTE = /^\/mcp\/projects\/([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)--([A-Za-z0-9]{8,64})$/;
const MAX_BEARER_LENGTH = 4096;

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
    projectUrl: `https://framer.com/projects/${projectSlugAndId}`,
  };
}

export function parseBearerHeader(headerValue) {
  if (typeof headerValue !== "string" || headerValue.length > MAX_BEARER_LENGTH + 7) {
    return null;
  }
  const match = /^Bearer ([^\s]+)$/i.exec(headerValue);
  if (!match || match[1].length > MAX_BEARER_LENGTH) return null;
  return match[1];
}

function failure(status, code) {
  return { status, body: { error: code } };
}

function responseContainsSecret(value, secret) {
  if (typeof value === "string") return value.includes(secret);
  try {
    return JSON.stringify(value)?.includes(secret) ?? false;
  } catch {
    return true;
  }
}

/**
 * Request-scoped guard seam. The caller must run MCP handling inside `run`
 * and return fully materialized data before this function disconnects.
 * The Bearer is treated as the selected project's Framer key; it is never
 * persisted or returned by this helper.
 */
export async function withVerifiedProject(request, { connect, run }) {
  if (request.method !== "POST") return failure(405, "method_not_allowed");

  const route = parsePinnedProjectRoute(request.url);
  if (!route) return failure(404, "invalid_project_route");

  const apiKey = parseBearerHeader(request.headers.get("authorization"));
  if (!apiKey) return failure(401, "unauthorized");

  let client;
  try {
    client = await connect(route.projectUrl, apiKey);
    const info = await client.getProjectInfo();
    if (info?.id !== route.projectId) return failure(403, "project_key_mismatch");

    const body = await run({ request, route, client });
    if (responseContainsSecret(body, apiKey)) return failure(502, "framer_request_failed");
    return { status: 200, body };
  } catch {
    // SDK error text is intentionally not returned; it may contain credentials.
    return failure(502, "framer_request_failed");
  } finally {
    try {
      await client?.disconnect();
    } catch {
      // Do not leak SDK errors from cleanup.
    }
  }
}
