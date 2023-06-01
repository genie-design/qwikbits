import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import Cta from '../../../components/genie-system/cta';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/utils/qwik-html-element">
          <h2>QwikHTMLElement</h2>
        </Cta>
        <h5>Create a Qwik component based on the tag name</h5>
        <p>
          Great for creating components that may need extra customization around
          the dom elements it renders
        </p>
        <h5>Use:</h5>
        <div>
          <CodeBlock
            class="!bg-slate-200 !text-slate-900"
            codeClass="!text-sky-800"
            language="tsx"
            code={`import { QwikHTMLElement, QwikHTMLElementIntrinsic } from '@qwikbits/utils';
export type Props = {
  rootProps?: QwikHTMLElementIntrinsic;
};

export const QwikComp = component$((props: Props) => {
  return (
    <QwikHTMLElement tag={props.rootProps?.tag || 'div'} {...props.rootProps}>
       Wrapped by Qwik element
    </QwikHTMLElement>
  );
});`}
          />
        </div>
      </div>
    </div>
  );
});
