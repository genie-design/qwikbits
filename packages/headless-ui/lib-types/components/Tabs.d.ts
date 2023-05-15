import { Signal } from "@builder.io/qwik";
import { QwikHTMLElementIntrinsic } from "@qwikbits/utils";
export type Tab = {
    tabProps?: QwikHTMLElementIntrinsic;
    contentProps?: QwikHTMLElementIntrinsic;
    tabSlotName?: string;
    contentSlotName?: string;
    key?: string;
    tabLabel?: string;
    content?: string;
};
export type TabsProps = {
    id?: string;
    tabs: Tab[];
    rootProps?: QwikHTMLElementIntrinsic;
    label?: string;
    labelProps?: QwikHTMLElementIntrinsic;
    selected?: Signal<number>;
    wrappers?: {
        tabList?: QwikHTMLElementIntrinsic;
    };
};
export declare const Tabs: import("@builder.io/qwik").Component<TabsProps>;
