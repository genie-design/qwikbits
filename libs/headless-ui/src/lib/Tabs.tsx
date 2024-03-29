import {
  ClassList,
  component$,
  PropFunction,
  Signal,
  Slot,
  useId,
  useSignal,
  useTask$,
  useVisibleTask$,
} from '@builder.io/qwik';
import {
  QwikHTMLElement,
  QwikHTMLElementIntrinsic,
  serializeClass,
} from '@qwikbits/utils';
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
export const Tabs = component$((props: TabsProps) => {
  const defaultSignal = useSignal(0);
  const defaultId = useId();
  const id = props.id ?? defaultId;
  const selected = props.selected ?? defaultSignal;
  useTask$((ctx) => {
    ctx.track(() => props.tabs);
    if (props.tabs) {
      props.tabs.forEach((tab, i) => {
        tab.key =
          tab.key ??
          id +
            (tab.tabSlotName ?? '') +
            (tab.contentSlotName ?? '') +
            (tab.tabLabel ?? '') +
            i;
      });
    }
  });
  useVisibleTask$((ctx) => {
    ctx.track(() => selected.value);
    const tab = props.tabs[selected.value];
    if (tab) {
      const tabId = tab.tabProps?.id ?? `tab-${id}-${selected.value}`;
      document.getElementById(tabId)?.focus();
    }
  });

  useVisibleTask$((ctx) => {
    ctx.track(() => selected.value);
    const handleKeyDown = (event: KeyboardEvent) => {
      let handled = false;
      switch (event.key) {
        case 'ArrowLeft':
          if (selected.value === 0) {
            selected.value = props.tabs.length - 1;
          } else {
            selected.value = selected.value - 1;
          }
          handled = true;
          break;

        case 'ArrowRight':
          if (selected.value === props.tabs.length - 1) {
            selected.value = 0;
          } else {
            selected.value = selected.value + 1;
          }
          handled = true;
          break;

        case 'Home':
          selected.value = 0;
          handled = true;
          break;

        case 'End':
          selected.value = props.tabs.length - 1;
          handled = true;
          break;
        case 'Tab':
          if (event.shiftKey && selected.value > 0) {
            selected.value = 0;
            handled = true;
          }
          break;

        default:
          break;
      }
      if (handled) {
        event.preventDefault();
      }
    };
    const rootElem = document.getElementById(id);
    if (rootElem) {
      rootElem.querySelectorAll('[role=tab]').forEach((elem) => {
        (elem as HTMLButtonElement).addEventListener('keydown', handleKeyDown);
      });
    }
    return () => {
      if (rootElem) {
        rootElem.querySelectorAll('[role=tab]').forEach((elem) => {
          (elem as HTMLButtonElement).removeEventListener(
            'keydown',
            handleKeyDown
          );
        });
      }
    };
  });
  useTask$((ctx) => {
    ctx.track(() => selected.value);
    if (props.onChange$) {
      props.onChange$(selected.value);
    }
  });
  return (
    <>
      <QwikHTMLElement
        tag={props.rootProps?.tag || 'div'}
        {...props.rootProps}
        id={id}
        class={
          serializeClass(props.class) +
          ' ' +
          serializeClass(props.rootProps?.class)
        }
      >
        <QwikHTMLElement id={`tablist-${id}`} tag="h3" {...props.labelProps}>
          <Slot />
          <Slot name="label" />
          {props.label ? props.label : ''}
        </QwikHTMLElement>
        <QwikHTMLElement
          tag="div"
          role="tablist"
          {...props?.tabListProps}
          aria-labelledby={`tablist-${id}`}
        >
          {props.tabs?.map((tab, i) => (
            <QwikHTMLElement
              key={(tab.key ?? i) + '-tab'}
              role="tab"
              id={tab.tabProps?.id ?? `tab-${id}-${i}`}
              tag="button"
              onClick$={() => (selected.value = i)}
              aria-selected={selected.value === i ? 'true' : 'false'}
              aria-controls={tab?.contentProps?.id ?? `tabpanel-${id}-${i}`}
              tabIndex={i === 0 ? 0 : -1}
              {...props?.allTabProps}
              {...tab.tabProps}
              class={
                serializeClass(tab.class) +
                ' ' +
                serializeClass(tab.tabProps?.class) +
                ' ' +
                serializeClass(props.allTabProps?.class)
              }
            >
              <Slot name={tab.tabSlotName ?? `tab-${i + 1}`} />
              {tab.tabLabel ? tab.tabLabel : ''}
            </QwikHTMLElement>
          ))}
        </QwikHTMLElement>

        <QwikHTMLElement {...props.wrappers?.content}>
          {props.tabs?.map((tab, i) => (
            <QwikHTMLElement
              key={(tab.key ?? i) + 'content'}
              tag="div"
              role="tabpanel"
              hidden={selected.value !== i}
              id={tab.contentProps?.id ?? `tabpanel-${id}-${i}`}
              aria-labelledby={tab.tabProps?.id ?? `tab-${id}-${i}`}
              {...props.allContentProps}
              {...tab.contentProps}
              class={
                serializeClass(tab.contentProps?.class) +
                ' ' +
                serializeClass(props.allContentProps?.class)
              }
            >
              <Slot name={tab.contentSlotName ?? `tab-content-${i + 1}`} />
              {tab.content ? tab.content : ''}
            </QwikHTMLElement>
          ))}
        </QwikHTMLElement>
      </QwikHTMLElement>
    </>
  );
});
