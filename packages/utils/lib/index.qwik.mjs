import { componentQrl, inlinedQrl, _jsxBranch, _restProps, _jsxC, Slot, useSignal, useVisibleTaskQrl, useLexicalScope, _IMMUTABLE, _fnSignal } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";
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
function use100vh(vh) {
  const height = useSignal(void 0);
  const numerator = vh ?? 100;
  if (typeof window !== "undefined")
    window.addEventListener("resize", () => {
      height.value = window.innerHeight * (numerator / 100);
    });
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(async () => {
    const [height2, numerator2] = useLexicalScope();
    height2.value = window.innerHeight * (numerator2 / 100);
  }, "use100vh_useVisibleTask_ocOczmDxQWk", [
    height,
    numerator
  ]));
  return height;
}
const VHElement = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  const height = use100vh(props.vh);
  return /* @__PURE__ */ _jsxC(QwikHTMLElement, {
    tag: "div",
    ...props,
    get style() {
      return {
        height: `${height.value}px` || `${props.vh || 100}vh`
      };
    },
    children: /* @__PURE__ */ _jsxC(Slot, null, 3, "WR_0"),
    [_IMMUTABLE]: {
      tag: _IMMUTABLE,
      style: _fnSignal((p0, p1) => ({
        height: `${p0.value}px` || `${p1.vh || 100}vh`
      }), [
        height,
        props
      ], "{height:`${p0.value}px`||`${p1.vh||100}vh`}")
    }
  }, 0, "WR_1");
}, "VHElement_component_Zns65jACPvc"));
const serializeClass = (obj) => {
  if (!obj)
    return "";
  if (typeof obj === "string")
    return obj.trim();
  if (Array.isArray(obj))
    return obj.reduce((result, o) => {
      const classList = serializeClass(o);
      return classList ? result ? `${result} ${classList}` : classList : result;
    }, "");
  return Object.entries(obj).reduce((result, [key, value]) => value ? result ? `${result} ${key.trim()}` : key.trim() : result, "");
};
export {
  QwikHTMLElement,
  VHElement,
  getActiveElement,
  getFocusableEdges,
  moveFocusToDialog,
  serializeClass,
  trapTabKey,
  use100vh
};
