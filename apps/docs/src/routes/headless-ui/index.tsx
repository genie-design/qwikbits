import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import { t8y } from '../../components/genie-system/typography';
import Cta from '../../components/genie-system/cta';
import { QwikHTMLElement, QwikHTMLElementIntrinsic } from '@qwikbits/utils';

export type Props = {
  rootProps?: QwikHTMLElementIntrinsic;
};

export const QwikComp = component$((props: Props) => {
  return (
    <QwikHTMLElement tag={props.rootProps?.tag || 'div'} {...props.rootProps}>
      Wrapped by Qwik element
    </QwikHTMLElement>
  );
});

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <h2 class={t8y({ size: 'text-5xl' })}>Qwik Bits Headless-ui</h2>
        <h5>Low level, unstyled, accessible, and fast ui components.</h5>
        <h5>
          Highly customizable, to the point of being able to change individual
          element tags that the component creates.
        </h5>
        <div>
          <h6>Install</h6>
          <CodeBlock
            class="!bg-slate-200 !text-slate-900 font-mono"
            codeClass="!text-sky-800"
            language="javascript"
            code={'npm install @qwikbits/headless-ui @qwikbits/utils'}
          />
        </div>
      </div>
    </div>
  );
});
