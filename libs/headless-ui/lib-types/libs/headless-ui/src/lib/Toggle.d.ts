import { ClassList, Signal } from '@builder.io/qwik';
import { QwikHTMLElementIntrinsic } from '@qwikbits/utils';
export type ToggleProps = {
    id?: string;
    rootProps?: QwikHTMLElementIntrinsic;
    label?: string;
    labelProps?: QwikHTMLElementIntrinsic;
    switchProps?: QwikHTMLElementIntrinsic;
    thumbProps?: QwikHTMLElementIntrinsic;
    checked?: Signal<boolean>;
    invertChecked?: boolean;
    class?: ClassList | Signal<ClassList>;
    wrappers?: {
        rootChildren?: QwikHTMLElementIntrinsic;
    };
};
export declare const Toggle: import("@builder.io/qwik").Component<ToggleProps>;
