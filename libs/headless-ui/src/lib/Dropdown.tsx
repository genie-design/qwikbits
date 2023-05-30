import {
  ClassList,
  component$,
  Signal,
  Slot,
  useId,
  useSignal,
  useStyles$,
  useVisibleTask$,
  type QwikIntrinsicElements,
} from '@builder.io/qwik';
import {
  QwikHTMLElement,
  QwikHTMLElementIntrinsic,
  serializeClass,
} from '@qwikbits/utils';

import { isSupported, apply } from '@oddbird/popover-polyfill/fn';
import popoverStyles from './popover.css?inline';

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
export const Dropdown = component$((props: DropdownProps) => {
  useStyles$(popoverStyles);
  const id = useId();
  const popoverId = useId();
  const defaultSignal = useSignal(props.lockOpen ?? false);
  const open = props.open ?? defaultSignal;

  useVisibleTask$(
    () => {
      if (!isSupported()) {
        apply();
      }
    },
    { strategy: 'document-ready' }
  );

  return (
    <QwikHTMLElement
      id={props.id ?? id}
      tag={props.rootProps?.tag || 'div'}
      aria-label={props.rootProps?.['aria-label'] || props.label}
      role="list"
      style={{ position: 'relative' }}
      {...props.rootProps}
      class={
        serializeClass(props.class) +
        ' ' +
        serializeClass(props.rootProps?.class)
      }
    >
      <QwikHTMLElement {...props.wrappers?.rootChildren}>
        {/* @ts-ignore can't figure out how to add popover to types */}
        <QwikHTMLElement
          tag={props.triggerProps?.tag || 'button'}
          popovertarget={props.popoverId ?? popoverId}
          {...props.triggerProps}
        >
          {props.label ? props.label : ''}
          <Slot name="trigger" />
        </QwikHTMLElement>
        <QwikHTMLElement
          id={props.popoverId ?? popoverId}
          tag={props.contentProps?.tag || 'ul'}
          popover={props.popover ?? 'auto'}
          onToggle$={(e: ToggleEvent) => {
            open.value = e.newState === 'open';
          }}
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

declare module '@builder.io/qwik' {
  interface Popover {
    popover?: 'auto' | 'manual' | null;
    popoverTargetElement?: HTMLElement | null;
    popoverTargetAction?: 'toggle' | 'show' | 'hide';
  }
  interface HTMLAttributes<T> extends Popover {}
}
function useStyles(popoverStyles: string) {
  throw new Error('Function not implemented.');
}
