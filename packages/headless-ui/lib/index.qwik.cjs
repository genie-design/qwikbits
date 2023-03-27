"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const qwik = require("@builder.io/qwik");
const Collapse = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik.useStylesScopedQrl(/* @__PURE__ */ qwik.inlinedQrl(`
  div[hidden] {
    display: none;
  }
`, "Collapse_component_useStylesScoped_2qghPX3A0vU"));
  const defaultSignal = qwik.useSignal(false);
  const state = qwik.useStore({
    open: props.open ?? defaultSignal,
    id: props.id ?? qwik.useId()
  });
  return /* @__PURE__ */ qwik._jsxQ("div", {
    ...props.rootProps
  }, null, [
    /* @__PURE__ */ qwik._jsxQ("button", {
      ...props.triggerProps,
      onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
        const [state2] = qwik.useLexicalScope();
        return state2.open.value = !state2.open.value;
      }, "Collapse_component_div_button_onClick_z1CGF4hqheU", [
        state
      ])
    }, {
      type: "button",
      id: qwik._fnSignal((p0) => p0.id + "-trigger", [
        state
      ], 'p0.id+"-trigger"'),
      "aria-expanded": qwik._fnSignal((p0) => p0.open?.value, [
        state
      ], "p0.open?.value"),
      "aria-controls": qwik._fnSignal((p0) => p0.id, [
        state
      ], "p0.id")
    }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
      name: "trigger",
      [qwik._IMMUTABLE]: {
        name: qwik._IMMUTABLE
      }
    }, 3, "mP_0"), 0, null),
    /* @__PURE__ */ qwik._jsxQ("div", null, {
      id: qwik._fnSignal((p0) => p0.id, [
        state
      ], "p0.id"),
      role: "region",
      "aria-labelledby": qwik._fnSignal((p0) => p0.id + "-trigger", [
        state
      ], 'p0.id+"-trigger"'),
      hidden: qwik._fnSignal((p0) => !p0.open?.value, [
        state
      ], "!p0.open?.value")
    }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "mP_1"), 1, null)
  ], 0, "mP_2");
}, "Collapse_component_OWHg0i6XPiY"));
function $(e, t = false) {
  let i = e.querySelector("[autofocus]");
  !i && t && (i = e), i == null || i.focus();
}
const Dialog = /* @__PURE__ */ qwik.componentQrl(/* @__PURE__ */ qwik.inlinedQrl((props) => {
  qwik._jsxBranch();
  const defaultSignal = qwik.useSignal(false);
  const state = qwik.useStore({
    role: props.role ?? `dialog`,
    open: props.open ?? defaultSignal,
    id: props.id ?? qwik.useId(),
    titleId: props.titleId ?? qwik.useId(),
    descriptionId: props.descriptionId ?? qwik.useId()
  });
  const dialogEl = qwik.useSignal();
  qwik.useVisibleTaskQrl(/* @__PURE__ */ qwik.inlinedQrl(({ track }) => {
    const [dialogEl2, state2] = qwik.useLexicalScope();
    track(() => state2.open.value);
    if (dialogEl2.value && state2.open.value) {
      dialogEl2.value.showModal();
      $(dialogEl2.value);
    } else if (dialogEl2.value)
      dialogEl2.value.close();
  }, "Dialog_component_useVisibleTask_F3qV597N5kM", [
    dialogEl,
    state
  ]), {
    strategy: props?.strategy ?? `intersection-observer`
  });
  return /* @__PURE__ */ qwik._jsxQ("div", {
    ...props?.rootProps
  }, null, [
    props.triggerButton && /* @__PURE__ */ qwik._jsxQ("button", {
      ...props?.triggerProps,
      onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
        const [state2] = qwik.useLexicalScope();
        return state2.open.value = true;
      }, "Dialog_component_div_button_onClick_jFMtYzhix6w", [
        state
      ])
    }, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": qwik._fnSignal((p0) => p0.open.value, [
        state
      ], "p0.open.value")
    }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
      name: "trigger",
      [qwik._IMMUTABLE]: {
        name: qwik._IMMUTABLE
      }
    }, 3, "q5_0"), 0, "q5_1"),
    /* @__PURE__ */ qwik._jsxQ("dialog", {
      ref: dialogEl,
      ...props?.dialogProps,
      onClick$: /* @__PURE__ */ qwik.inlinedQrl((e) => {
        const [dialogEl2, state2] = qwik.useLexicalScope();
        e.target === dialogEl2.value && state2.role !== "alertdialog" && (state2.open.value = false);
      }, "Dialog_component_div_dialog_onClick_E6bfoW5kl9w", [
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
    }, [
      props?.closeButton && /* @__PURE__ */ qwik._jsxQ("button", {
        ...props?.closeProps,
        onClick$: /* @__PURE__ */ qwik.inlinedQrl(() => {
          const [state2] = qwik.useLexicalScope();
          return state2.open.value = false;
        }, "Dialog_component_div_dialog_button_onClick_1u8a7YG2lFU", [
          state
        ])
      }, {
        type: "button"
      }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
        name: "close",
        [qwik._IMMUTABLE]: {
          name: qwik._IMMUTABLE
        }
      }, 3, "q5_2"), 0, "q5_3"),
      /* @__PURE__ */ qwik._jsxQ("h2", {
        ...props?.titleProps
      }, {
        id: qwik._fnSignal((p0) => p0.titleId, [
          state
        ], "p0.titleId")
      }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
        name: "title",
        [qwik._IMMUTABLE]: {
          name: qwik._IMMUTABLE
        }
      }, 3, "q5_4"), 0, null),
      /* @__PURE__ */ qwik._jsxQ("p", {
        ...props?.descriptionProps
      }, {
        id: qwik._fnSignal((p0) => p0.descriptionId, [
          state
        ], "p0.descriptionId")
      }, /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
        name: "description",
        [qwik._IMMUTABLE]: {
          name: qwik._IMMUTABLE
        }
      }, 3, "q5_5"), 0, null),
      /* @__PURE__ */ qwik._jsxC(qwik.Slot, null, 3, "q5_6"),
      /* @__PURE__ */ qwik._jsxC(qwik.Slot, {
        name: "content",
        [qwik._IMMUTABLE]: {
          name: qwik._IMMUTABLE
        }
      }, 3, "q5_7")
    ], 0, null)
  ], 0, "q5_8");
}, "Dialog_component_0VI0xYZiS0o"));
exports.Collapse = Collapse;
exports.Dialog = Dialog;
