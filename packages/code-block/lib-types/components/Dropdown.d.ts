import { QwikHTMLElementIntrinsic } from "@qwikbits/utils";
export type DropdownProps = {
    rootProps?: QwikHTMLElementIntrinsic;
    label?: string;
    labelProps?: QwikHTMLElementIntrinsic;
    contentProps?: QwikHTMLElementIntrinsic;
    items?: {
        label?: string;
        key?: string;
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
