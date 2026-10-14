# Upsy setup and request policy

> **Public-safe copy.** The live Worker hostname, project-specific route, project identifiers, credential scheme, and credential values are intentionally omitted. Obtain the current endpoint and authentication instructions through the project's trusted administrative channel; do not reconstruct them from a public repository or copy a live URL into documentation.

## Build and test

Requirements: Node.js 22 or later.

```sh
npm ci
npm test
npm run check:worker
```

The tests cover strict route and request validation, credential authentication, project matching and no cross-project fallback, response/error redaction, cleanup, MCP lifecycle and tools, method registration, direct SDK dispatch, callback serialization, stable targets, byte conversion, schema validation, and the installed Cloudflare handler's exact-path check. The tests do not invoke Framer content mutations.

## Direct SDK method inventory

The registry is based on the installed `framer-api` 5.1.0 declarations and runtime dispatch. It exposes **269 one-to-one tools**:

| Owner | Tools |
| --- | ---: |
| Framer client | 122 |
| Entity instances | 101 |
| `agent` namespace | 46 |
| **Total** | **269** |

Each tool calls one SDK method directly with that method's input arguments. There are no artificial grouped actions and no MCP-level confirmation gates. Framer's project permissions apply as usual. The full method and argument list, plus each limitation, is in [`FRAMER_METHOD_INVENTORY.md`](FRAMER_METHOD_INVENTORY.md).

The direct `screenshot(nodeId, options)` and `exportSVG(nodeId)` calls are included. Tools using a retained entity instance are exposed only when the request can reacquire a stable object from a caller-supplied ID through the public SDK.

## Stateless API limitations and adapters

- **Callbacks:** callback tools return the first callback event as `{ event, timedOut: false }`, serializing getters before response. They do not promise an initial snapshot unless Framer's SDK explicitly guarantees one. A callback that does not fire within 10 seconds returns `{ event: null, timedOut: true }`; the live subscription is then cleaned up.
- **Images:** `getImage()` remains an explicit direct client method for reading the current selection. `ImageAsset` methods are not offered as ID-targeted tools: the public client can reacquire only the current selected image, not a specified asset by ID. SDK-internal `getImageData` is not callable on the public Framer client. `loadImage`/`loadBitmap` additionally need browser-only `Image`/`createImageBitmap` APIs and cannot return those objects through JSON.
- **Component-instance placeholders:** `ComponentInstancePlaceholder.setAttributes`, `.remove`, and `.replaceWithComponentInstance` operate on a placeholder instance, which cannot be reacquired by ID through the public client after a stateless request. Their ID-taking protocol/wire operations are internal rather than public Framer client methods, so no nonfunctional wrappers are registered.
- **DOM drag:** `makeDraggable` requires a live DOM `HTMLElement` and drag callbacks and cannot be represented through stateless JSON MCP.
- **Binary inputs:** JSON byte fields accept either arrays of integer byte values (`0`–`255`) or an explicit `{ "encoding": "base64", "data": "…" }` adapter nested under `bytes`. They are converted to `Uint8Array` before dispatch. URL asset forms remain supported where the SDK accepts them. Browser `File`/`Blob` instances themselves cannot cross JSON MCP; use the corresponding SDK URL/bytes form.
- **Binary outputs:** byte buffers/views are serialized as `{ "encoding": "base64", "data": "…" }`.
- **Schemas:** input JSON Schemas are generated from the installed 5.1.0 declarations, preserving nested object types and enum/literal unions. Open `Record<string, unknown>` and `unknown` portions remain permissive because that is how the SDK declares those inputs.

The exact excluded method names and per-method reasons are enumerated in the method inventory. Do not describe `makeDraggable` as the only omission.

## Request policy

- Use only the project-scoped endpoint supplied by the authorized project owner. The Worker enforces its configured host allowlist and rejects unapproved hosts; custom domains require an explicit review and configuration change by the owner.
- The Worker rejects unapproved Origin values. Do not add an Origin based on guesswork or copy one from another environment.
- POST `Content-Type` must be `application/json` (optionally UTF-8 charset), and `Accept` must allow both `application/json` and `text/event-stream` with positive quality values.
- The advertised MCP version is `2025-03-26`. The known legacy `2024-11-05` initialize is normalized to it. Unsupported initialize versions are rejected. Stateless post-initialize requests may omit `MCP-Protocol-Version`; when present it must be exactly `2025-03-26`.
- The Worker authenticates, constructs only the canonical Framer project URL, verifies the resolved project identity against the project selected for the endpoint, and disconnects the request-scoped client after each request.

## Per-project Upsy entry

After the reviewed artifact is cleared and the Worker is deliberately deployed, create one Upsy Custom MCP entry per Framer project using the owner-provided endpoint and approved credential settings. Keep the endpoint and credential private; never place them in a public repository, prompt, tool argument, documentation example, or log. Do not substitute a different Upsy token, OAuth flow, server-side key vault, or cross-project fallback unless the owner has explicitly approved and implemented it.

Before calling the connection live, verify through sanitized diagnostics that Upsy uses the same pinned project-scoped route for initialization, tool listing, and a safe read (`framer_get_project_info`). Confirm that missing or mismatched credentials fail without returning MCP tool data. If Upsy drops or rewrites the path, stop; do not add cross-project fallback. If the client supplies an Origin, have the owner review the exact observed value before allowing it.

Writes, deletions, branch operations, publishing, and production deployment are directly exposed as distinct SDK method tools. Do not invoke any mutation, merge, publish, or deploy method during connection validation.

## Cross-references

- [Complete user guide](FRAMER_API_GUIDE.md)
- [Interactive tool reference](FRAMER_INTERACTIVE_REFERENCE.html)
- [Complete method inventory](FRAMER_METHOD_INVENTORY.md)

## Release checklist

1. All three build/test commands pass on the exact candidate commit.
2. Review the exact candidate and verify its diff preserves the live guard and runtime.
3. Deploy only through the approved release process, verify its settings, and perform only read-only connection checks.
