import { componentQrl, inlinedQrl, _jsxBranch, _restProps, _jsxC, Slot, useId, useStylesScopedQrl, useSignal, useStore, useLexicalScope, _IMMUTABLE, _fnSignal, useStylesQrl, useVisibleTaskQrl, useOnDocument, _jsxS, _wrapSignal, _wrapProp, _jsxQ } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
function moveFocusToDialog(el, focusElement = false) {
  let focused = el.querySelector("[autofocus]");
  if (!focused && focusElement)
    focused = el;
  focused?.focus();
}
const QwikHTMLElement = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  _jsxBranch();
  const props1 = _restProps(props, [
    "tag"
  ]);
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: props.tag ? /* @__PURE__ */ _jsxC(props.tag, {
      ...props1,
      children: /* @__PURE__ */ _jsxC(Slot, null, 3, "dj_0")
    }, 0, "dj_1") : /* @__PURE__ */ _jsxC(Slot, null, 3, "dj_2")
  }, 1, "dj_3");
}, "QwikHTMLElement_component_bEP4kKLrA50"));
const Collapse = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const id = useId();
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(`
  div[hidden] {
    display: none;
  }
  [role="button"] {
    cursor: pointer;
  }
`, "Collapse_component_useStylesScoped_n6oJGUNCH40"));
  const defaultSignal = useSignal(false);
  const state = useStore({
    open: props.open ?? defaultSignal,
    id: props.id ?? id
  });
  return /* @__PURE__ */ _jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "details";
    },
    ...props.rootProps,
    children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          ...props.wrappers?.trigger,
          children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
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
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [state2] = useLexicalScope();
              return state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_0ClSkCIpIN4", [
              state
            ]),
            onKeyDown$: /* @__PURE__ */ inlinedQrl((e) => {
              const [state2] = useLexicalScope();
              if (e.key === "Enter" || e.key === " ")
                state2.open.value = !state2.open.value;
            }, "Collapse_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onKeyDown_WMlrdiGwILs", [
              state
            ]),
            ...props.triggerProps,
            children: /* @__PURE__ */ _jsxC(Slot, {
              name: "trigger",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "vw_0"),
            [_IMMUTABLE]: {
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
          }, 0, "vw_1")
        }, 0, "vw_2"),
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
            children: /* @__PURE__ */ _jsxC(Slot, null, 3, "vw_3"),
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
          }, 0, "vw_4")
        }, 0, "vw_5")
      ]
    }, 0, "vw_6"),
    [_IMMUTABLE]: {
      tag: _fnSignal((p0) => p0.rootProps?.tag || "details", [
        props
      ], 'p0.rootProps?.tag||"details"')
    }
  }, 0, "vw_7");
}, "Collapse_component_oSHZysc7cvM"));
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
`, "Dialog_component_useStyles_fwdn9cAxUmY"));
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
  }, "Dialog_component_useVisibleTask_U0vsW3cI07A", [
    dialogEl,
    state
  ]), {
    strategy: props?.strategy ?? "document-ready"
  });
  useOnDocument(`keydown`, /* @__PURE__ */ inlinedQrl((e) => {
    const [state2] = useLexicalScope();
    if (e.key === "Escape" && state2.open.value)
      state2.open.value = false;
  }, "Dialog_component_useOnDocument_YFbY0sUV9Ik", [
    state
  ]));
  return /* @__PURE__ */ _jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    ...props.rootProps,
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
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_wL2uy03u0uc", [
            state
          ]),
          children: /* @__PURE__ */ _jsxC(Slot, {
            name: "trigger",
            [_IMMUTABLE]: {
              name: _IMMUTABLE
            }
          }, 3, "w1_0"),
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
        }, 0, "w1_1"),
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
                  }, 3, "w1_2"),
                  props?.closeButton && /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                    get tag() {
                      return props.closeProps?.tag || "button";
                    },
                    type: "button",
                    ...props?.closeProps,
                    onClick$: /* @__PURE__ */ inlinedQrl(() => {
                      const [state2] = useLexicalScope();
                      return state2.open.value = false;
                    }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_C2Y8UoR7c8Y", [
                      state
                    ]),
                    children: /* @__PURE__ */ _jsxC(Slot, {
                      name: "close",
                      [_IMMUTABLE]: {
                        name: _IMMUTABLE
                      }
                    }, 3, "w1_3"),
                    [_IMMUTABLE]: {
                      tag: _fnSignal((p0) => p0.closeProps?.tag || "button", [
                        props
                      ], 'p0.closeProps?.tag||"button"'),
                      type: _IMMUTABLE,
                      onClick$: _IMMUTABLE
                    }
                  }, 0, "w1_4")
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
              }, 0, "w1_5"),
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
                }, 3, "w1_6"),
                [_IMMUTABLE]: {
                  tag: _fnSignal((p0) => p0.descriptionProps?.tag || "p", [
                    props
                  ], 'p0.descriptionProps?.tag||"p"'),
                  id: _fnSignal((p0) => p0.descriptionId, [
                    state
                  ], "p0.descriptionId")
                }
              }, 0, "w1_7"),
              /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                ...props.wrappers?.content,
                children: [
                  /* @__PURE__ */ _jsxC(Slot, null, 3, "w1_8"),
                  /* @__PURE__ */ _jsxC(Slot, {
                    name: "content",
                    [_IMMUTABLE]: {
                      name: _IMMUTABLE
                    }
                  }, 3, "w1_9")
                ]
              }, 0, "w1_10"),
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
                }, 3, "w1_11"),
                [_IMMUTABLE]: {
                  tag: _fnSignal((p0) => p0.footerProps?.tag || "footer", [
                    props
                  ], 'p0.footerProps?.tag||"footer"'),
                  class: _fnSignal((p0) => `${p0.footerProps?.class || ""} qb-dialog-footer`, [
                    props
                  ], '`${p0.footerProps?.class||""} qb-dialog-footer`')
                }
              }, 0, "w1_12")
            ],
            [_IMMUTABLE]: {
              tag: _fnSignal((p0) => p0.contentProps?.tag || "article", [
                props
              ], 'p0.contentProps?.tag||"article"')
            }
          }, 0, "w1_13"),
          onClick$: /* @__PURE__ */ inlinedQrl((e) => {
            const [dialogEl2, state2] = useLexicalScope();
            e.target === dialogEl2.value && state2.role !== "alertdialog" && (state2.open.value = false);
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_onClick_mgZpOBpuUUI", [
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
    }, 0, "w1_14"),
    [_IMMUTABLE]: {
      tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"')
    }
  }, 0, "w1_15");
}, "Dialog_component_YMDBpsULtWk"));
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
    }, "Dropdown_component_QwikHTMLElement_onClick_BW7EOjZlpBQ", [
      open
    ]),
    role: "list",
    ...props.rootProps,
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
            }, 3, "8Y_0")
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
        }, 0, "8Y_1"),
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          role: "listbox",
          hidden: !props.lockOpen && !open?.value,
          get tag() {
            return props.contentProps?.tag || "ul";
          },
          ...props.contentProps,
          children: [
            /* @__PURE__ */ _jsxC(Slot, null, 3, "8Y_2"),
            /* @__PURE__ */ _jsxC(Slot, {
              name: "content",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "8Y_3"),
            props.items?.map((item, i) => /* @__PURE__ */ _jsxC(QwikHTMLElement, {
              tag: item.itemWrapperProps?.tag || "li",
              ...item.itemWrapperProps,
              children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                tag: item.itemProps?.tag || "a",
                ...item.itemProps,
                children: [
                  /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                    ...item.labelBeforeProps
                  }, 0, "8Y_4"),
                  /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                    ...item.labelWrapperProps,
                    children: _wrapSignal(item, "label")
                  }, 0, "8Y_5"),
                  /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                    ...item.labelAfterProps
                  }, 0, "8Y_6")
                ]
              }, 0, "8Y_7")
            }, 0, item.key ?? i)),
            /* @__PURE__ */ _jsxC(Slot, {
              name: "content_after",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "8Y_8")
          ],
          [_IMMUTABLE]: {
            role: _IMMUTABLE,
            tag: _fnSignal((p0) => p0.contentProps?.tag || "ul", [
              props
            ], 'p0.contentProps?.tag||"ul"')
          }
        }, 0, "8Y_9")
      ]
    }, 0, "8Y_10"),
    [_IMMUTABLE]: {
      tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"'),
      "aria-label": _fnSignal((p0) => p0.rootProps?.["aria-label"] || p0.label, [
        props
      ], 'p0.rootProps?.["aria-label"]||p0.label'),
      role: _IMMUTABLE
    }
  }, 0, "8Y_11");
}, "Dropdown_component_hWeuySTMJ0E"));
const Toggle = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const defaultSignal = useSignal(false);
  const defaultId = useId();
  const id = props.id ?? defaultId;
  const checked = props.checked ?? defaultSignal;
  return /* @__PURE__ */ _jsxC(Fragment, {
    children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
      get tag() {
        return props.rootProps?.tag || "div";
      },
      ...props.rootProps,
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
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_hNj9hv0igPc", [
              checked
            ]),
            children: [
              /* @__PURE__ */ _jsxC(Slot, {
                name: "label",
                [_IMMUTABLE]: {
                  name: _IMMUTABLE
                }
              }, 3, "Cw_0"),
              _fnSignal((p0) => p0.label ? p0.label : "", [
                props
              ], 'p0.label?p0.label:""')
            ],
            [_IMMUTABLE]: {
              tag: _fnSignal((p0) => p0.labelProps?.tag || "label", [
                props
              ], 'p0.labelProps?.tag||"label"')
            }
          }, 0, "Cw_1"),
          /* @__PURE__ */ _jsxC(QwikHTMLElement, {
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
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [checked2] = useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_1_4yy3wNhrKzg", [
              checked
            ]),
            ...props.switchProps,
            children: [
              /* @__PURE__ */ _jsxC(Slot, {
                name: "button",
                [_IMMUTABLE]: {
                  name: _IMMUTABLE
                }
              }, 3, "Cw_2"),
              /* @__PURE__ */ _jsxC(QwikHTMLElement, {
                "data-state": checked.value ? "checked" : "off",
                get tag() {
                  return props.switchProps?.tag || "span";
                },
                ...props.thumbProps,
                children: /* @__PURE__ */ _jsxC(Slot, {
                  name: "thumb",
                  [_IMMUTABLE]: {
                    name: _IMMUTABLE
                  }
                }, 3, "Cw_3"),
                [_IMMUTABLE]: {
                  tag: _fnSignal((p0) => p0.switchProps?.tag || "span", [
                    props
                  ], 'p0.switchProps?.tag||"span"')
                }
              }, 0, "Cw_4")
            ],
            [_IMMUTABLE]: {
              type: _fnSignal((p0) => p0.switchProps?.type || "button", [
                props
              ], 'p0.switchProps?.type||"button"'),
              role: _fnSignal((p0) => p0.switchProps?.role || "switch", [
                props
              ], 'p0.switchProps?.role||"switch"'),
              "aria-checked": _wrapProp(checked, "value"),
              tag: _fnSignal((p0) => p0.switchProps?.tag || "button", [
                props
              ], 'p0.switchProps?.tag||"button"')
            }
          }, 0, "Cw_5"),
          /* @__PURE__ */ _jsxQ("input", {
            checked: _wrapSignal(checked, "value"),
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [checked2] = useLexicalScope();
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
      [_IMMUTABLE]: {
        tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
          props
        ], 'p0.rootProps?.tag||"div"')
      }
    }, 0, "Cw_7")
  }, 1, "Cw_8");
}, "Toggle_component_8fJITTfl13Q"));
export {
  Collapse,
  Dialog,
  Dropdown,
  Toggle
};
