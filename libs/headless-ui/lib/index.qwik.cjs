"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const utils = require("@qwikbits/utils");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const Collapse = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const id = qwik.useId();
  let openSignal = qwik.useSignal(typeof props.open === "boolean" ? props.open : false);
  if (typeof props.open === "object")
    openSignal = props.open;
  const state = qwik.useStore({
    open: openSignal,
    id: props.id ?? id
  });
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl((ctx) => {
    const [props2, state2] = qwik.useLexicalScope();
    ctx.track(() => state2.open.value);
    if (props2.onChange$)
      props2.onChange$(state2.open.value);
  }, "Collapse_component_useTask_RftN0ZowM4Y", [
    props,
    state
  ]));
  return /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "details";
    },
    ...props.rootProps,
    get open() {
      return state.open.value;
    },
    class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
    children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          ...props.wrappers?.trigger,
          children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
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
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [state2] = qwik.useLexicalScope();
              return state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_wYydqISzD6k", [
              state
            ]),
            onKeyDown$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
              const [state2] = qwik.useLexicalScope();
              if (e.key === "Enter" || e.key === " ")
                state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onKeyDown_KKTCWVN0Zgg", [
              state
            ]),
            ...props.triggerProps,
            children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "trigger",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "bM_0"),
            [qwik._IMMUTABLE]: {
              style: qwik._IMMUTABLE,
              tag: qwik._fnSignal((p0) => p0.triggerProps?.tag || "summary", [
                props
              ], 'p0.triggerProps?.tag||"summary"'),
              id: qwik._fnSignal((p0) => p0.id + "-trigger", [
                state
              ], 'p0.id+"-trigger"'),
              "aria-expanded": qwik._fnSignal((p0) => p0.open?.value, [
                state
              ], "p0.open?.value"),
              "aria-controls": qwik._fnSignal((p0) => p0.id, [
                state
              ], "p0.id"),
              onClick$: qwik._IMMUTABLE,
              onKeyDown$: qwik._IMMUTABLE
            }
          }, 0, "bM_1")
        }, 0, "bM_2"),
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          ...props.wrappers?.content,
          children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
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
            children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "bM_3"),
            [qwik._IMMUTABLE]: {
              id: qwik._fnSignal((p0) => p0.id, [
                state
              ], "p0.id"),
              tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "div", [
                props
              ], 'p0.contentProps?.tag||"div"'),
              role: qwik._IMMUTABLE,
              "aria-labelledby": qwik._fnSignal((p0) => p0.id + "-trigger", [
                state
              ], 'p0.id+"-trigger"'),
              hidden: qwik._fnSignal((p0) => !p0.open?.value, [
                state
              ], "!p0.open?.value")
            }
          }, 0, "bM_4")
        }, 0, "bM_5")
      ]
    }, 0, "bM_6"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "details", [
        props
      ], 'p0.rootProps?.tag||"details"'),
      open: qwik._fnSignal((p0) => p0.open.value, [
        state
      ], "p0.open.value")
    }
  }, 0, "bM_7");
}, "Collapse_component_I1RQqLbnLYw"));
const Dialog = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  const uid = qwik.useId();
  const tuid = qwik.useId();
  const duid = qwik.useId();
  const id = props.id ?? uid;
  const titleId = props.titleId ?? tuid;
  const descriptionId = props.descriptionId ?? duid;
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(`
    .qb-dialog-header:empty {
      display: none;
    }
    .qb-dialog-footer:empty {
      display: none;
    }
`, "Dialog_component_useStyles_LnfzRe3eeso"));
  const defaultSignal = qwik.useSignal(false);
  const state = qwik.useStore({
    role: props.role ?? `dialog`,
    open: props.open ?? defaultSignal,
    id,
    titleId,
    descriptionId
  });
  const dialogEl = qwik.useSignal();
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [dialogEl2, state2] = qwik.useLexicalScope();
    track(() => state2.open.value);
    if (dialogEl2.value && state2.open.value) {
      dialogEl2.value.showModal();
      utils.moveFocusToDialog(dialogEl2.value);
    } else if (dialogEl2.value)
      dialogEl2.value.close();
  }, "Dialog_component_useVisibleTask_mWLzFyFPDv4", [
    dialogEl,
    state
  ]), {
    strategy: props?.strategy ?? "document-ready"
  });
  qwik.useOnDocument(`keydown`, /* @__PURE__ */ qwik.inlinedQrl((e) => {
    const [state2] = qwik.useLexicalScope();
    if (e.key === "Escape" && state2.open.value)
      state2.open.value = false;
  }, "Dialog_component_useOnDocument_JJQkb7wiEQE", [
    state
  ]));
  return /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    ...props.rootProps,
    class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
    children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        props.triggerButton && /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          get tag() {
            return props.triggerProps?.tag || "button";
          },
          type: "button",
          "aria-haspopup": "dialog",
          get "aria-expanded"() {
            return state.open.value;
          },
          ...props?.triggerProps,
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [state2] = qwik.useLexicalScope();
            return state2.open.value = true;
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_uTuqsxdOhQ8", [
            state
          ]),
          children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
            name: "trigger",
            [qwik._IMMUTABLE]: {
              name: qwik._IMMUTABLE
            }
          }, 3, "M4_0"),
          [qwik._IMMUTABLE]: {
            tag: qwik._fnSignal((p0) => p0.triggerProps?.tag || "button", [
              props
            ], 'p0.triggerProps?.tag||"button"'),
            type: qwik._IMMUTABLE,
            "aria-haspopup": qwik._IMMUTABLE,
            "aria-expanded": qwik._fnSignal((p0) => p0.open.value, [
              state
            ], "p0.open.value"),
            onClick$: qwik._IMMUTABLE
          }
        }, 0, "M4_1"),
        /* @__PURE__ */ qwik._jsxS("dialog", {
          ref: dialogEl,
          ...props?.dialogProps,
          children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
            get tag() {
              return props.contentProps?.tag || "article";
            },
            ...props?.contentProps,
            children: [
              /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
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
                  /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                    name: "title",
                    [qwik._IMMUTABLE]: {
                      name: qwik._IMMUTABLE
                    }
                  }, 3, "M4_2"),
                  props?.closeButton && /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                    get tag() {
                      return props.closeProps?.tag || "button";
                    },
                    type: "button",
                    ...props?.closeProps,
                    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
                      const [state2] = qwik.useLexicalScope();
                      return state2.open.value = false;
                    }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_9fsSg0rbilI", [
                      state
                    ]),
                    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                      name: "close",
                      [qwik._IMMUTABLE]: {
                        name: qwik._IMMUTABLE
                      }
                    }, 3, "M4_3"),
                    [qwik._IMMUTABLE]: {
                      tag: qwik._fnSignal((p0) => p0.closeProps?.tag || "button", [
                        props
                      ], 'p0.closeProps?.tag||"button"'),
                      type: qwik._IMMUTABLE,
                      onClick$: qwik._IMMUTABLE
                    }
                  }, 0, "M4_4")
                ],
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.titleProps?.tag || "header", [
                    props
                  ], 'p0.titleProps?.tag||"header"'),
                  id: qwik._fnSignal((p0) => p0.titleId, [
                    state
                  ], "p0.titleId"),
                  class: qwik._fnSignal((p0) => `${p0.titleProps?.class || ""} qb-dialog-header`, [
                    props
                  ], '`${p0.titleProps?.class||""} qb-dialog-header`')
                }
              }, 0, "M4_5"),
              /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                get tag() {
                  return props.descriptionProps?.tag || "p";
                },
                get id() {
                  return state.descriptionId;
                },
                ...props?.descriptionProps,
                children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                  name: "description",
                  [qwik._IMMUTABLE]: {
                    name: qwik._IMMUTABLE
                  }
                }, 3, "M4_6"),
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.descriptionProps?.tag || "p", [
                    props
                  ], 'p0.descriptionProps?.tag||"p"'),
                  id: qwik._fnSignal((p0) => p0.descriptionId, [
                    state
                  ], "p0.descriptionId")
                }
              }, 0, "M4_7"),
              /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                ...props.wrappers?.content,
                children: [
                  /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "M4_8"),
                  /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                    name: "content",
                    [qwik._IMMUTABLE]: {
                      name: qwik._IMMUTABLE
                    }
                  }, 3, "M4_9")
                ]
              }, 0, "M4_10"),
              /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                get tag() {
                  return props.footerProps?.tag || "footer";
                },
                get class() {
                  return `${props.footerProps?.class || ""} qb-dialog-footer`;
                },
                ...props.footerProps,
                children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                  name: "footer",
                  [qwik._IMMUTABLE]: {
                    name: qwik._IMMUTABLE
                  }
                }, 3, "M4_11"),
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.footerProps?.tag || "footer", [
                    props
                  ], 'p0.footerProps?.tag||"footer"'),
                  class: qwik._fnSignal((p0) => `${p0.footerProps?.class || ""} qb-dialog-footer`, [
                    props
                  ], '`${p0.footerProps?.class||""} qb-dialog-footer`')
                }
              }, 0, "M4_12")
            ],
            [qwik._IMMUTABLE]: {
              tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "article", [
                props
              ], 'p0.contentProps?.tag||"article"')
            }
          }, 0, "M4_13"),
          onClick$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
            const [dialogEl2, state2] = qwik.useLexicalScope();
            e.target === dialogEl2.value && state2.role !== "alertdialog" && (state2.open.value = false);
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_onClick_9tuumX5NkDI", [
            dialogEl,
            state
          ])
        }, {
          role: qwik._fnSignal((p0) => p0.role, [
            state
          ], "p0.role"),
          tabIndex: -1,
          "aria-modal": "true",
          "aria-hidden": qwik._fnSignal((p0) => !p0.open.value, [
            state
          ], "!p0.open.value"),
          hidden: qwik._fnSignal((p0) => !p0.open.value, [
            state
          ], "!p0.open.value"),
          "aria-labelledby": qwik._fnSignal((p0) => p0.titleId, [
            state
          ], "p0.titleId"),
          "aria-describedby": qwik._fnSignal((p0) => p0.descriptionId, [
            state
          ], "p0.descriptionId")
        }, 0, null)
      ]
    }, 0, "M4_14"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"')
    }
  }, 0, "M4_15");
}, "Dialog_component_TOBax2mZU8Q"));
const Dropdown = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const defaultSignal = qwik.useSignal(props.lockOpen ?? false);
  const open = props.open ?? defaultSignal;
  return /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    get "aria-label"() {
      return props.rootProps?.["aria-label"] || props.label;
    },
    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [open2] = qwik.useLexicalScope();
      return open2.value = !open2.value;
    }, "Dropdown_component_QwikHTMLElement_onClick_Ihg4VdL0omw", [
      open
    ]),
    role: "list",
    ...props.rootProps,
    class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
    children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          get tag() {
            return props.triggerProps?.tag || "button";
          },
          "aria-haspopup": "listbox",
          get "aria-expanded"() {
            return props.open?.value;
          },
          ...props.triggerProps,
          children: [
            qwik._fnSignal((p0) => p0.label ? p0.label : "", [
              props
            ], 'p0.label?p0.label:""'),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "trigger",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "H9_0")
          ],
          [qwik._IMMUTABLE]: {
            tag: qwik._fnSignal((p0) => p0.triggerProps?.tag || "button", [
              props
            ], 'p0.triggerProps?.tag||"button"'),
            "aria-haspopup": qwik._IMMUTABLE,
            "aria-expanded": qwik._fnSignal((p0) => p0.open?.value, [
              props
            ], "p0.open?.value")
          }
        }, 0, "H9_1"),
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          role: "listbox",
          hidden: !props.lockOpen && !open?.value,
          get tag() {
            return props.contentProps?.tag || "ul";
          },
          ...props.contentProps,
          children: [
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "H9_2"),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "content",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "H9_3"),
            props.items?.map((item, i) => /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
              tag: item.itemWrapperProps?.tag || "li",
              ...item.itemWrapperProps,
              children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                tag: item.itemProps?.tag || "a",
                ...item.itemProps,
                class: utils.serializeClass(item.class) + " " + utils.serializeClass(item.itemProps?.class),
                children: [
                  /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                    ...item.labelBeforeProps
                  }, 0, "H9_4"),
                  /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                    ...item.labelWrapperProps,
                    children: qwik._wrapSignal(item, "label")
                  }, 0, "H9_5"),
                  /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                    ...item.labelAfterProps
                  }, 0, "H9_6")
                ]
              }, 0, "H9_7")
            }, 0, item.key ?? i)),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "content_after",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "H9_8")
          ],
          [qwik._IMMUTABLE]: {
            role: qwik._IMMUTABLE,
            tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "ul", [
              props
            ], 'p0.contentProps?.tag||"ul"')
          }
        }, 0, "H9_9")
      ]
    }, 0, "H9_10"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"'),
      "aria-label": qwik._fnSignal((p0) => p0.rootProps?.["aria-label"] || p0.label, [
        props
      ], 'p0.rootProps?.["aria-label"]||p0.label'),
      role: qwik._IMMUTABLE
    }
  }, 0, "H9_11");
}, "Dropdown_component_4xAkSjPnY6Y"));
const Tabs = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const defaultSignal = qwik.useSignal(0);
  const defaultId = qwik.useId();
  const id = props.id ?? defaultId;
  const selected = props.selected ?? defaultSignal;
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl((ctx) => {
    const [id2, props2] = qwik.useLexicalScope();
    ctx.track(() => props2.tabs);
    if (props2.tabs)
      props2.tabs.forEach((tab, i) => {
        tab.key = tab.key ?? id2 + (tab.tabSlotName ?? "") + (tab.contentSlotName ?? "") + (tab.tabLabel ?? "") + i;
      });
  }, "Tabs_component_useTask_qvnREmR6IAY", [
    id,
    props
  ]));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl((ctx) => {
    const [id2, props2, selected2] = qwik.useLexicalScope();
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
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl((ctx) => {
    const [id2, props2, selected2] = qwik.useLexicalScope();
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
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
      get tag() {
        return props.rootProps?.tag || "div";
      },
      ...props.rootProps,
      id,
      class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
      children: [
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          id: `tablist-${id}`,
          tag: "h3",
          ...props.labelProps,
          children: [
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "label",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "jt_0"),
            qwik._fnSignal((p0) => p0.label ? p0.label : "", [
              props
            ], 'p0.label?p0.label:""')
          ],
          [qwik._IMMUTABLE]: {
            tag: qwik._IMMUTABLE
          }
        }, 0, "jt_1"),
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          role: "tablist",
          ...props.wrappers?.tabList,
          "aria-labelledby": `tablist-${id}`,
          children: props.tabs?.map((tab, i) => /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
            role: "tab",
            id: tab.tabProps?.id ?? `tab-${id}-${i}`,
            tag: "button",
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [i2, selected2] = qwik.useLexicalScope();
              return selected2.value = i2;
            }, "Tabs_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_EJ0ZpxnncFk", [
              i,
              selected
            ]),
            "aria-selected": selected.value === i ? "true" : "false",
            "aria-controls": tab?.contentProps?.id ?? `tabpanel-${id}-${i}`,
            tabIndex: i === 0 ? 0 : -1,
            ...tab.tabProps,
            class: utils.serializeClass(tab.class) + " " + utils.serializeClass(tab.tabProps?.class),
            children: [
              /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                name: tab.tabSlotName ?? `tab-${i + 1}`
              }, 3, "jt_2"),
              tab.tabLabel ? tab.tabLabel : ""
            ],
            [qwik._IMMUTABLE]: {
              role: qwik._IMMUTABLE,
              tag: qwik._IMMUTABLE
            }
          }, 0, (tab.key ?? i) + "-tab")),
          [qwik._IMMUTABLE]: {
            role: qwik._IMMUTABLE
          }
        }, 0, "jt_3"),
        props.tabs?.map((tab, i) => /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          tag: "div",
          role: "tabpanel",
          hidden: selected.value !== i,
          id: tab.contentProps?.id ?? `tabpanel-${id}-${i}`,
          "aria-labelledby": tab.tabProps?.id ?? `tab-${id}-${i}`,
          ...tab.contentProps,
          children: [
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: tab.contentSlotName ?? `tabcontent-${i + 1}`
            }, 3, "jt_4"),
            tab.content ? tab.content : ""
          ],
          [qwik._IMMUTABLE]: {
            tag: qwik._IMMUTABLE,
            role: qwik._IMMUTABLE
          }
        }, 0, (tab.key ?? i) + "content"))
      ],
      [qwik._IMMUTABLE]: {
        tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
          props
        ], 'p0.rootProps?.tag||"div"')
      }
    }, 0, "jt_5")
  }, 1, "jt_6");
}, "Tabs_component_z8IYuaPWXhI"));
const Toggle = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const checked = props.checked ?? qwik.useSignal(false);
  const isChecked = qwik.useComputedQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    const [checked2, props2] = qwik.useLexicalScope();
    return props2.invertChecked ? !checked2.value : checked2.value;
  }, "Toggle_component_isChecked_useComputed_E4BcWiPjioM", [
    checked,
    props
  ]));
  const defaultId = qwik.useId();
  const id = props.id ?? defaultId;
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
      get tag() {
        return props.rootProps?.tag || "div";
      },
      ...props.rootProps,
      class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
      children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
        ...props.wrappers?.rootChildren,
        children: [
          /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
            for: id,
            get tag() {
              return props.labelProps?.tag || "label";
            },
            ...props.labelProps,
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [checked2] = qwik.useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_nP9lZ4mQF20", [
              checked
            ]),
            children: [
              /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                name: "label",
                [qwik._IMMUTABLE]: {
                  name: qwik._IMMUTABLE
                }
              }, 3, "30_0"),
              qwik._fnSignal((p0) => p0.label ? p0.label : "", [
                props
              ], 'p0.label?p0.label:""')
            ],
            [qwik._IMMUTABLE]: {
              tag: qwik._fnSignal((p0) => p0.labelProps?.tag || "label", [
                props
              ], 'p0.labelProps?.tag||"label"')
            }
          }, 0, "30_1"),
          /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
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
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [checked2] = qwik.useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_1_yF03mRKlkec", [
              checked
            ]),
            ...props.switchProps,
            children: [
              /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                name: "button",
                [qwik._IMMUTABLE]: {
                  name: qwik._IMMUTABLE
                }
              }, 3, "30_2"),
              /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                get "data-state"() {
                  return isChecked.value ? "checked" : "off";
                },
                get tag() {
                  return props.switchProps?.tag || "span";
                },
                ...props.thumbProps,
                children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                  name: "thumb",
                  [qwik._IMMUTABLE]: {
                    name: qwik._IMMUTABLE
                  }
                }, 3, "30_3"),
                [qwik._IMMUTABLE]: {
                  "data-state": qwik._fnSignal((p0) => p0.value ? "checked" : "off", [
                    isChecked
                  ], 'p0.value?"checked":"off"'),
                  tag: qwik._fnSignal((p0) => p0.switchProps?.tag || "span", [
                    props
                  ], 'p0.switchProps?.tag||"span"')
                }
              }, 0, "30_4")
            ],
            [qwik._IMMUTABLE]: {
              type: qwik._fnSignal((p0) => p0.switchProps?.type || "button", [
                props
              ], 'p0.switchProps?.type||"button"'),
              role: qwik._fnSignal((p0) => p0.switchProps?.role || "switch", [
                props
              ], 'p0.switchProps?.role||"switch"'),
              "aria-checked": qwik._fnSignal((p0) => p0.value, [
                isChecked
              ], "p0.value"),
              "data-state": qwik._fnSignal((p0) => p0.value ? "checked" : "unchecked", [
                isChecked
              ], 'p0.value?"checked":"unchecked"'),
              tag: qwik._fnSignal((p0) => p0.switchProps?.tag || "button", [
                props
              ], 'p0.switchProps?.tag||"button"')
            }
          }, 0, "30_5"),
          /* @__PURE__ */ qwik._jsxQ("input", {
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [checked2] = qwik.useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_input_onClick_qE81vOuCHHQ", [
              checked
            ])
          }, {
            type: "checkbox",
            "aria-hidden": "true",
            checked: qwik._fnSignal((p0) => p0.value, [
              isChecked
            ], "p0.value"),
            style: "transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 42px; height: 25px;",
            tabIndex: -1,
            value: "on"
          }, null, 2, null)
        ]
      }, 0, "30_6"),
      [qwik._IMMUTABLE]: {
        tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
          props
        ], 'p0.rootProps?.tag||"div"')
      }
    }, 0, "30_7")
  }, 1, "30_8");
}, "Toggle_component_vbhJO034xCc"));
exports.Collapse = Collapse;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
exports.Tabs = Tabs;
exports.Toggle = Toggle;
