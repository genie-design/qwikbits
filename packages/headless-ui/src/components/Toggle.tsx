import { component$, Signal, Slot, useId, useSignal } from "@builder.io/qwik";
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from "@qwikbits/utils";
export type ToggleProps = {
  id?: string;
  rootProps?: QwikHTMLElementIntrinsic;
  label?: string;
  labelProps?: QwikHTMLElementIntrinsic;
  buttonProps?: QwikHTMLElementIntrinsic;
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
      TEST
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
            type={props.buttonProps?.type || "button"}
            role={props.buttonProps?.role || "switch"}
            aria-checked={checked.value}
            data-checked={checked.value}
            id={id}
            tag={props.buttonProps?.tag || "div"}
            onClick$={() => (checked.value = !checked.value)}
            {...props.buttonProps}
          >
            <Slot name="button" />
            <QwikHTMLElement
              tag={props.buttonProps?.tag || "span"}
              data-checked={checked.value}
              {...props.thumbProps}
            ></QwikHTMLElement>
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
