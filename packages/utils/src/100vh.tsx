/* eslint-disable qwik/use-method-usage */
import { useOnWindow, useSignal, component$, $ } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "./QwikHTMLElement";
export function use100vh() {
  const height = useSignal<number | undefined>(undefined);
  useOnWindow(
    "resize",
    $(() => {
      height.value = window.innerHeight;
    })
  );
  useVisibleTask$(async () => {
    height.value = innerHeight;
  });
  return height.value ? `${height.value}px` : "100vh";
}
export type HeightScreenElementProps = {
  rootProps?: QwikHTMLElementIntrinsic;
};

export const HeightScreenElement = component$(
  (props: HeightScreenElementProps) => {
    const height = use100vh();
    return (
      <QwikHTMLElement
        tag={props.rootProps?.tag || "details"}
        {...props.rootProps}
        style={{ height }}
      ></QwikHTMLElement>
    );
  }
);
