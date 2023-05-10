import { component$, Signal, Slot, useId, useSignal } from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "@qwikbits/utils";
export type ToggleProps = {
  id?: string;
  rootProps?: QwikHTMLElementIntrinsic;
  label?: string;
  labelProps?: QwikHTMLElementIntrinsic;
  switchProps?: QwikHTMLElementIntrinsic;
  thumbProps?: QwikHTMLElementIntrinsic;
  checked?: Signal<boolean>;
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
  };
};
export const Toggle = component$((props: ToggleProps) => {
  const defaultSignal = useSignal(false);
  const defaultId = useId();
  const id = props.id ?? defaultId;
  const checked = props.checked ?? defaultSignal;
  return (
    <>
      <QwikHTMLElement tag={props.rootProps?.tag || "div"} {...props.rootProps}>
        <QwikHTMLElement {...props.wrappers?.rootChildren}>
          <QwikHTMLElement
            for={id}
            tag={props.labelProps?.tag || "label"}
            {...props.labelProps}
            onClick$={() => (checked.value = !checked.value)}
          >
            <Slot name="label" />
            {props.label ? props.label : ""}
          </QwikHTMLElement>
          <QwikHTMLElement
            for={id}
            type={props.switchProps?.type || "button"}
            role={props.switchProps?.role || "switch"}
            aria-checked={checked.value}
            data-state={checked.value ? "checked" : "unchecked"}
            id={id}
            tag={props.switchProps?.tag || "button"}
            onClick$={() => (checked.value = !checked.value)}
            {...props.switchProps}
          >
            <Slot name="button" />
            <QwikHTMLElement
              data-state={checked.value ? "checked" : "off"}
              tag={props.switchProps?.tag || "span"}
              {...props.thumbProps}
            >
              <Slot name="thumb" />
            </QwikHTMLElement>
          </QwikHTMLElement>
          <input
            type="checkbox"
            aria-hidden="true"
            checked={checked.value}
            style="transform: translateX(-100%); position: absolute; pointer-events: none; opacity: 0; margin: 0px; width: 42px; height: 25px;"
            tabIndex={-1}
            onClick$={() => (checked.value = !checked.value)}
            value="on"
          />
        </QwikHTMLElement>
      </QwikHTMLElement>
    </>
  );
});
