# Framer SDK method inventory

Generated from the installed framer-api 5.1.0 registry. This is the complete direct-tool inventory in this repository: **269 tools**.

Each listed MCP tool calls the named SDK method directly. Optional SDK inputs are marked `?`.

## client (122)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_add_component_instance_placeholder` | `Framer.addComponentInstancePlaceholder` | attributes?: `ComponentInstancePlaceholderAttributes` |
| `framer_add_detached_component_layers` | `Framer.addDetachedComponentLayers` | options: `{ url: string; layout?: boolean; attributes?: Partial<Record<string, unknown>>; }` |
| `framer_add_image` | `Framer.addImage` | image: `NamedImageAssetInput \| File` |
| `framer_add_images` | `Framer.addImages` | image: `readonly NamedImageTransfer[]` |
| `framer_add_svg` | `Framer.addSVG` | svg: `SVGData` |
| `framer_add_text` | `Framer.addText` | text: `string`, options?: `AddTextOptions` |
| `framer_add_redirects` | `Framer.addRedirects` | redirects: `RedirectInput[]` |
| `framer_get_redirects` | `Framer.getRedirects` | — |
| `framer_remove_redirects` | `Framer.removeRedirects` | redirectIds: `string[]` |
| `framer_set_redirect_order` | `Framer.setRedirectOrder` | redirectIds: `string[]` |
| `framer_subscribe_to_redirects` | `Framer.subscribeToRedirects` | — |
| `framer_clone_node` | `Framer.cloneNode` | nodeId: `NodeId` |
| `framer_close_plugin` | `Framer.closePlugin` | message?: `string`, options?: `ClosePluginOptions` |
| `framer_create_color_style` | `Framer.createColorStyle` | attributes: `ColorStyleAttributes` |
| `framer_create_frame_node` | `Framer.createFrameNode` | attributes: `Partial<EditableFrameNodeAttributes>`, parentId?: `string` |
| `framer_create_text_node` | `Framer.createTextNode` | attributes: `Partial<EditableTextNodeAttributes>`, parentId?: `string` |
| `framer_create_component_node` | `Framer.createComponentNode` | name: `string` |
| `framer_create_text_style` | `Framer.createTextStyle` | attributes: `TextStyleAttributes` |
| `framer_create_design_page` | `Framer.createDesignPage` | pageName: `string` |
| `framer_create_web_page` | `Framer.createWebPage` | pagePath: `string` |
| `framer_get_active_branch` | `Framer.getActiveBranch` | — |
| `framer_create_branch` | `Framer.createBranch` | options?: `CreateBranchOptions` |
| `framer_get_active_collection` | `Framer.getActiveCollection` | — |
| `framer_get_active_locale` | `Framer.getActiveLocale` | — |
| `framer_get_active_managed_collection` | `Framer.getActiveManagedCollection` | — |
| `framer_get_branch` | `Framer.getBranch` | branchId: `BranchId` |
| `framer_get_branches` | `Framer.getBranches` | branchIds?: `readonly BranchId[]` |
| `framer_get_canvas_root` | `Framer.getCanvasRoot` | — |
| `framer_get_children` | `Framer.getChildren` | nodeId: `NodeId` |
| `framer_get_collection` | `Framer.getCollection` | id: `NodeId` |
| `framer_get_collections` | `Framer.getCollections` | — |
| `framer_get_color_style` | `Framer.getColorStyle` | id: `NodeId` |
| `framer_get_color_styles` | `Framer.getColorStyles` | — |
| `framer_get_current_user` | `Framer.getCurrentUser` | — |
| `framer_get_custom_code` | `Framer.getCustomCode` | — |
| `framer_get_default_locale` | `Framer.getDefaultLocale` | — |
| `framer_get_font` | `Framer.getFont` | family: `string`, attributes?: `FontAttributes` |
| `framer_get_fonts` | `Framer.getFonts` | — |
| `framer_get_image` | `Framer.getImage` | — |
| `framer_get_locales` | `Framer.getLocales` | — |
| `framer_get_localization_groups` | `Framer.getLocalizationGroups` | filter?: `GetLocalizationGroupsFilter` |
| `framer_list_localization_groups` | `Framer.listLocalizationGroups` | — |
| `framer_get_managed_collection` | `Framer.getManagedCollection` | — |
| `framer_get_managed_collections` | `Framer.getManagedCollections` | — |
| `framer_get_node` | `Framer.getNode` | nodeId: `NodeId` |
| `framer_get_nodes_with_attribute` | `Framer.getNodesWithAttribute` | nodeId: `NodeId \| null`, attribute: `string` |
| `framer_get_nodes_with_attribute_set` | `Framer.getNodesWithAttributeSet` | nodeId: `NodeId \| null`, attribute: `string` |
| `framer_get_nodes_with_type` | `Framer.getNodesWithType` | nodeId: `NodeId \| null`, type: `KnownNodeClass` |
| `framer_get_parent` | `Framer.getParent` | nodeId: `NodeId` |
| `framer_get_plugin_data` | `Framer.getPluginData` | key: `string` |
| `framer_get_plugin_data_keys` | `Framer.getPluginDataKeys` | — |
| `framer_get_project_info` | `Framer.getProjectInfo` | — |
| `framer_get_publish_info` | `Framer.getPublishInfo` | — |
| `framer_get_rect` | `Framer.getRect` | nodeId: `NodeId` |
| `framer_get_selection` | `Framer.getSelection` | — |
| `framer_get_text` | `Framer.getText` | — |
| `framer_get_text_style` | `Framer.getTextStyle` | id: `NodeId` |
| `framer_get_text_styles` | `Framer.getTextStyles` | — |
| `framer_hide_ui` | `Framer.hideUI` | — |
| `framer_set_background_message` | `Framer.setBackgroundMessage` | status: `string \| null` |
| `framer_set_close_warning` | `Framer.setCloseWarning` | message: `string \| false` |
| `framer_lint_code` | `Framer.lintCode` | fileName: `string`, content: `string`, rules: `LintConfig` |
| `framer_notify` | `Framer.notify` | message: `string`, options: `NotifyOptionsData` |
| `framer_preload_detached_component_layers` | `Framer.preloadDetachedComponentLayers` | url: `string` |
| `framer_preload_drag_preview_image` | `Framer.preloadDragPreviewImage` | url: `string` |
| `framer_preload_image_url_for_insertion` | `Framer.preloadImageUrlForInsertion` | url: `string` |
| `framer_remove_node` | `Framer.removeNode` | nodeId: `NodeId` |
| `framer_remove_nodes` | `Framer.removeNodes` | nodeIds: `NodeId[]` |
| `framer_set_attributes` | `Framer.setAttributes` | nodeId: `NodeId`, attributes: `Partial<AnyEditableAttributes>` |
| `framer_set_custom_code` | `Framer.setCustomCode` | options: `SetCustomCodeOptions` |
| `framer_set_image` | `Framer.setImage` | image: `NamedImageAssetInput \| File` |
| `framer_set_localization_data` | `Framer.setLocalizationData` | update: `LocalizationData` |
| `framer_create_locale` | `Framer.createLocale` | input: `CreateLocaleInput` |
| `framer_get_locale_languages` | `Framer.getLocaleLanguages` | — |
| `framer_get_locale_regions` | `Framer.getLocaleRegions` | language: `string` |
| `framer_set_menu` | `Framer.setMenu` | menuItems: `MenuItem[]` |
| `framer_show_context_menu` | `Framer.showContextMenu` | menuItems: `MenuItem[]`, config: `ContextMenuConfig` |
| `framer_set_parent` | `Framer.setParent` | nodeId: `NodeId`, parentId: `NodeId`, index?: `number \| undefined` |
| `framer_set_plugin_data` | `Framer.setPluginData` | key: `string`, value: `string \| null` |
| `framer_set_selection` | `Framer.setSelection` | nodeIds: `string \| Iterable<string>` |
| `framer_set_text` | `Framer.setText` | text: `string` |
| `framer_typecheck_code` | `Framer.typecheckCode` | fileName: `string`, content: `string`, compilerOptions?: `ts.server.protocol.CompilerOptions`, sessionId?: `string` |
| `framer_show_ui` | `Framer.showUI` | options?: `UIOptions` |
| `framer_subscribe_to_canvas_root` | `Framer.subscribeToCanvasRoot` | — |
| `framer_subscribe_to_color_styles` | `Framer.subscribeToColorStyles` | — |
| `framer_subscribe_to_custom_code` | `Framer.subscribeToCustomCode` | — |
| `framer_subscribe_to_image` | `Framer.subscribeToImage` | — |
| `framer_subscribe_to_publish_info` | `Framer.subscribeToPublishInfo` | — |
| `framer_subscribe_to_deployment` | `Framer.subscribeToDeployment` | — |
| `framer_subscribe_to_branches` | `Framer.subscribeToBranches` | — |
| `framer_subscribe_to_active_branch` | `Framer.subscribeToActiveBranch` | — |
| `framer_subscribe_to_selection` | `Framer.subscribeToSelection` | — |
| `framer_subscribe_to_text` | `Framer.subscribeToText` | — |
| `framer_subscribe_to_text_styles` | `Framer.subscribeToTextStyles` | — |
| `framer_create_code_file` | `Framer.createCodeFile` | name: `string`, code: `string`, options?: `{ editViaPlugin?: boolean; }` |
| `framer_unstable_get_dependency_version` | `Framer.unstable_getDependencyVersion` | packageName: `string` |
| `framer_unstable_ensure_minimum_dependency_version` | `Framer.unstable_ensureMinimumDependencyVersion` | packageName: `string`, version: `string` |
| `framer_get_code_files` | `Framer.getCodeFiles` | — |
| `framer_get_code_file` | `Framer.getCodeFile` | idOrPath: `string` |
| `framer_subscribe_to_code_files` | `Framer.subscribeToCodeFiles` | — |
| `framer_subscribe_to_open_code_file` | `Framer.subscribeToOpenCodeFile` | — |
| `framer_upload_file` | `Framer.uploadFile` | file: `NamedFileAssetInput \| File` |
| `framer_upload_files` | `Framer.uploadFiles` | files: `readonly NamedFileAssetInput[]` |
| `framer_upload_image` | `Framer.uploadImage` | image: `NamedImageAssetInput \| File` |
| `framer_upload_images` | `Framer.uploadImages` | image: `readonly NamedImageTransfer[]` |
| `framer_zoom_into_view` | `Framer.zoomIntoView` | nodeIds: `NodeId \| Iterable<NodeId>`, options?: `ZoomIntoViewOptions` |
| `framer_navigate_to` | `Framer.navigateTo` | nodeId: `string`, opts?: `NavigableOptions` |
| `framer_get_vector_sets` | `Framer.getVectorSets` | — |
| `framer_create_collection` | `Framer.createCollection` | name: `string` |
| `framer_create_managed_collection` | `Framer.createManagedCollection` | name: `string` |
| `framer_publish` | `Framer.publish` | — |
| `framer_get_deployment` | `Framer.getDeployment` | deploymentId: `string` |
| `framer_get_deployment_issues` | `Framer.getDeploymentIssues` | deploymentId: `string` |
| `framer_get_unpublished_page_changes` | `Framer.getUnpublishedPageChanges` | — |
| `framer_list_deployments` | `Framer.listDeployments` | limit: `number`, cursor?: `string` |
| `framer_deploy` | `Framer.deploy` | deploymentId: `string`, domains?: `string[]` |
| `framer_get_deployments` | `Framer.getDeployments` | — |
| `framer_get_changed_paths` | `Framer.getChangedPaths` | — |
| `framer_get_change_contributors` | `Framer.getChangeContributors` | fromVersion?: `number`, toVersion?: `number` |
| `framer_ping` | `Framer.ping` | — |
| `framer_screenshot` | `Framer.screenshot` | nodeId: `string`, options?: `ScreenshotOptions` |
| `framer_export_svg` | `Framer.exportSVG` | nodeId: `string` |

