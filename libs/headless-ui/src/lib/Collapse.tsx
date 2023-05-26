import {
  Signal,
  component$,
  useId,
  useSignal,
  useStore,
  Slot,
  ClassList,
  useTask$,
  PropFunction,
} from '@builder.io/qwik';
import {
  QwikHTMLElement,
  QwikHTMLElementIntrinsic,
  serializeClass,
} from '@qwikbits/utils';
export type CollapseProps = {
  id?: string;
  open?: Signal<boolean> | boolean;
  onChange$?: PropFunction<(open: boolean) => void>;
  rootProps?: QwikHTMLElementIntrinsic;
  triggerProps?: QwikHTMLElementIntrinsic;
  contentProps?: QwikHTMLElementIntrinsic;
  class?: ClassList | Signal<ClassList>;
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
    trigger?: QwikHTMLElementIntrinsic;
    content?: QwikHTMLElementIntrinsic;
  };
};
export const Collapse = component$((props: CollapseProps) => {
  const id = useId();

  let openSignal = useSignal(
    typeof props.open === 'boolean' ? props.open : false
  );
  if (typeof props.open === 'object') {
    openSignal = props.open;
  }
  const state = useStore<{ open: Signal<boolean>; id: string }>({
    open: openSignal,
    id: props.id ?? id,
  });
  useTask$((ctx) => {
    ctx.track(() => state.open.value);
    if (props.onChange$) {
      props.onChange$(state.open.value);
    }
  });

  return (
    <QwikHTMLElement
      tag={props.rootProps?.tag || 'details'}
      {...props.rootProps}
      open={state.open.value}
      class={
        serializeClass(props.class) +
        ' ' +
        serializeClass(props.rootProps?.class)
      }
    >
      <QwikHTMLElement {...props.wrappers?.rootChildren}>
        <QwikHTMLElement {...props.wrappers?.trigger}>
          <QwikHTMLElement
            style={{ cursor: 'pointer' }}
            tag={props.triggerProps?.tag || 'summary'}
            id={state.id + '-trigger'}
            aria-expanded={state.open?.value}
            aria-controls={state.id}
            onClick$={() => (state.open.value = !state.open.value)}
            onKeyDown$={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                state.open.value = !state.open.value;
              }
            }}
            {...props.triggerProps}
          >
            <Slot name="trigger" />
          </QwikHTMLElement>
        </QwikHTMLElement>
        <QwikHTMLElement {...props.wrappers?.content}>
          <QwikHTMLElement
            id={state.id}
            tag={props.contentProps?.tag || 'div'}
            role="region"
            aria-labelledby={state.id + '-trigger'}
            hidden={!state.open?.value}
            {...props.contentProps}
          >
            <Slot />
          </QwikHTMLElement>
        </QwikHTMLElement>
      </QwikHTMLElement>
    </QwikHTMLElement>
  );
});
