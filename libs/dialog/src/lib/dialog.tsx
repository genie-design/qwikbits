import { Portal } from '@qwikbits/portal';
import type { NoSerialize, QRL, Signal } from '@builder.io/qwik';
import {
  Slot,
  component$,
  useBrowserVisibleTask$,
  useStore,
  useTask$,
  useSignal,
  noSerialize,
  $,
} from '@builder.io/qwik';
import A11yDialogLib from 'a11y-dialog';

export interface DialogProps {
  role?: 'dialog' | 'alertdialog';
  id: string;
  title: any;
  dialogSignal?: Signal<NoSerialize<A11yDialogLib | undefined>>;
  titleId?: string;
  closeButtonLabel?: string;
  closeButtonContent?: any | string;
  closeButtonPosition?: 'first' | 'last' | 'none';
  dialogRoot?: string;
  classes?: {
    container?: string;
    overlay?: string;
    dialog?: string;
    title?: string;
    closeButton?: string;
  };
  children?: any;
}
export interface DialogState {
  instance: NoSerialize<A11yDialogLib | undefined>;
  isMounted: boolean;
  titleId: string;
}
export const attributes = function attributes(
  props: DialogProps,
  state: DialogState
) {
  return {
    container: {
      id: props.id,
      role: props.role ?? 'dialog',
      tabIndex: -1,
      'aria-modal': true,
      'aria-hidden': true,
      'aria-labelledby': state.titleId,
    },
    dialog: {
      role: 'document',
    },
    // Using a paragraph with accessibility mapping can be useful to work
    // around SEO concerns of having multiple <h1> per page.
    // See: https://twitter.com/goetsu/status/1261253532315004930
    title: {
      role: 'heading',
      'aria-level': 1,
      id: state.titleId,
    },
  };
};
export const button = function button(props: {
  class?: string;
  closeButtonContent?: any;
  closeButtonLabel?: string;
  onClick?: QRL;
}) {
  return (
    <button
      type="button"
      onClick$={props.onClick}
      class={props.class}
      aria-label={props.closeButtonLabel}
      key="button"
    >
      {props.closeButtonContent}
    </button>
  );
};
export const target = function target(props: DialogProps) {
  let targetEl = props.dialogRoot
    ? document.querySelector(props.dialogRoot)
    : document.body;
  targetEl = targetEl ?? document.body;
  return targetEl as HTMLElement;
};
export const Dialog = component$((props: DialogProps) => {
  const ref = useSignal<HTMLDivElement>();
  const state = useStore({
    instance: noSerialize(undefined as A11yDialogLib | undefined),
    isMounted: false,
    titleId: '',
    role: props.role ?? 'dialog',
    closeButtonLabel: props.closeButtonLabel ?? 'Close this dialog window',
    closeButtonContent: props.closeButtonContent ?? '\u00D7',
    closeButtonPosition: props.closeButtonPosition ?? 'first',
    classes: {
      container: props.classes?.container ?? 'dialog-container',
      overlay: props.classes?.overlay ?? 'dialog-overlay',
      dialog: props.classes?.dialog ?? 'dialog-content',
      title: props.classes?.title ?? 'dialog-title',
      closeButton: props.classes?.closeButton ?? 'dialog-close-button',
    },
    dialogSignal: props.dialogSignal ?? undefined,
    children: props.children ?? [],
  });
  useBrowserVisibleTask$(
    () => {
      if (!state.titleId) {
        state.titleId = props.titleId ?? props.id + '-title';
      }
      if (!state.isMounted) {
        state.isMounted = true;
      }
    },
    {
      strategy: 'document-ready',
    }
  );
  useBrowserVisibleTask$(
    ({ track }) => {
      track(() => ref.value);
      if (ref.value && !state.instance) {
        state.instance = noSerialize(new A11yDialogLib(ref.value));
      }
    },
    {
      strategy: 'document-ready',
    }
  );
  useTask$(({ track }) => {
    track(() => state.dialogSignal);
    track(() => state.instance);
    if (state.instance && state.dialogSignal)
      state.dialogSignal.value = noSerialize(state.instance);
    return () => {
      if (state.dialogSignal) {
        state.dialogSignal.value = undefined;
      }
    };
  });
  useTask$(() => {
    return () => state.instance?.destroy();
  });
  const close = $(() => {
    state.instance?.hide();
  });
  return (
    <>
      {state.isMounted ? (
        <Portal>
          <div
            ref={ref}
            {...attributes(props, state).container}
            class={state.classes?.container}
          >
            <div
              onClick$={() => {
                props.role !== 'alertdialog' && close();
              }}
              class={state.classes?.overlay}
            ></div>
            <div
              {...attributes(props, state).dialog}
              class={state.classes?.dialog}
            >
              {state.closeButtonPosition === 'first' ? (
                <>
                  {button({
                    class: state.classes?.closeButton,
                    closeButtonContent: state.closeButtonContent,
                    closeButtonLabel: state.closeButtonLabel,
                    onClick: close,
                  })}
                </>
              ) : null}
              <p
                key="title"
                // {...attributes(props, state).title}
                class={state.classes?.title}
              >
                {props.title}
              </p>
              <Slot></Slot>
              {state.closeButtonPosition === 'last' ? (
                <>
                  {button({
                    class: state.classes?.closeButton,
                    closeButtonContent: state.closeButtonContent,
                    closeButtonLabel: state.closeButtonLabel,
                    onClick: close,
                  })}
                </>
              ) : null}
            </div>
          </div>
        </Portal>
      ) : (
        <div></div>
      )}
    </>
  );
});
export default Dialog;