## Branch (7)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_branch_get_changes` | `Branch.getChanges` | — |
| `framer_branch_switch` | `Branch.switch` | — |
| `framer_branch_join` | `Branch.join` | — |
| `framer_branch_leave` | `Branch.leave` | — |
| `framer_branch_rename` | `Branch.rename` | title: `string` |
| `framer_branch_delete` | `Branch.delete` | — |
| `framer_branch_merge` | `Branch.merge` | options?: `MergeBranchOptions` |

## VectorSet (1)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_vector_set_get_items` | `VectorSet.getItems` | — |

## VectorSetItem (1)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_vector_set_item_get_variables` | `VectorSetItem.getVariables` | — |

## Node (16)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_node_navigate_to` | `Node.navigateTo` | opts?: `Pick<NavigableOptions, "select" \| "zoomIntoView">` |
| `framer_node_clone` | `Node.clone` | — |
| `framer_node_get_children` | `Node.getChildren` | — |
| `framer_node_get_nodes_with_attribute` | `Node.getNodesWithAttribute` | attribute: `NodeAttributeKey` |
| `framer_node_get_nodes_with_attribute_set` | `Node.getNodesWithAttributeSet` | attribute: `NodeAttributeKey` |
| `framer_node_get_nodes_with_type` | `Node.getNodesWithType` | type: `"FrameNode"` |
| `framer_node_get_parent` | `Node.getParent` | — |
| `framer_node_get_plugin_data` | `Node.getPluginData` | key: `string` |
| `framer_node_get_plugin_data_keys` | `Node.getPluginDataKeys` | — |
| `framer_node_get_rect` | `Node.getRect` | — |
| `framer_node_remove` | `Node.remove` | — |
| `framer_node_select` | `Node.select` | — |
| `framer_node_set_attributes` | `Node.setAttributes` | attributes: `Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>` |
| `framer_node_set_plugin_data` | `Node.setPluginData` | key: `string`, value: `string \| null` |
| `framer_node_walk` | `Node.walk` | — |
| `framer_node_zoom_into_view` | `Node.zoomIntoView` | options?: `ZoomIntoViewOptions` |

