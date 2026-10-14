import { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";

const noInput = {};
const collectionIdInput = { collectionId: z.string().min(1).max(128) };
const confirmationInput = {
  confirm: z.literal(true).describe("Explicitly confirm this consequential Framer action."),
};
const itemInput = z.object({
  id: z.string().min(1).max(128).optional(),
  slug: z.string().min(1).max(256),
  fieldData: z.record(z.string(), z.unknown()).optional(),
});

function jsonText(value) {
  return JSON.stringify(value, (_key, nested) =>
    typeof nested === "bigint" ? nested.toString() : nested,
  );
}

function success(value) {
  return { content: [{ type: "text", text: jsonText(value) }] };
}

function toolFailure() {
  return {
    isError: true,
    content: [{ type: "text", text: "Framer operation failed." }],
  };
}

function requireConfirmation(confirm) {
  if (confirm !== true) throw new Error("Explicit confirmation required");
}

function register(server, name, description, inputSchema, action) {
  server.registerTool(name, { description, inputSchema }, async (input) => {
    try {
      return success(await action(input));
    } catch {
      // Do not expose SDK error text; some errors can contain credentials or project data.
      return toolFailure();
    }
  });
}

export function createFramerMcpServer(client) {
  const server = new McpServer({ name: "framer-server-api", version: "1.0.0" });

  register(
    server,
    "framer_get_project_info",
    "Read the name, ID, and other metadata for the Framer project pinned to this endpoint.",
    noInput,
    async () => client.getProjectInfo(),
  );

  register(
    server,
    "framer_list_cms_collections",
    "List CMS collections in the Framer project pinned to this endpoint.",
    noInput,
    async () => {
      const collections = await client.getCollections();
      return collections.map((collection) => ({
        id: collection.id,
        name: collection.name,
        slug: collection.slug,
      }));
    },
  );

  register(
    server,
    "framer_list_cms_items",
    "Read items from one CMS collection in the Framer project pinned to this endpoint.",
    collectionIdInput,
    async ({ collectionId }) => {
      const collection = await client.getCollection(collectionId);
      if (!collection) throw new Error("Collection not found");
      const items = await collection.getItems();
      return items.map((item) => ({
        id: item.id,
        slug: item.slug,
        fieldData: item.fieldData,
        draft: item.draft,
      }));
    },
  );

  register(
    server,
    "framer_upsert_cms_items",
    "Create or update CMS items in one collection. Existing items are updated only when their item IDs match; omitted fields remain unchanged. This writes project content and requires confirm:true.",
    {
      ...collectionIdInput,
      items: z.array(itemInput).min(1).max(100),
      ...confirmationInput,
    },
    async ({ collectionId, items, confirm }) => {
      requireConfirmation(confirm);
      const collection = await client.getCollection(collectionId);
      if (!collection) throw new Error("Collection not found");
      await collection.addItems(items);
      return { collectionId, upserted: items.length };
    },
  );

  register(
    server,
    "framer_delete_cms_items",
    "Delete CMS items by ID from one collection. This is a distinct destructive operation that cannot be undone through this tool and requires confirm:true.",
    {
      ...collectionIdInput,
      itemIds: z.array(z.string().min(1).max(128)).min(1).max(100),
      ...confirmationInput,
    },
    async ({ collectionId, itemIds, confirm }) => {
      requireConfirmation(confirm);
      const collection = await client.getCollection(collectionId);
      if (!collection) throw new Error("Collection not found");
      await collection.removeItems(itemIds);
      return { collectionId, deleted: itemIds.length };
    },
  );

  register(
    server,
    "framer_publish_preview",
    "Publish the current Framer project state as a preview deployment. This changes the project and requires confirm:true.",
    confirmationInput,
    async ({ confirm }) => {
      requireConfirmation(confirm);
      return client.publish();
    },
  );

  register(
    server,
    "framer_deploy_published_version",
    "Promote an already-published Framer deployment to its configured production domains. This can change the live website and requires confirm:true.",
    {
      deploymentId: z.string().min(1).max(128),
      domains: z.array(z.string().min(1).max(255)).max(50).optional(),
      ...confirmationInput,
    },
    async ({ deploymentId, domains, confirm }) => {
      requireConfirmation(confirm);
      return client.deploy(deploymentId, domains);
    },
  );

  return server;
}
