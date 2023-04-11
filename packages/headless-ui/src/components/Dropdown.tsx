import { component$, Slot } from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "./QwikHTMLElement";
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
export const Dropdown = component$((props: DropdownProps) => {
  return (
    <QwikHTMLElement
      tag={props.rootProps?.tag || "details"}
      role="list"
      {...props.rootProps}
    >
      <QwikHTMLElement {...props.wrappers?.rootChildren}>
        <QwikHTMLElement
          tag={props.labelProps?.tag || "summary"}
          aria-haspopup="listbox"
          {...props.labelProps}
        >
          {props.label}
          <Slot name="label" />
        </QwikHTMLElement>
        <QwikHTMLElement
          role="listbox"
          tag={props.contentProps?.tag || "ul"}
          {...props.contentProps}
        >
          <Slot />
          <Slot name="content" />
          {props.items?.map((item, i) => (
            <QwikHTMLElement
              key={item.key ?? i}
              tag={item.itemWrapperProps?.tag || "li"}
              {...item.itemWrapperProps}
            >
              <QwikHTMLElement
                tag={item.itemProps?.tag || "a"}
                {...item.itemProps}
              >
                <QwikHTMLElement {...item.labelBeforeProps} />
                <QwikHTMLElement {...item.labelWrapperProps}>
                  {item.label}
                </QwikHTMLElement>
                <QwikHTMLElement {...item.labelAfterProps} />
              </QwikHTMLElement>
            </QwikHTMLElement>
          ))}
          <Slot name="content_after" />
        </QwikHTMLElement>
      </QwikHTMLElement>
    </QwikHTMLElement>
  );
});
