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
              "aria-controls": qwik._fnSignal((p0) => p0.id, [
                state
              ], "p0.id"),
              "aria-expanded": qwik._fnSignal((p0) => p0.open?.value, [
                state
              ], "p0.open?.value"),
              id: qwik._fnSignal((p0) => p0.id + "-trigger", [
                state
              ], 'p0.id+"-trigger"'),
              onClick$: qwik._IMMUTABLE,
              onKeyDown$: qwik._IMMUTABLE,
              style: qwik._IMMUTABLE,
              tag: qwik._fnSignal((p0) => p0.triggerProps?.tag || "summary", [
                props
              ], 'p0.triggerProps?.tag||"summary"')
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
              "aria-labelledby": qwik._fnSignal((p0) => p0.id + "-trigger", [
                state
              ], 'p0.id+"-trigger"'),
              hidden: qwik._fnSignal((p0) => !p0.open?.value, [
                state
              ], "!p0.open?.value"),
              id: qwik._fnSignal((p0) => p0.id, [
                state
              ], "p0.id"),
              role: qwik._IMMUTABLE,
              tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "div", [
                props
              ], 'p0.contentProps?.tag||"div"')
            }
          }, 0, "bM_4")
        }, 0, "bM_5")
      ]
    }, 0, "bM_6"),
    class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
    [qwik._IMMUTABLE]: {
      open: qwik._fnSignal((p0) => p0.open.value, [
        state
      ], "p0.open.value"),
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "details", [
        props
      ], 'p0.rootProps?.tag||"details"')
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
    children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        props.triggerButton && /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          get tag() {
            return props.triggerProps?.tag || "button";
          },
          "aria-haspopup": "dialog",
          type: "button",
          get "aria-expanded"() {
            return state.open.value;
          },
          ...props?.triggerProps,
          children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
            name: "trigger",
            [qwik._IMMUTABLE]: {
              name: qwik._IMMUTABLE
            }
          }, 3, "M4_0"),
          onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
            const [state2] = qwik.useLexicalScope();
            return state2.open.value = true;
          }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_uTuqsxdOhQ8", [
            state
          ]),
          [qwik._IMMUTABLE]: {
            "aria-expanded": qwik._fnSignal((p0) => p0.open.value, [
              state
            ], "p0.open.value"),
            "aria-haspopup": qwik._IMMUTABLE,
            onClick$: qwik._IMMUTABLE,
            tag: qwik._fnSignal((p0) => p0.triggerProps?.tag || "button", [
              props
            ], 'p0.triggerProps?.tag||"button"'),
            type: qwik._IMMUTABLE
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
                    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                      name: "close",
                      [qwik._IMMUTABLE]: {
                        name: qwik._IMMUTABLE
                      }
                    }, 3, "M4_3"),
                    onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
                      const [state2] = qwik.useLexicalScope();
                      return state2.open.value = false;
                    }, "Dialog_component_QwikHTMLElement_QwikHTMLElement_dialog_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_9fsSg0rbilI", [
                      state
                    ]),
                    [qwik._IMMUTABLE]: {
                      onClick$: qwik._IMMUTABLE,
                      tag: qwik._fnSignal((p0) => p0.closeProps?.tag || "button", [
                        props
                      ], 'p0.closeProps?.tag||"button"'),
                      type: qwik._IMMUTABLE
                    }
                  }, 0, "M4_4")
                ],
                [qwik._IMMUTABLE]: {
                  class: qwik._fnSignal((p0) => `${p0.titleProps?.class || ""} qb-dialog-header`, [
                    props
                  ], '`${p0.titleProps?.class||""} qb-dialog-header`'),
                  id: qwik._fnSignal((p0) => p0.titleId, [
                    state
                  ], "p0.titleId"),
                  tag: qwik._fnSignal((p0) => p0.titleProps?.tag || "header", [
                    props
                  ], 'p0.titleProps?.tag||"header"')
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
                  id: qwik._fnSignal((p0) => p0.descriptionId, [
                    state
                  ], "p0.descriptionId"),
                  tag: qwik._fnSignal((p0) => p0.descriptionProps?.tag || "p", [
                    props
                  ], 'p0.descriptionProps?.tag||"p"')
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
                  class: qwik._fnSignal((p0) => `${p0.footerProps?.class || ""} qb-dialog-footer`, [
                    props
                  ], '`${p0.footerProps?.class||""} qb-dialog-footer`'),
                  tag: qwik._fnSignal((p0) => p0.footerProps?.tag || "footer", [
                    props
                  ], 'p0.footerProps?.tag||"footer"')
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
          "aria-describedby": qwik._fnSignal((p0) => p0.descriptionId, [
            state
          ], "p0.descriptionId"),
          "aria-hidden": qwik._fnSignal((p0) => !p0.open.value, [
            state
          ], "!p0.open.value"),
          "aria-labelledby": qwik._fnSignal((p0) => p0.titleId, [
            state
          ], "p0.titleId"),
          "aria-modal": "true",
          hidden: qwik._fnSignal((p0) => !p0.open.value, [
            state
          ], "!p0.open.value"),
          role: qwik._fnSignal((p0) => p0.role, [
            state
          ], "p0.role"),
          tabIndex: -1
        }, 0, null)
      ]
    }, 0, "M4_14"),
    class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"')
    }
  }, 0, "M4_15");
}, "Dialog_component_TOBax2mZU8Q"));
var ToggleEvent = class extends Event {
  constructor(type, { oldState = "", newState = "", ...init } = {}) {
    super(type, init);
    this.oldState = String(oldState || "");
    this.newState = String(newState || "");
  }
};
var popoverToggleTaskQueue = /* @__PURE__ */ new WeakMap();
function queuePopoverToggleEventTask(element, oldState, newState) {
  popoverToggleTaskQueue.set(
    element,
    setTimeout(() => {
      if (!popoverToggleTaskQueue.has(element))
        return;
      element.dispatchEvent(
        new ToggleEvent("toggle", {
          cancelable: false,
          oldState,
          newState
        })
      );
    }, 0)
  );
}
var ShadowRoot = globalThis.ShadowRoot || function() {
};
var HTMLDialogElement = globalThis.HTMLDialogElement || function() {
};
var topLayerElements = /* @__PURE__ */ new WeakMap();
var autoPopoverList = /* @__PURE__ */ new WeakMap();
var visibilityState = /* @__PURE__ */ new WeakMap();
function getPopoverVisibilityState(popover) {
  return visibilityState.get(popover) || "hidden";
}
var popoverInvoker = /* @__PURE__ */ new WeakMap();
function popoverTargetAttributeActivationBehavior(element) {
  const popover = element.popoverTargetElement;
  if (!popover) {
    return;
  }
  const visibility = getPopoverVisibilityState(popover);
  if (element.popoverTargetAction === "show" && visibility === "showing") {
    return;
  }
  if (element.popoverTargetAction === "hide" && visibility === "hidden")
    return;
  if (visibility === "showing") {
    hidePopover(popover, true, true);
  } else if (checkPopoverValidity(popover, false)) {
    popoverInvoker.set(popover, element);
    showPopover(popover);
  }
}
function checkPopoverValidity(element, expectedToBeShowing) {
  if (element.popover !== "auto" && element.popover !== "manual") {
    return false;
  }
  if (!element.isConnected)
    return false;
  if (expectedToBeShowing && getPopoverVisibilityState(element) !== "showing") {
    return false;
  }
  if (!expectedToBeShowing && getPopoverVisibilityState(element) !== "hidden") {
    return false;
  }
  if (element instanceof HTMLDialogElement && element.hasAttribute("open")) {
    return false;
  }
  if (document.fullscreenElement === element)
    return false;
  return true;
}
function getStackPosition(popover) {
  if (!popover)
    return 0;
  return Array.from(autoPopoverList.get(popover.ownerDocument) || []).indexOf(
    popover
  ) + 1;
}
function topMostClickedPopover(target) {
  const clickedPopover = nearestInclusiveOpenPopover(target);
  const invokerPopover = nearestInclusiveTargetPopoverForInvoker(target);
  if (getStackPosition(clickedPopover) > getStackPosition(invokerPopover)) {
    return clickedPopover;
  }
  return invokerPopover;
}
function topMostAutoPopover(document2) {
  const documentPopovers = autoPopoverList.get(document2);
  for (const popover of documentPopovers || []) {
    if (!popover.isConnected) {
      documentPopovers.delete(popover);
    } else {
      return popover;
    }
  }
  return null;
}
function getRootNode(node) {
  if (typeof node.getRootNode === "function") {
    return node.getRootNode();
  }
  if (node.parentNode)
    return getRootNode(node.parentNode);
  return node;
}
function nearestInclusiveOpenPopover(node) {
  while (node) {
    if (node instanceof HTMLElement && node.popover === "auto" && visibilityState.get(node) === "showing") {
      return node;
    }
    node = node.parentElement || getRootNode(node);
    if (node instanceof ShadowRoot)
      node = node.host;
    if (node instanceof Document)
      return;
  }
}
function nearestInclusiveTargetPopoverForInvoker(node) {
  while (node) {
    const nodePopover = node.popoverTargetElement;
    if (nodePopover)
      return nodePopover;
    node = node.parentElement || getRootNode(node);
    if (node instanceof ShadowRoot)
      node = node.host;
    if (node instanceof Document)
      return;
  }
}
function topMostPopoverAncestor(newPopover) {
  const popoverPositions = /* @__PURE__ */ new Map();
  let i = 0;
  const document2 = newPopover.ownerDocument;
  for (const popover of autoPopoverList.get(document2) || []) {
    popoverPositions.set(popover, i);
    i += 1;
  }
  popoverPositions.set(newPopover, i);
  i += 1;
  let topMostPopoverAncestor2 = null;
  function checkAncestor(candidate) {
    const candidateAncestor = nearestInclusiveOpenPopover(candidate);
    if (candidateAncestor === null)
      return null;
    const candidatePosition = popoverPositions.get(candidateAncestor);
    if (topMostPopoverAncestor2 === null || popoverPositions.get(topMostPopoverAncestor2) < candidatePosition) {
      topMostPopoverAncestor2 = candidateAncestor;
    }
  }
  checkAncestor(newPopover?.parentElement);
  return topMostPopoverAncestor2;
}
function isFocusable(focusTarget) {
  if (focusTarget.hidden)
    return false;
  if (focusTarget instanceof HTMLButtonElement || focusTarget instanceof HTMLInputElement || focusTarget instanceof HTMLSelectElement || focusTarget instanceof HTMLTextAreaElement || focusTarget instanceof HTMLOptGroupElement || focusTarget instanceof HTMLOptionElement || focusTarget instanceof HTMLFieldSetElement) {
    if (focusTarget.disabled)
      return false;
  }
  if (focusTarget instanceof HTMLInputElement && focusTarget.type === "hidden") {
    return false;
  }
  if (focusTarget instanceof HTMLAnchorElement && focusTarget.href === "") {
    return false;
  }
  return focusTarget.tabIndex !== -1;
}
function focusDelegate(focusTarget) {
  if (focusTarget.shadowRoot && focusTarget.shadowRoot.delegatesFocus !== true) {
    return null;
  }
  let whereToLook = focusTarget;
  if (whereToLook.shadowRoot) {
    whereToLook = whereToLook.shadowRoot;
  }
  const autoFocusDelegate = whereToLook.querySelector("[autofocus]");
  if (autoFocusDelegate) {
    return autoFocusDelegate;
  }
  const walker = focusTarget.ownerDocument.createTreeWalker(
    whereToLook,
    NodeFilter.SHOW_ELEMENT
  );
  let descendant = walker.currentNode;
  while (descendant) {
    if (isFocusable(descendant)) {
      return descendant;
    }
    descendant = walker.nextNode();
  }
}
function popoverFocusingSteps(subject) {
  focusDelegate(subject)?.focus();
}
var previouslyFocusedElements = /* @__PURE__ */ new WeakMap();
function showPopover(element) {
  if (!checkPopoverValidity(element, false)) {
    return;
  }
  const document2 = element.ownerDocument;
  if (!element.dispatchEvent(
    new ToggleEvent("beforetoggle", {
      cancelable: true,
      oldState: "closed",
      newState: "open"
    })
  )) {
    return;
  }
  if (!checkPopoverValidity(element, false)) {
    return;
  }
  let shouldRestoreFocus = false;
  if (element.popover === "auto") {
    const originalType = element.getAttribute("popover");
    const ancestor = topMostPopoverAncestor(element) || document2;
    hideAllPopoversUntil(ancestor, false, true);
    if (originalType !== element.getAttribute("popover") || !checkPopoverValidity(element, false)) {
      return;
    }
  }
  if (!topMostAutoPopover(document2)) {
    shouldRestoreFocus = true;
  }
  previouslyFocusedElements.delete(element);
  const originallyFocusedElement = document2.activeElement;
  element.classList.add(":popover-open");
  visibilityState.set(element, "showing");
  if (!topLayerElements.has(document2)) {
    topLayerElements.set(document2, /* @__PURE__ */ new Set());
  }
  topLayerElements.get(document2).add(element);
  popoverFocusingSteps(element);
  if (element.popover === "auto") {
    if (!autoPopoverList.has(document2)) {
      autoPopoverList.set(document2, /* @__PURE__ */ new Set());
    }
    autoPopoverList.get(document2).add(element);
    setInvokerAriaExpanded(popoverInvoker.get(element), true);
  }
  if (shouldRestoreFocus && originallyFocusedElement && element.popover === "auto") {
    previouslyFocusedElements.set(element, originallyFocusedElement);
  }
  queuePopoverToggleEventTask(element, "closed", "open");
}
function hidePopover(element, focusPreviousElement = false, fireEvents = false) {
  if (!checkPopoverValidity(element, true)) {
    return;
  }
  const document2 = element.ownerDocument;
  if (element.popover === "auto") {
    hideAllPopoversUntil(element, focusPreviousElement, fireEvents);
    if (!checkPopoverValidity(element, true)) {
      return;
    }
  }
  setInvokerAriaExpanded(popoverInvoker.get(element), false);
  popoverInvoker.delete(element);
  if (fireEvents) {
    element.dispatchEvent(
      new ToggleEvent("beforetoggle", {
        oldState: "open",
        newState: "closed"
      })
    );
    if (!checkPopoverValidity(element, true)) {
      return;
    }
  }
  topLayerElements.get(document2)?.delete(element);
  autoPopoverList.get(document2)?.delete(element);
  element.classList.remove(":popover-open");
  visibilityState.set(element, "hidden");
  if (fireEvents) {
    queuePopoverToggleEventTask(element, "open", "closed");
  }
  const previouslyFocusedElement = previouslyFocusedElements.get(element);
  if (previouslyFocusedElement) {
    previouslyFocusedElements.delete(element);
    if (focusPreviousElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function closeAllOpenPopovers(document2, focusPreviousElement = false, fireEvents = false) {
  let popover = topMostAutoPopover(document2);
  while (popover) {
    hidePopover(popover, focusPreviousElement, fireEvents);
    popover = topMostAutoPopover(document2);
  }
}
function hideAllPopoversUntil(endpoint, focusPreviousElement, fireEvents) {
  const document2 = endpoint.ownerDocument || endpoint;
  if (endpoint instanceof Document) {
    return closeAllOpenPopovers(document2, focusPreviousElement, fireEvents);
  }
  let lastToHide = null;
  let foundEndpoint = false;
  for (const popover of autoPopoverList.get(document2) || []) {
    if (popover === endpoint) {
      foundEndpoint = true;
    } else if (foundEndpoint) {
      lastToHide = popover;
      break;
    }
  }
  if (!foundEndpoint) {
    return closeAllOpenPopovers(document2, focusPreviousElement, fireEvents);
  }
  while (lastToHide && getPopoverVisibilityState(lastToHide) === "showing" && autoPopoverList.get(document2)?.size) {
    hidePopover(lastToHide, focusPreviousElement, fireEvents);
  }
}
var popoverPointerDownTargets = /* @__PURE__ */ new WeakMap();
function lightDismissOpenPopovers(event) {
  if (!event.isTrusted)
    return;
  const target = event.composedPath()[0];
  if (!target)
    return;
  const document2 = target.ownerDocument;
  const topMostPopover = topMostAutoPopover(document2);
  if (!topMostPopover)
    return;
  const ancestor = topMostClickedPopover(target);
  if (ancestor && event.type === "pointerdown") {
    popoverPointerDownTargets.set(document2, ancestor);
  } else if (event.type === "pointerup") {
    const sameTarget = popoverPointerDownTargets.get(document2) === ancestor;
    popoverPointerDownTargets.delete(document2);
    if (sameTarget) {
      hideAllPopoversUntil(ancestor || document2, false, true);
    }
  }
}
var initialAriaExpandedValue = /* @__PURE__ */ new WeakMap();
function setInvokerAriaExpanded(el, force = false) {
  if (!el)
    return;
  if (!initialAriaExpandedValue.has(el)) {
    initialAriaExpandedValue.set(el, el.getAttribute("aria-expanded"));
  }
  const popover = el.popoverTargetElement;
  if (popover && popover.popover === "auto") {
    el.setAttribute("aria-expanded", String(force));
  } else {
    const initialValue = initialAriaExpandedValue.get(el);
    if (!initialValue) {
      el.removeAttribute("aria-expanded");
    } else {
      el.setAttribute("aria-expanded", initialValue);
    }
  }
}
var ShadowRoot2 = globalThis.ShadowRoot || function() {
};
function isSupported() {
  return typeof HTMLElement !== "undefined" && typeof HTMLElement.prototype === "object" && "popover" in HTMLElement.prototype;
}
function patchSelectorFn(object, name, mapper) {
  const original = object[name];
  Object.defineProperty(object, name, {
    value(selector) {
      return original.call(this, mapper(selector));
    }
  });
}
var nonEscapedPopoverSelector = /(^|[^\\]):popover-open\b/g;
function apply() {
  window.ToggleEvent = window.ToggleEvent || ToggleEvent;
  function rewriteSelector(selector) {
    if (selector?.includes(":popover-open")) {
      selector = selector.replace(
        nonEscapedPopoverSelector,
        "$1.\\:popover-open"
      );
    }
    return selector;
  }
  patchSelectorFn(Document.prototype, "querySelector", rewriteSelector);
  patchSelectorFn(Document.prototype, "querySelectorAll", rewriteSelector);
  patchSelectorFn(Element.prototype, "querySelector", rewriteSelector);
  patchSelectorFn(Element.prototype, "querySelectorAll", rewriteSelector);
  patchSelectorFn(Element.prototype, "matches", rewriteSelector);
  patchSelectorFn(Element.prototype, "closest", rewriteSelector);
  patchSelectorFn(
    DocumentFragment.prototype,
    "querySelectorAll",
    rewriteSelector
  );
  patchSelectorFn(
    DocumentFragment.prototype,
    "querySelectorAll",
    rewriteSelector
  );
  Object.defineProperties(HTMLElement.prototype, {
    popover: {
      enumerable: true,
      configurable: true,
      get() {
        if (!this.hasAttribute("popover"))
          return null;
        const value = (this.getAttribute("popover") || "").toLowerCase();
        if (value === "" || value == "auto")
          return "auto";
        return "manual";
      },
      set(value) {
        this.setAttribute("popover", value);
      }
    },
    showPopover: {
      enumerable: true,
      configurable: true,
      value() {
        showPopover(this);
      }
    },
    hidePopover: {
      enumerable: true,
      configurable: true,
      value() {
        hidePopover(this, true, true);
      }
    },
    togglePopover: {
      enumerable: true,
      configurable: true,
      value(force) {
        if (visibilityState.get(this) === "showing" && force === void 0 || force === false) {
          hidePopover(this, true, true);
        } else if (force === void 0 || force === true) {
          showPopover(this);
        }
      }
    }
  });
  const popoverTargetAssociatedElements = /* @__PURE__ */ new WeakMap();
  function applyPopoverInvokerElementMixin(ElementClass) {
    Object.defineProperties(ElementClass.prototype, {
      popoverTargetElement: {
        enumerable: true,
        configurable: true,
        set(targetElement) {
          if (targetElement === null) {
            this.removeAttribute("popovertarget");
            popoverTargetAssociatedElements.delete(this);
          } else if (!(targetElement instanceof Element)) {
            throw new TypeError(
              `popoverTargetElement must be an element or null`
            );
          } else {
            this.setAttribute("popovertarget", "");
            popoverTargetAssociatedElements.set(this, targetElement);
          }
        },
        get() {
          if (this.localName !== "button" && this.localName !== "input") {
            return null;
          }
          if (this.localName === "input" && this.type !== "reset" && this.type !== "image" && this.type !== "button") {
            return null;
          }
          if (this.disabled) {
            return null;
          }
          if (this.form && this.type === "submit") {
            return null;
          }
          const targetElement = popoverTargetAssociatedElements.get(this);
          if (targetElement && targetElement.isConnected) {
            return targetElement;
          } else if (targetElement && !targetElement.isConnected) {
            popoverTargetAssociatedElements.delete(this);
            return null;
          }
          const root = getRootNode(this);
          const idref = this.getAttribute("popovertarget");
          if ((root instanceof Document || root instanceof ShadowRoot2) && idref) {
            return root.getElementById(idref) || null;
          }
          return null;
        }
      },
      popoverTargetAction: {
        enumerable: true,
        configurable: true,
        get() {
          const value = (this.getAttribute("popovertargetaction") || "").toLowerCase();
          if (value === "show" || value === "hide")
            return value;
          return "toggle";
        },
        set(value) {
          this.setAttribute("popovertargetaction", value);
        }
      }
    });
  }
  applyPopoverInvokerElementMixin(HTMLButtonElement);
  applyPopoverInvokerElementMixin(HTMLInputElement);
  const handleInvokerActivation = (event) => {
    if (!event.isTrusted)
      return;
    const target = event.composedPath()[0];
    if (!(target instanceof Element) || target?.shadowRoot) {
      return;
    }
    const root = getRootNode(target);
    if (!(root instanceof ShadowRoot2 || root instanceof Document)) {
      return;
    }
    const invoker = target.closest("[popovertargetaction],[popovertarget]");
    if (invoker) {
      popoverTargetAttributeActivationBehavior(invoker);
      return;
    }
  };
  const onKeydown = (event) => {
    const key = event.key;
    const target = event.target;
    if (target && (key === "Escape" || key === "Esc")) {
      hideAllPopoversUntil(target.ownerDocument, true, true);
    }
  };
  const addEventListeners = (root) => {
    root.addEventListener("click", handleInvokerActivation);
    root.addEventListener("keydown", onKeydown);
    root.addEventListener("pointerdown", lightDismissOpenPopovers);
    root.addEventListener("pointerup", lightDismissOpenPopovers);
  };
  addEventListeners(document);
}
const popoverStyles = "[popover] {\n  position: absolute;\n  z-index: 90;\n}\n@supports not selector([popover]:open) {\n  [popover]:not(.\\:popover-open, dialog[open]) {\n    display: none;\n  }\n  [anchor].\\:popover-open {\n    inset: auto;\n  }\n}\n@supports not selector([popover]:popover-open) {\n  [popover]:not(.\\:popover-open, dialog[open]) {\n    display: none;\n  }\n  [anchor].\\:popover-open {\n    inset: auto;\n  }\n}\n";
const Dropdown = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesQrl(/* @__PURE__ */ qwik.inlinedQrl(popoverStyles, "Dropdown_component_useStyles_3Odsr6GZh5E"));
  const id = qwik.useId();
  const popoverId = qwik.useId();
  const defaultSignal = qwik.useSignal(false);
  const open = props.open ?? defaultSignal;
  const root = qwik.useSignal();
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(() => {
    if (!isSupported())
      apply();
  }, "Dropdown_component_useVisibleTask_Qq2GPBh5jLs"));
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl((ctx) => {
    const [open2, root2] = qwik.useLexicalScope();
    ctx.track(() => root2.value);
    ctx.track(() => open2.value);
    if (root2.value) {
      const popover = root2.value.querySelector("[popover]");
      if (popover) {
        const isOpen = popover.matches(":popover-open");
        if (open2.value && "showPopover" in popover && typeof popover.showPopover === "function" && !isOpen)
          popover.showPopover();
        else if (!open2.value && "hidePopover" in popover && typeof popover.hidePopover === "function" && isOpen)
          popover.hidePopover();
      }
    }
  }, "Dropdown_component_useVisibleTask_1_hD9KLeuNPYg", [
    open,
    root
  ]));
  const timer = qwik.useSignal();
  const handleMouseEnter = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [open2, props2, timer2] = qwik.useLexicalScope();
    if (props2.hoverMode) {
      clearTimeout(timer2.value);
      if (!open2.value)
        open2.value = true;
    }
  }, "Dropdown_component_handleMouseEnter_r0j13ISVZp0", [
    open,
    props,
    timer
  ]);
  const handleMouseLeave = /* @__PURE__ */ qwik.inlinedQrl(() => {
    const [open2, props2, timer2] = qwik.useLexicalScope();
    if (props2.hoverMode)
      timer2.value = setTimeout(() => {
        if (open2.value)
          open2.value = false;
      }, props2.hoverCloseDelay ?? 100);
  }, "Dropdown_component_handleMouseLeave_fV89ujPviKM", [
    open,
    props,
    timer
  ]);
  return /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
    ref: root,
    get id() {
      return props.id ?? id;
    },
    get tag() {
      return props.rootProps?.tag || "div";
    },
    get "aria-label"() {
      return props.rootProps?.["aria-label"] || props.label;
    },
    get style() {
      return {
        position: "relative"
      };
    },
    ...props.rootProps,
    children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          get tag() {
            return props.triggerProps?.tag || "button";
          },
          get popovertarget() {
            return props.popoverId ?? popoverId;
          },
          popoverTargetAction: "toggle",
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
          onMouseEnter$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
            const [handleMouseEnter2, props2] = qwik.useLexicalScope();
            handleMouseEnter2();
            props2.triggerProps?.onMouseEnter?.(e);
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onMouseEnter_E0reuP06kHk", [
            handleMouseEnter,
            props
          ]),
          onMouseLeave$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
            const [handleMouseLeave2, props2] = qwik.useLexicalScope();
            handleMouseLeave2();
            props2.triggerProps?.onMouseLeave?.(e);
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onMouseLeave_Bo5eCuMQN64", [
            handleMouseLeave,
            props
          ]),
          [qwik._IMMUTABLE]: {
            onMouseEnter$: qwik._IMMUTABLE,
            onMouseLeave$: qwik._IMMUTABLE,
            popoverTargetAction: qwik._IMMUTABLE,
            popovertarget: qwik._fnSignal((p0, p1) => p1.popoverId ?? p0, [
              popoverId,
              props
            ], "p1.popoverId??p0"),
            tag: qwik._fnSignal((p0) => p0.triggerProps?.tag || "button", [
              props
            ], 'p0.triggerProps?.tag||"button"')
          }
        }, 0, "H9_1"),
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          get id() {
            return props.popoverId ?? popoverId;
          },
          get tag() {
            return props.contentProps?.tag || "ul";
          },
          role: "list",
          get popover() {
            return props.popover ?? "auto";
          },
          onToggle$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
            const [open2] = qwik.useLexicalScope();
            open2.value = e.newState === "open";
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onToggle_GIIh9aw9KAA", [
            open
          ]),
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
              role: "listitem",
              tag: item.itemWrapperProps?.tag || "li",
              ...item.itemWrapperProps,
              children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
                tag: item.itemProps?.tag || "a",
                ...item.itemProps,
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
                ],
                class: utils.serializeClass(item.class) + " " + utils.serializeClass(item.itemProps?.class)
              }, 0, "H9_7"),
              [qwik._IMMUTABLE]: {
                role: qwik._IMMUTABLE
              }
            }, 0, item.key ?? i)),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "content_after",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "H9_8")
          ],
          onMouseEnter$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
            const [handleMouseEnter2, props2] = qwik.useLexicalScope();
            handleMouseEnter2();
            props2.triggerProps?.onMouseEnter?.(e);
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onMouseEnter_1_WUZ6SY7VURs", [
            handleMouseEnter,
            props
          ]),
          onMouseLeave$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
            const [handleMouseLeave2, props2] = qwik.useLexicalScope();
            handleMouseLeave2();
            props2.triggerProps?.onMouseLeave?.(e);
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onMouseLeave_1_zNCV0axuIWA", [
            handleMouseLeave,
            props
          ]),
          [qwik._IMMUTABLE]: {
            id: qwik._fnSignal((p0, p1) => p1.popoverId ?? p0, [
              popoverId,
              props
            ], "p1.popoverId??p0"),
            onMouseEnter$: qwik._IMMUTABLE,
            onMouseLeave$: qwik._IMMUTABLE,
            popover: qwik._fnSignal((p0) => p0.popover ?? "auto", [
              props
            ], 'p0.popover??"auto"'),
            role: qwik._IMMUTABLE,
            tag: qwik._fnSignal((p0) => p0.contentProps?.tag || "ul", [
              props
            ], 'p0.contentProps?.tag||"ul"')
          }
        }, 0, "H9_9")
      ]
    }, 0, "H9_10"),
    class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
    [qwik._IMMUTABLE]: {
      "aria-label": qwik._fnSignal((p0) => p0.rootProps?.["aria-label"] || p0.label, [
        props
      ], 'p0.rootProps?.["aria-label"]||p0.label'),
      id: qwik._fnSignal((p0, p1) => p1.id ?? p0, [
        id,
        props
      ], "p1.id??p0"),
      ref: qwik._IMMUTABLE,
      style: qwik._IMMUTABLE,
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"')
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
  qwik.useTaskQrl(/* @__PURE__ */ qwik.inlinedQrl((ctx) => {
    const [props2, selected2] = qwik.useLexicalScope();
    ctx.track(() => selected2.value);
    if (props2.onChange$)
      props2.onChange$(selected2.value);
  }, "Tabs_component_useTask_1_mh2SPJhKx0o", [
    props,
    selected
  ]));
  return /* @__PURE__ */ qwik._jsxC(jsxRuntime.Fragment, {
    children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
      get tag() {
        return props.rootProps?.tag || "div";
      },
      ...props.rootProps,
      children: [
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          id: `tablist-${id}`,
          tag: "h3",
          ...props.labelProps,
          children: [
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "jt_0"),
            /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
              name: "label",
              [qwik._IMMUTABLE]: {
                name: qwik._IMMUTABLE
              }
            }, 3, "jt_1"),
            qwik._fnSignal((p0) => p0.label ? p0.label : "", [
              props
            ], 'p0.label?p0.label:""')
          ],
          [qwik._IMMUTABLE]: {
            tag: qwik._IMMUTABLE
          }
        }, 0, "jt_2"),
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          role: "tablist",
          tag: "div",
          ...props?.tabListProps,
          "aria-labelledby": `tablist-${id}`,
          children: props.tabs?.map((tab, i) => /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
            "aria-controls": tab?.contentProps?.id ?? `tabpanel-${id}-${i}`,
            "aria-selected": selected.value === i ? "true" : "false",
            id: tab.tabProps?.id ?? `tab-${id}-${i}`,
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [i2, selected2] = qwik.useLexicalScope();
              return selected2.value = i2;
            }, "Tabs_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_EJ0ZpxnncFk", [
              i,
              selected
            ]),
            role: "tab",
            tabIndex: i === 0 ? 0 : -1,
            tag: "button",
            ...props?.allTabProps,
            ...tab.tabProps,
            children: [
              /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                name: tab.tabSlotName ?? `tab-${i + 1}`
              }, 3, "jt_3"),
              tab.tabLabel ? tab.tabLabel : ""
            ],
            class: utils.serializeClass(tab.class) + " " + utils.serializeClass(tab.tabProps?.class) + " " + utils.serializeClass(props.allTabProps?.class),
            [qwik._IMMUTABLE]: {
              role: qwik._IMMUTABLE,
              tag: qwik._IMMUTABLE
            }
          }, 0, (tab.key ?? i) + "-tab")),
          [qwik._IMMUTABLE]: {
            role: qwik._IMMUTABLE,
            tag: qwik._IMMUTABLE
          }
        }, 0, "jt_4"),
        /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
          ...props.wrappers?.content,
          children: props.tabs?.map((tab, i) => /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
            "aria-labelledby": tab.tabProps?.id ?? `tab-${id}-${i}`,
            hidden: selected.value !== i,
            id: tab.contentProps?.id ?? `tabpanel-${id}-${i}`,
            role: "tabpanel",
            tag: "div",
            ...props.allContentProps,
            ...tab.contentProps,
            children: [
              /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
                name: tab.contentSlotName ?? `tab-content-${i + 1}`
              }, 3, "jt_5"),
              tab.content ? tab.content : ""
            ],
            class: utils.serializeClass(tab.contentProps?.class) + " " + utils.serializeClass(props.allContentProps?.class),
            [qwik._IMMUTABLE]: {
              role: qwik._IMMUTABLE,
              tag: qwik._IMMUTABLE
            }
          }, 0, (tab.key ?? i) + "content"))
        }, 0, "jt_6")
      ],
      class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
      id,
      [qwik._IMMUTABLE]: {
        tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
          props
        ], 'p0.rootProps?.tag||"div"')
      }
    }, 0, "jt_7")
  }, 1, "jt_8");
}, "Tabs_component_z8IYuaPWXhI"));
const Toggle = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const checkedDefault = qwik.useSignal(false);
  const checked = props.checked ?? checkedDefault;
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
      children: /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
        ...props.wrappers?.rootChildren,
        children: [
          /* @__PURE__ */ qwik._jsxC(utils.QwikHTMLElement, {
            for: id,
            get tag() {
              return props.labelProps?.tag || "label";
            },
            ...props.labelProps,
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
            onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
              const [checked2] = qwik.useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_nP9lZ4mQF20", [
              checked
            ]),
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
            get "aria-label"() {
              return props.switchProps?.["aria-label"] || "Toggle Switch";
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
                name: "switch",
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
              "aria-checked": qwik._fnSignal((p0) => p0.value, [
                isChecked
              ], "p0.value"),
              "aria-label": qwik._fnSignal((p0) => p0.switchProps?.["aria-label"] || "Toggle Switch", [
                props
              ], 'p0.switchProps?.["aria-label"]||"Toggle Switch"'),
              "data-state": qwik._fnSignal((p0) => p0.value ? "checked" : "unchecked", [
                isChecked
              ], 'p0.value?"checked":"unchecked"'),
              role: qwik._fnSignal((p0) => p0.switchProps?.role || "switch", [
                props
              ], 'p0.switchProps?.role||"switch"'),
              tag: qwik._fnSignal((p0) => p0.switchProps?.tag || "button", [
                props
              ], 'p0.switchProps?.tag||"button"'),
              type: qwik._fnSignal((p0) => p0.switchProps?.type || "button", [
                props
              ], 'p0.switchProps?.type||"button"')
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
            "aria-hidden": "true",
            checked: qwik._fnSignal((p0) => p0.value, [
              isChecked
            ], "p0.value"),
            style: "transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 42px; height: 25px;",
            tabIndex: -1,
            type: "checkbox",
            value: "on"
          }, null, 2, null)
        ]
      }, 0, "30_6"),
      class: utils.serializeClass(props.class) + " " + utils.serializeClass(props.rootProps?.class),
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
