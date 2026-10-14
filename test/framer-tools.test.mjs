import assert from "node:assert/strict";
import test from "node:test";
import { z } from "zod";
import { FRAMER_SDK_METHODS, FRAMER_SDK_UNSUPPORTED } from "../src/framer-api-methods.mjs";
import { FRAMER_INPUT_JSON_SCHEMAS } from "../src/framer-api-input-schemas.mjs";
import {
  argumentShape,
  invokeMethod,
  normalizeSdkInput,
  parameterSchema,
  toSerializable,
  toolInputSchema,
  toolName,
} from "../src/framer-tools.mjs";

function method(owner, name) {
  const spec = FRAMER_SDK_METHODS.find((item) => item.owner === owner && item.method === name);
  assert.ok(spec, `expected registered method ${owner}.${name}`);
  return spec;
}

test("tool inventory exposes direct screenshot/export methods and omits unstable entity wrappers", () => {
  assert.equal(FRAMER_SDK_METHODS.length, 269);
  assert.equal(FRAMER_SDK_METHODS.filter((item) => item.owner === "client").length, 122);
  assert.equal(FRAMER_SDK_METHODS.filter((item) => item.owner === "agent").length, 46);
  assert.ok(FRAMER_SDK_METHODS.some((item) => toolName(item) === "framer_screenshot"));
  assert.ok(FRAMER_SDK_METHODS.some((item) => toolName(item) === "framer_export_svg"));
  assert.ok(FRAMER_SDK_METHODS.some((item) => item.owner === "client" && item.method === "getImage"));
  assert.equal(FRAMER_SDK_METHODS.some((item) => item.owner === "ImageAsset"), false);
  assert.equal(FRAMER_SDK_METHODS.some((item) => item.owner === "ComponentInstancePlaceholder"), false);
  assert.equal(FRAMER_SDK_METHODS.some((item) => item.method === "getImageData"), false);

  const unsupported = new Set(FRAMER_SDK_UNSUPPORTED.map((item) => `${item.owner}.${item.method}`));
  for (const name of [
    "client.getImageData",
    "ImageAsset.getData",
    "ImageAsset.loadBitmap",
    "ImageAsset.loadImage",
    "ImageAsset.measure",
    "ComponentInstancePlaceholder.setAttributes",
    "ComponentInstancePlaceholder.remove",
    "ComponentInstancePlaceholder.replaceWithComponentInstance",
    "client.makeDraggable",
  ]) assert.ok(unsupported.has(name), `${name} must have an explicit limitation`);
  assert.ok(FRAMER_SDK_UNSUPPORTED.some((item) => item.sdkAlias === "updateComponentInstancePlaceholder"));
  assert.ok(FRAMER_SDK_UNSUPPORTED.some((item) => item.sdkAlias === "removeComponentInstancePlaceholder"));
  assert.ok(FRAMER_SDK_UNSUPPORTED.some((item) => item.sdkAlias === "replaceComponentInstancePlaceholderWithComponentInstance"));
});

test("direct screenshot and SVG tools use their caller-provided stable node IDs", async () => {
  const calls = [];
  const client = {
    screenshot: async (nodeId, options) => { calls.push(["screenshot", nodeId, options]); return { data: new Uint8Array([1, 2]), mimeType: "image/png" }; },
    exportSVG: async (nodeId) => { calls.push(["exportSVG", nodeId]); return "<svg />"; },
  };
  await invokeMethod(client, method("client", "screenshot"), { nodeId: "node-a", options: { format: "png", scale: 2 } });
  await invokeMethod(client, method("client", "exportSVG"), { nodeId: "node-b" });
  assert.deepEqual(calls, [["screenshot", "node-a", { format: "png", scale: 2 }], ["exportSVG", "node-b"]]);
});

