import { Portal } from '@qwikbits/portal';
import {
  QwikIntrinsicElements,
  Signal,
  useBrowserVisibleTask$,
  useSignal,
  useTask$,
} from '@builder.io/qwik';
import {
  Slot,
  component$,
  useStore,
  useContext,
  useContextProvider,
  createContextId,
  $,
} from '@builder.io/qwik';
import { moveFocusToDialog, trapTabKey, useUniqueId } from '@qwikbits/utils';
import { JSX } from '@builder.io/qwik/jsx-runtime';

export type DialogState = {
  role: 'dialog' | 'alertdialog';
  open: Signal<boolean>;
  id: string;
  titleId: string;
  descriptionId: string;
};
export type DialogProps = Partial<DialogState> & QwikIntrinsicElements['div'];

export const DialogContext = createContextId<DialogState>('qwikbits-dialog');
export const DialogRoot = component$((props: DialogProps) => {
  const defaultSignal = useSignal(false);
  const state = useStore({
    role: props.role ?? 'dialog',
    open: props.open ?? defaultSignal,
    id: props.id ?? useUniqueId(),
    titleId: props.titleId ?? useUniqueId(),
    descriptionId: props.descriptionId ?? useUniqueId(),
  });
  useContextProvider(DialogContext, state);
  return (
    <div {...props}>
      <Slot />
    </div>
  );
});

export const DialogTrigger = component$(
  (props: QwikIntrinsicElements['button']) => {
    const state = useContext<DialogState>(DialogContext);
    return (
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded
        {...props}
        onClick$={() => (state.open.value = true)}
      >
        <Slot />
      </button>
    );
  }
);

export const DialogPortal = Portal;

export const DialogOverlay = component$(
  (props: QwikIntrinsicElements['div']) => {
    const state = useContext<DialogState>(DialogContext);
    return (
      <div
        role="presentation"
        aria-modal="true"
        aria-hidden={!state.open.value}
        tabIndex={-1}
        {...props}
        onClick$={() => (state.open.value = false)}
      ></div>
    );
  }
);

export const DialogContent = component$(
  (props: QwikIntrinsicElements['div']) => {
    const state = useContext<DialogState>(DialogContext);
    const dialog = useSignal<HTMLDivElement>();
    useBrowserVisibleTask$(
      ({ track }) => {
        track(() => state.open.value);
        console.log('state.open', state.open.value);
        console.log('dialog.value', dialog.value);
        if (dialog.value && state.open.value) {
          moveFocusToDialog(dialog.value);
        }
      },
      {
        strategy: 'document-ready',
      }
    );
    return (
      <div
        ref={dialog}
        role={state.role}
        aria-modal="true"
        aria-hidden={!state.open.value}
        aria-labelledby={state.titleId}
        aria-describedby={state.descriptionId}
        {...props}
        onClick$={(event) => event.stopPropagation()}
        preventdefault:keydown
        onKeyDown$={(e) => {
          console.log('e', e);
          if (dialog.value) {
            if (e.key === 'Tab') {
              trapTabKey(dialog.value, e);
              return;
            } else {
              dialog.value.dispatchEvent(new Event(e.type, e));
            }
          }
        }}
      >
        <Slot />
      </div>
    );
  }
);

export const DialogClose = component$(
  (props: QwikIntrinsicElements['button']) => {
    const state = useContext<DialogState>(DialogContext);
    return (
      <button
        type="button"
        {...props}
        onClick$={() => (state.open.value = false)}
      >
        <Slot />
      </button>
    );
  }
);

export const DialogTitle = component$((props: QwikIntrinsicElements['h2']) => {
  const state = useContext<DialogState>(DialogContext);
  return (
    <h2 id={state.titleId} {...props}>
      <Slot />
    </h2>
  );
});

export const DialogDescription = component$(
  (props: QwikIntrinsicElements['p']) => {
    const state = useContext<DialogState>(DialogContext);
    return (
      <p id={state.descriptionId} {...props}>
        <Slot />
      </p>
    );
  }
);

const Root = DialogRoot;
const Trigger = DialogTrigger;
const Overlay = DialogOverlay;
const Content = DialogContent;
const Close = DialogClose;
const Title = DialogTitle;
const Description = DialogDescription;

export { Root, Trigger, Portal, Overlay, Content, Close, Title, Description };
