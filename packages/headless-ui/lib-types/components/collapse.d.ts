import { QwikIntrinsicElements, Signal } from "@builder.io/qwik";
export type CollapseProps = {
    rootProps?: QwikIntrinsicElements[`div`];
    id?: string;
    triggerProps?: QwikIntrinsicElements[`button`];
    open?: Signal<boolean>;
};
export declare const Collapse: import("@builder.io/qwik").Component<CollapseProps>;
