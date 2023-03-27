import {
  QwikIntrinsicElements,
  Signal,
  useVisibleTask$,
  useSignal,
  VisibleTaskStrategy,
  useId,
} from "@builder.io/qwik";
import { Slot, component$, useStore } from "@builder.io/qwik";
import { moveFocusToDialog } from "@qwikbits/utils";

export type DialogState = {
  role: `dialog` | `alertdialog`;
  open: Signal<boolean>;
  id: string;
  titleId: string;
  descriptionId: string;
};
export type DialogProps = Partial<DialogState> & {
  rootProps?: QwikIntrinsicElements[`div`];
  triggerButton?: boolean;
  triggerProps?: QwikIntrinsicElements[`button`];
  dialogProps?: QwikIntrinsicElements[`dialog`];
  titleProps?: QwikIntrinsicElements[`h2`];
  descriptionProps?: QwikIntrinsicElements[`p`];
  closeButton?: boolean;
  closeProps?: QwikIntrinsicElements[`button`];
  strategy?: VisibleTaskStrategy | undefined;
};

export const Dialog = component$((props: DialogProps) => {
  const defaultSignal = useSignal(false);
  const state = useStore<DialogState>({
    role: props.role ?? `dialog`,
    open: props.open ?? defaultSignal,
    id: props.id ?? useId(),
    titleId: props.titleId ?? useId(),
    descriptionId: props.descriptionId ?? useId(),
  });
  const dialogEl = useSignal<HTMLDialogElement>();
  useVisibleTask$(
    ({ track }) => {
      track(() => state.open.value);
      if (dialogEl.value && state.open.value) {
        dialogEl.value.showModal();
        moveFocusToDialog(dialogEl.value);
      } else if (dialogEl.value) {
        dialogEl.value.close();
      }
    },
    {
      strategy: props?.strategy ?? `intersection-observer`,
    }
  );

  return (
    <div {...props?.rootProps}>
      {props.triggerButton && (
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={state.open.value}
          {...props?.triggerProps}
          onClick$={() => (state.open.value = true)}
        >
          <Slot name="trigger" />
        </button>
      )}

      <dialog
        ref={dialogEl}
        role={state.role}
        tabIndex={-1}
        aria-modal="true"
        aria-hidden={!state.open.value}
        hidden={!state.open.value}
        aria-labelledby={state.titleId}
        aria-describedby={state.descriptionId}
        {...props?.dialogProps}
        onClick$={(e) => {
          e.target === dialogEl.value && state.role !== "alertdialog"
            ? (state.open.value = false)
            : "";
        }}
      >
        {props?.closeButton && (
          <button
            type="button"
            {...props?.closeProps}
            onClick$={() => (state.open.value = false)}
          >
            <Slot name="close" />
          </button>
        )}
        <h2 id={state.titleId} {...props?.titleProps}>
          <Slot name="title" />
        </h2>
        <p id={state.descriptionId} {...props?.descriptionProps}>
          <Slot name="description" />
        </p>
        <Slot />
        <Slot name="content" />
      </dialog>
    </div>
  );
});

export default Dialog;
