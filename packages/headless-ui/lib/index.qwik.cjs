"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
function moveFocusToDialog(el, focusElement = false) {
  let focused = el.querySelector("[autofocus]");
  if (!focused && focusElement)
    focused = el;
  focused?.focus();
}
const QwikHTMLElement = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  const props1 = qwik._restProps(props, [
    "tag"
  ]);
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: props.tag ? /* @__PURE__ */ qwik._jsxC(props.tag, {
      ...props1,
      children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "dj_0")
    }, 0, "dj_1") : /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "dj_2")
  }, 1, "dj_3");
}, "QwikHTMLElement_component_bEP4kKLrA50"));
const Collapse = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const id = qwik.useId();
  qwik.useStylesScopedQrl(/* @__PURE__ */ qwik.inlinedQrl(`
  div[hidden] {
    display: none;
  }
  [role="button"] {
    cursor: pointer;
  }
`, "Collapse_component_useStylesScoped_n6oJGUNCH40"));
  const defaultSignal = qwik.useSignal(false);
  const state = qwik.useStore({
    open: props.open ?? defaultSignal,
    id: props.id ?? id
  });
  return /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "details";
    },
    ...props.rootProps,
    children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
          ...props.wrappers?.trigger,
          children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
            style: {
              cursor: "pointer"
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
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_0ClSkCIpIN4", [
              state
            ]),
            onKeyDown$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
              const [state2] = qwik.useLexicalScope();
              if (e.key === "Enter" || e.key === " ")
                state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onKeyDown_WMlrdiGwILs", [
              state
            ]),
            ...props.triggerProps,
            children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "trigger",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "vw_0"),
            [qwik._IMMUTABLE]: {
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
          }, 0, "vw_1")
        }, 0, "vw_2"),
        /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
          ...props.wrappers?.content,
          children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
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
            children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "vw_3"),
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
          }, 0, "vw_4")
        }, 0, "vw_5")
      ]
    }, 0, "vw_6"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "details", [
        props
      ], 'p0.rootProps?.tag||"details"')
    }
  }, 0, "vw_7");
}, "Collapse_component_oSHZysc7cvM"));
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
`, "Dialog_component_useStyles_fwdn9cAxUmY"));
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
      moveFocusToDialog(dialogEl2.value);
    } else if (dialogEl2.value)
      dialogEl2.value.close();
  }, "Dialog_component_useVisibleTask_U0vsW3cI07A", [
    dialogEl,
    state
  ]), {
    strategy: props?.strategy ?? "document-ready"
  });
  qwik.useOnDocument(`keydown`, /* @__PURE__ */ qwik.inlinedQrl((e) => {
    const [state2] = qwik.useLexicalScope();
    if (e.key === "Escape" && state2.open.value)
      state2.open.value = false;
  }, "Dialog_component_useOnDocument_YFbY0sUV9Ik", [
    state
  ]));
  return /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    ...props.rootProps,
    children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        props.triggerButton && /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
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
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_wL2uy03u0uc", [
            state
          ]),
          children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
            name: "trigger",
            [qwik._IMMUTABLE]: {
              name: qwik._IMMUTABLE
            }
          }, 3, "w1_0"),
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
        }, 0, "w1_1"),
        /* @__PURE__ */ qwik._jsxS("dialog", {
          ref: dialogEl,
          ...props?.dialogProps,
          children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
            get tag() {
              return props.contentProps?.tag || "article";
            },
            ...props?.contentProps,
            children: [
              /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
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
                  }, 3, "w1_2"),
                  props?.closeButton && /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
                    get tag() {
                      return props.closeProps?.tag || "button";
                    },
                    type: "button",
                    ...props?.closeProps,
                    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
                      const [state2] = qwik.useLexicalScope();
                      return state2.open.value = false;
                    }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_C2Y8UoR7c8Y", [
                      state
                    ]),
                    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                      name: "close",
                      [qwik._IMMUTABLE]: {
                        name: qwik._IMMUTABLE
                      }
                    }, 3, "w1_3"),
                    [qwik._IMMUTABLE]: {
                      tag: qwik._fnSignal((p0) => p0.closeProps?.tag || "button", [
                        props
                      ], 'p0.closeProps?.tag||"button"'),
                      type: qwik._IMMUTABLE,
                      onClick$: qwik._IMMUTABLE
                    }
                  }, 0, "w1_4")
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
              }, 0, "w1_5"),
              /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
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
                }, 3, "w1_6"),
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.descriptionProps?.tag || "p", [
                    props
                  ], 'p0.descriptionProps?.tag||"p"'),
                  id: qwik._fnSignal((p0) => p0.descriptionId, [
                    state
                  ], "p0.descriptionId")
                }
              }, 0, "w1_7"),
              /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
                ...props.wrappers?.content,
                children: [
                  /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "w1_8"),
                  /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                    name: "content",
                    [qwik._IMMUTABLE]: {
                      name: qwik._IMMUTABLE
                    }
                  }, 3, "w1_9")
                ]
              }, 0, "w1_10"),
              /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
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
                }, 3, "w1_11"),
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.footerProps?.tag || "footer", [
                    props
                  ], 'p0.footerProps?.tag||"footer"'),
                  class: qwik._fnSignal((p0) => `${p0.footerProps?.class || ""} qb-dialog-footer`, [
                    props
                  ], '`${p0.footerProps?.class||""} qb-dialog-footer`')
                }
              }, 0, "w1_12")
            ],
            [qwik._IMMUTABLE]: {
              tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "article", [
                props
              ], 'p0.contentProps?.tag||"article"')
            }
          }, 0, "w1_13"),
          onClick$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
            const [dialogEl2, state2] = qwik.useLexicalScope();
            e.target === dialogEl2.value && state2.role !== "alertdialog" && (state2.open.value = false);
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_onClick_mgZpOBpuUUI", [
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
    }, 0, "w1_14"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"')
    }
  }, 0, "w1_15");
}, "Dialog_component_YMDBpsULtWk"));
const Dropdown = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const defaultSignal = qwik.useSignal(props.lockOpen ?? false);
  const open = props.open ?? defaultSignal;
  return /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    get "aria-label"() {
      return props.rootProps?.["aria-label"] || props.label;
    },
    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
      const [open2] = qwik.useLexicalScope();
      return open2.value = !open2.value;
    }, "Dropdown_component_QwikHTMLElement_onClick_BW7EOjZlpBQ", [
      open
    ]),
    role: "list",
    ...props.rootProps,
    children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
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
            }, 3, "8Y_0")
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
        }, 0, "8Y_1"),
        /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
          role: "listbox",
          hidden: !props.lockOpen && !open?.value,
          get tag() {
            return props.contentProps?.tag || "ul";
          },
          ...props.contentProps,
          children: [
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "8Y_2"),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "content",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "8Y_3"),
            props.items?.map((item, i) => /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
              tag: item.itemWrapperProps?.tag || "li",
              ...item.itemWrapperProps,
              children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
                tag: item.itemProps?.tag || "a",
                ...item.itemProps,
                children: [
                  /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
                    ...item.labelBeforeProps
                  }, 0, "8Y_4"),
                  /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
                    ...item.labelWrapperProps,
                    children: qwik._wrapSignal(item, "label")
                  }, 0, "8Y_5"),
                  /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
                    ...item.labelAfterProps
                  }, 0, "8Y_6")
                ]
              }, 0, "8Y_7")
            }, 0, item.key ?? i)),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "content_after",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "8Y_8")
          ],
          [qwik._IMMUTABLE]: {
            role: qwik._IMMUTABLE,
            tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "ul", [
              props
            ], 'p0.contentProps?.tag||"ul"')
          }
        }, 0, "8Y_9")
      ]
    }, 0, "8Y_10"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"'),
      "aria-label": qwik._fnSignal((p0) => p0.rootProps?.["aria-label"] || p0.label, [
        props
      ], 'p0.rootProps?.["aria-label"]||p0.label'),
      role: qwik._IMMUTABLE
    }
  }, 0, "8Y_11");
}, "Dropdown_component_hWeuySTMJ0E"));
exports.Collapse = Collapse;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
