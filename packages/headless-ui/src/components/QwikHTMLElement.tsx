import { QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";

export type QwikHTMLElementProps<T extends keyof QwikIntrinsicElements> =
  QwikIntrinsicElements[T] & {
    tag?: string;
  };

export const QwikHTMLElement = component$(
  ({ tag, ...props }: QwikHTMLElementProps<keyof QwikIntrinsicElements>) => {
    const Component = tag || "div";
    return (
      <Component {...props}>
        <Slot />
      </Component>
    );
  }
);
