import {
  ClassList,
  component$,
  Signal,
  Slot,
  useId,
  useSignal,
  useStyles$,
  useVisibleTask$,
  $,
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
  hoverMode?: boolean;
  hoverCloseDelay?: number;
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
  const defaultSignal = useSignal(false);
  const open = props.open ?? defaultSignal;
  const root = useSignal<HTMLElement>();
  useVisibleTask$(() => {
    if (!isSupported()) {
      apply();
    }
  });
  useVisibleTask$((ctx) => {
    ctx.track(() => root.value);
    ctx.track(() => open.value);
    if (root.value) {
      const popover = root.value.querySelector('[popover]');
      if (popover) {
        if (
          open.value &&
          'showPopover' in popover &&
          typeof popover.showPopover === 'function'
        ) {
          console.log('SHOW');
          popover.showPopover();
        } else if (
          !open.value &&
          'hidePopover' in popover &&
          typeof popover.hidePopover === 'function'
        ) {
          console.log('HIDE');
          popover.hidePopover();
        }
      }
    }
  });

  const timer = useSignal<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = $(() => {
    if (props.hoverMode) {
      clearTimeout(timer.value);
      if (!open.value) {
        open.value = true;
      }
    }
  });

  const handleMouseLeave = $(() => {
    if (props.hoverMode) {
      timer.value = setTimeout(() => {
        if (open.value) {
          open.value = false;
        }
      }, props.hoverCloseDelay ?? 100);
    }
  });

  return (
    <QwikHTMLElement
      ref={root}
      id={props.id ?? id}
      tag={props.rootProps?.tag || 'div'}
      aria-label={props.rootProps?.['aria-label'] || props.label}
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
          onMouseEnter$={(e) => {
            handleMouseEnter();
            props.triggerProps?.onMouseEnter?.(e);
          }}
          onMouseLeave$={(e) => {
            handleMouseLeave();
            props.triggerProps?.onMouseLeave?.(e);
          }}
        >
          {props.label ? props.label : ''}
          <Slot name="trigger" />
        </QwikHTMLElement>
        <QwikHTMLElement
          id={props.popoverId ?? popoverId}
          tag={props.contentProps?.tag || 'ul'}
          role="list"
          popover={props.popover ?? 'auto'}
          onToggle$={(e: ToggleEvent) => {
            console.log(e);
            open.value = e.newState === 'open';
          }}
          {...props.contentProps}
          onMouseEnter$={(e) => {
            handleMouseEnter();
            props.triggerProps?.onMouseEnter?.(e);
          }}
          onMouseLeave$={(e) => {
            handleMouseLeave();
            props.triggerProps?.onMouseLeave?.(e);
          }}
        >
          <Slot />
          <Slot name="content" />
          {props.items?.map((item, i) => (
            <QwikHTMLElement
              key={item.key ?? i}
              tag={item.itemWrapperProps?.tag || 'li'}
              role="listitem"
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
