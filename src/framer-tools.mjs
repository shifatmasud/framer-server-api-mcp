import { McpServer } from "@modelcontextprotocol/server";
import { z } from "zod";
import {
  FRAMER_SDK_METHODS,
  FRAMER_SDK_UNSUPPORTED,
  FRAMER_SDK_VERSION,
} from "./framer-api-methods.mjs";
import { FRAMER_INPUT_JSON_SCHEMAS } from "./framer-api-input-schemas.mjs";

const OWNER_CONTEXT = Object.freeze({
  Branch: { branchId: "Framer branch ID" },
  VectorSet: { vectorSetId: "Vector set ID" },
  VectorSetItem: { vectorSetId: "Parent vector set ID", vectorSetItemId: "Vector set item ID" },
  Node: { ownerNodeId: "Canvas node ID for the object on which the method is called" },
  ComponentInstanceNode: { ownerNodeId: "Component instance node ID for the object on which the method is called" },
  WebPageNode: { ownerNodeId: "Web page node ID for the object on which the method is called" },
  DesignPageNode: { ownerNodeId: "Design page node ID for the object on which the method is called" },
  TextNode: { ownerNodeId: "Text node ID for the object on which the method is called" },
  ComponentNode: { ownerNodeId: "Component node ID for the object on which the method is called" },
  CodeFile: { fileIdOrPath: "Code file ID or path" },
  CodeFileVersion: { fileIdOrPath: "Parent code file ID or path", versionId: "Code file version ID" },
  Field: { collectionId: "CMS collection ID", fieldId: "Field ID" },
  EnumField: { collectionId: "CMS collection ID", fieldId: "Enum field ID" },
  Collection: { collectionId: "CMS collection ID" },
  CollectionItem: { collectionId: "CMS collection ID", itemId: "CMS item ID" },
  ManagedCollection: { collectionId: "Managed collection ID" },
  ColorStyle: { styleId: "Color style ID" },
  TextStyle: { styleId: "Text style ID" },
  Variable: { ownerNodeId: "Parent node ID for the variable", variableId: "Variable ID" },
  EnumVariable: { ownerNodeId: "Parent node ID for the enum variable", variableId: "Enum variable ID" },
  EnumCase: {
    parentType: "Whether the enum belongs to a CMS collection or a canvas node",
    parentId: "Collection ID or canvas node ID, according to parentType",
    enumId: "Enum field ID or enum variable ID, according to parentType",
    caseId: "Enum case ID",
  },
});

function isCallbackParameter(parameter) {
  return parameter.name === "callback" || /=>/.test(parameter.type ?? "");
}

function snakeCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[^A-Za-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}

function expandSchemaAlternatives(schema) {
  if (Array.isArray(schema.allOf)) return [schema];
  if (Array.isArray(schema.anyOf)) return schema.anyOf.flatMap(expandSchemaAlternatives);
  if (Array.isArray(schema.oneOf)) return schema.oneOf.flatMap(expandSchemaAlternatives);
  return [schema];
}

function mergeObjectSchemas(schemas) {
  const properties = {};
  const required = new Set();
  const catchalls = [];
  let allowUnknown = false;
  for (const schema of schemas) {
    for (const [key, value] of Object.entries(schema.properties ?? {})) {
      if (!Object.hasOwn(properties, key)) properties[key] = value;
      else if (JSON.stringify(properties[key]) !== JSON.stringify(value)) {
        properties[key] = { allOf: [properties[key], value] };
      }
    }
    for (const key of schema.required ?? []) required.add(key);
    if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
      catchalls.push(schema.additionalProperties);
    } else if (schema.additionalProperties === true) {
      allowUnknown = true;
    }
  }
  let additionalProperties = false;
  if (catchalls.length === 1) additionalProperties = catchalls[0];
  else if (catchalls.length > 1) additionalProperties = { allOf: catchalls };
  else if (allowUnknown) additionalProperties = true;
  return { type: "object", properties, required: [...required], additionalProperties };
}

function zodFromAllOf(schemas) {
  let combinations = [[]];
  for (const schema of schemas) {
    const alternatives = expandSchemaAlternatives(schema);
    combinations = combinations.flatMap((combination) => alternatives.map((alternative) => [...combination, alternative]));
  }
  const variants = combinations.map((combination) => {
    const objects = combination.filter((schema) => schema.type === "object");
    const others = combination.filter((schema) => schema.type !== "object");
    let result = objects.length ? zodFromJsonSchema(mergeObjectSchemas(objects)) : null;
    for (const schema of others) {
      const next = zodFromJsonSchema(schema);
      result = result ? z.intersection(result, next) : next;
    }
    return result ?? z.unknown();
  });
  return variants.length === 1 ? variants[0] : z.union(variants);
}

