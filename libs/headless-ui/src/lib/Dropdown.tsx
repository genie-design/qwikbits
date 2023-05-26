import {
  ClassList,
  component$,
  Signal,
  Slot,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';
import {
  QwikHTMLElement,
  QwikHTMLElementIntrinsic,
  serializeClass,
} from '@qwikbits/utils';
export type DropdownProps = {
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
export const Dropdown = component$((props: DropdownProps) => {
  const defaultSignal = useSignal(props.lockOpen ?? false);
  const open = props.open ?? defaultSignal;

  return (
    <QwikHTMLElement
      tag={props.rootProps?.tag || 'div'}
      aria-label={props.rootProps?.['aria-label'] || props.label}
      role="list"
      {...props.rootProps}
      class={
        serializeClass(props.class) +
        ' ' +
        serializeClass(props.rootProps?.class)
      }
    >
      <QwikHTMLElement {...props.wrappers?.rootChildren}>
        <QwikHTMLElement
          tag={props.triggerProps?.tag || 'button'}
          aria-haspopup="listbox"
          aria-expanded={open?.value}
          onClick$={() => (open.value = !open.value)}
          {...props.triggerProps}
        >
          {props.label ? props.label : ''}
          <Slot name="trigger" />
        </QwikHTMLElement>
        <QwikHTMLElement
          role="listbox"
          hidden={!props.lockOpen && !open?.value}
          tag={props.contentProps?.tag || 'ul'}
          {...props.contentProps}
        >
          <Slot />
          <Slot name="content" />
          {props.items?.map((item, i) => (
            <QwikHTMLElement
              key={item.key ?? i}
              tag={item.itemWrapperProps?.tag || 'li'}
              {...item.itemWrapperProps}
            >
              <QwikHTMLElement
                tag={item.itemProps?.tag || 'a'}
                {...item.itemProps}
                class={
                  serializeClass(item.class) +
                  ' ' +
                  serializeClass(item.itemProps?.class)
                }
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
