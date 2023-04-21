"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const jsxRuntime = require("@builder.io/qwik/jsx-runtime");
const not = {
  inert: ":not([inert]):not([inert] *)",
  negTabIndex: ':not([tabindex^="-"])',
  disabled: ":not(:disabled)"
};
const focusableSelectors = [
  `a[href]${not.inert}${not.negTabIndex}`,
  `area[href]${not.inert}${not.negTabIndex}`,
  `input:not([type="hidden"]):not([type="radio"])${not.inert}${not.negTabIndex}${not.disabled}`,
  `input[type="radio"]${not.inert}${not.negTabIndex}${not.disabled}`,
  `select${not.inert}${not.negTabIndex}${not.disabled}`,
  `textarea${not.inert}${not.negTabIndex}${not.disabled}`,
  `button${not.inert}${not.negTabIndex}${not.disabled}`,
  `details${not.inert} > summary:first-of-type${not.negTabIndex}`,
  // Discard until Firefox supports `:has()`
  // See: https://github.com/KittyGiraudel/focusable-selectors/issues/12
  // `details:not(:has(> summary))${not.inert}${not.negTabIndex}`,
  `iframe${not.inert}${not.negTabIndex}`,
  `audio[controls]${not.inert}${not.negTabIndex}`,
  `video[controls]${not.inert}${not.negTabIndex}`,
  `[contenteditable]${not.inert}${not.negTabIndex}`,
  `[tabindex]${not.inert}${not.negTabIndex}`
];
function moveFocusToDialog(el, focusElement = false) {
  let focused = el.querySelector("[autofocus]");
  if (!focused && focusElement)
    focused = el;
  focused?.focus();
}
function getFocusableEdges(el) {
  const first = findFocusableElement(el, true);
  const last = first ? findFocusableElement(el, false) || first : null;
  return [
    first,
    last
  ];
}
function findFocusableElement(node, forward) {
  if (forward && isFocusable(node))
    return node;
  if (canHaveFocusableChildren(node)) {
    if (node.shadowRoot) {
      let next = getNextChildEl(node.shadowRoot, forward);
      while (next) {
        const focusableEl = findFocusableElement(next, forward);
        if (focusableEl)
          return focusableEl;
        next = getNextSiblingEl(next, forward);
      }
    } else if (node.localName === "slot") {
      const assignedElements = node.assignedElements({
        flatten: true
      });
      if (!forward)
        assignedElements.reverse();
      for (const assignedElement of assignedElements) {
        const focusableEl = findFocusableElement(assignedElement, forward);
        if (focusableEl)
          return focusableEl;
      }
    } else {
      let next = getNextChildEl(node, forward);
      while (next) {
        const focusableEl = findFocusableElement(next, forward);
        if (focusableEl)
          return focusableEl;
        next = getNextSiblingEl(next, forward);
      }
    }
  }
  if (!forward && isFocusable(node))
    return node;
  return null;
}
function getNextChildEl(node, forward) {
  return forward ? node.firstElementChild : node.lastElementChild;
}
function getNextSiblingEl(el, forward) {
  return forward ? el.nextElementSibling : el.previousElementSibling;
}
const isHidden = (el) => {
  if (el.matches("details:not([open]) *") && !el.matches("details>summary:first-of-type"))
    return true;
  return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
};
const isFocusable = (el) => {
  if (el.shadowRoot?.delegatesFocus)
    return false;
  return el.matches(focusableSelectors.join(",")) && !isHidden(el);
};
function canHaveFocusableChildren(el) {
  if (el.shadowRoot && el.getAttribute("tabindex") === "-1")
    return false;
  return !el.matches(":disabled,[hidden],[inert]");
}
function getActiveElement(root = document) {
  const activeEl = root.activeElement;
  if (!activeEl)
    return null;
  if (activeEl.shadowRoot)
    return getActiveElement(activeEl.shadowRoot) || document.activeElement;
  return activeEl;
}
function trapTabKey(el, event) {
  const [firstFocusableChild, lastFocusableChild] = getFocusableEdges(el);
  if (!firstFocusableChild)
    return event.preventDefault();
  const activeElement = getActiveElement();
  if (event.shiftKey && activeElement === firstFocusableChild) {
    lastFocusableChild?.focus();
    event.preventDefault();
  } else if (!event.shiftKey && activeElement === lastFocusableChild) {
    firstFocusableChild.focus();
    event.preventDefault();
  }
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
function use100vh() {
  const height = qwik.useSignal(void 0);
  if (typeof window !== "undefined")
    window.addEventListener("resize", () => {
      height.value = window.innerHeight;
    });
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(async () => {
    const [height2] = qwik.useLexicalScope();
    height2.value = innerHeight;
  }, "use100vh_useVisibleTask_ocOczmDxQWk", [
    height
  ]));
  return height;
}
const HeightScreenElement = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  const height = use100vh();
  return /* @__PURE__ */ qwik._jsxC(QwikHTMLElement, {
    get tag() {
      return props.rootProps?.tag || "div";
    },
    ...props.rootProps,
    get style() {
      return {
        height: `${height.value}px` || "100vh"
      };
    },
    children: /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "WR_0"),
    [qwik._IMMUTABLE]: {
      tag: qwik._fnSignal((p0) => p0.rootProps?.tag || "div", [
        props
      ], 'p0.rootProps?.tag||"div"'),
      style: qwik._fnSignal((p0) => ({
        height: `${p0.value}px` || "100vh"
      }), [
        height
      ], '{height:`${p0.value}px`||"100vh"}')
    }
  }, 0, "WR_1");
}, "HeightScreenElement_component_RSa7JFOHbX0"));
exports.HeightScreenElement = HeightScreenElement;
exports.QwikHTMLElement = QwikHTMLElement;
exports.getActiveElement = getActiveElement;
exports.getFocusableEdges = getFocusableEdges;
exports.moveFocusToDialog = moveFocusToDialog;
exports.trapTabKey = trapTabKey;
exports.use100vh = use100vh;