function zodFromJsonSchema(schema) {
  if (!schema || Object.keys(schema).length === 0) return z.unknown();
  if (Object.hasOwn(schema, "const")) return z.literal(schema.const);
  if (Array.isArray(schema.enum)) {
    if (schema.enum.length === 1) return z.literal(schema.enum[0]);
    if (schema.enum.every((value) => typeof value === "string")) return z.enum(schema.enum);
    return z.union(schema.enum.map((value) => z.literal(value)));
  }
  if (Array.isArray(schema.anyOf)) return z.union(schema.anyOf.map(zodFromJsonSchema));
  if (Array.isArray(schema.oneOf)) return z.union(schema.oneOf.map(zodFromJsonSchema));
  if (Array.isArray(schema.allOf)) return zodFromAllOf(schema.allOf);
  if (schema.not) return z.never();
  if (schema.type === "null") return z.null();
  if (schema.type === "string") {
    if (schema.format === "uri") return z.string().url();
    if (schema.format) throw new Error(`Unsupported JSON Schema string format: ${schema.format}`);
    return z.string();
  }
  if (schema.type === "boolean") return z.boolean();
  if (schema.type === "number" || schema.type === "integer") {
    let number = z.number();
    if (schema.type === "integer") number = number.int();
    if (Number.isFinite(schema.minimum)) number = number.min(schema.minimum);
    if (Number.isFinite(schema.maximum)) number = number.max(schema.maximum);
    return number;
  }
  if (schema.type === "array") {
    if (Array.isArray(schema.prefixItems)) {
      let tuple = z.tuple(schema.prefixItems.map(zodFromJsonSchema));
      if (schema.items) tuple = tuple.rest(zodFromJsonSchema(schema.items));
      return tuple;
    }
    return z.array(zodFromJsonSchema(schema.items));
  }
  if (schema.type === "object") {
    const properties = schema.properties ?? {};
    const required = new Set(schema.required ?? []);
    const hasProperties = Object.keys(properties).length > 0;
    const shape = Object.fromEntries(Object.entries(properties).map(([key, value]) => [
      key,
      required.has(key) ? zodFromJsonSchema(value) : zodFromJsonSchema(value).optional(),
    ]));
    if (!hasProperties && schema.additionalProperties !== false) {
      if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
        return z.record(z.string(), zodFromJsonSchema(schema.additionalProperties));
      }
      if (schema.additionalProperties === true) return z.record(z.string(), z.unknown());
    }
    let object = z.object(shape);
    if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
      object = object.catchall(zodFromJsonSchema(schema.additionalProperties));
      return object;
    }
    if (schema.additionalProperties === true) return object.passthrough();
    // Declared SDK object schemas are closed; explicit index-signature schemas
    // were handled above as records or catchalls.
    return object.strict();
  }
  return z.unknown();
}

function parameterSchema(type, name) {
  const source = (type ?? "unknown").trim();
  const schema = FRAMER_INPUT_JSON_SCHEMAS[source];
  return (schema ? zodFromJsonSchema(schema) : z.unknown()).describe(`${name}: ${source}`);
}

function toolName(spec) {
  if (spec.owner === "agent") return `framer_agent_${snakeCase(spec.method)}`;
  return `framer_${snakeCase(spec.name)}`;
}

function toolInputSchema(spec) {
  return z.strictObject(argumentShape(spec));
}

function argumentShape(spec) {
  const shape = {};
  for (const [name, description] of Object.entries(OWNER_CONTEXT[spec.owner] ?? {})) {
    shape[name] = name === "parentType"
      ? z.enum(["collection", "node"]).describe(description)
      : z.string().min(1).describe(description);
  }
  for (const parameter of spec.params) {
    if (isCallbackParameter(parameter)) continue;
    if (Object.hasOwn(shape, parameter.name)) {
      throw new Error(`Duplicate tool parameter in ${toolName(spec)}: ${parameter.name}`);
    }
    const schema = parameterSchema(parameter.type, parameter.name);
    shape[parameter.name] = parameter.optional ? schema.optional() : schema;
  }
  return shape;
}

function bytesAsBase64(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return { encoding: "base64", data: btoa(binary) };
}

