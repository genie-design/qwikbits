import { Portal } from '@qwikbits/portal';
import type { QwikIntrinsicElements } from '@builder.io/qwik';
import {
  Slot,
  component$,
  useStore,
  useContext,
  useContextProvider,
  createContextId,
  $,
} from '@builder.io/qwik';
import { useUniqueId } from '@qwikbits/utils';
import { JSX } from '@builder.io/qwik/jsx-runtime';

export type DialogProps = {
  role?: 'dialog' | 'alertdialog';
  open?: boolean;
  id?: string;
  children?: JSX.ElementChildrenAttribute;
  titleId?: string;
  descriptionId?: string;
};
export type DialogState = Omit<DialogProps, 'children'>;

export const DialogContext = createContextId<DialogState>('qwikbits-dialog');
export const DialogRoot = component$((props: DialogProps) => {
  const { children, ...rest } = props;
  const state = useStore({
    ...rest,
    role: props.role ?? 'dialog',
    open: props.open ?? false,
    id: props.id ?? useUniqueId(),
    titleId: props.titleId ?? useUniqueId(),
    descriptionId: props.descriptionId ?? useUniqueId(),
    previouslyFocused: false,
  });
  useContextProvider(DialogContext, state);
  return <>{children}</>;
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
        onClick$={() => (state.open = true)}
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
        aria-hidden={!state.open}
        tabIndex={-1}
        {...props}
        onClick$={() => (state.open = false)}
      ></div>
    );
  }
);

export const DialogContent = component$(
  (props: QwikIntrinsicElements['div']) => {
    const state = useContext<DialogState>(DialogContext);
    return (
      <div
        role={state.role}
        aria-modal="true"
        aria-hidden={!state.open}
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

export const DialogCloseButton = component$(
  (props: QwikIntrinsicElements['button']) => {
    const state = useContext<DialogState>(DialogContext);
    return (
      <button type="button" {...props} onClick$={() => (state.open = false)}>
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
const CloseButton = DialogCloseButton;
const Title = DialogTitle;
const Description = DialogDescription;

export {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  CloseButton,
  Title,
  Description,
};