## CodeFile (9)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_code_file_navigate_to` | `CodeFile.navigateTo` | — |
| `framer_code_file_remove` | `CodeFile.remove` | — |
| `framer_code_file_rename` | `CodeFile.rename` | newName: `string` |
| `framer_code_file_set_file_content` | `CodeFile.setFileContent` | code: `string` |
| `framer_code_file_get_versions` | `CodeFile.getVersions` | — |
| `framer_code_file_show_progress_on_instances` | `CodeFile.showProgressOnInstances` | attributes?: `ShowProgressOnInstancesAttributes` |
| `framer_code_file_remove_progress_from_instances` | `CodeFile.removeProgressFromInstances` | — |
| `framer_code_file_lint` | `CodeFile.lint` | _rules: `LintConfig` |
| `framer_code_file_typecheck` | `CodeFile.typecheck` | compilerOptions?: `ts.server.protocol.CompilerOptions` |

## Collection (13)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_collection_navigate_to` | `Collection.navigateTo` | opts?: `NavigableOptions` |
| `framer_collection_add_fields` | `Collection.addFields` | fields: `CreateField[]` |
| `framer_collection_add_items` | `Collection.addItems` | items: `CollectionItemInput[]` |
| `framer_collection_get_fields` | `Collection.getFields` | — |
| `framer_collection_get_items` | `Collection.getItems` | — |
| `framer_collection_get_plugin_data` | `Collection.getPluginData` | key: `string` |
| `framer_collection_get_plugin_data_keys` | `Collection.getPluginDataKeys` | — |
| `framer_collection_remove_fields` | `Collection.removeFields` | fieldIds: `string[]` |
| `framer_collection_remove_items` | `Collection.removeItems` | itemIds: `NodeId[]` |
| `framer_collection_set_as_active` | `Collection.setAsActive` | — |
| `framer_collection_set_field_order` | `Collection.setFieldOrder` | fieldIds: `string[]` |
| `framer_collection_set_item_order` | `Collection.setItemOrder` | ids: `NodeId[]` |
| `framer_collection_set_plugin_data` | `Collection.setPluginData` | key: `string`, value: `string \| null` |

