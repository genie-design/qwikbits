import {
  component$,
  useBrowserVisibleTask$,
  useSignal,
  Slot,
} from '@builder.io/qwik';
export interface PortalProps {
  target?: HTMLElement | string;
  children?: any;
}
export const Portal = component$<PortalProps>((props) => {
  const el = useSignal<HTMLElement>();

  useBrowserVisibleTask$(
    ({ track }) => {
      track(() => props.target);
      if (el?.value) {
        let target =
          typeof props.target === 'string'
            ? document.querySelector(props.target)
            : props.target;

        target = target ?? document.body;
        target.appendChild(el.value);
      }
      return () => {
        if (el?.value?.parentNode) {
          el.value.parentNode.removeChild(el.value);
        }
      };
    },
    {
      strategy: 'document-ready',
    }
  );

  return (
    <div ref={el}>
      <Slot />
    </div>
  );
});
export default Portal;
