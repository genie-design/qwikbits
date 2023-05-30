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
        <h2 class={t8y({ size: 'text-5xl' })}>Qwik Bits Utils</h2>
        <h5>Utilities and other helpers for Qwik</h5>
        <div>
          <h6>Install</h6>
          <CodeBlock
            class="!bg-slate-200 !text-slate-900 font-mono"
            codeClass="!text-sky-800"
            language="javascript"
            code={'npm install @qwikbits/utils'}
          />
        </div>
      </div>
      <div class="flex flex-col gap-8">
        <Cta href="/utils/qwik-html-element">
          <h4>QwikHTMLElement</h4>
        </Cta>
        <h5>Create a Qwik component based on the tag name</h5>
        <p>
          Great for creating components that may need extra customization around
          the dom elements it renders
        </p>
      </div>
      <div class="flex flex-col gap-8">
        <Cta href="/utils/vhelement">
          <h4>100vh</h4>
        </Cta>
        <h5>100vh fix for mobile browsers</h5>
        <p>
          Keeps content as the actual screen height even when mobile browsers
          slide away nav and other ui elements.
        </p>
      </div>
      <div class="flex flex-col gap-8">
        <Cta href="/utils/serializeclass">
          <h4>Serialize Class</h4>
        </Cta>
        <h5>Serialize a Qwik ClassList to turn it into a string</h5>
        <p>
          Useful when you want to combine custom classes with a passed in
          ClassList.
        </p>
      </div>
      <div class="flex flex-col gap-8">
        <Cta href="/utils/domutils">
          <h4>Dom Utils</h4>
        </Cta>
        <h5>Functions that can help create accessible components</h5>
        <p>
          This library provides a set of utility functions that can help you
          create accessible components.
        </p>
      </div>
      <div class="flex flex-col gap-8">
        <Cta href="/utils/helpers">
          <h4>Helpers</h4>
        </Cta>
        <h5>Helper functions for various uses</h5>
      </div>
    </div>
  );
});
