import {
  QwikIntrinsicElements,
  Signal,
  component$,
  useStylesScoped$,
  useId,
  useSignal,
  useStore,
  Slot,
} from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementProps } from "./QwikHTMLElement";
export type CollapseProps = {
  rootProps?: QwikHTMLElementProps<keyof QwikIntrinsicElements>;
  id?: string;
  triggerProps?: QwikHTMLElementProps<keyof QwikIntrinsicElements>;
  contentProps?: QwikHTMLElementProps<keyof QwikIntrinsicElements>;
  open?: Signal<boolean>;
};
export const Collapse = component$((props: CollapseProps) => {
  useStylesScoped$(`
  div[hidden] {
    display: none;
  }
`);
  const defaultSignal = useSignal(false);
  const state = useStore<Required<Pick<CollapseProps, "open" | "id">>>({
    open: props.open ?? defaultSignal,
    id: props.id ?? useId(),
  });

  return (
    <QwikHTMLElement
      tag={props.rootProps?.tag || "details"}
      {...props.rootProps}
    >
      <QwikHTMLElement
        tag={props.triggerProps?.tag || "summary"}
        id={state.id + "-trigger"}
        aria-expanded={state.open?.value}
        aria-controls={state.id}
        onClick$={() => (state.open.value = !state.open.value)}
        onKeyDown$={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            state.open.value = !state.open.value;
          }
        }}
        {...props.triggerProps}
      >
        <Slot name="trigger" />
      </QwikHTMLElement>
      <QwikHTMLElement
        id={state.id}
        role="region"
        aria-labelledby={state.id + "-trigger"}
        hidden={!state.open?.value}
        {...props.contentProps}
      >
        <Slot />
      </QwikHTMLElement>
    </QwikHTMLElement>
  );
});
