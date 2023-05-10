import {
  component$,
  Signal,
  Slot,
  useId,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "@qwikbits/utils";
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
            (tab.tabSlotName ?? "") +
            (tab.contentSlotName ?? "") +
            (tab.tabLabel ?? "") +
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
      console.log(event.key, selected.value);
      let handled = false;
      switch (event.key) {
        case "ArrowLeft":
          if (selected.value === 0) {
            selected.value = props.tabs.length - 1;
          } else {
            selected.value = selected.value - 1;
          }
          handled = true;
          break;

        case "ArrowRight":
          if (selected.value === props.tabs.length - 1) {
            selected.value = 0;
          } else {
            selected.value = selected.value + 1;
          }
          handled = true;
          break;

        case "Home":
          selected.value = 0;
          handled = true;
          break;

        case "End":
          selected.value = props.tabs.length - 1;
          handled = true;
          break;
        case "Tab":
          if (event.shiftKey && selected.value > 0) {
            selected.value = 0;
            handled = true;
          }
          break;

        default:
          break;
      }
      console.log(selected.value);
      if (handled) {
        event.preventDefault();
      }
    };
    const rootElem = document.getElementById(id);
    console.log(rootElem);
    if (rootElem) {
      console.log(rootElem.querySelectorAll("[role=tab]"));
      rootElem.querySelectorAll("[role=tab]").forEach((elem) => {
        (elem as HTMLButtonElement).addEventListener("keydown", handleKeyDown);
      });
    }
    return () => {
      console.log("cleanup");
      if (rootElem) {
        rootElem.querySelectorAll("[role=tab]").forEach((elem) => {
          (elem as HTMLButtonElement).removeEventListener(
            "keydown",
            handleKeyDown
          );
        });
      }
    };
  });
  return (
    <>
      <QwikHTMLElement
        tag={props.rootProps?.tag || "div"}
        {...props.rootProps}
        id={id}
      >
        <QwikHTMLElement id={`tablist-${id}`} tag="h3" {...props.labelProps}>
          <Slot name="label" />
          {props.label ? props.label : ""}
        </QwikHTMLElement>
        <QwikHTMLElement
          role="tablist"
          {...props.wrappers?.tabList}
          aria-labelledby={`tablist-${id}`}
        >
          {props.tabs?.map((tab, i) => (
            <QwikHTMLElement
              key={(tab.key ?? i) + "-tab"}
              role="tab"
              id={tab.tabProps?.id ?? `tab-${id}-${i}`}
              tag="button"
              onClick$={() => (selected.value = i)}
              aria-selected={selected.value === i ? "true" : "false"}
              aria-controls={tab?.contentProps?.id ?? `tabpanel-${id}-${i}`}
              tabIndex={i === 0 ? 0 : -1}
              {...tab.tabProps}
            >
              <Slot name={tab.tabSlotName ?? `tab-${i + 1}`} />
              {tab.tabLabel ? tab.tabLabel : ""}
            </QwikHTMLElement>
          ))}
        </QwikHTMLElement>

        {props.tabs?.map((tab, i) => (
          <QwikHTMLElement
            key={(tab.key ?? i) + "content"}
            tag="div"
            role="tabpanel"
            hidden={selected.value !== i}
            id={tab.contentProps?.id ?? `tabpanel-${id}-${i}`}
            aria-labelledby={tab.tabProps?.id ?? `tab-${id}-${i}`}
            {...tab.contentProps}
          >
            <Slot name={tab.contentSlotName ?? `tabcontent-${i + 1}`} />
            {tab.content ? tab.content : ""}
          </QwikHTMLElement>
        ))}
      </QwikHTMLElement>
    </>
  );
});
