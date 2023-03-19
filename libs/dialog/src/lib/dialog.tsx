import { usePortal, Portal } from '@qwikbits/provider';
import {
  QwikIntrinsicElements,
  Signal,
  useVisibleTask$,
  useSignal,
  VisibleTaskStrategy,
} from '@builder.io/qwik';
import { Slot, component$, useStore } from '@builder.io/qwik';
import {
  getActiveElement,
  moveFocusToDialog,
  trapTabKey,
  useUniqueId,
} from '@qwikbits/utils';

export type DialogState = {
  role: `dialog` | `alertdialog`;
  open: Signal<boolean>;
  id: string;
  titleId: string;
  descriptionId: string;
  previouslyFocused: HTMLElement | undefined;
};
export type DialogProps = Partial<DialogState> & {
  rootProps?: QwikIntrinsicElements[`div`];
  triggerButton?: boolean;
  triggerProps?: QwikIntrinsicElements[`button`];
  overlayProps?: QwikIntrinsicElements[`div`];
  contentProps?: QwikIntrinsicElements[`div`];
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
    id: props.id ?? useUniqueId(),
    titleId: props.titleId ?? useUniqueId(),
    descriptionId: props.descriptionId ?? useUniqueId(),
    previouslyFocused: undefined,
  });
  const dialog = useSignal<HTMLDivElement>();
  useVisibleTask$(
    ({ track }) => {
      track(() => state.open.value);
      if (dialog.value && state.open.value) {
        state.previouslyFocused = getActiveElement() as HTMLElement;
        moveFocusToDialog(dialog.value);
      } else if (state.previouslyFocused) {
        state.previouslyFocused.focus();
        state.previouslyFocused = undefined;
      }
    },
    {
      strategy: props?.strategy ?? `intersection-observer`,
    }
  );
  useVisibleTask$(
    () => {
      const handler = (e: KeyboardEvent) => {
        if (dialog.value) {
          if (e.key === `Tab`) {
            trapTabKey(dialog.value, e);
          }
        }
      };
      dialog.value?.addEventListener(`keydown`, handler);
      return () => dialog.value?.addEventListener(`keydown`, handler);
    },
    {
      strategy: props?.strategy ?? `intersection-observer`,
    }
  );
  return (
    <div
      {...props?.rootProps}
      document:onKeyDown$={(event) => {
        if (state.role !== `alertdialog` && event.key === `Escape`) {
          state.open.value = false;
        }
      }}
    >
      {props.triggerButton && (
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded
          {...props?.triggerProps}
          onClick$={() => (state.open.value = true)}
        >
          <Slot name="trigger" />
        </button>
      )}
      <div
        role="presentation"
        aria-modal="true"
        aria-hidden={!state.open.value}
        tabIndex={-1}
        {...props?.overlayProps}
        onClick$={() =>
          state.role !== `alertdialog` ? (state.open.value = false) : ``
        }
      />
      <div
        ref={dialog}
        role={state.role}
        tabIndex={-1}
        aria-modal="true"
        aria-hidden={!state.open.value}
        hidden={!state.open.value}
        aria-labelledby={state.titleId}
        aria-describedby={state.descriptionId}
        {...props?.contentProps}
        onClick$={(event) => event.stopPropagation()}
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
      </div>
    </div>
  );
});

export default Dialog;
