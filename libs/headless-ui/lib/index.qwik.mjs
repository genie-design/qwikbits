import { componentQrl, inlinedQrl, useId, useSignal, useStore, useTaskQrl, useLexicalScope, _jsxC, Slot, _IMMUTABLE, _fnSignal, _jsxBranch, useStylesQrl, useVisibleTaskQrl, useOnDocument, _jsxS, _wrapSignal, useComputedQrl, _jsxQ } from "@builder.io/qwik";
import { QwikHTMLElement, serializeClass, moveFocusToDialog } from "@qwikbits/utils";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
const Collapse = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const id = useId();
  let openSignal = useSignal(typeof props.open === "boolean" ? props.open : false);
  if (typeof props.open === "object")
    openSignal = props.open;
  const state = useStore({
    open: openSignal,
    id: props.id ?? id
  });
  useTaskQrl(/* @__PURE__ */ inlinedQrl((ctx) => {
    const [props2, state2] = useLexicalScope();
    ctx.track(() => state2.open.value);
    if (props2.onChange$)
      props2.onChange$(state2.open.value);
  }, "Collapse_component_useTask_RftN0ZowM4Y", [
    props,
    state
  ]));
  return /* @__PURE__ */ _jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "details";
    },
    ...props.rootProps,
    get open() {
      return state.open.value;
    },
    class: serializeClass(props.class) + " " + serializeClass(props.rootProps?.class),
    children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          ...props.wrappers?.trigger,
          children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
            get style() {
              return {
                cursor: "pointer"
              };
            },
            get tag() {
              return props.triggerProps?.tag || "summary";
            },
            get id() {
              return state.id + "-trigger";
            },
            get "aria-expanded"() {
              return state.open?.value;
            },
            get "aria-controls"() {
              return state.id;
            },
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [state2] = useLexicalScope();
              return state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_wYydqISzD6k", [
              state
            ]),
            onKeyDown$: /* @__PURE__ */ inlinedQrl((e) => {
              const [state2] = useLexicalScope();
              if (e.key === "Enter" || e.key === " ")
                state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onKeyDown_KKTCWVN0Zgg", [
              state
            ]),
            ...props.triggerProps,
            children: /* @__PURE__ */ _jsxC(Slot, {
              name: "trigger",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "bM_0"),
            [_IMMUTABLE]: {
              style: _IMMUTABLE,
              tag: _fnSignal((p0) => p0.triggerProps?.tag || "summary", [
                props
              ], 'p0.triggerProps?.tag||"summary"'),
              id: _fnSignal((p0) => p0.id + "-trigger", [
                state
              ], 'p0.id+"-trigger"'),
              "aria-expanded": _fnSignal((p0) => p0.open?.value, [
                state
              ], "p0.open?.value"),
              "aria-controls": _fnSignal((p0) => p0.id, [
                state
              ], "p0.id"),
              onClick$: _IMMUTABLE,
              onKeyDown$: _IMMUTABLE
            }
          }, 0, "bM_1")
        }, 0, "bM_2"),
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          ...props.wrappers?.content,
          children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
            get id() {
              return state.id;
            },
            get tag() {
              return props.contentProps?.tag || "div";
            },
            role: "region",
            get "aria-labelledby"() {
              return state.id + "-trigger";
            },
            get hidden() {
              return !state.open?.value;
            },
            ...props.contentProps,
            children: /* @__PURE__ */ _jsxC(Slot, null, 3, "bM_3"),
            [_IMMUTABLE]: {
              id: _fnSignal((p0) => p0.id, [
                state
              ], "p0.id"),
              tag: _fnSignal((p0) => p0.contentProps?.tag || "div", [
                props
              ], 'p0.contentProps?.tag||"div"'),
              role: _IMMUTABLE,
              "aria-labelledby": _fnSignal((p0) => p0.id + "-trigger", [
                state
              ], 'p0.id+"-trigger"'),
              hidden: _fnSignal((p0) => !p0.open?.value, [
                state
              ], "!p0.open?.value")
            }
          }, 0, "bM_4")
        }, 0, "bM_5")
      ]
    }, 0, "bM_6"),
    [_IMMUTABLE]: {
      tag: _fnSignal((p0) => p0.rootProps?.tag || "details", [
        props
      ], 'p0.rootProps?.tag||"details"'),
      open: _fnSignal((p0) => p0.open.value, [
        state
      ], "p0.open.value")
    }
  }, 0, "bM_7");
}, "Collapse_component_I1RQqLbnLYw"));
const Dialog = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  _jsxBranch();
  const uid = useId();
  const tuid = useId();
  const duid = useId();
  const id = props.id ?? uid;
  const titleId = props.titleId ?? tuid;
  const descriptionId = props.descriptionId ?? duid;
  useStylesQrl(/* @__PURE__ */ inlinedQrl(`
    .qb-dialog-header:empty {
      display: none;
    }
    .qb-dialog-footer:empty {
      display: none;
    }
`, "Dialog_component_useStyles_LnfzRe3eeso"));
  const defaultSignal = useSignal(false);
  const state = useStore({
    role: props.role ?? `dialog`,
    open: props.open ?? defaultSignal,
    id,
    titleId,
    descriptionId
  });
  const dialogEl = useSignal();
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [dialogEl2, state2] = useLexicalScope();
    track(() => state2.open.value);
    if (dialogEl2.value && state2.open.value) {
      dialogEl2.value.showModal();
      moveFocusToDialog(dialogEl2.value);
    } else if (dialogEl2.value)
      dialogEl2.value.close();
  }, "Dialog_component_useVisibleTask_mWLzFyFPDv4", [
    dialogEl,
    state
  ]), {
    strategy: props?.strategy ?? "document-ready"
  });
  useOnDocument(`keydown`, /* @__PURE__ */ inlinedQrl((e) => {
    const [state2] = useLexicalScope();
    if (e.key === "Escape" && state2.open.value)
      state2.open.value = false;
  }, "Dialog_component_useOnDocument_JJQkb7wiEQE", [
    state
  ]));
  return /* @__PURE__ */ _jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    ...props.rootProps,
    class: serializeClass(props.class) + " " + serializeClass(props.rootProps?.class),
    children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        props.triggerButton && /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          get tag() {
            return props.triggerProps?.tag || "button";
          },
          type: "button",
          "aria-haspopup": "dialog",
          get "aria-expanded"() {
            return state.open.value;
          },
          ...props?.triggerProps,
          onClick$: /* @__PURE__ */ inlinedQrl(() => {
            const [state2] = useLexicalScope();
            return state2.open.value = true;
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_uTuqsxdOhQ8", [
            state
          ]),
          children: /* @__PURE__ */ _jsxC(Slot, {
            name: "trigger",
            [_IMMUTABLE]: {
              name: _IMMUTABLE
            }
          }, 3, "M4_0"),
          [_IMMUTABLE]: {
            tag: _fnSignal((p0) => p0.triggerProps?.tag || "button", [
              props
            ], 'p0.triggerProps?.tag||"button"'),
            type: _IMMUTABLE,
            "aria-haspopup": _IMMUTABLE,
            "aria-expanded": _fnSignal((p0) => p0.open.value, [
              state
            ], "p0.open.value"),
            onClick$: _IMMUTABLE
          }
        }, 0, "M4_1"),
        /* @__PURE__ */ _jsxS("dialog", {
          ref: dialogEl,
          ...props?.dialogProps,
          children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
            get tag() {
              return props.contentProps?.tag || "article";
            },
            ...props?.contentProps,
            children: [
              /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                get tag() {
                  return props.titleProps?.tag || "header";
                },
                get id() {
                  return state.titleId;
                },
                get class() {
                  return `${props.titleProps?.class || ""} qb-dialog-header`;
                },
                ...props?.titleProps,
                children: [
                  /* @__PURE__ */ _jsxC(Slot, {
                    name: "title",
                    [_IMMUTABLE]: {
                      name: _IMMUTABLE
                    }
                  }, 3, "M4_2"),
                  props?.closeButton && /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                    get tag() {
                      return props.closeProps?.tag || "button";
                    },
                    type: "button",
                    ...props?.closeProps,
                    onClick$: /* @__PURE__ */ inlinedQrl(() => {
                      const [state2] = useLexicalScope();
                      return state2.open.value = false;
                    }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_9fsSg0rbilI", [
                      state
                    ]),
                    children: /* @__PURE__ */ _jsxC(Slot, {
                      name: "close",
                      [_IMMUTABLE]: {
                        name: _IMMUTABLE
                      }
                    }, 3, "M4_3"),
                    [_IMMUTABLE]: {
                      tag: _fnSignal((p0) => p0.closeProps?.tag || "button", [
                        props
                      ], 'p0.closeProps?.tag||"button"'),
                      type: _IMMUTABLE,
                      onClick$: _IMMUTABLE
                    }
                  }, 0, "M4_4")
                ],
                [_IMMUTABLE]: {
                  tag: _fnSignal((p0) => p0.titleProps?.tag || "header", [
                    props
                  ], 'p0.titleProps?.tag||"header"'),
                  id: _fnSignal((p0) => p0.titleId, [
                    state
                  ], "p0.titleId"),
                  class: _fnSignal((p0) => `${p0.titleProps?.class || ""} qb-dialog-header`, [
                    props
                  ], '`${p0.titleProps?.class||""} qb-dialog-header`')
                }
              }, 0, "M4_5"),
              /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                get tag() {
                  return props.descriptionProps?.tag || "p";
                },
                get id() {
                  return state.descriptionId;
                },
                ...props?.descriptionProps,
                children: /* @__PURE__ */ _jsxC(Slot, {
                  name: "description",
                  [_IMMUTABLE]: {
                    name: _IMMUTABLE
                  }
                }, 3, "M4_6"),
                [_IMMUTABLE]: {
                  tag: _fnSignal((p0) => p0.descriptionProps?.tag || "p", [
                    props
                  ], 'p0.descriptionProps?.tag||"p"'),
                  id: _fnSignal((p0) => p0.descriptionId, [
                    state
                  ], "p0.descriptionId")
                }
              }, 0, "M4_7"),
              /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                ...props.wrappers?.content,
                children: [
                  /* @__PURE__ */ _jsxC(Slot, null, 3, "M4_8"),
                  /* @__PURE__ */ _jsxC(Slot, {
                    name: "content",
                    [_IMMUTABLE]: {
                      name: _IMMUTABLE
                    }
                  }, 3, "M4_9")
                ]
              }, 0, "M4_10"),
              /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                get tag() {
                  return props.footerProps?.tag || "footer";
                },
                get class() {
                  return `${props.footerProps?.class || ""} qb-dialog-footer`;
                },
                ...props.footerProps,
                children: /* @__PURE__ */ _jsxC(Slot, {
                  name: "footer",
                  [_IMMUTABLE]: {
                    name: _IMMUTABLE
                  }
                }, 3, "M4_11"),
                [_IMMUTABLE]: {
                  tag: _fnSignal((p0) => p0.footerProps?.tag || "footer", [
                    props
                  ], 'p0.footerProps?.tag||"footer"'),
                  class: _fnSignal((p0) => `${p0.footerProps?.class || ""} qb-dialog-footer`, [
                    props
                  ], '`${p0.footerProps?.class||""} qb-dialog-footer`')
                }
              }, 0, "M4_12")
            ],
            [_IMMUTABLE]: {
              tag: _fnSignal((p0) => p0.contentProps?.tag || "article", [
                props
              ], 'p0.contentProps?.tag||"article"')
            }
          }, 0, "M4_13"),
          onClick$: /* @__PURE__ */ inlinedQrl((e) => {
            const [dialogEl2, state2] = useLexicalScope();
            e.target === dialogEl2.value && state2.role !== "alertdialog" && (state2.open.value = false);
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_onClick_9tuumX5NkDI", [
            dialogEl,
            state
          ])
        }, {
          role: _fnSignal((p0) => p0.role, [
            state
          ], "p0.role"),
          tabIndex: -1,
          "aria-modal": "true",
          "aria-hidden": _fnSignal((p0) => !p0.open.value, [
            state
          ], "!p0.open.value"),
          hidden: _fnSignal((p0) => !p0.open.value, [
            state
          ], "!p0.open.value"),
          "aria-labelledby": _fnSignal((p0) => p0.titleId, [
            state
          ], "p0.titleId"),
          "aria-describedby": _fnSignal((p0) => p0.descriptionId, [
            state
          ], "p0.descriptionId")
        }, 0, null)
      ]
    }, 0, "M4_14"),
    [_IMMUTABLE]: {
      tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"')
    }
  }, 0, "M4_15");
}, "Dialog_component_TOBax2mZU8Q"));
const Dropdown = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const defaultSignal = useSignal(props.lockOpen ?? false);
  const open = props.open ?? defaultSignal;
  return /* @__PURE__ */ _jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    get "aria-label"() {
      return props.rootProps?.["aria-label"] || props.label;
    },
    onClick$: /* @__PURE__ */ inlinedQrl(() => {
      const [open2] = useLexicalScope();
      return open2.value = !open2.value;
    }, "Dropdown_component_QwikHTMLElement_onClick_Ihg4VdL0omw", [
      open
    ]),
    role: "list",
    ...props.rootProps,
    class: serializeClass(props.class) + " " + serializeClass(props.rootProps?.class),
    children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          get tag() {
            return props.triggerProps?.tag || "button";
          },
          "aria-haspopup": "listbox",
          get "aria-expanded"() {
            return props.open?.value;
          },
          ...props.triggerProps,
          children: [
            _fnSignal((p0) => p0.label ? p0.label : "", [
              props
            ], 'p0.label?p0.label:""'),
            /* @__PURE__ */ _jsxC(Slot, {
              name: "trigger",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "H9_0")
          ],
          [_IMMUTABLE]: {
            tag: _fnSignal((p0) => p0.triggerProps?.tag || "button", [
              props
            ], 'p0.triggerProps?.tag||"button"'),
            "aria-haspopup": _IMMUTABLE,
            "aria-expanded": _fnSignal((p0) => p0.open?.value, [
              props
            ], "p0.open?.value")
          }
        }, 0, "H9_1"),
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          role: "listbox",
          hidden: !props.lockOpen && !open?.value,
          get tag() {
            return props.contentProps?.tag || "ul";
          },
          ...props.contentProps,
          children: [
            /* @__PURE__ */ _jsxC(Slot, null, 3, "H9_2"),
            /* @__PURE__ */ _jsxC(Slot, {
              name: "content",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "H9_3"),
            props.items?.map((item, i) => /* @__PURE__ */ _jsxC(QwikHTMLElement, {
              tag: item.itemWrapperProps?.tag || "li",
              ...item.itemWrapperProps,
              children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                tag: item.itemProps?.tag || "a",
                ...item.itemProps,
                class: serializeClass(item.class) + " " + serializeClass(item.itemProps?.class),
                children: [
                  /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                    ...item.labelBeforeProps
                  }, 0, "H9_4"),
                  /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                    ...item.labelWrapperProps,
                    children: _wrapSignal(item, "label")
                  }, 0, "H9_5"),
                  /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                    ...item.labelAfterProps
                  }, 0, "H9_6")
                ]
              }, 0, "H9_7")
            }, 0, item.key ?? i)),
            /* @__PURE__ */ _jsxC(Slot, {
              name: "content_after",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "H9_8")
          ],
          [_IMMUTABLE]: {
            role: _IMMUTABLE,
            tag: _fnSignal((p0) => p0.contentProps?.tag || "ul", [
              props
            ], 'p0.contentProps?.tag||"ul"')
          }
        }, 0, "H9_9")
      ]
    }, 0, "H9_10"),
    [_IMMUTABLE]: {
      tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"'),
      "aria-label": _fnSignal((p0) => p0.rootProps?.["aria-label"] || p0.label, [
        props
      ], 'p0.rootProps?.["aria-label"]||p0.label'),
      role: _IMMUTABLE
    }
  }, 0, "H9_11");
}, "Dropdown_component_4xAkSjPnY6Y"));
const Tabs = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const defaultSignal = useSignal(0);
  const defaultId = useId();
  const id = props.id ?? defaultId;
  const selected = props.selected ?? defaultSignal;
  useTaskQrl(/* @__PURE__ */ inlinedQrl((ctx) => {
    const [id2, props2] = useLexicalScope();
    ctx.track(() => props2.tabs);
    if (props2.tabs)
      props2.tabs.forEach((tab, i) => {
        tab.key = tab.key ?? id2 + (tab.tabSlotName ?? "") + (tab.contentSlotName ?? "") + (tab.tabLabel ?? "") + i;
      });
  }, "Tabs_component_useTask_qvnREmR6IAY", [
    id,
    props
  ]));
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl((ctx) => {
    const [id2, props2, selected2] = useLexicalScope();
    ctx.track(() => selected2.value);
    const tab = props2.tabs[selected2.value];
    if (tab) {
      const tabId = tab.tabProps?.id ?? `tab-${id2}-${selected2.value}`;
      document.getElementById(tabId)?.focus();
    }
  }, "Tabs_component_useVisibleTask_XmyEzuY1TlE", [
    id,
    props,
    selected
  ]));
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl((ctx) => {
    const [id2, props2, selected2] = useLexicalScope();
    ctx.track(() => selected2.value);
    const handleKeyDown = (event) => {
      let handled = false;
      switch (event.key) {
        case "ArrowLeft":
          if (selected2.value === 0)
            selected2.value = props2.tabs.length - 1;
          else
            selected2.value = selected2.value - 1;
          handled = true;
          break;
        case "ArrowRight":
          if (selected2.value === props2.tabs.length - 1)
            selected2.value = 0;
          else
            selected2.value = selected2.value + 1;
          handled = true;
          break;
        case "Home":
          selected2.value = 0;
          handled = true;
          break;
        case "End":
          selected2.value = props2.tabs.length - 1;
          handled = true;
          break;
        case "Tab":
          if (event.shiftKey && selected2.value > 0) {
            selected2.value = 0;
            handled = true;
          }
          break;
      }
      if (handled)
        event.preventDefault();
    };
    const rootElem = document.getElementById(id2);
    if (rootElem)
      rootElem.querySelectorAll("[role=tab]").forEach((elem) => {
        elem.addEventListener("keydown", handleKeyDown);
      });
    return () => {
      if (rootElem)
        rootElem.querySelectorAll("[role=tab]").forEach((elem) => {
          elem.removeEventListener("keydown", handleKeyDown);
        });
    };
  }, "Tabs_component_useVisibleTask_1_Hhz6GWS0iYs", [
    id,
    props,
    selected
  ]));
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
      get tag() {
        return props.rootProps?.tag || "div";
      },
      ...props.rootProps,
      id,
      class: serializeClass(props.class) + " " + serializeClass(props.rootProps?.class),
      children: [
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          id: `tablist-${id}`,
          tag: "h3",
          ...props.labelProps,
          children: [
            /* @__PURE__ */ _jsxC(Slot, {
              name: "label",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "jt_0"),
            _fnSignal((p0) => p0.label ? p0.label : "", [
              props
            ], 'p0.label?p0.label:""')
          ],
          [_IMMUTABLE]: {
            tag: _IMMUTABLE
          }
        }, 0, "jt_1"),
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          role: "tablist",
          ...props.wrappers?.tabList,
          "aria-labelledby": `tablist-${id}`,
          children: props.tabs?.map((tab, i) => /* @__PURE__ */ _jsxC(QwikHTMLElement, {
            role: "tab",
            id: tab.tabProps?.id ?? `tab-${id}-${i}`,
            tag: "button",
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [i2, selected2] = useLexicalScope();
              return selected2.value = i2;
            }, "Tabs_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_EJ0ZpxnncFk", [
              i,
              selected
            ]),
            "aria-selected": selected.value === i ? "true" : "false",
            "aria-controls": tab?.contentProps?.id ?? `tabpanel-${id}-${i}`,
            tabIndex: i === 0 ? 0 : -1,
            ...tab.tabProps,
            class: serializeClass(tab.class) + " " + serializeClass(tab.tabProps?.class),
            children: [
              /* @__PURE__ */ _jsxC(Slot, {
                name: tab.tabSlotName ?? `tab-${i + 1}`
              }, 3, "jt_2"),
              tab.tabLabel ? tab.tabLabel : ""
            ],
            [_IMMUTABLE]: {
              role: _IMMUTABLE,
              tag: _IMMUTABLE
            }
          }, 0, (tab.key ?? i) + "-tab")),
          [_IMMUTABLE]: {
            role: _IMMUTABLE
          }
        }, 0, "jt_3"),
        props.tabs?.map((tab, i) => /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          tag: "div",
          role: "tabpanel",
          hidden: selected.value !== i,
          id: tab.contentProps?.id ?? `tabpanel-${id}-${i}`,
          "aria-labelledby": tab.tabProps?.id ?? `tab-${id}-${i}`,
          ...tab.contentProps,
          children: [
            /* @__PURE__ */ _jsxC(Slot, {
              name: tab.contentSlotName ?? `tabcontent-${i + 1}`
            }, 3, "jt_4"),
            tab.content ? tab.content : ""
          ],
          [_IMMUTABLE]: {
            tag: _IMMUTABLE,
            role: _IMMUTABLE
          }
        }, 0, (tab.key ?? i) + "content"))
      ],
      [_IMMUTABLE]: {
        tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
          props
        ], 'p0.rootProps?.tag||"div"')
      }
    }, 0, "jt_5")
  }, 1, "jt_6");
}, "Tabs_component_z8IYuaPWXhI"));
const Toggle = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const checked = props.checked ?? useSignal(false);
  const isChecked = useComputedQrl(/* @__PURE__ */ inlinedQrl(() => {
    const [checked2, props2] = useLexicalScope();
    return props2.invertChecked ? !checked2.value : checked2.value;
  }, "Toggle_component_isChecked_useComputed_E4BcWiPjioM", [
    checked,
    props
  ]));
  const defaultId = useId();
  const id = props.id ?? defaultId;
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
      get tag() {
        return props.rootProps?.tag || "div";
      },
      ...props.rootProps,
      class: serializeClass(props.class) + " " + serializeClass(props.rootProps?.class),
      children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
        ...props.wrappers?.rootChildren,
        children: [
          /* @__PURE__ */ _jsxC(QwikHTMLElement, {
            for: id,
            get tag() {
              return props.labelProps?.tag || "label";
            },
            ...props.labelProps,
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [checked2] = useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_nP9lZ4mQF20", [
              checked
            ]),
            children: [
              /* @__PURE__ */ _jsxC(Slot, {
                name: "label",
                [_IMMUTABLE]: {
                  name: _IMMUTABLE
                }
              }, 3, "30_0"),
              _fnSignal((p0) => p0.label ? p0.label : "", [
                props
              ], 'p0.label?p0.label:""')
            ],
            [_IMMUTABLE]: {
              tag: _fnSignal((p0) => p0.labelProps?.tag || "label", [
                props
              ], 'p0.labelProps?.tag||"label"')
            }
          }, 0, "30_1"),
          /* @__PURE__ */ _jsxC(QwikHTMLElement, {
            for: id,
            get type() {
              return props.switchProps?.type || "button";
            },
            get role() {
              return props.switchProps?.role || "switch";
            },
            get "aria-checked"() {
              return isChecked.value;
            },
            get "data-state"() {
              return isChecked.value ? "checked" : "unchecked";
            },
            id,
            get tag() {
              return props.switchProps?.tag || "button";
            },
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [checked2] = useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_1_yF03mRKlkec", [
              checked
            ]),
            ...props.switchProps,
            children: [
              /* @__PURE__ */ _jsxC(Slot, {
                name: "button",
                [_IMMUTABLE]: {
                  name: _IMMUTABLE
                }
              }, 3, "30_2"),
              /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                get "data-state"() {
                  return isChecked.value ? "checked" : "off";
                },
                get tag() {
                  return props.switchProps?.tag || "span";
                },
                ...props.thumbProps,
                children: /* @__PURE__ */ _jsxC(Slot, {
                  name: "thumb",
                  [_IMMUTABLE]: {
                    name: _IMMUTABLE
                  }
                }, 3, "30_3"),
                [_IMMUTABLE]: {
                  "data-state": _fnSignal((p0) => p0.value ? "checked" : "off", [
                    isChecked
                  ], 'p0.value?"checked":"off"'),
                  tag: _fnSignal((p0) => p0.switchProps?.tag || "span", [
                    props
                  ], 'p0.switchProps?.tag||"span"')
                }
              }, 0, "30_4")
            ],
            [_IMMUTABLE]: {
              type: _fnSignal((p0) => p0.switchProps?.type || "button", [
                props
              ], 'p0.switchProps?.type||"button"'),
              role: _fnSignal((p0) => p0.switchProps?.role || "switch", [
                props
              ], 'p0.switchProps?.role||"switch"'),
              "aria-checked": _fnSignal((p0) => p0.value, [
                isChecked
              ], "p0.value"),
              "data-state": _fnSignal((p0) => p0.value ? "checked" : "unchecked", [
                isChecked
              ], 'p0.value?"checked":"unchecked"'),
              tag: _fnSignal((p0) => p0.switchProps?.tag || "button", [
                props
              ], 'p0.switchProps?.tag||"button"')
            }
          }, 0, "30_5"),
          /* @__PURE__ */ _jsxQ("input", {
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [checked2] = useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_input_onClick_qE81vOuCHHQ", [
              checked
            ])
          }, {
            type: "checkbox",
            "aria-hidden": "true",
            checked: _fnSignal((p0) => p0.value, [
              isChecked
            ], "p0.value"),
            style: "transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 42px; height: 25px;",
            tabIndex: -1,
            value: "on"
          }, null, 2, null)
        ]
      }, 0, "30_6"),
      [_IMMUTABLE]: {
        tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
          props
        ], 'p0.rootProps?.tag||"div"')
      }
    }, 0, "30_7")
  }, 1, "30_8");
}, "Toggle_component_vbhJO034xCc"));
export {
  Collapse,
  Dialog,
  Dropdown,
  Tabs,
  Toggle
};
