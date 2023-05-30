import {
  ClassList,
  component$,
  Signal,
  Slot,
  useId,
  useSignal,
  useStylesScoped$,
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
  useStylesScoped$(popoverStyles);
  const id = useId();
  const defaultSignal = useSignal(props.lockOpen ?? false);
  const open = props.open ?? defaultSignal;

  useVisibleTask$(
    () => {
      console.log('is supported', isSupported());
      if (!isSupported()) {
        apply();
      }
    },
    { strategy: 'document-ready' }
  );

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
        <div id={props.id ?? id} popover="auto" class="">
          Popover 1
        </div>
        <button popovertarget={props.id ?? id}>
          <span>Click to toggle Popover 1</span>
        </button>
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

type PopoverToggleTargetElementInvoker = QwikIntrinsicElements & {
  popoverTargetElement: HTMLElement | null;
  popoverTargetAction: 'toggle' | 'show' | 'hide';
};

declare global {
  interface ToggleEvent extends Event {
    oldState: string;
    newState: string;
  }
  interface HTMLAttributes<HTMLDivElement> {
    popover: 'auto' | 'manual' | null;
    showPopover(): void;
    hidePopover(): void;
    togglePopover(): void;
  }
  /* eslint-disable @typescript-eslint/no-empty-interface */
  interface HTMLButtonElement extends PopoverToggleTargetElementInvoker {}
  interface HTMLInputElement extends PopoverToggleTargetElementInvoker {}
  /* eslint-enable @typescript-eslint/no-empty-interface */
  interface Window {
    ToggleEvent: ToggleEvent;
  }
}
