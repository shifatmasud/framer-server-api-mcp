import { createMcpHandler } from "agents/mcp/server";
import { connect } from "framer-api";
import { withVerifiedProject } from "./project-guard.mjs";
import { createFramerMcpServer } from "./framer-tools.mjs";

export function createWorkerHandler({ connectClient = connect } = {}) {
  return {
    async fetch(request, env, ctx) {
      return withVerifiedProject(request, {
        connect: connectClient,
        invoke: ({ request: verifiedRequest, route, client }) => {
          const handler = createMcpHandler(() => createFramerMcpServer(client), {
            route: route.pathname,
            responseMode: "json",
            legacy: "stateless",
            // Never send SDK exceptions to platform logs; response content is checked for the key.
            onerror: () => {},
          });
          return handler(verifiedRequest, env, ctx);
        },
      });
    },
  };
}

export default createWorkerHandler();
