/* eslint-disable qwik/use-method-usage */
import { useSignal, component$, Slot } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "./QwikHTMLElement";
export function use100vh() {
  const height = useSignal<number | undefined>(undefined);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      height.value = window.innerHeight;
    });
  }
  useVisibleTask$(async () => {
    height.value = innerHeight;
  });
  return height;
}
export type HeightScreenElementProps = {
  rootProps?: QwikHTMLElementIntrinsic;
};

export const HeightScreenElement = component$(
  (props: HeightScreenElementProps) => {
    const height = use100vh();
    return (
      <QwikHTMLElement
        tag={props.rootProps?.tag || "div"}
        {...props.rootProps}
        style={{ height: `${height.value}px` || "100vh" }}
      >
        <Slot />
      </QwikHTMLElement>
    );
  }
);
