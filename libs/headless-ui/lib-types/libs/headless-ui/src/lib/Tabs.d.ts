import { ClassList, PropFunction, Signal } from '@builder.io/qwik';
import { QwikHTMLElementIntrinsic } from '@qwikbits/utils';
export type Tab = {
    tabProps?: QwikHTMLElementIntrinsic;
    contentProps?: QwikHTMLElementIntrinsic;
    tabSlotName?: string;
    contentSlotName?: string;
    class?: ClassList | Signal<ClassList>;
    key?: string;
    tabLabel?: string;
    content?: string;
};
export type TabsProps = {
    id?: string;
    tabs: Tab[];
    class?: ClassList | Signal<ClassList>;
    rootProps?: QwikHTMLElementIntrinsic;
    label?: string;
    labelProps?: QwikHTMLElementIntrinsic;
    selected?: Signal<number>;
    tabListProps?: QwikHTMLElementIntrinsic;
    allTabProps?: QwikHTMLElementIntrinsic;
    allContentProps?: QwikHTMLElementIntrinsic;
    onChange$?: PropFunction<(selected: number) => void>;
    wrappers?: {
        content?: QwikHTMLElementIntrinsic;
    };
};
export declare const Tabs: import("@builder.io/qwik").Component<TabsProps>;
