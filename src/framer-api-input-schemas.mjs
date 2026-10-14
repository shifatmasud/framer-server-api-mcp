// Static input JSON Schemas generated from framer-api 5.1.0 declarations. Declared SDK object shapes are closed; explicit record/index-signature schemas remain open.
export const FRAMER_INPUT_JSON_SCHEMAS = {
  "ComponentInstancePlaceholderAttributes": {
    "type": "object",
    "properties": {
      "width": {
        "type": "number"
      },
      "height": {
        "type": "number"
      },
      "title": {
        "type": "string"
      },
      "codePreview": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      }
    },
    "required": [],
    "additionalProperties": false
  },
  "{\n    url: string;\n    layout?: boolean;\n    attributes?: Partial<Record<string, unknown>>;\n  }": {
    "type": "object",
    "properties": {
      "url": {
        "type": "string"
      },
      "layout": {
        "type": "boolean"
      },
      "attributes": {
        "type": "object",
        "properties": {},
        "additionalProperties": {},
        "required": []
      }
    },
    "required": [
      "url"
    ],
    "additionalProperties": false
  },
  "NamedImageAssetInput | File": {
    "anyOf": [
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "preferredImageRendering": {
            "anyOf": [
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "pixelated"
              }
            ]
          },
          "altText": {
            "type": "string"
          },
          "resolution": {
            "anyOf": [
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "lossless"
              },
              {
                "type": "string",
                "const": "small"
              },
              {
                "type": "string",
                "const": "medium"
              },
              {
                "type": "string",
                "const": "large"
              },
              {
                "type": "string",
                "const": "full"
              }
            ]
          },
          "image": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "anyOf": [
                  {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "integer",
                          "minimum": 0,
                          "maximum": 255
                        }
                      },
                      {
                        "type": "object",
                        "properties": {
                          "encoding": {
                            "type": "string",
                            "const": "base64"
                          },
                          "data": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "encoding",
                          "data"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  {
                    "type": "string",
                    "format": "uri"
                  }
                ]
              },
              {
                "type": "object",
                "properties": {
                  "bytes": {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "integer",
                          "minimum": 0,
                          "maximum": 255
                        }
                      },
                      {
                        "type": "object",
                        "properties": {
                          "encoding": {
                            "type": "string",
                            "const": "base64"
                          },
                          "data": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "encoding",
                          "data"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "mimeType": {
                    "type": "string"
                  }
                },
                "required": [
                  "bytes",
                  "mimeType"
                ],
                "additionalProperties": false
              }
            ]
          }
        },
        "required": [
          "image"
        ],
        "additionalProperties": false
      },
      {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 255
                }
              },
              {
                "type": "object",
                "properties": {
                  "encoding": {
                    "type": "string",
                    "const": "base64"
                  },
                  "data": {
                    "type": "string"
                  }
                },
                "required": [
                  "encoding",
                  "data"
                ],
                "additionalProperties": false
              }
            ]
          },
          {
            "type": "string",
            "format": "uri"
          }
        ]
      }
    ]
  },
  "readonly NamedImageTransfer[]": {
    "type": "array",
    "items": {
      "allOf": [
        {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string",
                  "const": "url"
                },
                "url": {
                  "type": "string"
                }
              },
              "required": [
                "type",
                "url"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "bytes": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "encoding": {
                          "type": "string",
                          "const": "base64"
                        },
                        "data": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "encoding",
                        "data"
                      ],
                      "additionalProperties": false
                    }
                  ]
                },
                "mimeType": {
                  "type": "string"
                },
                "type": {
                  "type": "string",
                  "const": "bytes"
                }
              },
              "required": [
                "bytes",
                "mimeType",
                "type"
              ],
              "additionalProperties": false
            }
          ]
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "preferredImageRendering": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "auto"
                },
                {
                  "type": "string",
                  "const": "pixelated"
                }
              ]
            },
            "altText": {
              "type": "string"
            },
            "resolution": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "auto"
                },
                {
                  "type": "string",
                  "const": "lossless"
                },
                {
                  "type": "string",
                  "const": "small"
                },
                {
                  "type": "string",
                  "const": "medium"
                },
                {
                  "type": "string",
                  "const": "large"
                },
                {
                  "type": "string",
                  "const": "full"
                }
              ]
            }
          },
          "additionalProperties": false
        }
      ]
    }
  },
  "SVGData": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "svg": {
        "type": "string"
      }
    },
    "required": [
      "svg"
    ],
    "additionalProperties": false
  },
  "string": {
    "type": "string"
  },
  "AddTextOptions": {
    "type": "object",
    "properties": {
      "tag": {
        "anyOf": [
          {
            "type": "string",
            "const": "h1"
          },
          {
            "type": "string",
            "const": "h2"
          },
          {
            "type": "string",
            "const": "h3"
          },
          {
            "type": "string",
            "const": "h4"
          },
          {
            "type": "string",
            "const": "h5"
          },
          {
            "type": "string",
            "const": "h6"
          },
          {
            "type": "string",
            "const": "p"
          }
        ]
      }
    },
    "required": [
      "tag"
    ],
    "additionalProperties": false
  },
  "RedirectInput[]": {
    "type": "array",
    "items": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "from": {
              "type": "string"
            },
            "expandToAllLocales": {
              "type": "boolean"
            },
            "to": {
              "type": "string"
            },
            "id": {
              "not": {}
            }
          },
          "required": [
            "from",
            "expandToAllLocales",
            "to"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            }
          },
          "required": [
            "id"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "string[]": {
    "type": "array",
    "items": {
      "type": "string"
    }
  },
  "NodeId": {
    "type": "string"
  },
  "ClosePluginOptions": {
    "type": "object",
    "properties": {
      "variant": {
        "anyOf": [
          {
            "type": "string",
            "const": "info"
          },
          {
            "type": "string",
            "const": "success"
          },
          {
            "type": "string",
            "const": "error"
          },
          {
            "type": "string",
            "const": "warning"
          }
        ]
      },
      "silent": {
        "type": "boolean"
      }
    },
    "additionalProperties": false
  },
  "ColorStyleAttributes": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "light": {
            "type": "string"
          }
        },
        "required": [
          "light"
        ],
        "additionalProperties": false
      },
      {
        "type": "object",
        "properties": {
          "dark": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [],
        "additionalProperties": false
      },
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "path": {
                "not": {}
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "name": {
                "not": {}
              },
              "path": {
                "type": "string"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "Partial<EditableFrameNodeAttributes>": {
    "type": "object",
    "properties": {
      "name": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "visible": {
        "type": "boolean"
      },
      "locked": {
        "type": "boolean"
      },
      "opacity": {
        "type": "number"
      },
      "position": {
        "anyOf": [
          {
            "type": "string",
            "const": "relative"
          },
          {
            "type": "string",
            "const": "absolute"
          },
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "sticky"
          }
        ]
      },
      "top": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "right": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "bottom": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "left": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "centerX": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "centerY": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "width": {
        "anyOf": [
          {
            "anyOf": [
              {},
              {
                "type": "string",
                "const": "fit-content"
              },
              {
                "type": "string",
                "const": "fit-image"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "height": {
        "anyOf": [
          {
            "anyOf": [
              {},
              {
                "type": "string",
                "const": "fit-content"
              },
              {},
              {
                "type": "string",
                "const": "fit-image"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "maxWidth": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "minWidth": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "maxHeight": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "minHeight": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "aspectRatio": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "zIndex": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "overflow": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "overflowX": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "overflowY": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "backgroundColor": {
        "anyOf": [
          {},
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "backgroundImage": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "backgroundGradient": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "rotation": {
        "type": "number"
      },
      "link": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkOpenInNewTab": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkSmoothScroll": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkClickTrackingId": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkRelValues": {
        "anyOf": [
          {
            "type": "array",
            "items": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "nofollow"
                },
                {
                  "type": "string",
                  "const": "noreferrer"
                },
                {
                  "type": "string",
                  "const": "me"
                },
                {
                  "type": "string",
                  "const": "ugc"
                },
                {
                  "type": "string",
                  "const": "sponsored"
                }
              ]
            }
          },
          {
            "type": "null"
          }
        ]
      },
      "linkPreserveParams": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "borderRadius": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "border": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "stackDirection": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "horizontal"
              },
              {
                "type": "string",
                "const": "vertical"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackDistribution": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              },
              {
                "type": "string",
                "const": "space-between"
              },
              {
                "type": "string",
                "const": "space-around"
              },
              {
                "type": "string",
                "const": "space-evenly"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackWrapEnabled": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnCount": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "string",
            "const": "auto-fill"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowCount": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnWidthType": {
        "anyOf": [
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "minmax"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnWidth": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnMinWidth": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowHeightType": {
        "anyOf": [
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "auto"
          },
          {
            "type": "string",
            "const": "fit"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowHeight": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "layout": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "stack"
              },
              {
                "type": "string",
                "const": "grid"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gap": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "padding": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "gridItemFillCellWidth": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemFillCellHeight": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemHorizontalAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemVerticalAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemColumnSpan": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "string",
                "const": "all"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemRowSpan": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "imageRendering": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "pixelated"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      }
    },
    "required": [],
    "additionalProperties": false
  },
  "Partial<EditableTextNodeAttributes>": {
    "type": "object",
    "properties": {
      "name": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "visible": {
        "type": "boolean"
      },
      "locked": {
        "type": "boolean"
      },
      "opacity": {
        "type": "number"
      },
      "position": {
        "anyOf": [
          {
            "type": "string",
            "const": "relative"
          },
          {
            "type": "string",
            "const": "absolute"
          },
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "sticky"
          }
        ]
      },
      "top": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "right": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "bottom": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "left": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "centerX": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "centerY": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "width": {
        "anyOf": [
          {
            "anyOf": [
              {},
              {
                "type": "string",
                "const": "fit-content"
              },
              {
                "type": "string",
                "const": "fit-image"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "height": {
        "anyOf": [
          {
            "anyOf": [
              {},
              {
                "type": "string",
                "const": "fit-content"
              },
              {},
              {
                "type": "string",
                "const": "fit-image"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "maxWidth": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "minWidth": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "maxHeight": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "minHeight": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "rotation": {
        "type": "number"
      },
      "zIndex": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "overflow": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "overflowX": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "overflowY": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "textTruncation": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "font": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "link": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkOpenInNewTab": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkSmoothScroll": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkClickTrackingId": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkRelValues": {
        "anyOf": [
          {
            "type": "array",
            "items": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "nofollow"
                },
                {
                  "type": "string",
                  "const": "noreferrer"
                },
                {
                  "type": "string",
                  "const": "me"
                },
                {
                  "type": "string",
                  "const": "ugc"
                },
                {
                  "type": "string",
                  "const": "sponsored"
                }
              ]
            }
          },
          {
            "type": "null"
          }
        ]
      },
      "linkPreserveParams": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "inlineTextStyle": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "gridItemFillCellWidth": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemFillCellHeight": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemHorizontalAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemVerticalAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemColumnSpan": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "string",
                "const": "all"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemRowSpan": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      }
    },
    "required": [],
    "additionalProperties": false
  },
  "TextStyleAttributes": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "minWidth": {
            "type": "number"
          },
          "fontSize": {},
          "letterSpacing": {},
          "lineHeight": {},
          "paragraphSpacing": {
            "type": "number"
          },
          "classKey": {},
          "name": {
            "type": "string"
          },
          "path": {
            "type": "string"
          },
          "tag": {
            "anyOf": [
              {
                "type": "string",
                "const": "h1"
              },
              {
                "type": "string",
                "const": "h2"
              },
              {
                "type": "string",
                "const": "h3"
              },
              {
                "type": "string",
                "const": "h4"
              },
              {
                "type": "string",
                "const": "h5"
              },
              {
                "type": "string",
                "const": "h6"
              },
              {
                "type": "string",
                "const": "p"
              }
            ]
          },
          "transform": {
            "anyOf": [
              {
                "type": "string",
                "const": "none"
              },
              {
                "type": "string",
                "const": "inherit"
              },
              {
                "type": "string",
                "const": "capitalize"
              },
              {
                "type": "string",
                "const": "uppercase"
              },
              {
                "type": "string",
                "const": "lowercase"
              }
            ]
          },
          "alignment": {
            "anyOf": [
              {
                "type": "string",
                "const": "left"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "right"
              },
              {
                "type": "string",
                "const": "justify"
              }
            ]
          },
          "decoration": {
            "anyOf": [
              {
                "type": "string",
                "const": "none"
              },
              {
                "type": "string",
                "const": "underline"
              },
              {
                "type": "string",
                "const": "line-through"
              }
            ]
          },
          "decorationColor": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "light": {
                    "type": "string"
                  },
                  "dark": {
                    "anyOf": [
                      {
                        "type": "string"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "classKey": {},
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "path": {
                    "type": "string"
                  }
                },
                "required": [
                  "light",
                  "dark",
                  "classKey",
                  "id",
                  "name",
                  "path"
                ],
                "additionalProperties": false
              },
              {
                "type": "string"
              }
            ]
          },
          "decorationThickness": {
            "anyOf": [
              {
                "type": "string",
                "const": "auto"
              },
              {}
            ]
          },
          "decorationStyle": {
            "anyOf": [
              {
                "type": "string",
                "const": "solid"
              },
              {
                "type": "string",
                "const": "double"
              },
              {
                "type": "string",
                "const": "dotted"
              },
              {
                "type": "string",
                "const": "dashed"
              },
              {
                "type": "string",
                "const": "wavy"
              }
            ]
          },
          "decorationSkipInk": {
            "anyOf": [
              {
                "type": "string",
                "const": "none"
              },
              {
                "type": "string",
                "const": "all"
              },
              {
                "type": "string",
                "const": "auto"
              }
            ]
          },
          "decorationOffset": {
            "anyOf": [
              {
                "type": "string",
                "const": "auto"
              },
              {}
            ]
          },
          "balance": {
            "type": "boolean"
          },
          "color": {
            "anyOf": [
              {},
              {
                "type": "string"
              }
            ]
          },
          "font": {},
          "boldFont": {
            "anyOf": [
              {},
              {
                "type": "null"
              }
            ]
          },
          "italicFont": {
            "anyOf": [
              {},
              {
                "type": "null"
              }
            ]
          },
          "boldItalicFont": {
            "anyOf": [
              {},
              {
                "type": "null"
              }
            ]
          },
          "breakpoints": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "minWidth": {
                  "type": "number"
                },
                "fontSize": {},
                "letterSpacing": {},
                "lineHeight": {},
                "paragraphSpacing": {
                  "type": "number"
                }
              },
              "required": [
                "minWidth"
              ],
              "additionalProperties": false
            }
          }
        },
        "required": [],
        "additionalProperties": false
      },
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "path": {
                "not": {}
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "name": {
                "not": {}
              },
              "path": {
                "type": "string"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "CreateBranchOptions": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string"
      },
      "baseBranchId": {
        "type": "string"
      }
    },
    "additionalProperties": false
  },
  "BranchId": {
    "type": "string"
  },
  "readonly BranchId[]": {
    "type": "array",
    "items": {
      "type": "string"
    }
  },
  "MergeBranchOptions": {
    "type": "object",
    "properties": {
      "targetBranchId": {
        "type": "string"
      }
    },
    "additionalProperties": false
  },
  "FontAttributes": {
    "type": "object",
    "properties": {
      "weight": {},
      "style": {}
    },
    "required": [],
    "additionalProperties": false
  },
  "GetLocalizationGroupsFilter": {
    "type": "object",
    "properties": {
      "groupIds": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "type": {
        "anyOf": [
          {
            "type": "string",
            "const": "collection"
          },
          {
            "type": "string",
            "const": "collection-item"
          },
          {
            "type": "string",
            "const": "component"
          },
          {
            "type": "string",
            "const": "page"
          },
          {
            "type": "string",
            "const": "settings"
          },
          {
            "type": "string",
            "const": "template"
          }
        ]
      }
    },
    "additionalProperties": false
  },
  "NodeId | null": {
    "anyOf": [
      {
        "type": "string"
      },
      {
        "type": "null"
      }
    ]
  },
  "KnownNodeClass": {
    "type": "string",
    "enum": [
      "FrameNode",
      "TextNode",
      "SVGNode",
      "ComponentInstanceNode",
      "WebPageNode",
      "DesignPageNode",
      "ComponentNode",
      "ShapeContainerNode",
      "PathNode",
      "ShapeGroupNode",
      "BooleanShapeNode"
    ]
  },
  "string | null": {
    "anyOf": [
      {
        "type": "string"
      },
      {
        "type": "null"
      }
    ]
  },
  "string | false": {
    "anyOf": [
      {
        "type": "string"
      },
      {
        "type": "boolean",
        "const": false
      }
    ]
  },
  "LintConfig": {
    "type": "object",
    "properties": {},
    "additionalProperties": {
      "anyOf": [
        {
          "type": "string",
          "const": "error"
        },
        {
          "type": "string",
          "const": "warning"
        }
      ]
    }
  },
  "NotifyOptionsData": {
    "type": "object",
    "properties": {
      "variant": {
        "anyOf": [
          {
            "type": "string",
            "const": "info"
          },
          {
            "type": "string",
            "const": "success"
          },
          {
            "type": "string",
            "const": "error"
          },
          {
            "type": "string",
            "const": "warning"
          }
        ]
      },
      "durationMs": {
        "type": "number"
      },
      "buttonText": {
        "type": "string"
      },
      "notificationId": {
        "type": "string"
      }
    },
    "required": [
      "notificationId"
    ],
    "additionalProperties": false
  },
  "NodeId[]": {
    "type": "array",
    "items": {
      "type": "string"
    }
  },
  "Partial<AnyEditableAttributes>": {
    "type": "object",
    "properties": {
      "name": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "visible": {
        "type": "boolean"
      },
      "locked": {
        "type": "boolean"
      },
      "opacity": {
        "type": "number"
      },
      "position": {
        "anyOf": [
          {
            "type": "string",
            "const": "relative"
          },
          {
            "type": "string",
            "const": "absolute"
          },
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "sticky"
          }
        ]
      },
      "top": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "right": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "bottom": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "left": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "centerX": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "centerY": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "width": {
        "anyOf": [
          {
            "anyOf": [
              {},
              {
                "type": "string",
                "const": "fit-content"
              },
              {
                "type": "string",
                "const": "fit-image"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "height": {
        "anyOf": [
          {
            "anyOf": [
              {},
              {
                "type": "string",
                "const": "fit-content"
              },
              {},
              {
                "type": "string",
                "const": "fit-image"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "maxWidth": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "minWidth": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "maxHeight": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "minHeight": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "aspectRatio": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "zIndex": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "overflow": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "overflowX": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "overflowY": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "backgroundColor": {
        "anyOf": [
          {},
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "backgroundImage": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "backgroundGradient": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "rotation": {
        "type": "number"
      },
      "link": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkOpenInNewTab": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkSmoothScroll": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkClickTrackingId": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkRelValues": {
        "anyOf": [
          {
            "type": "array",
            "items": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "nofollow"
                },
                {
                  "type": "string",
                  "const": "noreferrer"
                },
                {
                  "type": "string",
                  "const": "me"
                },
                {
                  "type": "string",
                  "const": "ugc"
                },
                {
                  "type": "string",
                  "const": "sponsored"
                }
              ]
            }
          },
          {
            "type": "null"
          }
        ]
      },
      "linkPreserveParams": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "borderRadius": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "border": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "stackDirection": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "horizontal"
              },
              {
                "type": "string",
                "const": "vertical"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackDistribution": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              },
              {
                "type": "string",
                "const": "space-between"
              },
              {
                "type": "string",
                "const": "space-around"
              },
              {
                "type": "string",
                "const": "space-evenly"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackWrapEnabled": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnCount": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "string",
            "const": "auto-fill"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowCount": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnWidthType": {
        "anyOf": [
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "minmax"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnWidth": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnMinWidth": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowHeightType": {
        "anyOf": [
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "auto"
          },
          {
            "type": "string",
            "const": "fit"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowHeight": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "layout": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "stack"
              },
              {
                "type": "string",
                "const": "grid"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gap": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "padding": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "gridItemFillCellWidth": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemFillCellHeight": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemHorizontalAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemVerticalAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemColumnSpan": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "string",
                "const": "all"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemRowSpan": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "imageRendering": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "pixelated"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "textTruncation": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "font": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "inlineTextStyle": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "svg": {
        "type": "string"
      },
      "controls": {
        "type": "object",
        "properties": {},
        "additionalProperties": {}
      },
      "draft": {
        "type": "boolean"
      }
    },
    "required": [],
    "additionalProperties": false
  },
  "SetCustomCodeOptions": {
    "type": "object",
    "properties": {
      "html": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "location": {
        "anyOf": [
          {
            "type": "string",
            "const": "headStart"
          },
          {
            "type": "string",
            "const": "headEnd"
          },
          {
            "type": "string",
            "const": "bodyStart"
          },
          {
            "type": "string",
            "const": "bodyEnd"
          }
        ]
      }
    },
    "required": [
      "html",
      "location"
    ],
    "additionalProperties": false
  },
  "LocalizationData": {
    "type": "object",
    "properties": {
      "valuesBySource": {
        "type": "object",
        "properties": {},
        "additionalProperties": {
          "type": "object",
          "properties": {},
          "additionalProperties": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "const": "set"
                  },
                  "value": {
                    "type": "string"
                  },
                  "needsReview": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "action",
                  "value"
                ],
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "const": "clear"
                  }
                },
                "required": [
                  "action"
                ],
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "const": "ignore"
                  },
                  "needsReview": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "action"
                ],
                "additionalProperties": false
              }
            ]
          }
        }
      },
      "statusByLocaleByGroup": {
        "type": "object",
        "properties": {},
        "additionalProperties": {
          "type": "object",
          "properties": {},
          "additionalProperties": {
            "anyOf": [
              {
                "type": "string",
                "const": "excluded"
              },
              {
                "type": "string",
                "const": "ready"
              }
            ]
          }
        }
      }
    },
    "additionalProperties": false
  },
  "CreateLocaleInput": {
    "type": "object",
    "properties": {
      "language": {
        "type": "string"
      },
      "region": {
        "type": "string"
      },
      "fallbackLocaleId": {
        "type": "string"
      },
      "slug": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "draft": {
        "type": "boolean"
      }
    },
    "required": [
      "language"
    ],
    "additionalProperties": false
  },
  "MenuItem[]": {
    "type": "array",
    "items": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {
              "not": {}
            },
            "label": {
              "type": "string"
            },
            "secondaryLabel": {
              "type": "string"
            },
            "enabled": {
              "type": "boolean"
            },
            "visible": {
              "type": "boolean"
            },
            "checked": {
              "type": "boolean"
            },
            "submenu": {
              "type": "array",
              "items": {}
            },
            "onAction": {}
          },
          "required": [
            "label"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "string",
              "const": "separator"
            }
          },
          "required": [
            "type"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "ContextMenuConfig": {
    "type": "object",
    "properties": {
      "location": {
        "type": "object",
        "properties": {
          "x": {
            "type": "number"
          },
          "y": {
            "type": "number"
          }
        },
        "required": [
          "x",
          "y"
        ],
        "additionalProperties": false
      },
      "placement": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "top"
              },
              {
                "type": "string",
                "const": "bottom"
              }
            ]
          },
          {
            "anyOf": [
              {
                "type": "string",
                "const": "left"
              },
              {
                "type": "string",
                "const": "right"
              }
            ]
          },
          {}
        ]
      },
      "width": {
        "type": "number"
      }
    },
    "required": [
      "location"
    ],
    "additionalProperties": false
  },
  "number | undefined": {
    "type": "number"
  },
  "string | Iterable<string>": {
    "anyOf": [
      {
        "type": "string"
      },
      {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    ]
  },
  "ts.server.protocol.CompilerOptions": {
    "type": "object",
    "properties": {},
    "additionalProperties": true
  },
  "UIOptions": {
    "type": "object",
    "properties": {
      "width": {
        "type": "number"
      },
      "height": {
        "type": "number"
      },
      "position": {
        "anyOf": [
          {
            "type": "string",
            "const": "center"
          },
          {
            "type": "string",
            "const": "top left"
          },
          {
            "type": "string",
            "const": "bottom left"
          },
          {
            "type": "string",
            "const": "top right"
          },
          {
            "type": "string",
            "const": "bottom right"
          }
        ]
      },
      "resizable": {
        "anyOf": [
          {
            "type": "boolean",
            "const": true
          },
          {
            "type": "boolean",
            "const": false
          },
          {
            "type": "string",
            "const": "width"
          },
          {
            "type": "string",
            "const": "height"
          }
        ]
      },
      "minWidth": {
        "type": "number"
      },
      "minHeight": {
        "type": "number"
      },
      "maxWidth": {
        "type": "number"
      },
      "maxHeight": {
        "type": "number"
      }
    },
    "additionalProperties": false
  },
  "{\n    editViaPlugin?: boolean;\n  }": {
    "type": "object",
    "properties": {
      "editViaPlugin": {
        "type": "boolean"
      }
    },
    "additionalProperties": false
  },
  "NamedFileAssetInput | File": {
    "anyOf": [
      {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "file": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "anyOf": [
                  {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "integer",
                          "minimum": 0,
                          "maximum": 255
                        }
                      },
                      {
                        "type": "object",
                        "properties": {
                          "encoding": {
                            "type": "string",
                            "const": "base64"
                          },
                          "data": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "encoding",
                          "data"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  {
                    "type": "string",
                    "format": "uri"
                  }
                ]
              },
              {
                "type": "object",
                "properties": {
                  "bytes": {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "integer",
                          "minimum": 0,
                          "maximum": 255
                        }
                      },
                      {
                        "type": "object",
                        "properties": {
                          "encoding": {
                            "type": "string",
                            "const": "base64"
                          },
                          "data": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "encoding",
                          "data"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  },
                  "mimeType": {
                    "type": "string"
                  }
                },
                "required": [
                  "bytes",
                  "mimeType"
                ],
                "additionalProperties": false
              }
            ]
          }
        },
        "required": [
          "file"
        ],
        "additionalProperties": false
      },
      {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "array",
                "items": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 255
                }
              },
              {
                "type": "object",
                "properties": {
                  "encoding": {
                    "type": "string",
                    "const": "base64"
                  },
                  "data": {
                    "type": "string"
                  }
                },
                "required": [
                  "encoding",
                  "data"
                ],
                "additionalProperties": false
              }
            ]
          },
          {
            "type": "string",
            "format": "uri"
          }
        ]
      }
    ]
  },
  "readonly NamedFileAssetInput[]": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "file": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "anyOf": [
                {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "encoding": {
                          "type": "string",
                          "const": "base64"
                        },
                        "data": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "encoding",
                        "data"
                      ],
                      "additionalProperties": false
                    }
                  ]
                },
                {
                  "type": "string",
                  "format": "uri"
                }
              ]
            },
            {
              "type": "object",
              "properties": {
                "bytes": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "integer",
                        "minimum": 0,
                        "maximum": 255
                      }
                    },
                    {
                      "type": "object",
                      "properties": {
                        "encoding": {
                          "type": "string",
                          "const": "base64"
                        },
                        "data": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "encoding",
                        "data"
                      ],
                      "additionalProperties": false
                    }
                  ]
                },
                "mimeType": {
                  "type": "string"
                }
              },
              "required": [
                "bytes",
                "mimeType"
              ],
              "additionalProperties": false
            }
          ]
        }
      },
      "required": [
        "file"
      ],
      "additionalProperties": false
    }
  },
  "NodeId | Iterable<NodeId>": {
    "anyOf": [
      {
        "type": "string"
      },
      {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    ]
  },
  "ZoomIntoViewOptions": {
    "type": "object",
    "properties": {
      "maxZoom": {
        "type": "number"
      },
      "skipIfVisible": {
        "type": "boolean"
      }
    },
    "additionalProperties": false
  },
  "NavigableOptions": {
    "type": "object",
    "properties": {
      "select": {
        "type": "boolean"
      },
      "zoomIntoView": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "maxZoom": {
                "type": "number"
              },
              "skipIfVisible": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        ]
      },
      "scrollTo": {
        "type": "object",
        "properties": {
          "collectionFieldId": {
            "type": "string"
          },
          "codeFilePosition": {
            "type": "object",
            "properties": {
              "startLine": {
                "type": "number"
              },
              "startColumn": {
                "type": "number"
              },
              "endLine": {
                "type": "number"
              },
              "endColumn": {
                "type": "number"
              }
            },
            "required": [
              "startLine"
            ],
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    },
    "additionalProperties": false
  },
  "Pick<NavigableOptions, \"select\" | \"zoomIntoView\">": {
    "type": "object",
    "properties": {
      "select": {
        "type": "boolean"
      },
      "zoomIntoView": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "maxZoom": {
                "type": "number"
              },
              "skipIfVisible": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    },
    "additionalProperties": false,
    "required": []
  },
  "ShowProgressOnInstancesAttributes": {
    "type": "object",
    "properties": {
      "title": {
        "type": "string"
      },
      "codePreview": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      }
    },
    "required": [],
    "additionalProperties": false
  },
  "UpdateFieldAttributes<typeof this>": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "required": {
        "type": "boolean"
      },
      "contentType": {
        "type": "string",
        "enum": [
          "auto",
          "markdown",
          "html"
        ]
      },
      "displayTime": {
        "type": "boolean"
      },
      "allowedFileTypes": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "fields": {
        "type": "array",
        "items": {
          "type": "object",
          "additionalProperties": true
        }
      }
    },
    "additionalProperties": false
  },
  "CreateEnumCase": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      }
    },
    "required": [
      "name"
    ],
    "additionalProperties": false
  },
  "CreateField[]": {
    "type": "array",
    "items": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "required": {
              "type": "boolean"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "contentType": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "auto"
                },
                {
                  "type": "string",
                  "const": "markdown"
                },
                {
                  "type": "string",
                  "const": "html"
                }
              ]
            },
            "name": {
              "type": "string"
            },
            "required": {
              "type": "boolean"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "required": {
              "type": "boolean"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "required": {
              "type": "boolean"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "displayTime": {
              "type": "boolean"
            },
            "name": {
              "type": "string"
            },
            "required": {
              "type": "boolean"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "allowedFileTypes": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "required": {
              "type": "boolean"
            }
          },
          "required": [
            "type",
            "name",
            "allowedFileTypes"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "cases": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "type",
            "name",
            "cases"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "collectionId": {
              "type": "string"
            },
            "required": {
              "type": "boolean"
            }
          },
          "required": [
            "type",
            "name",
            "collectionId"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "collectionId": {
              "type": "string"
            },
            "required": {
              "type": "boolean"
            }
          },
          "required": [
            "type",
            "name",
            "collectionId"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "required": {
              "type": "boolean"
            },
            "fields": {
              "type": "array",
              "items": {}
            }
          },
          "required": [
            "type",
            "name",
            "fields"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "CollectionItemInput[]": {
    "type": "array",
    "items": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "draft": {
              "type": "boolean"
            },
            "id": {},
            "slug": {
              "type": "string"
            },
            "slugByLocale": {
              "type": "object",
              "properties": {},
              "additionalProperties": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "action": {
                        "type": "string",
                        "const": "set"
                      },
                      "value": {
                        "type": "string"
                      },
                      "needsReview": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "action",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "action": {
                        "type": "string",
                        "const": "clear"
                      }
                    },
                    "required": [
                      "action"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "action": {
                        "type": "string",
                        "const": "ignore"
                      },
                      "needsReview": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "action"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            "fieldData": {
              "type": "object",
              "properties": {},
              "additionalProperties": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "object",
                            "properties": {
                              "light": {
                                "type": "string"
                              },
                              "dark": {
                                "anyOf": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              },
                              "classKey": {},
                              "id": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "path": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "light",
                              "dark",
                              "classKey",
                              "id",
                              "name",
                              "path"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "number"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "valueByLocale": {
                        "type": "object",
                        "properties": {},
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "string"
                      },
                      "contentType": {
                        "anyOf": [
                          {
                            "type": "string",
                            "const": "auto"
                          },
                          {
                            "type": "string",
                            "const": "markdown"
                          },
                          {
                            "type": "string",
                            "const": "html"
                          }
                        ]
                      },
                      "valueByLocale": {
                        "type": "object",
                        "properties": {},
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "string"
                      },
                      "valueByLocale": {
                        "type": "object",
                        "properties": {},
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "resolution": {
                        "anyOf": [
                          {
                            "type": "string",
                            "const": "auto"
                          },
                          {
                            "type": "string",
                            "const": "lossless"
                          },
                          {
                            "type": "string",
                            "const": "small"
                          },
                          {
                            "type": "string",
                            "const": "medium"
                          },
                          {
                            "type": "string",
                            "const": "large"
                          },
                          {
                            "type": "string",
                            "const": "full"
                          }
                        ]
                      },
                      "alt": {
                        "type": "string"
                      },
                      "altByLocale": {
                        "type": "object",
                        "properties": {},
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "fieldData": {
                                  "type": "object",
                                  "properties": {},
                                  "additionalProperties": {}
                                }
                              },
                              "required": [
                                "fieldData"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "fieldData": {
                                  "type": "object",
                                  "properties": {},
                                  "additionalProperties": {}
                                },
                                "id": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "id"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            "statusByLocale": {
              "type": "object",
              "properties": {},
              "additionalProperties": {
                "anyOf": [
                  {
                    "type": "string",
                    "const": "excluded"
                  },
                  {
                    "type": "string",
                    "const": "ready"
                  }
                ]
              }
            }
          },
          "required": [
            "slug"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "draft": {
              "type": "boolean"
            },
            "slug": {
              "type": "string"
            },
            "slugByLocale": {
              "type": "object",
              "properties": {},
              "additionalProperties": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "action": {
                        "type": "string",
                        "const": "set"
                      },
                      "value": {
                        "type": "string"
                      },
                      "needsReview": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "action",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "action": {
                        "type": "string",
                        "const": "clear"
                      }
                    },
                    "required": [
                      "action"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "action": {
                        "type": "string",
                        "const": "ignore"
                      },
                      "needsReview": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "action"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            "fieldData": {
              "type": "object",
              "properties": {},
              "additionalProperties": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "object",
                            "properties": {
                              "light": {
                                "type": "string"
                              },
                              "dark": {
                                "anyOf": [
                                  {
                                    "type": "string"
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              },
                              "classKey": {},
                              "id": {
                                "type": "string"
                              },
                              "name": {
                                "type": "string"
                              },
                              "path": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "light",
                              "dark",
                              "classKey",
                              "id",
                              "name",
                              "path"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "number"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "valueByLocale": {
                        "type": "object",
                        "properties": {},
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "number"
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "string"
                      },
                      "contentType": {
                        "anyOf": [
                          {
                            "type": "string",
                            "const": "auto"
                          },
                          {
                            "type": "string",
                            "const": "markdown"
                          },
                          {
                            "type": "string",
                            "const": "html"
                          }
                        ]
                      },
                      "valueByLocale": {
                        "type": "object",
                        "properties": {},
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "string"
                      },
                      "valueByLocale": {
                        "type": "object",
                        "properties": {},
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "resolution": {
                        "anyOf": [
                          {
                            "type": "string",
                            "const": "auto"
                          },
                          {
                            "type": "string",
                            "const": "lossless"
                          },
                          {
                            "type": "string",
                            "const": "small"
                          },
                          {
                            "type": "string",
                            "const": "medium"
                          },
                          {
                            "type": "string",
                            "const": "large"
                          },
                          {
                            "type": "string",
                            "const": "full"
                          }
                        ]
                      },
                      "alt": {
                        "type": "string"
                      },
                      "altByLocale": {
                        "type": "object",
                        "properties": {},
                        "additionalProperties": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "string"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "anyOf": [
                          {
                            "type": "array",
                            "items": {
                              "type": "string"
                            }
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {},
                      "value": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "fieldData": {
                                  "type": "object",
                                  "properties": {},
                                  "additionalProperties": {}
                                }
                              },
                              "required": [
                                "fieldData"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "fieldData": {
                                  "type": "object",
                                  "properties": {},
                                  "additionalProperties": {}
                                },
                                "id": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "id"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "type",
                      "value"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            "statusByLocale": {
              "type": "object",
              "properties": {},
              "additionalProperties": {
                "anyOf": [
                  {
                    "type": "string",
                    "const": "excluded"
                  },
                  {
                    "type": "string",
                    "const": "ready"
                  }
                ]
              }
            },
            "id": {
              "type": "string"
            }
          },
          "required": [
            "id"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "EditableCollectionItemAttributes": {
    "type": "object",
    "properties": {
      "draft": {
        "type": "boolean"
      },
      "slug": {
        "type": "string"
      },
      "slugByLocale": {
        "type": "object",
        "properties": {},
        "additionalProperties": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "action": {
                  "type": "string",
                  "const": "set"
                },
                "value": {
                  "type": "string"
                },
                "needsReview": {
                  "type": "boolean"
                }
              },
              "required": [
                "action",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "action": {
                  "type": "string",
                  "const": "clear"
                }
              },
              "required": [
                "action"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "action": {
                  "type": "string",
                  "const": "ignore"
                },
                "needsReview": {
                  "type": "boolean"
                }
              },
              "required": [
                "action"
              ],
              "additionalProperties": false
            }
          ]
        }
      },
      "fieldData": {
        "type": "object",
        "properties": {},
        "additionalProperties": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "type": "boolean"
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "object",
                      "properties": {
                        "light": {
                          "type": "string"
                        },
                        "dark": {
                          "anyOf": [
                            {
                              "type": "string"
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "classKey": {},
                        "id": {
                          "type": "string"
                        },
                        "name": {
                          "type": "string"
                        },
                        "path": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "light",
                        "dark",
                        "classKey",
                        "id",
                        "name",
                        "path"
                      ],
                      "additionalProperties": false
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "number"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "type": "string"
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "valueByLocale": {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "set"
                          },
                          "value": {
                            "type": "string"
                          },
                          "needsReview": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "action",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "clear"
                          }
                        },
                        "required": [
                          "action"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "ignore"
                          },
                          "needsReview": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "action"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  }
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "type": "number"
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "type": "string"
                },
                "contentType": {
                  "anyOf": [
                    {
                      "type": "string",
                      "const": "auto"
                    },
                    {
                      "type": "string",
                      "const": "markdown"
                    },
                    {
                      "type": "string",
                      "const": "html"
                    }
                  ]
                },
                "valueByLocale": {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "set"
                          },
                          "value": {
                            "type": "string"
                          },
                          "needsReview": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "action",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "clear"
                          }
                        },
                        "required": [
                          "action"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "ignore"
                          },
                          "needsReview": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "action"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  }
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "type": "string"
                },
                "valueByLocale": {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "set"
                          },
                          "value": {
                            "type": "string"
                          },
                          "needsReview": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "action",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "clear"
                          }
                        },
                        "required": [
                          "action"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "ignore"
                          },
                          "needsReview": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "action"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  }
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "resolution": {
                  "anyOf": [
                    {
                      "type": "string",
                      "const": "auto"
                    },
                    {
                      "type": "string",
                      "const": "lossless"
                    },
                    {
                      "type": "string",
                      "const": "small"
                    },
                    {
                      "type": "string",
                      "const": "medium"
                    },
                    {
                      "type": "string",
                      "const": "large"
                    },
                    {
                      "type": "string",
                      "const": "full"
                    }
                  ]
                },
                "alt": {
                  "type": "string"
                },
                "altByLocale": {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "set"
                          },
                          "value": {
                            "type": "string"
                          },
                          "needsReview": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "action",
                          "value"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "clear"
                          }
                        },
                        "required": [
                          "action"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "action": {
                            "type": "string",
                            "const": "ignore"
                          },
                          "needsReview": {
                            "type": "boolean"
                          }
                        },
                        "required": [
                          "action"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  }
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "anyOf": [
                    {
                      "type": "string"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "type": {},
                "value": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "fieldData": {
                            "type": "object",
                            "properties": {},
                            "additionalProperties": {}
                          }
                        },
                        "required": [
                          "fieldData"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "fieldData": {
                            "type": "object",
                            "properties": {},
                            "additionalProperties": {}
                          },
                          "id": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  }
                }
              },
              "required": [
                "type",
                "value"
              ],
              "additionalProperties": false
            }
          ]
        }
      },
      "statusByLocale": {
        "type": "object",
        "properties": {},
        "additionalProperties": {
          "anyOf": [
            {
              "type": "string",
              "const": "excluded"
            },
            {
              "type": "string",
              "const": "ready"
            }
          ]
        }
      }
    },
    "additionalProperties": false
  },
  "ManagedCollectionItemInput[]": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "draft": {
          "type": "boolean"
        },
        "id": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        },
        "slugByLocale": {
          "type": "object",
          "properties": {},
          "additionalProperties": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "const": "set"
                  },
                  "value": {
                    "type": "string"
                  },
                  "needsReview": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "action",
                  "value"
                ],
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "const": "clear"
                  }
                },
                "required": [
                  "action"
                ],
                "additionalProperties": false
              },
              {
                "type": "object",
                "properties": {
                  "action": {
                    "type": "string",
                    "const": "ignore"
                  },
                  "needsReview": {
                    "type": "boolean"
                  }
                },
                "required": [
                  "action"
                ],
                "additionalProperties": false
              }
            ]
          }
        },
        "fieldData": {
          "type": "object",
          "properties": {},
          "additionalProperties": {
            "anyOf": [
              {},
              {
                "type": "object",
                "properties": {
                  "type": {},
                  "value": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "fieldData": {
                          "type": "object",
                          "properties": {},
                          "additionalProperties": {}
                        },
                        "id": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "required": [
                  "type",
                  "value"
                ],
                "additionalProperties": false
              }
            ]
          }
        },
        "statusByLocale": {
          "type": "object",
          "properties": {},
          "additionalProperties": {
            "anyOf": [
              {
                "type": "string",
                "const": "excluded"
              },
              {
                "type": "string",
                "const": "ready"
              }
            ]
          }
        }
      },
      "required": [
        "id",
        "slug",
        "fieldData"
      ],
      "additionalProperties": false
    }
  },
  "ManagedCollectionFieldInput[]": {
    "type": "array",
    "items": {
      "anyOf": [
        {},
        {
          "type": "object",
          "properties": {
            "cases": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  },
                  "nameByLocale": {
                    "type": "object",
                    "properties": {},
                    "additionalProperties": {
                      "anyOf": [
                        {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "set"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action",
                                "value"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "clear"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "action": {
                                  "type": "string",
                                  "const": "ignore"
                                },
                                "needsReview": {
                                  "type": "boolean"
                                }
                              },
                              "required": [
                                "action"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        },
                        {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "value": {
                                  "type": "null"
                                },
                                "status": {
                                  "type": "string",
                                  "const": "new"
                                }
                              },
                              "required": [
                                "value",
                                "status"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "value": {
                                  "anyOf": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "lastEdited": {
                                  "type": "number"
                                },
                                "readonly": {
                                  "type": "boolean"
                                },
                                "status": {
                                  "type": "string",
                                  "const": "needsReview"
                                }
                              },
                              "required": [
                                "value",
                                "lastEdited",
                                "readonly",
                                "status"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "value": {
                                  "anyOf": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "lastEdited": {
                                  "type": "number"
                                },
                                "readonly": {
                                  "type": "boolean"
                                },
                                "status": {
                                  "type": "string",
                                  "const": "done"
                                }
                              },
                              "required": [
                                "value",
                                "lastEdited",
                                "readonly",
                                "status"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "value": {
                                  "anyOf": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "lastEdited": {
                                  "type": "number"
                                },
                                "readonly": {
                                  "type": "boolean"
                                },
                                "status": {
                                  "type": "string",
                                  "const": "warning"
                                },
                                "warning": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "value",
                                "lastEdited",
                                "readonly",
                                "status",
                                "warning"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "required": [
                  "id",
                  "name"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "cases"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "WebPageCloneOptions": {
    "type": "object",
    "properties": {
      "path": {
        "type": "string"
      }
    },
    "additionalProperties": false
  },
  "DesignPageCloneOptions": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      }
    },
    "additionalProperties": false
  },
  "NodeAttributeKey": {
    "type": "string",
    "enum": [
      "aspectRatio",
      "backgroundColor",
      "backgroundGradient",
      "backgroundImage",
      "border",
      "borderRadius",
      "bottom",
      "centerX",
      "centerY",
      "collectionId",
      "componentIdentifier",
      "componentName",
      "controls",
      "draft",
      "font",
      "gap",
      "gesture",
      "gridAlignment",
      "gridColumnCount",
      "gridColumnMinWidth",
      "gridColumnWidth",
      "gridColumnWidthType",
      "gridItemColumnSpan",
      "gridItemFillCellHeight",
      "gridItemFillCellWidth",
      "gridItemHorizontalAlignment",
      "gridItemRowSpan",
      "gridItemVerticalAlignment",
      "gridRowCount",
      "gridRowHeight",
      "gridRowHeightType",
      "height",
      "imageRendering",
      "inheritsFromId",
      "inlineTextStyle",
      "insertURL",
      "isBreakpoint",
      "isPrimaryBreakpoint",
      "isPrimaryVariant",
      "isVariant",
      "layout",
      "left",
      "link",
      "linkClickTrackingId",
      "linkOpenInNewTab",
      "linkPreserveParams",
      "linkRelValues",
      "linkSmoothScroll",
      "locked",
      "maxHeight",
      "maxWidth",
      "minHeight",
      "minWidth",
      "name",
      "opacity",
      "overflow",
      "overflowX",
      "overflowY",
      "padding",
      "path",
      "position",
      "right",
      "rotation",
      "stackAlignment",
      "stackDirection",
      "stackDistribution",
      "stackWrapEnabled",
      "svg",
      "textTruncation",
      "top",
      "typedControls",
      "visible",
      "width",
      "zIndex"
    ]
  },
  "\"FrameNode\"": {
    "type": "string",
    "const": "FrameNode"
  },
  "Partial<NodeClassToEditableAttributes[(typeof this)[ClassKey]]>": {
    "type": "object",
    "properties": {
      "name": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "visible": {
        "type": "boolean"
      },
      "locked": {
        "type": "boolean"
      },
      "opacity": {
        "type": "number"
      },
      "position": {
        "anyOf": [
          {
            "type": "string",
            "const": "relative"
          },
          {
            "type": "string",
            "const": "absolute"
          },
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "sticky"
          }
        ]
      },
      "top": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "right": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "bottom": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "left": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "centerX": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "centerY": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "width": {
        "anyOf": [
          {
            "anyOf": [
              {},
              {
                "type": "string",
                "const": "fit-content"
              },
              {
                "type": "string",
                "const": "fit-image"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "height": {
        "anyOf": [
          {
            "anyOf": [
              {},
              {
                "type": "string",
                "const": "fit-content"
              },
              {},
              {
                "type": "string",
                "const": "fit-image"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "maxWidth": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "minWidth": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "maxHeight": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "minHeight": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "aspectRatio": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "zIndex": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "overflow": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "overflowX": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "overflowY": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "visible"
              },
              {
                "type": "string",
                "const": "hidden"
              },
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "clip"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "backgroundColor": {
        "anyOf": [
          {},
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "backgroundImage": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "backgroundGradient": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "rotation": {
        "type": "number"
      },
      "link": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkOpenInNewTab": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkSmoothScroll": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkClickTrackingId": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "linkRelValues": {
        "anyOf": [
          {
            "type": "array",
            "items": {
              "anyOf": [
                {
                  "type": "string",
                  "const": "nofollow"
                },
                {
                  "type": "string",
                  "const": "noreferrer"
                },
                {
                  "type": "string",
                  "const": "me"
                },
                {
                  "type": "string",
                  "const": "ugc"
                },
                {
                  "type": "string",
                  "const": "sponsored"
                }
              ]
            }
          },
          {
            "type": "null"
          }
        ]
      },
      "linkPreserveParams": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "borderRadius": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "border": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "stackDirection": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "horizontal"
              },
              {
                "type": "string",
                "const": "vertical"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackDistribution": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              },
              {
                "type": "string",
                "const": "space-between"
              },
              {
                "type": "string",
                "const": "space-around"
              },
              {
                "type": "string",
                "const": "space-evenly"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "stackWrapEnabled": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnCount": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "string",
            "const": "auto-fill"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowCount": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnWidthType": {
        "anyOf": [
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "minmax"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnWidth": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridColumnMinWidth": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowHeightType": {
        "anyOf": [
          {
            "type": "string",
            "const": "fixed"
          },
          {
            "type": "string",
            "const": "auto"
          },
          {
            "type": "string",
            "const": "fit"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridRowHeight": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "layout": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "stack"
              },
              {
                "type": "string",
                "const": "grid"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gap": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "padding": {
        "anyOf": [
          {},
          {},
          {
            "type": "null"
          }
        ]
      },
      "gridItemFillCellWidth": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemFillCellHeight": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemHorizontalAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemVerticalAlignment": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "start"
              },
              {
                "type": "string",
                "const": "center"
              },
              {
                "type": "string",
                "const": "end"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemColumnSpan": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "string",
                "const": "all"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "gridItemRowSpan": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "imageRendering": {
        "anyOf": [
          {
            "anyOf": [
              {
                "type": "string",
                "const": "auto"
              },
              {
                "type": "string",
                "const": "pixelated"
              }
            ]
          },
          {
            "type": "null"
          }
        ]
      },
      "textTruncation": {
        "anyOf": [
          {
            "type": "number"
          },
          {
            "type": "null"
          }
        ]
      },
      "font": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "inlineTextStyle": {
        "anyOf": [
          {},
          {
            "type": "null"
          }
        ]
      },
      "svg": {
        "type": "string"
      },
      "controls": {
        "type": "object",
        "properties": {},
        "additionalProperties": {}
      },
      "draft": {
        "type": "boolean"
      }
    },
    "required": [],
    "additionalProperties": false
  },
  "\"hover\" | \"pressed\"": {
    "anyOf": [
      {
        "type": "string",
        "const": "hover"
      },
      {
        "type": "string",
        "const": "pressed"
      }
    ]
  },
  "CreateVariable[]": {
    "type": "array",
    "items": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "defaultCaseIndex": {
              "type": "number"
            },
            "cases": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "type",
            "name",
            "cases"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            },
            "allowedFileTypes": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": [
            "type",
            "name",
            "allowedFileTypes"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {},
            "name": {
              "type": "string"
            }
          },
          "required": [
            "type",
            "name"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "Breakpoint": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "width": {
        "type": "number"
      },
      "viewportHeight": {
        "type": "number"
      }
    },
    "required": [
      "name",
      "width"
    ],
    "additionalProperties": false
  },
  "Partial<ColorStyleAttributes>": {
    "allOf": [
      {
        "type": "object",
        "properties": {
          "light": {
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      {
        "type": "object",
        "properties": {
          "dark": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "additionalProperties": false
      },
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "path": {
                "not": {}
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "name": {
                "not": {}
              },
              "path": {
                "type": "string"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "UpdateVariableAttributes<typeof this>": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "description": {
        "anyOf": [
          {
            "type": "string"
          },
          {
            "type": "null"
          }
        ]
      },
      "defaultValue": {
        "anyOf": [
          {
            "type": "boolean"
          },
          {
            "type": "number"
          },
          {
            "type": "string"
          },
          {
            "type": "object",
            "additionalProperties": true
          }
        ]
      },
      "allowedFileTypes": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "displayTime": {
        "type": "boolean"
      }
    },
    "additionalProperties": false
  },
  "UpdateEnumCase": {
    "type": "object",
    "properties": {},
    "additionalProperties": true
  },
  "number": {
    "type": "number"
  },
  "Record<string, unknown>[]": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {},
      "additionalProperties": {}
    }
  },
  "{\n    pagePath?: string;\n  }": {
    "type": "object",
    "properties": {
      "pagePath": {
        "type": "string"
      }
    },
    "additionalProperties": false
  },
  "{\n    componentIds: readonly string[];\n  }": {
    "type": "object",
    "properties": {
      "componentIds": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "componentIds"
    ],
    "additionalProperties": false
  },
  "{\n    iconSetIds: readonly string[];\n  }": {
    "type": "object",
    "properties": {
      "iconSetIds": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "iconSetIds"
    ],
    "additionalProperties": false
  },
  "{\n    iconSetId: string;\n  }": {
    "type": "object",
    "properties": {
      "iconSetId": {
        "type": "string"
      }
    },
    "required": [
      "iconSetId"
    ],
    "additionalProperties": false
  },
  "{\n    layoutTemplateIds: readonly string[];\n  }": {
    "type": "object",
    "properties": {
      "layoutTemplateIds": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "layoutTemplateIds"
    ],
    "additionalProperties": false
  },
  "{\n    shaderNames: readonly string[];\n  }": {
    "type": "object",
    "properties": {
      "shaderNames": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "shaderNames"
    ],
    "additionalProperties": false
  },
  "{\n    id: string;\n    searchText: string;\n    replaceText: string;\n  }": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "searchText": {
        "type": "string"
      },
      "replaceText": {
        "type": "string"
      }
    },
    "required": [
      "id",
      "searchText",
      "replaceText"
    ],
    "additionalProperties": false
  },
  "Record<string, unknown>": {
    "type": "object",
    "properties": {},
    "additionalProperties": {}
  },
  "{\n    query: string;\n    from: string;\n    to?: string | undefined;\n  }": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string"
      },
      "from": {
        "type": "string"
      },
      "to": {
        "type": "string"
      }
    },
    "required": [
      "query",
      "from"
    ],
    "additionalProperties": false
  },
  "{\n    id: string;\n  }": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      }
    },
    "required": [
      "id"
    ],
    "additionalProperties": false
  },
  "{\n    id: string;\n    replaceAll?: boolean;\n  }": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "replaceAll": {
        "type": "boolean"
      }
    },
    "required": [
      "id"
    ],
    "additionalProperties": false
  },
  "{\n    ids: readonly string[];\n  }": {
    "type": "object",
    "properties": {
      "ids": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "ids"
    ],
    "additionalProperties": false
  },
  "{\n    types: readonly string[];\n  }": {
    "type": "object",
    "properties": {
      "types": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "types"
    ],
    "additionalProperties": false
  },
  "{\n    id: string;\n    types: readonly string[];\n  }": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "types": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "required": [
      "id",
      "types"
    ],
    "additionalProperties": false
  },
  "{\n    id: string;\n    depth?: number;\n    attributeFilter?: readonly string[];\n    ancestorPath?: boolean;\n  }": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "depth": {
        "type": "number"
      },
      "attributeFilter": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "ancestorPath": {
        "type": "boolean"
      }
    },
    "required": [
      "id"
    ],
    "additionalProperties": false
  },
  "{\n    ids: readonly string[];\n    depth?: number;\n    attributeFilter?: readonly string[];\n    ancestorPath?: boolean;\n  }": {
    "type": "object",
    "properties": {
      "ids": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "depth": {
        "type": "number"
      },
      "attributeFilter": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "ancestorPath": {
        "type": "boolean"
      }
    },
    "required": [
      "ids"
    ],
    "additionalProperties": false
  },
  "{\n    items: readonly unknown[];\n    keyName?: never;\n    cursor?: never;\n  } | {\n    keyName: string;\n    cursor: number;\n    items?: never;\n  }": {
    "anyOf": [
      {
        "type": "object",
        "properties": {
          "items": {
            "type": "array",
            "items": {}
          },
          "keyName": {
            "not": {}
          },
          "cursor": {
            "not": {}
          }
        },
        "required": [
          "items"
        ],
        "additionalProperties": false
      },
      {
        "type": "object",
        "properties": {
          "keyName": {
            "type": "string"
          },
          "cursor": {
            "type": "number"
          },
          "items": {
            "not": {}
          }
        },
        "required": [
          "keyName",
          "cursor"
        ],
        "additionalProperties": false
      }
    ]
  },
  "RunAutomationArgs": {
    "type": "object",
    "properties": {
      "message": {
        "type": "string"
      },
      "automationId": {
        "type": "string"
      },
      "runId": {
        "type": "string"
      },
      "options": {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "trigger": {
                "type": "string",
                "const": "manual"
              }
            },
            "required": [
              "trigger"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "trigger": {
                "type": "string",
                "const": "webhook"
              }
            },
            "required": [
              "trigger"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "trigger": {
                "type": "string",
                "const": "cron"
              },
              "triggeredAt": {
                "type": "string"
              },
              "expression": {
                "type": "string"
              },
              "timezone": {
                "type": "string"
              }
            },
            "required": [
              "trigger",
              "triggeredAt",
              "expression",
              "timezone"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "trigger": {
                "type": "string",
                "const": "once"
              },
              "triggeredAt": {
                "type": "string"
              }
            },
            "required": [
              "trigger",
              "triggeredAt"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "trigger": {
                "type": "string",
                "const": "mergeToMain"
              },
              "sourceBranchName": {
                "type": "string"
              },
              "userId": {
                "type": "string"
              }
            },
            "required": [
              "trigger",
              "sourceBranchName",
              "userId"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "trigger": {
                "type": "string",
                "const": "publish"
              },
              "url": {
                "type": "string"
              },
              "userId": {
                "type": "string"
              }
            },
            "required": [
              "trigger",
              "url",
              "userId"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "trigger": {
                "type": "string",
                "const": "deploy"
              },
              "url": {
                "type": "string"
              },
              "userId": {
                "type": "string"
              }
            },
            "required": [
              "trigger",
              "url",
              "userId"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "trigger": {
                "type": "string",
                "const": "formSubmission"
              },
              "formNodeId": {
                "type": "string"
              },
              "submissionId": {
                "type": "string"
              },
              "submittedAt": {
                "type": "string"
              },
              "untrustedSubmission": {
                "type": "object",
                "properties": {},
                "additionalProperties": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            },
            "required": [
              "trigger",
              "formNodeId",
              "submissionId",
              "submittedAt",
              "untrustedSubmission"
            ],
            "additionalProperties": false
          }
        ]
      }
    },
    "required": [
      "message",
      "automationId",
      "runId",
      "options"
    ],
    "additionalProperties": false
  },
  "StartAgentConversationOptions": {
    "allOf": [
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "promptFormat": {
                "type": "string",
                "const": "text"
              },
              "selectionNodeIds": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "imageUrls": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "fileUrls": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "promptFormat": {
                "type": "string",
                "const": "user-message"
              },
              "selectionNodeIds": {
                "not": {}
              },
              "imageUrls": {
                "not": {}
              },
              "fileUrls": {
                "not": {}
              }
            },
            "required": [
              "promptFormat"
            ],
            "additionalProperties": false
          }
        ]
      },
      {
        "type": "object",
        "properties": {
          "pagePath": {
            "type": "string"
          },
          "conversationId": {
            "type": "string"
          }
        },
        "additionalProperties": false
      },
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "caller": {},
              "metadata": {
                "not": {}
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "caller": {
                "type": "string",
                "const": "slack"
              },
              "metadata": {
                "type": "object",
                "properties": {
                  "requestId": {
                    "type": "string"
                  }
                },
                "required": [
                  "requestId"
                ],
                "additionalProperties": false
              }
            },
            "required": [
              "caller"
            ],
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "ContinueAgentConversationOptions": {
    "allOf": [
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "promptFormat": {
                "type": "string",
                "const": "text"
              },
              "selectionNodeIds": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "imageUrls": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "fileUrls": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "promptFormat": {
                "type": "string",
                "const": "user-message"
              },
              "selectionNodeIds": {
                "not": {}
              },
              "imageUrls": {
                "not": {}
              },
              "fileUrls": {
                "not": {}
              }
            },
            "required": [
              "promptFormat"
            ],
            "additionalProperties": false
          }
        ]
      },
      {
        "type": "object",
        "properties": {
          "conversationId": {
            "type": "string"
          }
        },
        "required": [
          "conversationId"
        ],
        "additionalProperties": false
      },
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "caller": {},
              "metadata": {
                "not": {}
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "caller": {
                "type": "string",
                "const": "slack"
              },
              "metadata": {
                "type": "object",
                "properties": {
                  "requestId": {
                    "type": "string"
                  }
                },
                "required": [
                  "requestId"
                ],
                "additionalProperties": false
              }
            },
            "required": [
              "caller"
            ],
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "SubmitAgentClarificationOptions": {
    "type": "object",
    "properties": {
      "conversationId": {
        "type": "string"
      },
      "answers": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "questionIndex": {
              "type": "number"
            },
            "answer": {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "object",
                  "properties": {
                    "answer": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "answer",
                    "description"
                  ],
                  "additionalProperties": false
                }
              ]
            }
          },
          "required": [
            "questionIndex",
            "answer"
          ],
          "additionalProperties": false
        }
      }
    },
    "required": [
      "conversationId",
      "answers"
    ],
    "additionalProperties": false
  },
  "RunSupervisorAgentCommandOptions": {
    "type": "object",
    "properties": {
      "goal": {
        "type": "string"
      },
      "model": {
        "type": "string"
      },
      "framerAgentModel": {
        "type": "string"
      },
      "pagePath": {
        "type": "string"
      },
      "maxSteps": {
        "type": "number"
      },
      "captureTrainingData": {
        "type": "boolean"
      }
    },
    "required": [
      "goal",
      "model"
    ],
    "additionalProperties": false
  },
  "ScreenshotOptions": {
    "type": "object",
    "properties": {
      "format": {
        "anyOf": [
          {
            "type": "string",
            "const": "png"
          },
          {
            "type": "string",
            "const": "jpeg"
          }
        ]
      },
      "quality": {
        "type": "number"
      },
      "scale": {
        "anyOf": [
          {
            "type": "number",
            "const": 0.5
          },
          {
            "type": "number",
            "const": 1
          },
          {
            "type": "number",
            "const": 1.5
          },
          {
            "type": "number",
            "const": 2
          },
          {
            "type": "number",
            "const": 3
          },
          {
            "type": "number",
            "const": 4
          }
        ]
      },
      "clip": {
        "type": "object",
        "properties": {
          "x": {
            "type": "number"
          },
          "y": {
            "type": "number"
          },
          "width": {
            "type": "number"
          },
          "height": {
            "type": "number"
          }
        },
        "required": [
          "x",
          "y",
          "width",
          "height"
        ],
        "additionalProperties": false
      }
    },
    "additionalProperties": false
  }
};
