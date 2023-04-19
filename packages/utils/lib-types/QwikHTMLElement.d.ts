import { QwikIntrinsicElements } from "@builder.io/qwik";
export type QwikHTMLElementProps<T extends keyof QwikIntrinsicElements> = QwikIntrinsicElements[T] & {
    tag?: string;
};
export type QwikHTMLElementIntrinsic = QwikHTMLElementProps<keyof QwikIntrinsicElements>;
export declare const QwikHTMLElement: import("@builder.io/qwik").Component<QwikHTMLElementProps<keyof QwikIntrinsicElements>>;
