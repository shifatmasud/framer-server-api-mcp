// Generated from framer-api 5.1.0 runtime dispatch and declarations.
export const FRAMER_SDK_VERSION = "5.1.0";
export const FRAMER_SDK_METHODS = [
  {
    "name": "addComponentInstancePlaceholder",
    "owner": "client",
    "method": "addComponentInstancePlaceholder",
    "params": [
      {
        "name": "attributes",
        "optional": true,
        "type": "ComponentInstancePlaceholderAttributes"
      }
    ]
  },
  {
    "name": "addDetachedComponentLayers",
    "owner": "client",
    "method": "addDetachedComponentLayers",
    "params": [
      {
        "name": "options",
        "optional": false,
        "type": "{\n    url: string;\n    layout?: boolean;\n    attributes?: Partial<Record<string, unknown>>;\n  }"
      }
    ]
  },
  {
    "name": "addImage",
    "owner": "client",
    "method": "addImage",
    "params": [
      {
        "name": "image",
        "optional": false,
        "type": "NamedImageAssetInput | File"
      }
    ]
  },
  {
    "name": "addImages",
    "owner": "client",
    "method": "addImages",
    "params": [
      {
        "name": "image",
        "optional": false,
        "type": "readonly NamedImageTransfer[]"
      }
    ]
  },
  {
    "name": "addSVG",
    "owner": "client",
    "method": "addSVG",
    "params": [
      {
        "name": "svg",
        "optional": false,
        "type": "SVGData"
      }
    ]
  },
  {
    "name": "addText",
    "owner": "client",
    "method": "addText",
    "params": [
      {
        "name": "text",
        "optional": false,
        "type": "string"
      },
      {
        "name": "options",
        "optional": true,
        "type": "AddTextOptions"
      }
    ]
  },
  {
    "name": "addRedirects",
    "owner": "client",
    "method": "addRedirects",
    "params": [
      {
        "name": "redirects",
        "optional": false,
        "type": "RedirectInput[]"
      }
    ]
  },
  {
    "name": "getRedirects",
    "owner": "client",
    "method": "getRedirects",
    "params": []
  },
  {
    "name": "removeRedirects",
    "owner": "client",
    "method": "removeRedirects",
    "params": [
      {
        "name": "redirectIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "setRedirectOrder",
    "owner": "client",
    "method": "setRedirectOrder",
    "params": [
      {
        "name": "redirectIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "subscribeToRedirects",
    "owner": "client",
    "method": "subscribeToRedirects",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(redirects: Redirect[]) => void"
      }
    ]
  },
  {
    "name": "cloneNode",
    "owner": "client",
    "method": "cloneNode",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "closePlugin",
    "owner": "client",
    "method": "closePlugin",
    "params": [
      {
        "name": "message",
        "optional": true,
        "type": "string"
      },
      {
        "name": "options",
        "optional": true,
        "type": "ClosePluginOptions"
      }
    ]
  },
  {
    "name": "createColorStyle",
    "owner": "client",
    "method": "createColorStyle",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "ColorStyleAttributes"
      }
    ]
  },
  {
    "name": "createFrameNode",
    "owner": "client",
    "method": "createFrameNode",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "Partial<EditableFrameNodeAttributes>"
      },
      {
        "name": "parentId",
        "optional": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "createTextNode",
    "owner": "client",
    "method": "createTextNode",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "Partial<EditableTextNodeAttributes>"
      },
      {
        "name": "parentId",
        "optional": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "createComponentNode",
    "owner": "client",
    "method": "createComponentNode",
    "params": [
      {
        "name": "name",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "createTextStyle",
    "owner": "client",
    "method": "createTextStyle",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "TextStyleAttributes"
      }
    ]
  },
  {
    "name": "createDesignPage",
    "owner": "client",
    "method": "createDesignPage",
    "params": [
      {
        "name": "pageName",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "createWebPage",
    "owner": "client",
    "method": "createWebPage",
    "params": [
      {
        "name": "pagePath",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "getActiveBranch",
    "owner": "client",
    "method": "getActiveBranch",
    "params": []
  },
  {
    "name": "createBranch",
    "owner": "client",
    "method": "createBranch",
    "params": [
      {
        "name": "options",
        "optional": true,
        "type": "CreateBranchOptions"
      }
    ]
  },
  {
    "name": "getActiveCollection",
    "owner": "client",
    "method": "getActiveCollection",
    "params": []
  },
  {
    "name": "getActiveLocale",
    "owner": "client",
    "method": "getActiveLocale",
    "params": []
  },
  {
    "name": "getActiveManagedCollection",
    "owner": "client",
    "method": "getActiveManagedCollection",
    "params": []
  },
  {
    "name": "getBranch",
    "owner": "client",
    "method": "getBranch",
    "params": [
      {
        "name": "branchId",
        "optional": false,
        "type": "BranchId"
      }
    ]
  },
  {
    "name": "getBranches",
    "owner": "client",
    "method": "getBranches",
    "params": [
      {
        "name": "branchIds",
        "optional": true,
        "type": "readonly BranchId[]"
      }
    ]
  },
  {
    "name": "Branch.getChanges",
    "owner": "Branch",
    "method": "getChanges",
    "params": []
  },
  {
    "name": "Branch.switch",
    "owner": "Branch",
    "method": "switch",
    "params": []
  },
  {
    "name": "Branch.join",
    "owner": "Branch",
    "method": "join",
    "params": []
  },
  {
    "name": "Branch.leave",
    "owner": "Branch",
    "method": "leave",
    "params": []
  },
  {
    "name": "Branch.rename",
    "owner": "Branch",
    "method": "rename",
    "params": [
      {
        "name": "title",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "Branch.delete",
    "owner": "Branch",
    "method": "delete",
    "params": []
  },
  {
    "name": "Branch.merge",
    "owner": "Branch",
    "method": "merge",
    "params": [
      {
        "name": "options",
        "optional": true,
        "type": "MergeBranchOptions"
      }
    ]
  },
  {
    "name": "getCanvasRoot",
    "owner": "client",
    "method": "getCanvasRoot",
    "params": []
  },
  {
    "name": "getChildren",
    "owner": "client",
    "method": "getChildren",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "getCollection",
    "owner": "client",
    "method": "getCollection",
    "params": [
      {
        "name": "id",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "getCollections",
    "owner": "client",
    "method": "getCollections",
    "params": []
  },
  {
    "name": "getColorStyle",
    "owner": "client",
    "method": "getColorStyle",
    "params": [
      {
        "name": "id",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "getColorStyles",
    "owner": "client",
    "method": "getColorStyles",
    "params": []
  },
  {
    "name": "getCurrentUser",
    "owner": "client",
    "method": "getCurrentUser",
    "params": []
  },
  {
    "name": "getCustomCode",
    "owner": "client",
    "method": "getCustomCode",
    "params": []
  },
  {
    "name": "getDefaultLocale",
    "owner": "client",
    "method": "getDefaultLocale",
    "params": []
  },
  {
    "name": "getFont",
    "owner": "client",
    "method": "getFont",
    "params": [
      {
        "name": "family",
        "optional": false,
        "type": "string"
      },
      {
        "name": "attributes",
        "optional": true,
        "type": "FontAttributes"
      }
    ]
  },
  {
    "name": "getFonts",
    "owner": "client",
    "method": "getFonts",
    "params": []
  },
  {
    "name": "getImage",
    "owner": "client",
    "method": "getImage",
    "params": []
  },
  {
    "name": "getLocales",
    "owner": "client",
    "method": "getLocales",
    "params": []
  },
  {
    "name": "getLocalizationGroups",
    "owner": "client",
    "method": "getLocalizationGroups",
    "params": [
      {
        "name": "filter",
        "optional": true,
        "type": "GetLocalizationGroupsFilter"
      }
    ]
  },
  {
    "name": "listLocalizationGroups",
    "owner": "client",
    "method": "listLocalizationGroups",
    "params": []
  },
  {
    "name": "getManagedCollection",
    "owner": "client",
    "method": "getManagedCollection",
    "params": []
  },
  {
    "name": "getManagedCollections",
    "owner": "client",
    "method": "getManagedCollections",
    "params": []
  },
  {
    "name": "getNode",
    "owner": "client",
    "method": "getNode",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "getNodesWithAttribute",
    "owner": "client",
    "method": "getNodesWithAttribute",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId | null"
      },
      {
        "name": "attribute",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "getNodesWithAttributeSet",
    "owner": "client",
    "method": "getNodesWithAttributeSet",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId | null"
      },
      {
        "name": "attribute",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "getNodesWithType",
    "owner": "client",
    "method": "getNodesWithType",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId | null"
      },
      {
        "name": "type",
        "optional": false,
        "type": "KnownNodeClass"
      }
    ]
  },
  {
    "name": "getParent",
    "owner": "client",
    "method": "getParent",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "getPluginData",
    "owner": "client",
    "method": "getPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "getPluginDataKeys",
    "owner": "client",
    "method": "getPluginDataKeys",
    "params": []
  },
  {
    "name": "getProjectInfo",
    "owner": "client",
    "method": "getProjectInfo",
    "params": []
  },
  {
    "name": "getPublishInfo",
    "owner": "client",
    "method": "getPublishInfo",
    "params": []
  },
  {
    "name": "getRect",
    "owner": "client",
    "method": "getRect",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "getSelection",
    "owner": "client",
    "method": "getSelection",
    "params": []
  },
  {
    "name": "getText",
    "owner": "client",
    "method": "getText",
    "params": []
  },
  {
    "name": "getTextStyle",
    "owner": "client",
    "method": "getTextStyle",
    "params": [
      {
        "name": "id",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "getTextStyles",
    "owner": "client",
    "method": "getTextStyles",
    "params": []
  },
  {
    "name": "hideUI",
    "owner": "client",
    "method": "hideUI",
    "params": []
  },
  {
    "name": "setBackgroundMessage",
    "owner": "client",
    "method": "setBackgroundMessage",
    "params": [
      {
        "name": "status",
        "optional": false,
        "type": "string | null"
      }
    ]
  },
  {
    "name": "setCloseWarning",
    "owner": "client",
    "method": "setCloseWarning",
    "params": [
      {
        "name": "message",
        "optional": false,
        "type": "string | false"
      }
    ]
  },
  {
    "name": "lintCode",
    "owner": "client",
    "method": "lintCode",
    "params": [
      {
        "name": "fileName",
        "optional": false,
        "type": "string"
      },
      {
        "name": "content",
        "optional": false,
        "type": "string"
      },
      {
        "name": "rules",
        "optional": false,
        "type": "LintConfig"
      }
    ]
  },
  {
    "name": "notify",
    "owner": "client",
    "method": "notify",
    "params": [
      {
        "name": "message",
        "optional": false,
        "type": "string"
      },
      {
        "name": "options",
        "optional": false,
        "type": "NotifyOptionsData"
      }
    ]
  },
  {
    "name": "preloadDetachedComponentLayers",
    "owner": "client",
    "method": "preloadDetachedComponentLayers",
    "params": [
      {
        "name": "url",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "preloadDragPreviewImage",
    "owner": "client",
    "method": "preloadDragPreviewImage",
    "params": [
      {
        "name": "url",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "preloadImageUrlForInsertion",
    "owner": "client",
    "method": "preloadImageUrlForInsertion",
    "params": [
      {
        "name": "url",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "removeNode",
    "owner": "client",
    "method": "removeNode",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      }
    ]
  },
  {
    "name": "removeNodes",
    "owner": "client",
    "method": "removeNodes",
    "params": [
      {
        "name": "nodeIds",
        "optional": false,
        "type": "NodeId[]"
      }
    ]
  },
  {
    "name": "setAttributes",
    "owner": "client",
    "method": "setAttributes",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      },
      {
        "name": "attributes",
        "optional": false,
        "type": "Partial<AnyEditableAttributes>"
      }
    ]
  },
  {
    "name": "setCustomCode",
    "owner": "client",
    "method": "setCustomCode",
    "params": [
      {
        "name": "options",
        "optional": false,
        "type": "SetCustomCodeOptions"
      }
    ]
  },
  {
    "name": "setImage",
    "owner": "client",
    "method": "setImage",
    "params": [
      {
        "name": "image",
        "optional": false,
        "type": "NamedImageAssetInput | File"
      }
    ]
  },
  {
    "name": "setLocalizationData",
    "owner": "client",
    "method": "setLocalizationData",
    "params": [
      {
        "name": "update",
        "optional": false,
        "type": "LocalizationData"
      }
    ]
  },
  {
    "name": "createLocale",
    "owner": "client",
    "method": "createLocale",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "CreateLocaleInput"
      }
    ]
  },
  {
    "name": "getLocaleLanguages",
    "owner": "client",
    "method": "getLocaleLanguages",
    "params": []
  },
  {
    "name": "getLocaleRegions",
    "owner": "client",
    "method": "getLocaleRegions",
    "params": [
      {
        "name": "language",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "setMenu",
    "owner": "client",
    "method": "setMenu",
    "params": [
      {
        "name": "menuItems",
        "optional": false,
        "type": "MenuItem[]"
      }
    ]
  },
  {
    "name": "showContextMenu",
    "owner": "client",
    "method": "showContextMenu",
    "params": [
      {
        "name": "menuItems",
        "optional": false,
        "type": "MenuItem[]"
      },
      {
        "name": "config",
        "optional": false,
        "type": "ContextMenuConfig"
      }
    ]
  },
  {
    "name": "setParent",
    "owner": "client",
    "method": "setParent",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      },
      {
        "name": "parentId",
        "optional": false,
        "type": "NodeId"
      },
      {
        "name": "index",
        "optional": true,
        "type": "number | undefined"
      }
    ]
  },
  {
    "name": "setPluginData",
    "owner": "client",
    "method": "setPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      },
      {
        "name": "value",
        "optional": false,
        "type": "string | null"
      }
    ]
  },
  {
    "name": "setSelection",
    "owner": "client",
    "method": "setSelection",
    "params": [
      {
        "name": "nodeIds",
        "optional": false,
        "type": "string | Iterable<string>"
      }
    ]
  },
  {
    "name": "setText",
    "owner": "client",
    "method": "setText",
    "params": [
      {
        "name": "text",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "typecheckCode",
    "owner": "client",
    "method": "typecheckCode",
    "params": [
      {
        "name": "fileName",
        "optional": false,
        "type": "string"
      },
      {
        "name": "content",
        "optional": false,
        "type": "string"
      },
      {
        "name": "compilerOptions",
        "optional": true,
        "type": "ts.server.protocol.CompilerOptions"
      },
      {
        "name": "sessionId",
        "optional": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "showUI",
    "owner": "client",
    "method": "showUI",
    "params": [
      {
        "name": "options",
        "optional": true,
        "type": "UIOptions"
      }
    ]
  },
  {
    "name": "subscribeToCanvasRoot",
    "owner": "client",
    "method": "subscribeToCanvasRoot",
    "params": [
      {
        "name": "rootUpdate",
        "optional": false,
        "type": "(root: CanvasRootNode) => void"
      }
    ]
  },
  {
    "name": "subscribeToColorStyles",
    "owner": "client",
    "method": "subscribeToColorStyles",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(styles: ColorStyle[]) => void"
      }
    ]
  },
  {
    "name": "subscribeToCustomCode",
    "owner": "client",
    "method": "subscribeToCustomCode",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(customHTML: CustomCode) => void"
      }
    ]
  },
  {
    "name": "subscribeToImage",
    "owner": "client",
    "method": "subscribeToImage",
    "params": [
      {
        "name": "imageUpdate",
        "optional": false,
        "type": "(image: ImageAsset | null) => void"
      }
    ]
  },
  {
    "name": "subscribeToPublishInfo",
    "owner": "client",
    "method": "subscribeToPublishInfo",
    "params": [
      {
        "name": "publishInfoUpdate",
        "optional": false,
        "type": "(info: PublishInfo) => void"
      }
    ]
  },
  {
    "name": "subscribeToDeployment",
    "owner": "client",
    "method": "subscribeToDeployment",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(deployment: Deployment | null) => void"
      }
    ]
  },
  {
    "name": "subscribeToBranches",
    "owner": "client",
    "method": "subscribeToBranches",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(branches: readonly Branch[]) => void"
      }
    ]
  },
  {
    "name": "subscribeToActiveBranch",
    "owner": "client",
    "method": "subscribeToActiveBranch",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(branch: Branch) => void"
      }
    ]
  },
  {
    "name": "subscribeToSelection",
    "owner": "client",
    "method": "subscribeToSelection",
    "params": [
      {
        "name": "selectionUpdate",
        "optional": false,
        "type": "(nodes: CanvasNode[]) => void"
      }
    ]
  },
  {
    "name": "subscribeToText",
    "owner": "client",
    "method": "subscribeToText",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(text: string | null) => void"
      }
    ]
  },
  {
    "name": "subscribeToTextStyles",
    "owner": "client",
    "method": "subscribeToTextStyles",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(styles: TextStyle[]) => void"
      }
    ]
  },
  {
    "name": "createCodeFile",
    "owner": "client",
    "method": "createCodeFile",
    "params": [
      {
        "name": "name",
        "optional": false,
        "type": "string"
      },
      {
        "name": "code",
        "optional": false,
        "type": "string"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    editViaPlugin?: boolean;\n  }"
      }
    ]
  },
  {
    "name": "unstable_getDependencyVersion",
    "owner": "client",
    "method": "unstable_getDependencyVersion",
    "params": [
      {
        "name": "packageName",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "unstable_ensureMinimumDependencyVersion",
    "owner": "client",
    "method": "unstable_ensureMinimumDependencyVersion",
    "params": [
      {
        "name": "packageName",
        "optional": false,
        "type": "string"
      },
      {
        "name": "version",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "getCodeFiles",
    "owner": "client",
    "method": "getCodeFiles",
    "params": []
  },
  {
    "name": "getCodeFile",
    "owner": "client",
    "method": "getCodeFile",
    "params": [
      {
        "name": "idOrPath",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "subscribeToCodeFiles",
    "owner": "client",
    "method": "subscribeToCodeFiles",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(codeFiles: readonly CodeFile[]) => void"
      }
    ]
  },
  {
    "name": "subscribeToOpenCodeFile",
    "owner": "client",
    "method": "subscribeToOpenCodeFile",
    "params": [
      {
        "name": "callback",
        "optional": false,
        "type": "(codeFile: CodeFile | null) => void"
      }
    ]
  },
  {
    "name": "uploadFile",
    "owner": "client",
    "method": "uploadFile",
    "params": [
      {
        "name": "file",
        "optional": false,
        "type": "NamedFileAssetInput | File"
      }
    ]
  },
  {
    "name": "uploadFiles",
    "owner": "client",
    "method": "uploadFiles",
    "params": [
      {
        "name": "files",
        "optional": false,
        "type": "readonly NamedFileAssetInput[]"
      }
    ]
  },
  {
    "name": "uploadImage",
    "owner": "client",
    "method": "uploadImage",
    "params": [
      {
        "name": "image",
        "optional": false,
        "type": "NamedImageAssetInput | File"
      }
    ]
  },
  {
    "name": "uploadImages",
    "owner": "client",
    "method": "uploadImages",
    "params": [
      {
        "name": "image",
        "optional": false,
        "type": "readonly NamedImageTransfer[]"
      }
    ]
  },
  {
    "name": "zoomIntoView",
    "owner": "client",
    "method": "zoomIntoView",
    "params": [
      {
        "name": "nodeIds",
        "optional": false,
        "type": "NodeId | Iterable<NodeId>"
      },
      {
        "name": "options",
        "optional": true,
        "type": "ZoomIntoViewOptions"
      }
    ]
  },
  {
    "name": "navigateTo",
    "owner": "client",
    "method": "navigateTo",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "string"
      },
      {
        "name": "opts",
        "optional": true,
        "type": "NavigableOptions"
      }
    ]
  },
  {
    "name": "getVectorSets",
    "owner": "client",
    "method": "getVectorSets",
    "params": []
  },
  {
    "name": "VectorSet.getItems",
    "owner": "VectorSet",
    "method": "getItems",
    "params": []
  },
  {
    "name": "VectorSetItem.getVariables",
    "owner": "VectorSetItem",
    "method": "getVariables",
    "params": []
  },
  {
    "name": "Node.navigateTo",
    "owner": "Node",
    "method": "navigateTo",
    "params": [
      {
        "name": "opts",
        "optional": true,
        "type": "Pick<NavigableOptions, \"select\" | \"zoomIntoView\">"
      }
    ]
  },
  {
    "name": "CodeFile.navigateTo",
    "owner": "CodeFile",
    "method": "navigateTo",
    "params": []
  },
  {
    "name": "Collection.navigateTo",
    "owner": "Collection",
    "method": "navigateTo",
    "params": [
      {
        "name": "opts",
        "optional": true,
        "type": "NavigableOptions"
      }
    ]
  },
  {
    "name": "ManagedCollection.navigateTo",
    "owner": "ManagedCollection",
    "method": "navigateTo",
    "params": [
      {
        "name": "opts",
        "optional": true,
        "type": "NavigableOptions"
      }
    ]
  },
  {
    "name": "CollectionItem.navigateTo",
    "owner": "CollectionItem",
    "method": "navigateTo",
    "params": [
      {
        "name": "opts",
        "optional": true,
        "type": "NavigableOptions"
      }
    ]
  },
  {
    "name": "ComponentInstanceNode.getRuntimeError",
    "owner": "ComponentInstanceNode",
    "method": "getRuntimeError",
    "params": []
  },
  {
    "name": "CodeFile.remove",
    "owner": "CodeFile",
    "method": "remove",
    "params": []
  },
  {
    "name": "CodeFile.rename",
    "owner": "CodeFile",
    "method": "rename",
    "params": [
      {
        "name": "newName",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "CodeFile.setFileContent",
    "owner": "CodeFile",
    "method": "setFileContent",
    "params": [
      {
        "name": "code",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "CodeFile.getVersions",
    "owner": "CodeFile",
    "method": "getVersions",
    "params": []
  },
  {
    "name": "CodeFile.showProgressOnInstances",
    "owner": "CodeFile",
    "method": "showProgressOnInstances",
    "params": [
      {
        "name": "attributes",
        "optional": true,
        "type": "ShowProgressOnInstancesAttributes"
      }
    ]
  },
  {
    "name": "CodeFile.removeProgressFromInstances",
    "owner": "CodeFile",
    "method": "removeProgressFromInstances",
    "params": []
  },
  {
    "name": "CodeFile.lint",
    "owner": "CodeFile",
    "method": "lint",
    "params": [
      {
        "name": "_rules",
        "optional": false,
        "type": "LintConfig"
      }
    ]
  },
  {
    "name": "CodeFile.typecheck",
    "owner": "CodeFile",
    "method": "typecheck",
    "params": [
      {
        "name": "compilerOptions",
        "optional": true,
        "type": "ts.server.protocol.CompilerOptions"
      }
    ]
  },
  {
    "name": "CodeFileVersion.getContent",
    "owner": "CodeFileVersion",
    "method": "getContent",
    "params": []
  },
  {
    "name": "Field.remove",
    "owner": "Field",
    "method": "remove",
    "params": []
  },
  {
    "name": "Field.setAttributes",
    "owner": "Field",
    "method": "setAttributes",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "UpdateFieldAttributes<typeof this>"
      }
    ]
  },
  {
    "name": "EnumField.addCase",
    "owner": "EnumField",
    "method": "addCase",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "CreateEnumCase"
      }
    ]
  },
  {
    "name": "EnumField.setCaseOrder",
    "owner": "EnumField",
    "method": "setCaseOrder",
    "params": [
      {
        "name": "caseIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "Collection.addFields",
    "owner": "Collection",
    "method": "addFields",
    "params": [
      {
        "name": "fields",
        "optional": false,
        "type": "CreateField[]"
      }
    ]
  },
  {
    "name": "Collection.addItems",
    "owner": "Collection",
    "method": "addItems",
    "params": [
      {
        "name": "items",
        "optional": false,
        "type": "CollectionItemInput[]"
      }
    ]
  },
  {
    "name": "Collection.getFields",
    "owner": "Collection",
    "method": "getFields",
    "params": []
  },
  {
    "name": "Collection.getItems",
    "owner": "Collection",
    "method": "getItems",
    "params": []
  },
  {
    "name": "Collection.getPluginData",
    "owner": "Collection",
    "method": "getPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "Collection.getPluginDataKeys",
    "owner": "Collection",
    "method": "getPluginDataKeys",
    "params": []
  },
  {
    "name": "Collection.removeFields",
    "owner": "Collection",
    "method": "removeFields",
    "params": [
      {
        "name": "fieldIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "Collection.removeItems",
    "owner": "Collection",
    "method": "removeItems",
    "params": [
      {
        "name": "itemIds",
        "optional": false,
        "type": "NodeId[]"
      }
    ]
  },
  {
    "name": "Collection.setAsActive",
    "owner": "Collection",
    "method": "setAsActive",
    "params": []
  },
  {
    "name": "Collection.setFieldOrder",
    "owner": "Collection",
    "method": "setFieldOrder",
    "params": [
      {
        "name": "fieldIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "Collection.setItemOrder",
    "owner": "Collection",
    "method": "setItemOrder",
    "params": [
      {
        "name": "ids",
        "optional": false,
        "type": "NodeId[]"
      }
    ]
  },
  {
    "name": "Collection.setPluginData",
    "owner": "Collection",
    "method": "setPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      },
      {
        "name": "value",
        "optional": false,
        "type": "string | null"
      }
    ]
  },
  {
    "name": "CollectionItem.getPluginData",
    "owner": "CollectionItem",
    "method": "getPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "CollectionItem.getPluginDataKeys",
    "owner": "CollectionItem",
    "method": "getPluginDataKeys",
    "params": []
  },
  {
    "name": "CollectionItem.remove",
    "owner": "CollectionItem",
    "method": "remove",
    "params": []
  },
  {
    "name": "CollectionItem.setAttributes",
    "owner": "CollectionItem",
    "method": "setAttributes",
    "params": [
      {
        "name": "update",
        "optional": false,
        "type": "EditableCollectionItemAttributes"
      }
    ]
  },
  {
    "name": "CollectionItem.setPluginData",
    "owner": "CollectionItem",
    "method": "setPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      },
      {
        "name": "value",
        "optional": false,
        "type": "string | null"
      }
    ]
  },
  {
    "name": "ManagedCollection.addItems",
    "owner": "ManagedCollection",
    "method": "addItems",
    "params": [
      {
        "name": "items",
        "optional": false,
        "type": "ManagedCollectionItemInput[]"
      }
    ]
  },
  {
    "name": "ManagedCollection.getFields",
    "owner": "ManagedCollection",
    "method": "getFields",
    "params": []
  },
  {
    "name": "ManagedCollection.getItemIds",
    "owner": "ManagedCollection",
    "method": "getItemIds",
    "params": []
  },
  {
    "name": "ManagedCollection.getPluginData",
    "owner": "ManagedCollection",
    "method": "getPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "ManagedCollection.getPluginDataKeys",
    "owner": "ManagedCollection",
    "method": "getPluginDataKeys",
    "params": []
  },
  {
    "name": "ManagedCollection.removeItems",
    "owner": "ManagedCollection",
    "method": "removeItems",
    "params": [
      {
        "name": "itemIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "ManagedCollection.setAsActive",
    "owner": "ManagedCollection",
    "method": "setAsActive",
    "params": []
  },
  {
    "name": "ManagedCollection.setFields",
    "owner": "ManagedCollection",
    "method": "setFields",
    "params": [
      {
        "name": "fields",
        "optional": false,
        "type": "ManagedCollectionFieldInput[]"
      }
    ]
  },
  {
    "name": "ManagedCollection.setItemOrder",
    "owner": "ManagedCollection",
    "method": "setItemOrder",
    "params": [
      {
        "name": "ids",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "ManagedCollection.setPluginData",
    "owner": "ManagedCollection",
    "method": "setPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      },
      {
        "name": "value",
        "optional": false,
        "type": "string | null"
      }
    ]
  },
  {
    "name": "Node.clone",
    "owner": "Node",
    "method": "clone",
    "params": []
  },
  {
    "name": "WebPageNode.clone",
    "owner": "WebPageNode",
    "method": "clone",
    "params": [
      {
        "name": "options",
        "optional": true,
        "type": "WebPageCloneOptions"
      }
    ]
  },
  {
    "name": "DesignPageNode.clone",
    "owner": "DesignPageNode",
    "method": "clone",
    "params": [
      {
        "name": "options",
        "optional": true,
        "type": "DesignPageCloneOptions"
      }
    ]
  },
  {
    "name": "Node.getChildren",
    "owner": "Node",
    "method": "getChildren",
    "params": []
  },
  {
    "name": "Node.getNodesWithAttribute",
    "owner": "Node",
    "method": "getNodesWithAttribute",
    "params": [
      {
        "name": "attribute",
        "optional": false,
        "type": "NodeAttributeKey"
      }
    ]
  },
  {
    "name": "Node.getNodesWithAttributeSet",
    "owner": "Node",
    "method": "getNodesWithAttributeSet",
    "params": [
      {
        "name": "attribute",
        "optional": false,
        "type": "NodeAttributeKey"
      }
    ]
  },
  {
    "name": "Node.getNodesWithType",
    "owner": "Node",
    "method": "getNodesWithType",
    "params": [
      {
        "name": "type",
        "optional": false,
        "type": "\"FrameNode\""
      }
    ]
  },
  {
    "name": "Node.getParent",
    "owner": "Node",
    "method": "getParent",
    "params": []
  },
  {
    "name": "Node.getPluginData",
    "owner": "Node",
    "method": "getPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "Node.getPluginDataKeys",
    "owner": "Node",
    "method": "getPluginDataKeys",
    "params": []
  },
  {
    "name": "Node.getRect",
    "owner": "Node",
    "method": "getRect",
    "params": []
  },
  {
    "name": "Node.remove",
    "owner": "Node",
    "method": "remove",
    "params": []
  },
  {
    "name": "Node.select",
    "owner": "Node",
    "method": "select",
    "params": []
  },
  {
    "name": "Node.setAttributes",
    "owner": "Node",
    "method": "setAttributes",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>"
      }
    ]
  },
  {
    "name": "Node.setPluginData",
    "owner": "Node",
    "method": "setPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      },
      {
        "name": "value",
        "optional": false,
        "type": "string | null"
      }
    ]
  },
  {
    "name": "Node.walk",
    "owner": "Node",
    "method": "walk",
    "params": []
  },
  {
    "name": "Node.zoomIntoView",
    "owner": "Node",
    "method": "zoomIntoView",
    "params": [
      {
        "name": "options",
        "optional": true,
        "type": "ZoomIntoViewOptions"
      }
    ]
  },
  {
    "name": "TextNode.getText",
    "owner": "TextNode",
    "method": "getText",
    "params": []
  },
  {
    "name": "TextNode.setText",
    "owner": "TextNode",
    "method": "setText",
    "params": [
      {
        "name": "text",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "TextNode.setHTML",
    "owner": "TextNode",
    "method": "setHTML",
    "params": [
      {
        "name": "html",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "TextNode.getHTML",
    "owner": "TextNode",
    "method": "getHTML",
    "params": []
  },
  {
    "name": "ComponentNode.addVariant",
    "owner": "ComponentNode",
    "method": "addVariant",
    "params": [
      {
        "name": "basedOn",
        "optional": false,
        "type": "NodeId"
      },
      {
        "name": "attributes",
        "optional": true,
        "type": "Partial<EditableFrameNodeAttributes>"
      }
    ]
  },
  {
    "name": "ComponentNode.addGestureVariant",
    "owner": "ComponentNode",
    "method": "addGestureVariant",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "NodeId"
      },
      {
        "name": "type",
        "optional": false,
        "type": "\"hover\" | \"pressed\""
      },
      {
        "name": "attributes",
        "optional": true,
        "type": "Partial<EditableFrameNodeAttributes>"
      }
    ]
  },
  {
    "name": "ComponentNode.getVariables",
    "owner": "ComponentNode",
    "method": "getVariables",
    "params": []
  },
  {
    "name": "ComponentNode.addVariables",
    "owner": "ComponentNode",
    "method": "addVariables",
    "params": [
      {
        "name": "variables",
        "optional": false,
        "type": "CreateVariable[]"
      }
    ]
  },
  {
    "name": "ComponentNode.removeVariables",
    "owner": "ComponentNode",
    "method": "removeVariables",
    "params": [
      {
        "name": "variableIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "WebPageNode.getBreakpointSuggestions",
    "owner": "WebPageNode",
    "method": "getBreakpointSuggestions",
    "params": []
  },
  {
    "name": "WebPageNode.addBreakpoint",
    "owner": "WebPageNode",
    "method": "addBreakpoint",
    "params": [
      {
        "name": "basedOn",
        "optional": false,
        "type": "NodeId"
      },
      {
        "name": "breakpoint",
        "optional": false,
        "type": "Breakpoint"
      }
    ]
  },
  {
    "name": "WebPageNode.getActiveCollectionItem",
    "owner": "WebPageNode",
    "method": "getActiveCollectionItem",
    "params": []
  },
  {
    "name": "ColorStyle.getPluginData",
    "owner": "ColorStyle",
    "method": "getPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "ColorStyle.getPluginDataKeys",
    "owner": "ColorStyle",
    "method": "getPluginDataKeys",
    "params": []
  },
  {
    "name": "ColorStyle.remove",
    "owner": "ColorStyle",
    "method": "remove",
    "params": []
  },
  {
    "name": "ColorStyle.setAttributes",
    "owner": "ColorStyle",
    "method": "setAttributes",
    "params": [
      {
        "name": "update",
        "optional": false,
        "type": "Partial<ColorStyleAttributes>"
      }
    ]
  },
  {
    "name": "ColorStyle.setPluginData",
    "owner": "ColorStyle",
    "method": "setPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      },
      {
        "name": "value",
        "optional": false,
        "type": "string | null"
      }
    ]
  },
  {
    "name": "TextStyle.getPluginData",
    "owner": "TextStyle",
    "method": "getPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "TextStyle.getPluginDataKeys",
    "owner": "TextStyle",
    "method": "getPluginDataKeys",
    "params": []
  },
  {
    "name": "TextStyle.remove",
    "owner": "TextStyle",
    "method": "remove",
    "params": []
  },
  {
    "name": "TextStyle.setAttributes",
    "owner": "TextStyle",
    "method": "setAttributes",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "TextStyleAttributes"
      }
    ]
  },
  {
    "name": "TextStyle.setPluginData",
    "owner": "TextStyle",
    "method": "setPluginData",
    "params": [
      {
        "name": "key",
        "optional": false,
        "type": "string"
      },
      {
        "name": "value",
        "optional": false,
        "type": "string | null"
      }
    ]
  },
  {
    "name": "Variable.setAttributes",
    "owner": "Variable",
    "method": "setAttributes",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "UpdateVariableAttributes<typeof this>"
      }
    ]
  },
  {
    "name": "Variable.remove",
    "owner": "Variable",
    "method": "remove",
    "params": []
  },
  {
    "name": "ComponentNode.setVariableOrder",
    "owner": "ComponentNode",
    "method": "setVariableOrder",
    "params": [
      {
        "name": "variableIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "EnumCase.remove",
    "owner": "EnumCase",
    "method": "remove",
    "params": []
  },
  {
    "name": "EnumCase.setAttributes",
    "owner": "EnumCase",
    "method": "setAttributes",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "UpdateEnumCase"
      }
    ]
  },
  {
    "name": "EnumVariable.addCase",
    "owner": "EnumVariable",
    "method": "addCase",
    "params": [
      {
        "name": "attributes",
        "optional": false,
        "type": "CreateEnumCase"
      }
    ]
  },
  {
    "name": "EnumVariable.setCaseOrder",
    "owner": "EnumVariable",
    "method": "setCaseOrder",
    "params": [
      {
        "name": "caseIds",
        "optional": false,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "createCollection",
    "owner": "client",
    "method": "createCollection",
    "params": [
      {
        "name": "name",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "createManagedCollection",
    "owner": "client",
    "method": "createManagedCollection",
    "params": [
      {
        "name": "name",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "publish",
    "owner": "client",
    "method": "publish",
    "params": []
  },
  {
    "name": "getDeployment",
    "owner": "client",
    "method": "getDeployment",
    "params": [
      {
        "name": "deploymentId",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "getDeploymentIssues",
    "owner": "client",
    "method": "getDeploymentIssues",
    "params": [
      {
        "name": "deploymentId",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "getUnpublishedPageChanges",
    "owner": "client",
    "method": "getUnpublishedPageChanges",
    "params": []
  },
  {
    "name": "listDeployments",
    "owner": "client",
    "method": "listDeployments",
    "params": [
      {
        "name": "limit",
        "optional": false,
        "type": "number"
      },
      {
        "name": "cursor",
        "optional": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "deploy",
    "owner": "client",
    "method": "deploy",
    "params": [
      {
        "name": "deploymentId",
        "optional": false,
        "type": "string"
      },
      {
        "name": "domains",
        "optional": true,
        "type": "string[]"
      }
    ]
  },
  {
    "name": "getDeployments",
    "owner": "client",
    "method": "getDeployments",
    "params": []
  },
  {
    "name": "getChangedPaths",
    "owner": "client",
    "method": "getChangedPaths",
    "params": []
  },
  {
    "name": "getChangeContributors",
    "owner": "client",
    "method": "getChangeContributors",
    "params": [
      {
        "name": "fromVersion",
        "optional": true,
        "type": "number"
      },
      {
        "name": "toVersion",
        "optional": true,
        "type": "number"
      }
    ]
  },
  {
    "name": "ping",
    "owner": "client",
    "method": "ping",
    "params": []
  },
  {
    "name": "getSystemPrompt",
    "owner": "agent",
    "method": "getSystemPrompt",
    "params": []
  },
  {
    "name": "getContext",
    "owner": "agent",
    "method": "getContext",
    "params": []
  },
  {
    "name": "getActiveBranch",
    "owner": "agent",
    "method": "getActiveBranch",
    "params": []
  },
  {
    "name": "getBranches",
    "owner": "agent",
    "method": "getBranches",
    "params": []
  },
  {
    "name": "getBranchChanges",
    "owner": "agent",
    "method": "getBranchChanges",
    "params": [
      {
        "name": "branchId",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "switchBranch",
    "owner": "agent",
    "method": "switchBranch",
    "params": [
      {
        "name": "branchId",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "createBranch",
    "owner": "agent",
    "method": "createBranch",
    "params": [
      {
        "name": "title",
        "optional": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "mergeBranch",
    "owner": "agent",
    "method": "mergeBranch",
    "params": [
      {
        "name": "targetBranchId",
        "optional": true,
        "type": "string"
      }
    ]
  },
  {
    "name": "joinBranch",
    "owner": "agent",
    "method": "joinBranch",
    "params": [
      {
        "name": "branchId",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "leaveBranch",
    "owner": "agent",
    "method": "leaveBranch",
    "params": [
      {
        "name": "branchId",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "renameBranch",
    "owner": "agent",
    "method": "renameBranch",
    "params": [
      {
        "name": "branchId",
        "optional": false,
        "type": "string"
      },
      {
        "name": "title",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "deleteBranch",
    "owner": "agent",
    "method": "deleteBranch",
    "params": [
      {
        "name": "branchId",
        "optional": false,
        "type": "string"
      }
    ]
  },
  {
    "name": "readProject",
    "owner": "agent",
    "method": "readProject",
    "params": [
      {
        "name": "queries",
        "optional": false,
        "type": "Record<string, unknown>[]"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "listComponents",
    "owner": "agent",
    "method": "listComponents",
    "params": []
  },
  {
    "name": "listIconSets",
    "owner": "agent",
    "method": "listIconSets",
    "params": []
  },
  {
    "name": "readComponentControls",
    "owner": "agent",
    "method": "readComponentControls",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    componentIds: readonly string[];\n  }"
      }
    ]
  },
  {
    "name": "readIconSetControls",
    "owner": "agent",
    "method": "readIconSetControls",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    iconSetIds: readonly string[];\n  }"
      }
    ]
  },
  {
    "name": "readIcons",
    "owner": "agent",
    "method": "readIcons",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    iconSetId: string;\n  }"
      }
    ]
  },
  {
    "name": "readLayoutTemplateControls",
    "owner": "agent",
    "method": "readLayoutTemplateControls",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    layoutTemplateIds: readonly string[];\n  }"
      }
    ]
  },
  {
    "name": "readShaderControls",
    "owner": "agent",
    "method": "readShaderControls",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    shaderNames: readonly string[];\n  }"
      }
    ]
  },
  {
    "name": "applyChanges",
    "owner": "agent",
    "method": "applyChanges",
    "params": [
      {
        "name": "dsl",
        "optional": false,
        "type": "string"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "replaceText",
    "owner": "agent",
    "method": "replaceText",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n    searchText: string;\n    replaceText: string;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "publish",
    "owner": "agent",
    "method": "publish",
    "params": [
      {
        "name": "input",
        "optional": true,
        "type": "Record<string, unknown>"
      }
    ]
  },
  {
    "name": "queryImages",
    "owner": "agent",
    "method": "queryImages",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "Record<string, unknown>"
      }
    ]
  },
  {
    "name": "queryAnalytics",
    "owner": "agent",
    "method": "queryAnalytics",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    query: string;\n    from: string;\n    to?: string | undefined;\n  }"
      }
    ]
  },
  {
    "name": "flattenComponentInstance",
    "owner": "agent",
    "method": "flattenComponentInstance",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "makeExternalComponentLocal",
    "owner": "agent",
    "method": "makeExternalComponentLocal",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n    replaceAll?: boolean;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getNode",
    "owner": "agent",
    "method": "getNode",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getNodes",
    "owner": "agent",
    "method": "getNodes",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    ids: readonly string[];\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getNodesOfTypes",
    "owner": "agent",
    "method": "getNodesOfTypes",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    types: readonly string[];\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getDescendantsOfTypes",
    "owner": "agent",
    "method": "getDescendantsOfTypes",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n    types: readonly string[];\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getRect",
    "owner": "agent",
    "method": "getRect",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getDescendantReferencesOfTypes",
    "owner": "agent",
    "method": "getDescendantReferencesOfTypes",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n    types: readonly string[];\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getScopeNode",
    "owner": "agent",
    "method": "getScopeNode",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getGroundNode",
    "owner": "agent",
    "method": "getGroundNode",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getParentNode",
    "owner": "agent",
    "method": "getParentNode",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "getAncestors",
    "owner": "agent",
    "method": "getAncestors",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "serialize",
    "owner": "agent",
    "method": "serialize",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    id: string;\n    depth?: number;\n    attributeFilter?: readonly string[];\n    ancestorPath?: boolean;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "serializeNodes",
    "owner": "agent",
    "method": "serializeNodes",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    ids: readonly string[];\n    depth?: number;\n    attributeFilter?: readonly string[];\n    ancestorPath?: boolean;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "paginate",
    "owner": "agent",
    "method": "paginate",
    "params": [
      {
        "name": "input",
        "optional": false,
        "type": "{\n    items: readonly unknown[];\n    keyName?: never;\n    cursor?: never;\n  } | {\n    keyName: string;\n    cursor: number;\n    items?: never;\n  }"
      },
      {
        "name": "options",
        "optional": true,
        "type": "{\n    pagePath?: string;\n  }"
      }
    ]
  },
  {
    "name": "subscribeToConversationTurnProgress",
    "owner": "agent",
    "method": "subscribeToConversationTurnProgress",
    "params": [
      {
        "name": "conversationId",
        "optional": false,
        "type": "string"
      },
      {
        "name": "callback",
        "optional": false,
        "type": "(update: AgentConversationTurnUpdate) => void"
      }
    ]
  },
  {
    "name": "runAutomation",
    "owner": "agent",
    "method": "runAutomation",
    "params": [
      {
        "name": "args",
        "optional": false,
        "type": "RunAutomationArgs"
      }
    ]
  },
  {
    "name": "startConversation",
    "owner": "agent",
    "method": "startConversation",
    "params": [
      {
        "name": "prompt",
        "optional": false,
        "type": "string"
      },
      {
        "name": "options",
        "optional": true,
        "type": "StartAgentConversationOptions"
      }
    ]
  },
  {
    "name": "continueConversation",
    "owner": "agent",
    "method": "continueConversation",
    "params": [
      {
        "name": "prompt",
        "optional": false,
        "type": "string"
      },
      {
        "name": "options",
        "optional": false,
        "type": "ContinueAgentConversationOptions"
      }
    ]
  },
  {
    "name": "submitClarification",
    "owner": "agent",
    "method": "submitClarification",
    "params": [
      {
        "name": "options",
        "optional": false,
        "type": "SubmitAgentClarificationOptions"
      }
    ]
  },
  {
    "name": "runSupervisorCommand",
    "owner": "agent",
    "method": "runSupervisorCommand",
    "params": [
      {
        "name": "options",
        "optional": false,
        "type": "RunSupervisorAgentCommandOptions"
      }
    ]
  },
  {
    "name": "screenshot",
    "owner": "client",
    "method": "screenshot",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "string"
      },
      {
        "name": "options",
        "optional": true,
        "type": "ScreenshotOptions"
      }
    ]
  },
  {
    "name": "exportSVG",
    "owner": "client",
    "method": "exportSVG",
    "params": [
      {
        "name": "nodeId",
        "optional": false,
        "type": "string"
      }
    ]
  }
];
export const FRAMER_SDK_UNSUPPORTED = [
  {
    "owner": "client",
    "method": "makeDraggable",
    "reason": "Requires a live DOM HTMLElement and drag callbacks; neither can be represented by stateless JSON MCP calls."
  },
  {
    "owner": "client",
    "method": "getImageData",
    "sdkAlias": "getImageData",
    "reason": "The SDK declares this as an internal PluginMessageAPI operation, not a callable method on the public Framer client; the client has no direct image-ID data method."
  },
  {
    "owner": "ImageAsset",
    "method": "cloneWithAttributes",
    "reason": "Requires a stable ImageAsset instance; the public client can only reacquire the current selected image, not an asset by ID."
  },
  {
    "owner": "ImageAsset",
    "method": "getData",
    "reason": "Requires a stable ImageAsset instance; the public client can only reacquire the current selected image, not an asset by ID."
  },
  {
    "owner": "ImageAsset",
    "method": "loadBitmap",
    "reason": "Requires a stable ImageAsset instance and browser-only Image/createImageBitmap APIs; the public client can only reacquire the current selected image, not an asset by ID."
  },
  {
    "owner": "ImageAsset",
    "method": "loadImage",
    "reason": "Requires a stable ImageAsset instance and browser-only Image/createImageBitmap APIs; the public client can only reacquire the current selected image, not an asset by ID."
  },
  {
    "owner": "ImageAsset",
    "method": "measure",
    "reason": "Requires a stable ImageAsset instance; the public client can only reacquire the current selected image, not an asset by ID."
  },
  {
    "owner": "ComponentInstancePlaceholder",
    "method": "setAttributes",
    "sdkAlias": "updateComponentInstancePlaceholder",
    "reason": "The SDK exposes this only on a ComponentInstancePlaceholder instance. Placeholders cannot be reacquired by ID via the public client in a later stateless request; direct ID wire methods are internal, not callable Framer client methods."
  },
  {
    "owner": "ComponentInstancePlaceholder",
    "method": "remove",
    "sdkAlias": "removeComponentInstancePlaceholder",
    "reason": "The SDK exposes this only on a ComponentInstancePlaceholder instance. Placeholders cannot be reacquired by ID via the public client in a later stateless request; direct ID wire methods are internal, not callable Framer client methods."
  },
  {
    "owner": "ComponentInstancePlaceholder",
    "method": "replaceWithComponentInstance",
    "sdkAlias": "replaceComponentInstancePlaceholderWithComponentInstance",
    "reason": "The SDK exposes this only on a ComponentInstancePlaceholder instance. Placeholders cannot be reacquired by ID via the public client in a later stateless request; direct ID wire methods are internal, not callable Framer client methods."
  }
];
