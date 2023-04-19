import { QwikIntrinsicElements, Signal, VisibleTaskStrategy } from "@builder.io/qwik";
import { QwikHTMLElementIntrinsic } from "@qwikbits/utils";
export type DialogState = {
    role: `dialog` | `alertdialog`;
    open: Signal<boolean>;
    id: string;
    titleId: string;
    descriptionId: string;
};
export type DialogProps = Partial<DialogState> & {
    rootProps?: QwikHTMLElementIntrinsic;
    contentProps?: QwikHTMLElementIntrinsic;
    triggerButton?: boolean;
    triggerProps?: QwikHTMLElementIntrinsic;
    dialogProps?: QwikIntrinsicElements[`dialog`];
    titleProps?: QwikHTMLElementIntrinsic;
    descriptionProps?: QwikHTMLElementIntrinsic;
    footerProps?: QwikHTMLElementIntrinsic;
    closeButton?: boolean;
    closeProps?: QwikHTMLElementIntrinsic;
    strategy?: VisibleTaskStrategy | undefined;
    wrappers?: {
        rootChildren?: QwikHTMLElementIntrinsic;
        content?: QwikHTMLElementIntrinsic;
    };
};
export declare const Dialog: import("@builder.io/qwik").Component<DialogProps>;
export default Dialog;
