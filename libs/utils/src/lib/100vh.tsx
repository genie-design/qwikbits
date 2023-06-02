/* eslint-disable qwik/use-method-usage */
import { useSignal, component$, Slot } from '@builder.io/qwik';
import { useVisibleTask$ } from '@builder.io/qwik';
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from './QwikHTMLElement';
import { isBrowser } from '@builder.io/qwik/build';
export function use100vh(vh?: number) {
  const height = useSignal<number | undefined>(undefined);
  const numerator = vh ?? 100;
  if (isBrowser) {
    window.addEventListener('resize', () => {
      height.value = window.innerHeight * (numerator / 100);
    });
  }
  useVisibleTask$(async () => {
    height.value = window.innerHeight * (numerator / 100);
  });
  return height;
}
export type HeightScreenElementProps = QwikHTMLElementIntrinsic & {
  vh?: number;
  styles?: string[];
};

export const VHElement = component$((props: HeightScreenElementProps) => {
  const height = use100vh(props.vh);
  const styles = props.styles ?? ['min-height'];
  const styleValue = height.value
    ? `${height.value}px`
    : `${props.vh || 100}vh`;
  const style = styles.reduce((acc, s) => {
    acc[s] = styleValue;
    return acc;
  }, {} as Record<string, string>);
  return (
    <QwikHTMLElement tag={'div'} {...props} style={style}>
      <Slot />
    </QwikHTMLElement>
  );
});
