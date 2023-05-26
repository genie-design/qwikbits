/* eslint-disable qwik/use-method-usage */
import { useSignal, component$, Slot } from "@builder.io/qwik";
import { useVisibleTask$ } from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "./QwikHTMLElement";
export function use100vh(vh?: number) {
  const height = useSignal<number | undefined>(undefined);
  const numerator = vh ?? 100;
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      height.value = window.innerHeight * (numerator / 100);
    });
  }
  useVisibleTask$(async () => {
    height.value = window.innerHeight * (numerator / 100);
  });
  return height;
}
export type HeightScreenElementProps = QwikHTMLElementIntrinsic & {
  vh?: number;
};

export const VHElement = component$((props: HeightScreenElementProps) => {
  const height = use100vh(props.vh);
  return (
    <QwikHTMLElement
      tag={"div"}
      {...props}
      style={{ height: `${height.value}px` || `${props.vh || 100}vh` }}
    >
      <Slot />
    </QwikHTMLElement>
  );
});
