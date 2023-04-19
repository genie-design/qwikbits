import {
  Signal,
  component$,
  useStylesScoped$,
  useId,
  useSignal,
  useStore,
  Slot,
} from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "@qwikbits/utils";
export type CollapseProps = {
  id?: string;
  open?: Signal<boolean>;
  rootProps?: QwikHTMLElementIntrinsic;
  triggerProps?: QwikHTMLElementIntrinsic;
  contentProps?: QwikHTMLElementIntrinsic;
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
    trigger?: QwikHTMLElementIntrinsic;
    content?: QwikHTMLElementIntrinsic;
  };
};
export const Collapse = component$((props: CollapseProps) => {
  const id = useId();
  useStylesScoped$(`
  div[hidden] {
    display: none;
  }
  [role="button"] {
    cursor: pointer;
  }
`);
  const defaultSignal = useSignal(false);
  const state = useStore<Required<Pick<CollapseProps, "open" | "id">>>({
    open: props.open ?? defaultSignal,
    id: props.id ?? id,
  });

  return (
    <QwikHTMLElement
      tag={props.rootProps?.tag || "details"}
      {...props.rootProps}
    >
      <QwikHTMLElement {...props.wrappers?.rootChildren}>
        <QwikHTMLElement {...props.wrappers?.trigger}>
          <QwikHTMLElement
            style={{ cursor: "pointer" }}
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
        </QwikHTMLElement>
        <QwikHTMLElement {...props.wrappers?.content}>
          <QwikHTMLElement
            id={state.id}
            tag={props.contentProps?.tag || "div"}
            role="region"
            aria-labelledby={state.id + "-trigger"}
            hidden={!state.open?.value}
            {...props.contentProps}
          >
            <Slot />
          </QwikHTMLElement>
        </QwikHTMLElement>
      </QwikHTMLElement>
    </QwikHTMLElement>
  );
});
