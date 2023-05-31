import {
  ClassList,
  component$,
  Signal,
  Slot,
  useComputed$,
  useId,
  useSignal,
} from '@builder.io/qwik';
import {
  QwikHTMLElement,
  QwikHTMLElementIntrinsic,
  serializeClass,
} from '@qwikbits/utils';
export type ToggleProps = {
  id?: string;
  rootProps?: QwikHTMLElementIntrinsic;
  label?: string;
  labelProps?: QwikHTMLElementIntrinsic;
  switchProps?: QwikHTMLElementIntrinsic;
  thumbProps?: QwikHTMLElementIntrinsic;
  checked?: Signal<boolean>;
  invertChecked?: boolean;
  class?: ClassList | Signal<ClassList>;
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
  };
};
export const Toggle = component$((props: ToggleProps) => {
  const checked = props.checked ?? useSignal(false);
  const isChecked = useComputed$(() => {
    return props.invertChecked ? !checked.value : checked.value;
  });

  const defaultId = useId();
  const id = props.id ?? defaultId;
  return (
    <>
      <QwikHTMLElement
        tag={props.rootProps?.tag || 'div'}
        {...props.rootProps}
        class={
          serializeClass(props.class) +
          ' ' +
          serializeClass(props.rootProps?.class)
        }
      >
        <QwikHTMLElement {...props.wrappers?.rootChildren}>
          <QwikHTMLElement
            for={id}
            tag={props.labelProps?.tag || 'label'}
            {...props.labelProps}
            onClick$={() => (checked.value = !checked.value)}
          >
            <Slot name="label" />
            {props.label ? props.label : ''}
          </QwikHTMLElement>
          <QwikHTMLElement
            for={id}
            type={props.switchProps?.type || 'button'}
            role={props.switchProps?.role || 'switch'}
            aria-label={props.switchProps?.['aria-label'] || 'Toggle Switch'}
            aria-checked={isChecked.value}
            data-state={isChecked.value ? 'checked' : 'unchecked'}
            id={id}
            tag={props.switchProps?.tag || 'button'}
            onClick$={() => (checked.value = !checked.value)}
            {...props.switchProps}
          >
            <Slot name="switch" />
            <QwikHTMLElement
              data-state={isChecked.value ? 'checked' : 'off'}
              tag={props.switchProps?.tag || 'span'}
              {...props.thumbProps}
            >
              <Slot name="thumb" />
            </QwikHTMLElement>
          </QwikHTMLElement>
          <input
            type="checkbox"
            aria-hidden="true"
            checked={isChecked.value}
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