test("subscription callbacks return the first serialized event, including getter-backed fields", async () => {
  let unsubscribed = 0;
  const root = Object.create({ get id() { return this.nodeId; } });
  root.nodeId = "root-1";
  root.children = [{ id: "child-1" }];
  const client = {
    subscribeToCanvasRoot(callback) {
      queueMicrotask(() => { callback(root); callback({ id: "later-event" }); });
      return () => { unsubscribed++; };
    },
  };
  const result = await invokeMethod(client, method("client", "subscribeToCanvasRoot"), {});
  assert.deepEqual(result, {
    event: { nodeId: "root-1", children: [{ id: "child-1" }], id: "root-1" },
    timedOut: false,
  });
  assert.equal(unsubscribed, 1);
  assert.deepEqual(await toSerializable(Object.assign(Object.create({ get value() { return 7; } }), { own: true })), { own: true, value: 7 });
});

test("binary JSON byte arrays and explicit base64 adapters become Uint8Array SDK values", async () => {
  assert.deepEqual([...normalizeSdkInput({ bytes: [0, 1, 255] }).bytes], [0, 1, 255]);
  assert.deepEqual([...normalizeSdkInput({ bytes: { encoding: "base64", data: "AQID/w" } }).bytes], [1, 2, 3, 255]);
  assert.throws(() => normalizeSdkInput({ bytes: [0, 256] }), /integers from 0 through 255/);
  assert.throws(() => normalizeSdkInput({ bytes: { encoding: "base64", data: "%%%" } }), /Invalid base64/);

  let received;
  const client = { uploadImage: async (image) => { received = image; return { id: "img-1" }; } };
  await invokeMethod(client, method("client", "uploadImage"), {
    image: { name: "pixel.png", image: { bytes: { encoding: "base64", data: "AQID" }, mimeType: "image/png" } },
  });
  assert.ok(received.image.bytes instanceof Uint8Array);
  assert.deepEqual([...received.image.bytes], [1, 2, 3]);

  const fileClient = { uploadFile: async (file) => { received = file; return { id: "file-1" }; } };
  await invokeMethod(fileClient, method("client", "uploadFile"), {
    file: { name: "document.pdf", file: { bytes: [4, 5], mimeType: "application/pdf" } },
  });
  assert.ok(received.file.bytes instanceof Uint8Array);
  assert.deepEqual([...received.file.bytes], [4, 5]);
});

