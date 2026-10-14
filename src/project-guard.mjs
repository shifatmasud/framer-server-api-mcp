const PROJECT_ROUTE = /^\/mcp\/projects\/([A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)--([A-Za-z0-9]{8,64})$/;
const MAX_BEARER_LENGTH = 4096;
const BEARER_VALUE = /^[A-Za-z0-9._~+/-]+=*$/;
export const MCP_PROTOCOL_VERSION = "2025-03-26";

function isWellFormedProtocolVersion(version) {
  if (typeof version !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(version)) return false;
  const year = Number(version.slice(0, 4));
  const month = Number(version.slice(5, 7));
  const day = Number(version.slice(8, 10));
  if (year < 1 || month < 1 || month > 12) return false;
  const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  const daysInMonth = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
  return day >= 1 && day <= daysInMonth;
}

// The runtime uses an explicit trusted host allowlist.
// Reject every unlisted host.
const TRUSTED_WORKER_HOSTS = Object.freeze([
  "framer-server-api-mcp.shifatmasud.workers.dev",
]);
// A present Origin must exactly match the configured allowlist.
// Keep the allowlist empty until an intended browser origin is explicitly verified.
const VERIFIED_UPSY_ORIGINS = Object.freeze([]);

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

function validHostname(hostname) {
  if (/^\[[0-9a-fA-F:.]+\]$/.test(hostname)) return true;
  if (/^\d+(?:\.\d+){3}$/.test(hostname)) {
    return hostname.split(".").every((part) => Number(part) <= 255);
  }
  if (hostname.length === 0 || hostname.length > 253) return false;
  return hostname.split(".").every((label) =>
    label.length > 0 && label.length <= 63 && /^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/.test(label),
  );
}

function validHostHeader(request) {
  let requestUrl;
  try {
    requestUrl = new URL(request.url);
  } catch {
    return false;
  }

  const host = request.headers.get("host");
  if (!host || host.length > 300 || host !== host.trim() || /[\s\\/@?#]/.test(host)) return false;

  let authority;
  try {
    authority = new URL(`${requestUrl.protocol}//${host}`);
  } catch {
    return false;
  }

  if (
    authority.username || authority.password || authority.pathname !== "/" || authority.search || authority.hash ||
    authority.protocol !== requestUrl.protocol || authority.host.toLowerCase() !== requestUrl.host.toLowerCase() ||
    !validHostname(authority.hostname)
  ) {
    return false;
  }

  const hostname = authority.hostname.toLowerCase();
  const trustedProductionHost = TRUSTED_WORKER_HOSTS.includes(hostname);
  const localWranglerHost = requestUrl.protocol === "http:" &&
    ["localhost", "127.0.0.1", "[::1]"].includes(hostname);
  return trustedProductionHost || localWranglerHost;
}

function validOrigin(request) {
  if (!request.headers.has("origin")) return true;
  const origin = request.headers.get("origin");
  return typeof origin === "string" && VERIFIED_UPSY_ORIGINS.includes(origin);
}

function validJsonContentType(request) {
  const value = request.headers.get("content-type");
  if (typeof value !== "string") return false;
  return /^application\/json(?:\s*;\s*charset\s*=\s*(?:utf-8|"utf-8"))?$/i.test(value.trim());
}

function mediaRangeIsAccepted(acceptHeader, requiredType) {
  for (const range of acceptHeader.split(",")) {
    const parameters = range.split(";");
    const mediaType = parameters.shift()?.trim().toLowerCase();
    if (mediaType !== requiredType) continue;

    let quality = 1;
    let qualitySeen = false;
    let valid = true;
    for (const parameter of parameters) {
      const separator = parameter.indexOf("=");
      if (separator < 0 || parameter.slice(0, separator).trim().toLowerCase() !== "q") continue;
      if (qualitySeen) {
        valid = false;
        break;
      }
      qualitySeen = true;
      const rawQuality = parameter.slice(separator + 1).trim();
      if (!/^(?:0(?:\.\d{0,3})?|1(?:\.0{0,3})?)$/.test(rawQuality)) {
        valid = false;
        break;
      }
      quality = Number(rawQuality);
    }
    if (valid && quality > 0) return true;
  }
  return false;
}

function validMcpAccept(request) {
  const accept = request.headers.get("accept");
  return typeof accept === "string" &&
    mediaRangeIsAccepted(accept, "application/json") &&
    mediaRangeIsAccepted(accept, "text/event-stream");
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

function normalizeInitializeRequest(request, payload) {
  const message = Array.isArray(payload) ? payload[0] : payload;
  const normalizedMessage = {
    ...message,
    params: { ...message.params, protocolVersion: MCP_PROTOCOL_VERSION },
  };
  const normalizedPayload = Array.isArray(payload) ? [normalizedMessage] : normalizedMessage;
  const headers = new Headers(request.headers);
  // The body is reserialized as plain JSON; do not carry representation framing headers over.
  headers.delete("content-length");
  headers.delete("content-encoding");
  headers.delete("transfer-encoding");
  headers.delete("mcp-protocol-version");
  return new Request(request.url, {
    method: "POST",
    headers,
    body: JSON.stringify(normalizedPayload),
  });
}

async function validateProtocol(request) {
  let payload;
  try {
    payload = await request.clone().json();
  } catch {
    return { error: failure(400, "invalid_mcp_request"), request };
  }

  const messages = Array.isArray(payload) ? payload : [payload];
  if (messages.length === 0 || messages.some((message) => !message || typeof message !== "object")) {
    return { error: failure(400, "invalid_mcp_request"), request };
  }

  const initializeMessages = messages.filter((message) => message.method === "initialize");
  const headerVersion = request.headers.get("mcp-protocol-version");

  if (initializeMessages.length > 0) {
    if (messages.length !== 1 || initializeMessages.length !== 1) {
      return { error: failure(400, "invalid_mcp_request"), request };
    }
    const requestedVersion = initializeMessages[0].params?.protocolVersion;
    if (!isWellFormedProtocolVersion(requestedVersion)) {
      return { error: failure(400, "unsupported_protocol_version"), request };
    }
    // Negotiate from the initialize body, normalize to the one supported version,
    // and discard any pre-initialize version header. Post-initialize headers stay strict.
    const normalizedRequest = requestedVersion === MCP_PROTOCOL_VERSION && headerVersion === null
      ? request
      : normalizeInitializeRequest(request, payload);
    return { error: null, request: normalizedRequest };
  }

  // The endpoint is stateless and cannot recover an older session's negotiated version.
  // Per the 2025-11-25 HTTP fallback, an absent header therefore means 2025-03-26.
  if (headerVersion !== null && headerVersion !== MCP_PROTOCOL_VERSION) {
    return { error: failure(400, "unsupported_protocol_version"), request };
  }
  return { error: null, request };
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
 * Enforce the outer request boundary, authenticate, and verify the project before
 * invoking MCP. The API key exists only in this request's local scope.
 */
export async function withVerifiedProject(request, { connect, invoke }) {
  if (!validHostHeader(request)) return failure(400, "invalid_host");
  if (!validOrigin(request)) return failure(403, "origin_not_allowed");

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

  if (!validJsonContentType(request)) return failure(415, "unsupported_media_type");
  if (!validMcpAccept(request)) return failure(406, "not_acceptable");

  const apiKey = parseBearerHeader(request.headers.get("authorization"));
  if (!apiKey) return failure(401, "unauthorized");

  const protocol = await validateProtocol(request);
  if (protocol.error) return protocol.error;

  let client;
  try {
    client = await connect(route.projectUrl, apiKey);
    const info = await client.getProjectInfo();
    if (info?.id !== route.projectId) return failure(403, "project_key_mismatch");

    const response = await invoke({ request: protocol.request, route, client });
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
