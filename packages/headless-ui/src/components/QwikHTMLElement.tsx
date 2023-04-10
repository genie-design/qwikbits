import { QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";

export type QwikHTMLElementProps<T extends keyof QwikIntrinsicElements> =
  QwikIntrinsicElements[T] & {
    tag?: string;
  };

export type QwikHTMLElementIntrinsic = QwikHTMLElementProps<
  keyof QwikIntrinsicElements
>;

export const QwikHTMLElement = component$(
  ({ tag, ...props }: QwikHTMLElementProps<keyof QwikIntrinsicElements>) => {
    const Component = tag;
    return (
      <>
        {Component ? (
          <Component {...props}>
            <Slot />
          </Component>
        ) : (
          <Slot />
        )}
      </>
    );
  }
);