## ManagedCollection (11)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_managed_collection_navigate_to` | `ManagedCollection.navigateTo` | opts?: `NavigableOptions` |
| `framer_managed_collection_add_items` | `ManagedCollection.addItems` | items: `ManagedCollectionItemInput[]` |
| `framer_managed_collection_get_fields` | `ManagedCollection.getFields` | — |
| `framer_managed_collection_get_item_ids` | `ManagedCollection.getItemIds` | — |
| `framer_managed_collection_get_plugin_data` | `ManagedCollection.getPluginData` | key: `string` |
| `framer_managed_collection_get_plugin_data_keys` | `ManagedCollection.getPluginDataKeys` | — |
| `framer_managed_collection_remove_items` | `ManagedCollection.removeItems` | itemIds: `string[]` |
| `framer_managed_collection_set_as_active` | `ManagedCollection.setAsActive` | — |
| `framer_managed_collection_set_fields` | `ManagedCollection.setFields` | fields: `ManagedCollectionFieldInput[]` |
| `framer_managed_collection_set_item_order` | `ManagedCollection.setItemOrder` | ids: `string[]` |
| `framer_managed_collection_set_plugin_data` | `ManagedCollection.setPluginData` | key: `string`, value: `string \| null` |

## CollectionItem (6)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_collection_item_navigate_to` | `CollectionItem.navigateTo` | opts?: `NavigableOptions` |
| `framer_collection_item_get_plugin_data` | `CollectionItem.getPluginData` | key: `string` |
| `framer_collection_item_get_plugin_data_keys` | `CollectionItem.getPluginDataKeys` | — |
| `framer_collection_item_remove` | `CollectionItem.remove` | — |
| `framer_collection_item_set_attributes` | `CollectionItem.setAttributes` | update: `EditableCollectionItemAttributes` |
| `framer_collection_item_set_plugin_data` | `CollectionItem.setPluginData` | key: `string`, value: `string \| null` |