function decodeBase64Bytes(value) {
  if (typeof value?.data !== "string" || !/^[A-Za-z0-9+/_-]*={0,2}$/.test(value.data) || value.data.length % 4 === 1) {
    throw new TypeError("Invalid base64 byte input");
  }
  let encoded = value.data.replace(/-/g, "+").replace(/_/g, "/").replace(/=+$/, "");
  encoded += "=".repeat((4 - encoded.length % 4) % 4);
  const binary = atob(encoded);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index++) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function normalizeSdkInput(value, propertyName = "") {
  if (propertyName === "bytes") {
    if (Array.isArray(value)) {
      if (!value.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255)) {
        throw new TypeError("Byte arrays must contain integers from 0 through 255");
      }
      return Uint8Array.from(value);
    }
    if (value && typeof value === "object" && value.encoding === "base64") return decodeBase64Bytes(value);
    if (value instanceof ArrayBuffer) return new Uint8Array(value);
    if (ArrayBuffer.isView(value)) return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }
  if (Array.isArray(value)) return value.map((item) => normalizeSdkInput(item));
  if (value && typeof value === "object" && !(value instanceof ArrayBuffer) && !ArrayBuffer.isView(value)) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeSdkInput(item, key)]));
  }
  return value;
}

async function toSerializable(value, seen = new WeakSet()) {
  if (value === undefined) return null;
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") return value;
  if (typeof value === "bigint") return value.toString();
  if (typeof value === "function" || typeof value === "symbol") return undefined;
  if (value instanceof Date) return value.toISOString();
  if (value instanceof ArrayBuffer) return bytesAsBase64(new Uint8Array(value));
  if (ArrayBuffer.isView(value)) {
    return bytesAsBase64(new Uint8Array(value.buffer, value.byteOffset, value.byteLength));
  }
  if (typeof value?.[Symbol.asyncIterator] === "function") {
    const output = [];
    for await (const item of value) output.push(await toSerializable(item, seen));
    return output;
  }
  if (typeof value?.then === "function") return toSerializable(await value, seen);
  if (seen.has(value)) return "[Circular]";
  seen.add(value);
  if (Array.isArray(value)) return Promise.all(value.map((item) => toSerializable(item, seen)));
  if (value instanceof Map) {
    return Object.fromEntries(await Promise.all([...value].map(async ([key, item]) => [String(key), await toSerializable(item, seen)])));
  }
  const result = {};
  const keys = new Set(Object.keys(value));
  for (let prototype = Object.getPrototypeOf(value); prototype && prototype !== Object.prototype; prototype = Object.getPrototypeOf(prototype)) {
    for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(prototype))) {
      if (key !== "constructor" && typeof descriptor.get === "function") keys.add(key);
    }
  }
  for (const key of keys) {
    try {
      const child = await toSerializable(value[key], seen);
      if (child !== undefined) result[key] = child;
    } catch {
      // Omit inaccessible SDK getters; do not leak internal error text.
    }
  }
  return result;
}

function success(value) {
  return { content: [{ type: "text", text: JSON.stringify(value) }], structuredContent: value };
}

function toolFailure() {
  return {
    isError: true,
    content: [{ type: "text", text: "Framer operation failed." }],
  };
}

function findById(items, id) {
  const found = items?.find((item) => item?.id === id);
  if (!found) throw new Error("Framer object not found");
  return found;
}

async function findField(fields, id) {
  for (const field of fields ?? []) {
    if (field?.id === id) return field;
    const nested = await findField(field?.fields, id);
    if (nested) return nested;
  }
  return null;
}

async function resolveOwner(client, spec, input) {
  switch (spec.owner) {
    case "client": return client;
    case "agent": return client.agent;
    case "Branch": return client.getBranch(input.branchId);
    case "VectorSet": return findById(await client.getVectorSets(), input.vectorSetId);
    case "VectorSetItem": {
      const set = findById(await client.getVectorSets(), input.vectorSetId);
      return findById(await set.getItems(), input.vectorSetItemId);
    }
    case "Node":
    case "ComponentInstanceNode":
    case "WebPageNode":
    case "DesignPageNode":
    case "TextNode":
    case "ComponentNode": return client.getNode(input.ownerNodeId);
    case "CodeFile": return client.getCodeFile(input.fileIdOrPath);
    case "CodeFileVersion": {
      const file = await client.getCodeFile(input.fileIdOrPath);
      return findById(await file.getVersions(), input.versionId);
    }
    case "Collection": return client.getCollection(input.collectionId);
    case "ManagedCollection": return findById(await client.getManagedCollections(), input.collectionId);
    case "CollectionItem": {
      const collection = await client.getCollection(input.collectionId);
      return findById(await collection.getItems(), input.itemId);
    }
    case "Field":
    case "EnumField": {
      const collection = await client.getCollection(input.collectionId);
      const field = await findField(await collection.getFields(), input.fieldId);
      if (!field) throw new Error("Framer field not found");
      return field;
    }
    case "ColorStyle": return client.getColorStyle(input.styleId);
    case "TextStyle": return client.getTextStyle(input.styleId);
    case "Variable":
    case "EnumVariable": {
      const node = await client.getNode(input.ownerNodeId);
      const variables = typeof node?.getVariables === "function"
        ? await node.getVariables()
        : await client.getVariables(input.ownerNodeId);
      return findById(variables, input.variableId);
    }
    case "EnumCase": {
      let cases;
      if (input.parentType === "collection") {
        const collection = await client.getCollection(input.parentId);
        const field = await findField(await collection.getFields(), input.enumId);
        cases = field?.cases;
      } else {
        const node = await client.getNode(input.parentId);
        const variable = findById(await node.getVariables(), input.enumId);
        cases = variable?.cases;
      }
      return findById(cases, input.caseId);
    }
    default: throw new Error("Unknown Framer SDK owner");
  }
}