test("generated SDK schemas validate enums, nested objects, and binary inputs", () => {
  const screenshot = toolInputSchema(method("client", "screenshot"));
  assert.equal(screenshot.safeParse({ nodeId: "node-1", options: { format: "png", scale: 2, clip: { x: 0, y: 0, width: 20, height: 10 } } }).success, true);
  assert.equal(screenshot.safeParse({ nodeId: "node-1", options: { format: "gif" } }).success, false);
  assert.equal(screenshot.safeParse({ nodeId: "node-1", options: { scale: "large" } }).success, false);
  assert.equal(screenshot.safeParse({ nodeId: "node-1", extra: true }).success, false);
  assert.equal(screenshot.safeParse({ nodeId: "node-1", options: { format: "png", extra: true } }).success, false);
  assert.equal(screenshot.safeParse({ nodeId: "node-1", options: { clip: { x: 0, y: 0, width: 20, height: 10, extra: true } } }).success, false);
  assert.equal(FRAMER_INPUT_JSON_SCHEMAS.ScreenshotOptions.additionalProperties, false);
  assert.equal(FRAMER_INPUT_JSON_SCHEMAS.ScreenshotOptions.properties.clip.additionalProperties, false);

  const dictionary = parameterSchema("Record<string, unknown>", "metadata");
  assert.equal(dictionary.safeParse({ extensionKey: { value: 1 } }).success, true);

  const gesture = z.object(argumentShape(method("ComponentNode", "addGestureVariant")));
  assert.equal(gesture.safeParse({ ownerNodeId: "component-1", nodeId: "node-1", type: "hover" }).success, true);
  assert.equal(gesture.safeParse({ ownerNodeId: "component-1", nodeId: "node-1", type: "focus" }).success, false);

  const imageUpload = z.object(argumentShape(method("client", "uploadImage")));
  assert.equal(imageUpload.safeParse({ image: { name: "pixel.png", image: { bytes: { encoding: "base64", data: "AQID" }, mimeType: "image/png" } } }).success, true);
  assert.equal(imageUpload.safeParse({ image: { name: "pixel.png", image: { bytes: [0, 300], mimeType: "image/png" } } }).success, false);

  const fileUpload = toolInputSchema(method("client", "uploadFile"));
  assert.equal(fileUpload.safeParse({ file: "https://example.com/document.pdf" }).success, true);
  assert.equal(fileUpload.safeParse({ file: "not a URI" }).success, false);

  const nodeAttribute = z.object(argumentShape(method("Node", "getNodesWithAttribute")));
  assert.equal(nodeAttribute.safeParse({ ownerNodeId: "node-1", attribute: "width" }).success, true);
  assert.equal(nodeAttribute.safeParse({ ownerNodeId: "node-1", attribute: "madeUpAttribute" }).success, false);

  const nodeAttributes = z.object(argumentShape(method("Node", "setAttributes")));
  assert.equal(nodeAttributes.safeParse({ ownerNodeId: "node-1", attributes: { visible: true } }).success, true);
  assert.equal(nodeAttributes.safeParse({ ownerNodeId: "node-1", attributes: { visible: "yes" } }).success, false);

  const zoom = z.object(argumentShape(method("Node", "zoomIntoView")));
  assert.equal(zoom.safeParse({ ownerNodeId: "node-1", options: { maxZoom: 2, skipIfVisible: true } }).success, true);
  assert.equal(zoom.safeParse({ ownerNodeId: "node-1", options: { maxZoom: "close" } }).success, false);

  const fieldAttributes = z.object(argumentShape(method("Field", "setAttributes")));
  assert.equal(fieldAttributes.safeParse({ collectionId: "collection-1", fieldId: "field-1", attributes: { name: "Asset", allowedFileTypes: ["png"] } }).success, true);
  assert.equal(fieldAttributes.safeParse({ collectionId: "collection-1", fieldId: "field-1", attributes: { allowedFileTypes: "png" } }).success, false);

  const variableAttributes = z.object(argumentShape(method("Variable", "setAttributes")));
  assert.equal(variableAttributes.safeParse({ ownerNodeId: "owner-1", variableId: "variable-1", attributes: { name: "Primary", description: null, defaultValue: 3 } }).success, true);
  assert.equal(variableAttributes.safeParse({ ownerNodeId: "owner-1", variableId: "variable-1", attributes: { defaultValue: [] } }).success, false);

  const createColorStyle = toolInputSchema(method("client", "createColorStyle"));
  assert.equal(createColorStyle.safeParse({ attributes: { name: "Brand/Primary", light: "#ffffff", dark: "#111111" } }).success, true);
  assert.equal(createColorStyle.safeParse({ attributes: { name: "Brand/Primary", light: "#ffffff", dark: "#111111", extra: true } }).success, false);

  const updateColorStyle = toolInputSchema(method("ColorStyle", "setAttributes"));
  assert.equal(updateColorStyle.safeParse({ styleId: "style-1", update: { dark: "#111111" } }).success, true);
  assert.equal(updateColorStyle.safeParse({ styleId: "style-1", update: { dark: "#111111", extra: true } }).success, false);
});

test("every registered non-callback SDK input has a generated schema", () => {
  for (const spec of FRAMER_SDK_METHODS) {
    for (const parameter of spec.params) {
      if (/=>/.test(parameter.type ?? "")) continue;
      assert.ok(FRAMER_INPUT_JSON_SCHEMAS[parameter.type], `${spec.owner}.${spec.method}.${parameter.name} schema is missing`);
      assert.ok(Object.keys(FRAMER_INPUT_JSON_SCHEMAS[parameter.type]).length > 0, `${spec.owner}.${spec.method}.${parameter.name} schema is empty`);
    }
  }
});
