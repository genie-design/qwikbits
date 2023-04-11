import {
  QwikIntrinsicElements,
  Signal,
  useVisibleTask$,
  useSignal,
  VisibleTaskStrategy,
  useId,
  useStyles$,
  useOnDocument,
  $,
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
  footerProps?: QwikHTMLElementIntrinsic;
  closeButton?: boolean;
  closeProps?: QwikHTMLElementIntrinsic;
  strategy?: VisibleTaskStrategy | undefined;
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
    content?: QwikHTMLElementIntrinsic;
  };
};

export const Dialog = component$((props: DialogProps) => {
  useStyles$(`
    header:empty {
      display: none;
    }
    footer:empty {
      display: none;
    }
`);
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
      strategy: props?.strategy ?? "document-ready",
    }
  );

  useOnDocument(
    `keydown`,
    $((e) => {
      if ((e as KeyboardEvent).key === "Escape" && state.open.value) {
        state.open.value = false;
      }
    })
  );

  return (
    <QwikHTMLElement tag={props.rootProps?.tag || "div"} {...props.rootProps}>
      <QwikHTMLElement {...props.wrappers?.rootChildren}>
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
            <QwikHTMLElement {...props.wrappers?.content}>
              <Slot />
              <Slot name="content" />
            </QwikHTMLElement>
            <QwikHTMLElement tag={props.footerProps?.tag || "footer"}>
              <Slot name="footer" />
            </QwikHTMLElement>
          </QwikHTMLElement>
        </dialog>
      </QwikHTMLElement>
    </QwikHTMLElement>
  );
});

export default Dialog;
