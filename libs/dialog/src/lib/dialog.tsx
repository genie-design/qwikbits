import { Portal } from '@qwikbits/portal';
import {
  ContextId,
  QwikIntrinsicElements,
  Signal,
  useBrowserVisibleTask$,
  useSignal,
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
export type DialogProps = Partial<DialogState> &
  QwikIntrinsicElements[`div`] & { context: ContextId<DialogState> };
export const getUniqueId = (i = 36) => {
  return Math.round(Math.random() * Number.MAX_SAFE_INTEGER)
    .toString(i)
    .toLowerCase();
};

export const DialogRoot = component$((props: DialogProps) => {
  const defaultSignal = useSignal(false);
  const state = useStore<DialogState>({
    role: props.role ?? `dialog`,
    open: props.open ?? defaultSignal,
    id: props.id ?? useUniqueId(),
    titleId: props.titleId ?? useUniqueId(),
    descriptionId: props.descriptionId ?? useUniqueId(),
    previouslyFocused: undefined,
  });
  useContextProvider(props.context, state);
  return (
    <div {...props}>
      <Slot />
    </div>
  );
});

export const DialogTrigger = component$(
  (
    props: QwikIntrinsicElements[`button`] & { context: ContextId<DialogState> }
  ) => {
    const state = useContext<DialogState>(props.context);
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
  (
    props: QwikIntrinsicElements[`div`] & { context: ContextId<DialogState> }
  ) => {
    const state = useContext<DialogState>(props.context);
    return (
      <div
        role="presentation"
        aria-modal="true"
        aria-hidden={!state.open.value}
        tabIndex={-1}
        {...props}
        onClick$={() =>
          state.role !== `alertdialog` ? (state.open.value = false) : ``
        }
      ></div>
    );
  }
);

export const DialogContent = component$(
  (
    props: QwikIntrinsicElements[`div`] & { context: ContextId<DialogState> }
  ) => {
    const state = useContext<DialogState>(props.context);
    const dialog = useSignal<HTMLDivElement>();
    useBrowserVisibleTask$(
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
        strategy: `document-ready`,
      }
    );
    useBrowserVisibleTask$(
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
        strategy: `document-ready`,
      }
    );
    return (
      <div
        ref={dialog}
        role={state.role}
        tabIndex={-1}
        aria-modal="true"
        aria-hidden={!state.open.value}
        aria-labelledby={state.titleId}
        aria-describedby={state.descriptionId}
        {...props}
        onClick$={(event) => event.stopPropagation()}
      >
        <Slot />
      </div>
    );
  }
);

export const DialogClose = component$(
  (
    props: QwikIntrinsicElements[`button`] & { context: ContextId<DialogState> }
  ) => {
    const state = useContext<DialogState>(props.context);
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

export const DialogTitle = component$(
  (
    props: QwikIntrinsicElements[`h2`] & { context: ContextId<DialogState> }
  ) => {
    const state = useContext<DialogState>(props.context);
    return (
      <h2 id={state.titleId} {...props}>
        <Slot />
      </h2>
    );
  }
);

export const DialogDescription = component$(
  (props: QwikIntrinsicElements[`p`] & { context: ContextId<DialogState> }) => {
    const state = useContext<DialogState>(props.context);
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
