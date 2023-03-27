import { componentQrl, inlinedQrl, useStylesScopedQrl, useSignal, useStore, useId, _jsxQ, useLexicalScope, _fnSignal, _jsxC, Slot, _IMMUTABLE, _jsxBranch, useVisibleTaskQrl } from "@builder.io/qwik";
const Collapse = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  useStylesScopedQrl(/* @__PURE__ */ inlinedQrl(`
  div[hidden] {
    display: none;
  }
`, "Collapse_component_useStylesScoped_2qghPX3A0vU"));
  const defaultSignal = useSignal(false);
  const state = useStore({
    open: props.open ?? defaultSignal,
    id: props.id ?? useId()
  });
  return /* @__PURE__ */ _jsxQ("div", {
    ...props.rootProps
  }, null, [
    /* @__PURE__ */ _jsxQ("button", {
      ...props.triggerProps,
      onClick$: /* @__PURE__ */ inlinedQrl(() => {
        const [state2] = useLexicalScope();
        return state2.open.value = !state2.open.value;
      }, "Collapse_component_div_button_onClick_z1CGF4hqheU", [
        state
      ])
    }, {
      type: "button",
      id: _fnSignal((p0) => p0.id + "-trigger", [
        state
      ], 'p0.id+"-trigger"'),
      "aria-expanded": _fnSignal((p0) => p0.open?.value, [
        state
      ], "p0.open?.value"),
      "aria-controls": _fnSignal((p0) => p0.id, [
        state
      ], "p0.id")
    }, /* @__PURE__ */ _jsxC(Slot, {
      name: "trigger",
      [_IMMUTABLE]: {
        name: _IMMUTABLE
      }
    }, 3, "mP_0"), 0, null),
    /* @__PURE__ */ _jsxQ("div", null, {
      id: _fnSignal((p0) => p0.id, [
        state
      ], "p0.id"),
      role: "region",
      "aria-labelledby": _fnSignal((p0) => p0.id + "-trigger", [
        state
      ], 'p0.id+"-trigger"'),
      hidden: _fnSignal((p0) => !p0.open?.value, [
        state
      ], "!p0.open?.value")
    }, /* @__PURE__ */ _jsxC(Slot, null, 3, "mP_1"), 1, null)
  ], 0, "mP_2");
}, "Collapse_component_OWHg0i6XPiY"));
function $(e, t = false) {
  let i = e.querySelector("[autofocus]");
  !i && t && (i = e), i == null || i.focus();
}
const Dialog = /* @__PURE__ */ componentQrl(/* @__PURE__ */ inlinedQrl((props) => {
  _jsxBranch();
  const defaultSignal = useSignal(false);
  const state = useStore({
    role: props.role ?? `dialog`,
    open: props.open ?? defaultSignal,
    id: props.id ?? useId(),
    titleId: props.titleId ?? useId(),
    descriptionId: props.descriptionId ?? useId()
  });
  const dialogEl = useSignal();
  useVisibleTaskQrl(/* @__PURE__ */ inlinedQrl(({ track }) => {
    const [dialogEl2, state2] = useLexicalScope();
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
  return /* @__PURE__ */ _jsxQ("div", {
    ...props?.rootProps
  }, null, [
    props.triggerButton && /* @__PURE__ */ _jsxQ("button", {
      ...props?.triggerProps,
      onClick$: /* @__PURE__ */ inlinedQrl(() => {
        const [state2] = useLexicalScope();
        return state2.open.value = true;
      }, "Dialog_component_div_button_onClick_jFMtYzhix6w", [
        state
      ])
    }, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": _fnSignal((p0) => p0.open.value, [
        state
      ], "p0.open.value")
    }, /* @__PURE__ */ _jsxC(Slot, {
      name: "trigger",
      [_IMMUTABLE]: {
        name: _IMMUTABLE
      }
    }, 3, "q5_0"), 0, "q5_1"),
    /* @__PURE__ */ _jsxQ("dialog", {
      ref: dialogEl,
      ...props?.dialogProps,
      onClick$: /* @__PURE__ */ inlinedQrl((e) => {
        const [dialogEl2, state2] = useLexicalScope();
        e.target === dialogEl2.value && state2.role !== "alertdialog" && (state2.open.value = false);
      }, "Dialog_component_div_dialog_onClick_E6bfoW5kl9w", [
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
    }, [
      props?.closeButton && /* @__PURE__ */ _jsxQ("button", {
        ...props?.closeProps,
        onClick$: /* @__PURE__ */ inlinedQrl(() => {
          const [state2] = useLexicalScope();
          return state2.open.value = false;
        }, "Dialog_component_div_dialog_button_onClick_1u8a7YG2lFU", [
          state
        ])
      }, {
        type: "button"
      }, /* @__PURE__ */ _jsxC(Slot, {
        name: "close",
        [_IMMUTABLE]: {
          name: _IMMUTABLE
        }
      }, 3, "q5_2"), 0, "q5_3"),
      /* @__PURE__ */ _jsxQ("h2", {
        ...props?.titleProps
      }, {
        id: _fnSignal((p0) => p0.titleId, [
          state
        ], "p0.titleId")
      }, /* @__PURE__ */ _jsxC(Slot, {
        name: "title",
        [_IMMUTABLE]: {
          name: _IMMUTABLE
        }
      }, 3, "q5_4"), 0, null),
      /* @__PURE__ */ _jsxQ("p", {
        ...props?.descriptionProps
      }, {
        id: _fnSignal((p0) => p0.descriptionId, [
          state
        ], "p0.descriptionId")
      }, /* @__PURE__ */ _jsxC(Slot, {
        name: "description",
        [_IMMUTABLE]: {
          name: _IMMUTABLE
        }
      }, 3, "q5_5"), 0, null),
      /* @__PURE__ */ _jsxC(Slot, null, 3, "q5_6"),
      /* @__PURE__ */ _jsxC(Slot, {
        name: "content",
        [_IMMUTABLE]: {
          name: _IMMUTABLE
        }
      }, 3, "q5_7")
    ], 0, null)
  ], 0, "q5_8");
}, "Dialog_component_0VI0xYZiS0o"));
export {
  Collapse,
  Dialog
};
