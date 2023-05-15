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
const Toggle = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const defaultSignal = qwik.useSignal(false);
  const defaultId = qwik.useId();
  const id = props.id ?? defaultId;
  const checked = props.checked ?? defaultSignal;
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
      get tag() {
        return props.rootProps?.tag || "div";
      },
      ...props.rootProps,
      children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
        ...props.wrappers?.rootChildren,
        children: [
          /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
            for: id,
            get tag() {
              return props.labelProps?.tag || "label";
            },
            ...props.labelProps,
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [checked2] = qwik.useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_hNj9hv0igPc", [
              checked
            ]),
            children: [
              /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                name: "label",
                [qwik._IMMUTABLE]: {
                  name: qwik._IMMUTABLE
                }
              }, 3, "Cw_0"),
              qwik._fnSignal((p0) => p0.label ? p0.label : "", [
                props
              ], 'p0.label?p0.label:""')
            ],
            [qwik._IMMUTABLE]: {
              tag: qwik._fnSignal((p0) => p0.labelProps?.tag || "label", [
                props
              ], 'p0.labelProps?.tag||"label"')
            }
          }, 0, "Cw_1"),
          /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
            for: id,
            get type() {
              return props.switchProps?.type || "button";
            },
            get role() {
              return props.switchProps?.role || "switch";
            },
            get "aria-checked"() {
              return checked.value;
            },
            "data-state": checked.value ? "checked" : "unchecked",
            id,
            get tag() {
              return props.switchProps?.tag || "button";
            },
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [checked2] = qwik.useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_1_4yy3wNhrKzg", [
              checked
            ]),
            ...props.switchProps,
            children: [
              /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                name: "button",
                [qwik._IMMUTABLE]: {
                  name: qwik._IMMUTABLE
                }
              }, 3, "Cw_2"),
              /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
                "data-state": checked.value ? "checked" : "off",
                get tag() {
                  return props.switchProps?.tag || "span";
                },
                ...props.thumbProps,
                children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                  name: "thumb",
                  [qwik._IMMUTABLE]: {
                    name: qwik._IMMUTABLE
                  }
                }, 3, "Cw_3"),
                [qwik._IMMUTABLE]: {
                  tag: qwik._fnSignal((p0) => p0.switchProps?.tag || "span", [
                    props
                  ], 'p0.switchProps?.tag||"span"')
                }
              }, 0, "Cw_4")
            ],
            [qwik._IMMUTABLE]: {
              type: qwik._fnSignal((p0) => p0.switchProps?.type || "button", [
                props
              ], 'p0.switchProps?.type||"button"'),
              role: qwik._fnSignal((p0) => p0.switchProps?.role || "switch", [
                props
              ], 'p0.switchProps?.role||"switch"'),
              "aria-checked": qwik._wrapProp(checked, "value"),
              tag: qwik._fnSignal((p0) => p0.switchProps?.tag || "button", [
                props
              ], 'p0.switchProps?.tag||"button"')
            }
          }, 0, "Cw_5"),
          /* @__PURE__ */ qwik._jsxQ("input", {
            checked: qwik._wrapSignal(checked, "value"),
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [checked2] = qwik.useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_input_onClick_UlUt7fUGL9k", [
              checked
            ])
          }, {
            type: "checkbox",
            "aria-hidden": "true",
            style: "transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 42px; height: 25px;",
            tabIndex: -1,
            value: "on"
          }, null, 2, null)
        ]
      }, 0, "Cw_6"),
      [qwik._IMMUTABLE]: {
        tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
          props
        ], 'p0.rootProps?.tag||"div"')
      }
    }, 0, "Cw_7")
  }, 1, "Cw_8");
}, "Toggle_component_8fJITTfl13Q"));
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
  }, "Tabs_component_useTask_0N0C0QE0xrw", [
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
  }, "Tabs_component_useVisibleTask_xvgaFSc3jr8", [
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
  }, "Tabs_component_useVisibleTask_1_UuFDBoOXONE", [
    id,
    props,
    selected
  ]));
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
      get tag() {
        return props.rootProps?.tag || "div";
      },
      ...props.rootProps,
      id,
      children: [
        /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
          id: `tablist-${id}`,
          tag: "h3",
          ...props.labelProps,
          children: [
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "label",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "oI_0"),
            qwik._fnSignal((p0) => p0.label ? p0.label : "", [
              props
            ], 'p0.label?p0.label:""')
          ],
          [qwik._IMMUTABLE]: {
            tag: qwik._IMMUTABLE
          }
        }, 0, "oI_1"),
        /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
          role: "tablist",
          ...props.wrappers?.tabList,
          "aria-labelledby": `tablist-${id}`,
          children: props.tabs?.map((tab, i) => /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
            role: "tab",
            id: tab.tabProps?.id ?? `tab-${id}-${i}`,
            tag: "button",
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [i2, selected2] = qwik.useLexicalScope();
              return selected2.value = i2;
            }, "Tabs_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_IkXBwVoy0vQ", [
              i,
              selected
            ]),
            "aria-selected": selected.value === i ? "true" : "false",
            "aria-controls": tab?.contentProps?.id ?? `tabpanel-${id}-${i}`,
            tabIndex: i === 0 ? 0 : -1,
            ...tab.tabProps,
            children: [
              /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                name: tab.tabSlotName ?? `tab-${i + 1}`
              }, 3, "oI_2"),
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
        }, 0, "oI_3"),
        props.tabs?.map((tab, i) => /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
          tag: "div",
          role: "tabpanel",
          hidden: selected.value !== i,
          id: tab.contentProps?.id ?? `tabpanel-${id}-${i}`,
          "aria-labelledby": tab.tabProps?.id ?? `tab-${id}-${i}`,
          ...tab.contentProps,
          children: [
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: tab.contentSlotName ?? `tabcontent-${i + 1}`
            }, 3, "oI_4"),
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
    }, 0, "oI_5")
  }, 1, "oI_6");
}, "Tabs_component_NQO8Bi30zrU"));
exports.Collapse = Collapse;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
exports.Tabs = Tabs;
exports.Toggle = Toggle;