function captureOneCallback(target, method, args, callbackIndex, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    let unsubscribe;
    let finished = false;
    const finish = (value, timedOut = false) => {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      try { if (typeof unsubscribe === "function") unsubscribe(); } catch { /* cleanup only */ }
      if (timedOut) {
        resolve({ event: null, timedOut: true });
      } else {
        Promise.resolve(toSerializable(value)).then(
          (event) => resolve({ event, timedOut: false }),
          reject,
        );
      }
    };
    const timer = setTimeout(() => finish(undefined, true), timeoutMs);
    try {
      const operationArgs = [...args];
      operationArgs.splice(callbackIndex, 0, (update) => finish(update));
      unsubscribe = method.apply(target, operationArgs);
      if (finished && typeof unsubscribe === "function") unsubscribe();
    } catch (error) {
      clearTimeout(timer);
      reject(error);
    }
  });
}

async function invokeMethod(client, spec, input) {
  const target = await resolveOwner(client, spec, input);
  const method = target?.[spec.method];
  if (typeof method !== "function") throw new Error("SDK method unavailable");

  const callbackIndex = spec.params.findIndex(isCallbackParameter);
  const parameters = spec.params.filter((parameter) => !isCallbackParameter(parameter));
  const args = parameters.map((parameter) => normalizeSdkInput(input[parameter.name]));
  if (callbackIndex !== -1 || spec.method.startsWith("subscribeTo")) {
    return captureOneCallback(target, method, args, callbackIndex === -1 ? args.length : callbackIndex);
  }
  if (spec.owner === "Node" && spec.method === "walk") {
    return toSerializable(method.call(target));
  }
  return toSerializable(await method.apply(target, args));
}

function descriptionFor(spec) {
  const path = spec.owner === "client" ? `Framer.${spec.method}`
    : spec.owner === "agent" ? `Framer.agent.${spec.method}`
      : `${spec.owner}.${spec.method}`;
  const args = spec.params.filter((parameter) => !isCallbackParameter(parameter))
    .map((parameter) => `${parameter.optional ? "[" : ""}${parameter.name}${parameter.optional ? "]" : ""}`)
    .join(", ");
  const callbackNote = spec.params.some(isCallbackParameter) || spec.method.startsWith("subscribeTo")
    ? " Callback-based SDK subscriptions return the first callback event (not necessarily an initial snapshot) with SDK getters serialized, or an explicit 10-second timeout result, because MCP tool calls are stateless."
    : "";
  return `Direct one-to-one call to ${path}(${args}) in framer-api ${FRAMER_SDK_VERSION}, scoped to the project pinned to this endpoint. Framer's own project permissions still apply.${callbackNote}`;
}

export function createFramerMcpServer(client) {
  const server = new McpServer({ name: "framer-server-api", version: "1.0.0" });
  const registered = new Set();

  for (const spec of FRAMER_SDK_METHODS) {
    const name = toolName(spec);
    if (registered.has(name)) throw new Error(`Duplicate Framer MCP tool: ${name}`);
    registered.add(name);
    server.registerTool(name, {
      description: descriptionFor(spec),
      inputSchema: toolInputSchema(spec),
    }, async (input) => {
      try {
        return success(await invokeMethod(client, spec, input));
      } catch {
        // SDK errors can contain project content or credentials; return no exception details.
        return toolFailure();
      }
    });
  }

  return server;
}

export {
  FRAMER_SDK_METHODS,
  FRAMER_SDK_UNSUPPORTED,
  argumentShape,
  invokeMethod,
  normalizeSdkInput,
  parameterSchema,
  toSerializable,
  toolInputSchema,
  toolName,
};
