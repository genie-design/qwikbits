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
function nearestInclusiveOpenPopover(node) {
  while (node) {
    if (node instanceof HTMLElement && node.popover === "auto" && visibilityState.get(node) === "showing") {
      return node;
    }
    node = node.parentElement || node.getRootNode();
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
    node = node.parentElement || node.getRootNode();
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
    if (selector.includes(":popover-open")) {
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
          const root = this.getRootNode();
          const idref = this.getAttribute("popovertarget");
          if ((root instanceof Document || root instanceof ShadowRoot) && idref) {
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
    const root = target.getRootNode();
    if (!(root instanceof ShadowRoot || root instanceof Document)) {
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
const Dropdown = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesQrl(/* @__PURE__ */ inlinedQrl(popoverStyles, "Dropdown_component_useStyles_3Odsr6GZh5E"));
  const id = useId();
  const popoverId = useId();
  const defaultSignal = useSignal(false);
  const open = props.open ?? defaultSignal;
  const root = useSignal();
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(() => {
    if (!isSupported())
      apply();
  }, "Dropdown_component_useVisibleTask_Qq2GPBh5jLs"));
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl((ctx) => {
    const [open2, root2] = useLexicalScope();
    ctx.track(() => root2.value);
    ctx.track(() => open2.value);
    if (root2.value) {
      const popover = root2.value.querySelector("[popover]");
      if (popover) {
        if (open2.value && "showPopover" in popover && typeof popover.showPopover === "function")
          popover.showPopover();
        else if (!open2.value && "hidePopover" in popover && typeof popover.hidePopover === "function")
          popover.hidePopover();
      }
    }
  }, "Dropdown_component_useVisibleTask_1_hD9KLeuNPYg", [
    open,
    root
  ]));
  const timer = useSignal();
  const handleMouseEnter = /* @__PURE__ */ inlinedQrl(() => {
    const [open2, props2, timer2] = useLexicalScope();
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
  const handleMouseLeave = /* @__PURE__ */ inlinedQrl(() => {
    const [open2, props2, timer2] = useLexicalScope();
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
  return /* @__PURE__ */ _jsxC(QwikHTMLElement, {
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
    class: serializeClass(props.class) + " " + serializeClass(props.rootProps?.class),
    children: /* @__PURE__ */ _jsxC(QwikHTMLElement, {
      ...props.wrappers?.rootChildren,
      children: [
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          get tag() {
            return props.triggerProps?.tag || "button";
          },
          get popovertarget() {
            return props.popoverId ?? popoverId;
          },
          ...props.triggerProps,
          onMouseEnter$: /* @__PURE__ */ inlinedQrl((e) => {
            const [handleMouseEnter2, props2] = useLexicalScope();
            handleMouseEnter2();
            props2.triggerProps?.onMouseEnter?.(e);
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onMouseEnter_E0reuP06kHk", [
            handleMouseEnter,
            props
          ]),
          onMouseLeave$: /* @__PURE__ */ inlinedQrl((e) => {
            const [handleMouseLeave2, props2] = useLexicalScope();
            handleMouseLeave2();
            props2.triggerProps?.onMouseLeave?.(e);
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onMouseLeave_Bo5eCuMQN64", [
            handleMouseLeave,
            props
          ]),
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
            popovertarget: _fnSignal((p0, p1) => p1.popoverId ?? p0, [
              popoverId,
              props
            ], "p1.popoverId??p0"),
            onMouseEnter$: _IMMUTABLE,
            onMouseLeave$: _IMMUTABLE
          }
        }, 0, "H9_1"),
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
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
          onToggle$: /* @__PURE__ */ inlinedQrl((e) => {
            const [open2] = useLexicalScope();
            open2.value = e.newState === "open";
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onToggle_GIIh9aw9KAA", [
            open
          ]),
          ...props.contentProps,
          onMouseEnter$: /* @__PURE__ */ inlinedQrl((e) => {
            const [handleMouseEnter2, props2] = useLexicalScope();
            handleMouseEnter2();
            props2.triggerProps?.onMouseEnter?.(e);
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onMouseEnter_1_WUZ6SY7VURs", [
            handleMouseEnter,
            props
          ]),
          onMouseLeave$: /* @__PURE__ */ inlinedQrl((e) => {
            const [handleMouseLeave2, props2] = useLexicalScope();
            handleMouseLeave2();
            props2.triggerProps?.onMouseLeave?.(e);
          }, "Dropdown_component_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onMouseLeave_1_zNCV0axuIWA", [
            handleMouseLeave,
            props
          ]),
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
              role: "listitem",
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
              }, 0, "H9_7"),
              [_IMMUTABLE]: {
                role: _IMMUTABLE
              }
            }, 0, item.key ?? i)),
            /* @__PURE__ */ _jsxC(Slot, {
              name: "content_after",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "H9_8")
          ],
          [_IMMUTABLE]: {
            id: _fnSignal((p0, p1) => p1.popoverId ?? p0, [
              popoverId,
              props
            ], "p1.popoverId??p0"),
            tag: _fnSignal((p0) => p0.contentProps?.tag || "ul", [
              props
            ], 'p0.contentProps?.tag||"ul"'),
            role: _IMMUTABLE,
            popover: _fnSignal((p0) => p0.popover ?? "auto", [
              props
            ], 'p0.popover??"auto"'),
            onMouseEnter$: _IMMUTABLE,
            onMouseLeave$: _IMMUTABLE
          }
        }, 0, "H9_9")
      ]
    }, 0, "H9_10"),
    [_IMMUTABLE]: {
      ref: _IMMUTABLE,
      id: _fnSignal((p0, p1) => p1.id ?? p0, [
        id,
        props
      ], "p1.id??p0"),
      tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"'),
      "aria-label": _fnSignal((p0) => p0.rootProps?.["aria-label"] || p0.label, [
        props
      ], 'p0.rootProps?.["aria-label"]||p0.label'),
      style: _IMMUTABLE
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
  useTaskQrl(/* @__PURE__ */ inlinedQrl((ctx) => {
    const [props2, selected2] = useLexicalScope();
    ctx.track(() => selected2.value);
    if (props2.onChange$)
      props2.onChange$(selected2.value);
  }, "Tabs_component_useTask_1_mh2SPJhKx0o", [
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
            /* @__PURE__ */ _jsxC(Slot, null, 3, "jt_0"),
            /* @__PURE__ */ _jsxC(Slot, {
              name: "label",
              [_IMMUTABLE]: {
                name: _IMMUTABLE
              }
            }, 3, "jt_1"),
            _fnSignal((p0) => p0.label ? p0.label : "", [
              props
            ], 'p0.label?p0.label:""')
          ],
          [_IMMUTABLE]: {
            tag: _IMMUTABLE
          }
        }, 0, "jt_2"),
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          tag: "div",
          role: "tablist",
          ...props?.tabListProps,
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
            ...props?.allTabProps,
            ...tab.tabProps,
            class: serializeClass(tab.class) + " " + serializeClass(tab.tabProps?.class) + " " + serializeClass(props.allTabProps?.class),
            children: [
              /* @__PURE__ */ _jsxC(Slot, {
                name: tab.tabSlotName ?? `tab-${i + 1}`
              }, 3, "jt_3"),
              tab.tabLabel ? tab.tabLabel : ""
            ],
            [_IMMUTABLE]: {
              role: _IMMUTABLE,
              tag: _IMMUTABLE
            }
          }, 0, (tab.key ?? i) + "-tab")),
          [_IMMUTABLE]: {
            tag: _IMMUTABLE,
            role: _IMMUTABLE
          }
        }, 0, "jt_4"),
        /* @__PURE__ */ _jsxC(QwikHTMLElement, {
          ...props.wrappers?.content,
          children: props.tabs?.map((tab, i) => /* @__PURE__ */ _jsxC(QwikHTMLElement, {
            tag: "div",
            role: "tabpanel",
            hidden: selected.value !== i,
            id: tab.contentProps?.id ?? `tabpanel-${id}-${i}`,
            "aria-labelledby": tab.tabProps?.id ?? `tab-${id}-${i}`,
            ...props.allContentProps,
            ...tab.contentProps,
            class: serializeClass(tab.contentProps?.class) + " " + serializeClass(props.allContentProps?.class),
            children: [
              /* @__PURE__ */ _jsxC(Slot, {
                name: tab.contentSlotName ?? `tab-content-${i + 1}`
              }, 3, "jt_5"),
              tab.content ? tab.content : ""
            ],
            [_IMMUTABLE]: {
              tag: _IMMUTABLE,
              role: _IMMUTABLE
            }
          }, 0, (tab.key ?? i) + "content"))
        }, 0, "jt_6")
      ],
      [_IMMUTABLE]: {
        tag: _fnSignal((p0) => p0.rootProps?.tag || "div", [
          props
        ], 'p0.rootProps?.tag||"div"')
      }
    }, 0, "jt_7")
  }, 1, "jt_8");
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
            onClick$: /* @__PURE__ */ inlinedQrl(() => {
              const [checked2] = useLexicalScope();
              return checked2.value = !checked2.value;
            }, "Toggle_component__Fragment_QwikHTMLElement_QwikHTMLElement_QwikHTMLElement_onClick_1_yF03mRKlkec", [
              checked
            ]),
            ...props.switchProps,
            children: [
              /* @__PURE__ */ _jsxC(Slot, {
                name: "switch",
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
              "aria-label": _fnSignal((p0) => p0.switchProps?.["aria-label"] || "Toggle Switch", [
                props
              ], 'p0.switchProps?.["aria-label"]||"Toggle Switch"'),
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
