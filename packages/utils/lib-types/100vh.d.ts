import { QwikHTMLElementIntrinsic } from "./QwikHTMLElement";
export declare function use100vh(vh?: number): import("@builder.io/qwik").Signal<number | undefined>;
export type HeightScreenElementProps = {
    rootProps?: QwikHTMLElementIntrinsic;
    vh?: number;
};
export declare const VHElement: import("@builder.io/qwik").Component<HeightScreenElementProps>;
