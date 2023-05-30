import { ClassList, Signal } from '@builder.io/qwik';
import { QwikHTMLElementIntrinsic } from '@qwikbits/utils';
export type DropdownProps = {
    id?: string;
    popoverId?: string;
    popover?: 'auto' | 'manual' | null;
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
declare module '@builder.io/qwik' {
    interface Popover {
        popover?: 'auto' | 'manual' | null;
        popoverTargetElement?: HTMLElement | null;
        popoverTargetAction?: 'toggle' | 'show' | 'hide';
    }
    interface HTMLAttributes<T> extends Popover {
    }
}
