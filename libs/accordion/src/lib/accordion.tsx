import {
  QwikIntrinsicElements,
  Signal,
  component$,
  useStylesScoped$,
  useId,
  useSignal,
  useStore,
  Slot,
} from '@builder.io/qwik';
export type AccordionProps = {
  rootProps?: QwikIntrinsicElements[`div`];
  id?: string;
  triggerProps?: QwikIntrinsicElements[`button`];
  open?: Signal<boolean>;
};
export const Accordion = component$((props: AccordionProps) => {
  useStylesScoped$(`
  div[hidden] {
    display: none;
  }
`);
  const defaultSignal = useSignal(false);
  const state = useStore<Required<Pick<AccordionProps, 'open' | 'id'>>>({
    open: props.open ?? defaultSignal,
    id: props.id ?? useId(),
  });

  return (
    <div {...props.rootProps}>
      <button
        type="button"
        id={state.id + '-trigger'}
        aria-expanded={state.open?.value}
        aria-controls={state.id}
        {...props.triggerProps}
        onClick$={() => (state.open.value = !state.open.value)}
      >
        <Slot name="trigger" />
      </button>
      <div
        id={state.id}
        role="region"
        aria-labelledby={state.id + '-trigger'}
        hidden={!state.open?.value}
      >
        <Slot />
      </div>
    </div>
  );
});