## ComponentInstanceNode (1)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_component_instance_node_get_runtime_error` | `ComponentInstanceNode.getRuntimeError` | — |

## CodeFileVersion (1)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_code_file_version_get_content` | `CodeFileVersion.getContent` | — |

## Field (2)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_field_remove` | `Field.remove` | — |
| `framer_field_set_attributes` | `Field.setAttributes` | attributes: `UpdateFieldAttributes<typeof this>` |

## EnumField (2)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_enum_field_add_case` | `EnumField.addCase` | attributes: `CreateEnumCase` |
| `framer_enum_field_set_case_order` | `EnumField.setCaseOrder` | caseIds: `string[]` |

## WebPageNode (4)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_web_page_node_clone` | `WebPageNode.clone` | options?: `WebPageCloneOptions` |
| `framer_web_page_node_get_breakpoint_suggestions` | `WebPageNode.getBreakpointSuggestions` | — |
| `framer_web_page_node_add_breakpoint` | `WebPageNode.addBreakpoint` | basedOn: `NodeId`, breakpoint: `Breakpoint` |
| `framer_web_page_node_get_active_collection_item` | `WebPageNode.getActiveCollectionItem` | — |

## DesignPageNode (1)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_design_page_node_clone` | `DesignPageNode.clone` | options?: `DesignPageCloneOptions` |

## TextNode (4)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_text_node_get_text` | `TextNode.getText` | — |
| `framer_text_node_set_text` | `TextNode.setText` | text: `string` |
| `framer_text_node_set_html` | `TextNode.setHTML` | html: `string` |
| `framer_text_node_get_html` | `TextNode.getHTML` | — |

## ComponentNode (6)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_component_node_add_variant` | `ComponentNode.addVariant` | basedOn: `NodeId`, attributes?: `Partial<EditableFrameNodeAttributes>` |
| `framer_component_node_add_gesture_variant` | `ComponentNode.addGestureVariant` | nodeId: `NodeId`, type: `"hover" \| "pressed"`, attributes?: `Partial<EditableFrameNodeAttributes>` |
| `framer_component_node_get_variables` | `ComponentNode.getVariables` | — |
| `framer_component_node_add_variables` | `ComponentNode.addVariables` | variables: `CreateVariable[]` |
| `framer_component_node_remove_variables` | `ComponentNode.removeVariables` | variableIds: `string[]` |
| `framer_component_node_set_variable_order` | `ComponentNode.setVariableOrder` | variableIds: `string[]` |

## ColorStyle (5)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_color_style_get_plugin_data` | `ColorStyle.getPluginData` | key: `string` |
| `framer_color_style_get_plugin_data_keys` | `ColorStyle.getPluginDataKeys` | — |
| `framer_color_style_remove` | `ColorStyle.remove` | — |
| `framer_color_style_set_attributes` | `ColorStyle.setAttributes` | update: `Partial<ColorStyleAttributes>` |
| `framer_color_style_set_plugin_data` | `ColorStyle.setPluginData` | key: `string`, value: `string \| null` |

## TextStyle (5)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_text_style_get_plugin_data` | `TextStyle.getPluginData` | key: `string` |
| `framer_text_style_get_plugin_data_keys` | `TextStyle.getPluginDataKeys` | — |
| `framer_text_style_remove` | `TextStyle.remove` | — |
| `framer_text_style_set_attributes` | `TextStyle.setAttributes` | attributes: `TextStyleAttributes` |
| `framer_text_style_set_plugin_data` | `TextStyle.setPluginData` | key: `string`, value: `string \| null` |

