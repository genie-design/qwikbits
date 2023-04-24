import { QwikIntrinsicElements, Signal, VisibleTaskStrategy } from "@builder.io/qwik";
export type DialogState = {
    role: `dialog` | `alertdialog`;
    open: Signal<boolean>;
    id: string;
    titleId: string;
    descriptionId: string;
};
export type DialogProps = Partial<DialogState> & {
    rootProps?: QwikIntrinsicElements[`div`];
    triggerButton?: boolean;
    triggerProps?: QwikIntrinsicElements[`button`];
    dialogProps?: QwikIntrinsicElements[`dialog`];
    titleProps?: QwikIntrinsicElements[`h2`];
    descriptionProps?: QwikIntrinsicElements[`p`];
    closeButton?: boolean;
    closeProps?: QwikIntrinsicElements[`button`];
    strategy?: VisibleTaskStrategy | undefined;
};
export declare const Dialog: import("@builder.io/qwik").Component<DialogProps>;
export default Dialog;
