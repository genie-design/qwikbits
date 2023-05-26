import { Signal, ClassList, PropFunction } from '@builder.io/qwik';
import { QwikHTMLElementIntrinsic } from '@qwikbits/utils';
export type CollapseProps = {
    id?: string;
    open?: Signal<boolean> | boolean;
    onChange$?: PropFunction<(open: boolean) => void>;
    rootProps?: QwikHTMLElementIntrinsic;
    triggerProps?: QwikHTMLElementIntrinsic;
    contentProps?: QwikHTMLElementIntrinsic;
    class?: ClassList | Signal<ClassList>;
    wrappers?: {
        rootChildren?: QwikHTMLElementIntrinsic;
        trigger?: QwikHTMLElementIntrinsic;
        content?: QwikHTMLElementIntrinsic;
    };
};
export declare const Collapse: import("@builder.io/qwik").Component<CollapseProps>;