## Variable (2)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_variable_set_attributes` | `Variable.setAttributes` | attributes: `UpdateVariableAttributes<typeof this>` |
| `framer_variable_remove` | `Variable.remove` | — |

## EnumCase (2)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_enum_case_remove` | `EnumCase.remove` | — |
| `framer_enum_case_set_attributes` | `EnumCase.setAttributes` | attributes: `UpdateEnumCase` |

## EnumVariable (2)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_enum_variable_add_case` | `EnumVariable.addCase` | attributes: `CreateEnumCase` |
| `framer_enum_variable_set_case_order` | `EnumVariable.setCaseOrder` | caseIds: `string[]` |

## agent (46)

| MCP tool | SDK method | SDK inputs |
| --- | --- | --- |
| `framer_agent_get_system_prompt` | `Framer.agent.getSystemPrompt` | — |
| `framer_agent_get_context` | `Framer.agent.getContext` | — |
| `framer_agent_get_active_branch` | `Framer.agent.getActiveBranch` | — |
| `framer_agent_get_branches` | `Framer.agent.getBranches` | — |
| `framer_agent_get_branch_changes` | `Framer.agent.getBranchChanges` | branchId: `string` |
| `framer_agent_switch_branch` | `Framer.agent.switchBranch` | branchId: `string` |
| `framer_agent_create_branch` | `Framer.agent.createBranch` | title?: `string` |
| `framer_agent_merge_branch` | `Framer.agent.mergeBranch` | targetBranchId?: `string` |
| `framer_agent_join_branch` | `Framer.agent.joinBranch` | branchId: `string` |
| `framer_agent_leave_branch` | `Framer.agent.leaveBranch` | branchId: `string` |
| `framer_agent_rename_branch` | `Framer.agent.renameBranch` | branchId: `string`, title: `string` |
| `framer_agent_delete_branch` | `Framer.agent.deleteBranch` | branchId: `string` |
| `framer_agent_read_project` | `Framer.agent.readProject` | queries: `Record<string, unknown>[]`, options?: `{ pagePath?: string; }` |
| `framer_agent_list_components` | `Framer.agent.listComponents` | — |
| `framer_agent_list_icon_sets` | `Framer.agent.listIconSets` | — |
| `framer_agent_read_component_controls` | `Framer.agent.readComponentControls` | input: `{ componentIds: readonly string[]; }` |
| `framer_agent_read_icon_set_controls` | `Framer.agent.readIconSetControls` | input: `{ iconSetIds: readonly string[]; }` |
| `framer_agent_read_icons` | `Framer.agent.readIcons` | input: `{ iconSetId: string; }` |
| `framer_agent_read_layout_template_controls` | `Framer.agent.readLayoutTemplateControls` | input: `{ layoutTemplateIds: readonly string[]; }` |
| `framer_agent_read_shader_controls` | `Framer.agent.readShaderControls` | input: `{ shaderNames: readonly string[]; }` |
| `framer_agent_apply_changes` | `Framer.agent.applyChanges` | dsl: `string`, options?: `{ pagePath?: string; }` |
| `framer_agent_replace_text` | `Framer.agent.replaceText` | input: `{ id: string; searchText: string; replaceText: string; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_publish` | `Framer.agent.publish` | input?: `Record<string, unknown>` |
| `framer_agent_query_images` | `Framer.agent.queryImages` | input: `Record<string, unknown>` |
| `framer_agent_query_analytics` | `Framer.agent.queryAnalytics` | input: `{ query: string; from: string; to?: string \| undefined; }` |
| `framer_agent_flatten_component_instance` | `Framer.agent.flattenComponentInstance` | input: `{ id: string; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_make_external_component_local` | `Framer.agent.makeExternalComponentLocal` | input: `{ id: string; replaceAll?: boolean; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_node` | `Framer.agent.getNode` | input: `{ id: string; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_nodes` | `Framer.agent.getNodes` | input: `{ ids: readonly string[]; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_nodes_of_types` | `Framer.agent.getNodesOfTypes` | input: `{ types: readonly string[]; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_descendants_of_types` | `Framer.agent.getDescendantsOfTypes` | input: `{ id: string; types: readonly string[]; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_rect` | `Framer.agent.getRect` | input: `{ id: string; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_descendant_references_of_types` | `Framer.agent.getDescendantReferencesOfTypes` | input: `{ id: string; types: readonly string[]; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_scope_node` | `Framer.agent.getScopeNode` | input: `{ id: string; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_ground_node` | `Framer.agent.getGroundNode` | input: `{ id: string; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_parent_node` | `Framer.agent.getParentNode` | input: `{ id: string; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_get_ancestors` | `Framer.agent.getAncestors` | input: `{ id: string; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_serialize` | `Framer.agent.serialize` | input: `{ id: string; depth?: number; attributeFilter?: readonly string[]; ancestorPath?: boolean; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_serialize_nodes` | `Framer.agent.serializeNodes` | input: `{ ids: readonly string[]; depth?: number; attributeFilter?: readonly string[]; ancestorPath?: boolean; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_paginate` | `Framer.agent.paginate` | input: `{ items: readonly unknown[]; keyName?: never; cursor?: never; } \| { keyName: string; cursor: number; items?: never; }`, options?: `{ pagePath?: string; }` |
| `framer_agent_subscribe_to_conversation_turn_progress` | `Framer.agent.subscribeToConversationTurnProgress` | conversationId: `string` |
| `framer_agent_run_automation` | `Framer.agent.runAutomation` | args: `RunAutomationArgs` |
| `framer_agent_start_conversation` | `Framer.agent.startConversation` | prompt: `string`, options?: `StartAgentConversationOptions` |
| `framer_agent_continue_conversation` | `Framer.agent.continueConversation` | prompt: `string`, options: `ContinueAgentConversationOptions` |
| `framer_agent_submit_clarification` | `Framer.agent.submitClarification` | options: `SubmitAgentClarificationOptions` |
| `framer_agent_run_supervisor_command` | `Framer.agent.runSupervisorCommand` | options: `RunSupervisorAgentCommandOptions` |

