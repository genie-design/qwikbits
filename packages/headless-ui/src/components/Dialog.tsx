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
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "./QwikHTMLElement";

export type DialogState = {
  role: `dialog` | `alertdialog`;
  open: Signal<boolean>;
  id: string;
  titleId: string;
  descriptionId: string;
};
export type DialogProps = Partial<DialogState> & {
  rootProps?: QwikHTMLElementIntrinsic;
  contentProps?: QwikHTMLElementIntrinsic;
  triggerButton?: boolean;
  triggerProps?: QwikHTMLElementIntrinsic;
  dialogProps?: QwikIntrinsicElements[`dialog`];
  titleProps?: QwikHTMLElementIntrinsic;
  descriptionProps?: QwikHTMLElementIntrinsic;
  closeButton?: boolean;
  closeProps?: QwikHTMLElementIntrinsic;
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
    <QwikHTMLElement tag={props.rootProps?.tag || "div"} {...props.rootProps}>
      {props.triggerButton && (
        <QwikHTMLElement
          tag={props.triggerProps?.tag || "button"}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={state.open.value}
          {...props?.triggerProps}
          onClick$={() => (state.open.value = true)}
        >
          <Slot name="trigger" />
        </QwikHTMLElement>
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
        open={state.open.value}
        onClick$={(e) => {
          e.target === dialogEl.value && state.role !== "alertdialog"
            ? (state.open.value = false)
            : "";
        }}
      >
        <QwikHTMLElement
          tag={props.contentProps?.tag || "article"}
          {...props?.contentProps}
        >
          <QwikHTMLElement
            tag={props.titleProps?.tag || "header"}
            id={state.titleId}
            {...props?.titleProps}
          >
            <Slot name="title" />
            {props?.closeButton && (
              <QwikHTMLElement
                tag={props.closeProps?.tag || "button"}
                type="button"
                {...props?.closeProps}
                onClick$={() => (state.open.value = false)}
              >
                <Slot name="close" />
              </QwikHTMLElement>
            )}
          </QwikHTMLElement>
          <QwikHTMLElement
            tag={props.descriptionProps?.tag || "p"}
            id={state.descriptionId}
            {...props?.descriptionProps}
          >
            <Slot name="description" />
          </QwikHTMLElement>
          <Slot />
          <Slot name="content" />
        </QwikHTMLElement>
      </dialog>
    </QwikHTMLElement>
  );
});

export default Dialog;
