import { component$, Signal, Slot, useSignal } from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "@qwikbits/utils";
export type DropdownProps = {
  rootProps?: QwikHTMLElementIntrinsic;
  label?: string;
  triggerProps?: QwikHTMLElementIntrinsic;
  contentProps?: QwikHTMLElementIntrinsic;
  open?: Signal<boolean>;
  lockOpen?: boolean;
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
  const defaultSignal = useSignal(props.lockOpen ?? false);
  const open = props.open ?? defaultSignal;

  return (
    <QwikHTMLElement
      tag={props.rootProps?.tag || "div"}
      aria-label={props.rootProps?.["aria-label"] || props.label}
      onClick$={() => (open.value = !open.value)}
      role="list"
      {...props.rootProps}
    >
      <QwikHTMLElement {...props.wrappers?.rootChildren}>
        <QwikHTMLElement
          tag={props.triggerProps?.tag || "button"}
          aria-haspopup="listbox"
          aria-expanded={props.open?.value}
          {...props.triggerProps}
        >
          {props.label ? props.label : ""}
          <Slot name="trigger" />
        </QwikHTMLElement>
        <QwikHTMLElement
          role="listbox"
          hidden={!props.lockOpen && !open?.value}
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