## Excluded methods and exact limits

These methods are intentionally not registered because the stateless public-client surface cannot target or represent them safely:

- **client.makeDraggable** — Requires a live DOM HTMLElement and drag callbacks; neither can be represented by stateless JSON MCP calls.
- **client.getImageData** (SDK wire alias: `getImageData`) — The SDK declares this as an internal PluginMessageAPI operation, not a callable method on the public Framer client; the client has no direct image-ID data method.
- **ImageAsset.cloneWithAttributes** — Requires a stable ImageAsset instance; the public client can only reacquire the current selected image, not an asset by ID.
- **ImageAsset.getData** — Requires a stable ImageAsset instance; the public client can only reacquire the current selected image, not an asset by ID.
- **ImageAsset.loadBitmap** — Requires a stable ImageAsset instance and browser-only Image/createImageBitmap APIs; the public client can only reacquire the current selected image, not an asset by ID.
- **ImageAsset.loadImage** — Requires a stable ImageAsset instance and browser-only Image/createImageBitmap APIs; the public client can only reacquire the current selected image, not an asset by ID.
- **ImageAsset.measure** — Requires a stable ImageAsset instance; the public client can only reacquire the current selected image, not an asset by ID.
- **ComponentInstancePlaceholder.setAttributes** (SDK wire alias: `updateComponentInstancePlaceholder`) — The SDK exposes this only on a ComponentInstancePlaceholder instance. Placeholders cannot be reacquired by ID via the public client in a later stateless request; direct ID wire methods are internal, not callable Framer client methods.
- **ComponentInstancePlaceholder.remove** (SDK wire alias: `removeComponentInstancePlaceholder`) — The SDK exposes this only on a ComponentInstancePlaceholder instance. Placeholders cannot be reacquired by ID via the public client in a later stateless request; direct ID wire methods are internal, not callable Framer client methods.
- **ComponentInstancePlaceholder.replaceWithComponentInstance** (SDK wire alias: `replaceComponentInstancePlaceholderWithComponentInstance`) — The SDK exposes this only on a ComponentInstancePlaceholder instance. Placeholders cannot be reacquired by ID via the public client in a later stateless request; direct ID wire methods are internal, not callable Framer client methods.

The listed direct write, delete, branch, publish, and deploy methods remain exposed as distinct tools; this task did not invoke any Framer mutation, write, delete, publish, deploy, or merge operation.
