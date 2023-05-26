import { ClassList, Signal } from '@builder.io/qwik';
import { QwikHTMLElementIntrinsic } from '@qwikbits/utils';
export type DropdownProps = {
    rootProps?: QwikHTMLElementIntrinsic;
    label?: string;
    triggerProps?: QwikHTMLElementIntrinsic;
    contentProps?: QwikHTMLElementIntrinsic;
    open?: Signal<boolean>;
    lockOpen?: boolean;
    class?: ClassList | Signal<ClassList>;
    items?: {
        label?: string;
        key?: string;
        class?: ClassList | Signal<ClassList>;
        itemWrapperProps?: QwikHTMLElementIntrinsic;
        itemProps?: QwikHTMLElementIntrinsic;
        labelWrapperProps?: QwikHTMLElementIntrinsic;
        labelBeforeProps?: QwikHTMLElementIntrinsic;
        labelAfterProps?: QwikHTMLElementIntrinsic;
    }[];
    wrappers?: {
        rootChildren?: QwikHTMLElementIntrinsic;
    };
};
export declare const Dropdown: import("@builder.io/qwik").Component<DropdownProps>;
