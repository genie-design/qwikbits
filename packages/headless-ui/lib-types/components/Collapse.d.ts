import { Signal } from "@builder.io/qwik";
import { QwikHTMLElementIntrinsic } from "@qwikbits/utils";
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
export declare const Collapse: import("@builder.io/qwik").Component<CollapseProps>;
