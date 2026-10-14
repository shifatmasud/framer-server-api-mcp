# Framer Server API MCP

A project-scoped Cloudflare Worker MCP server exposing direct Framer Server API tools.

> **Writes are direct.** The server exposes read, write, delete, branch, publish, deploy, and agent operations without MCP-level confirmation gates. Framer permissions still apply. Review the target and schema before every non-read operation and verify the result in Framer.

## Documentation

- [Complete usage guide](docs/FRAMER_API_GUIDE.md) — architecture, safe setup, tool discovery, read/write workflow, troubleshooting, and security.
- [Interactive tool reference](docs/FRAMER_INTERACTIVE_REFERENCE.html) — self-contained search and filters across all 269 input schemas; does not connect to Framer.
- [Complete method inventory](docs/FRAMER_METHOD_INVENTORY.md) — exact tool names, SDK methods, arguments, and stateless exclusions.
- [Upsy setup and request policy](docs/UPSY_SETUP.md) — public-safe setup guidance and release behavior.

The user-facing documentation omits the live hostname, project-specific route, project IDs, credential values, and internal setup notes. Guard tests use synthetic project slug/ID/hash fixtures. The runtime retains a Workers.dev hostname literal in its trusted-host allowlist because request Host validation requires it; this is a public service endpoint, not an API key or account ID. No runtime behavior or deployment setting was changed for this documentation/history cleanup.

## Direct API coverage

The source registry contains **269 direct one-to-one tools** from `framer-api` 5.1.0: **122 client methods, 101 entity-instance methods, and 46 `agent` methods**. Each supported SDK method has its own tool; there are no artificial grouped actions or MCP-level confirmation arguments. Exact exclusions and stateless limitations are documented in the method inventory.

Callback-based tools return the first callback event, not a guaranteed initial snapshot; a 10-second timeout is explicitly reported. Input schemas are generated from the installed SDK declarations. JSON byte inputs accept integer arrays or a base64 object; `File`/`Blob` instances cannot be sent through JSON MCP. Binary results are serialized as base64 objects.

## Design and safety model

- Each request is project-pinned and uses a request-scoped SDK client.
- The Worker verifies that the resolved Framer project identity matches the selected project and has no cross-project fallback.
- Unapproved hosts and origins fail closed; use only the endpoint supplied by the project owner.
- Framer's project permissions still apply, but the MCP server adds no confirmation gates.
- A busy Framer response or ambiguous write result is not proof of success or failure. Read the affected state before considering a retry.

## Status and checks

The documentation is based on the supplied deployed-source baseline `6ecbc6817cbb9214590230f5458f31df82d99633` on `scaffold/release-critical-tests`; the repository's reachable history has since been rewritten for privacy. The release uses `framer-api` 5.1.0. Deployment is separate; do not infer live Worker state from the rewritten Git history. This task does not deploy or change the Worker.

Requirements: Node.js 22 or later.

```sh
npm ci
npm test
npm run check:worker
```

The build and tests do not perform live Framer project mutations. Do not use publishing, deployment, deletion, or content writes for connection tests.
