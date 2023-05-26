import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import { t8y } from '../../../components/genie-system/typography';
import Cta from '../../../components/genie-system/cta';

export default component$(() => {
  return (
    <div class="flex flex-col gap-16">
      <div class="flex flex-col gap-8">
        <Cta href="/utils/serialize-class">
          <h2>Serialize Class</h2>
        </Cta>
        <h5>Serialize a Qwik ClassList to turn it into a string</h5>
        <p>
          Useful when you want to combine custom classes with a passed in
          ClassList.
        </p>
        <h5>Use:</h5>
        <div>
          <CodeBlock
            class="!bg-slate-200 !text-slate-900"
            codeClass="!text-sky-800"
            language="tsx"
            code={`import type { ClassList, Signal } from '@builder.io/qwik';
import type { QwikHTMLElementIntrinsic } from '@qwikbits/utils';
import { QwikHTMLElement, serializeClass } from '@qwikbits/utils';

type Props = {
  props?: QwikHTMLElementIntrinsic;
  class?: ClassList | Signal<ClassList>;
};

export default component$((props: Props) => {
  const classes = \`border-2 \${serializeClass(props.class || '')} \`;
  const text = 'Click me';
  return (
    <QwikHTMLElement tag="button" {...props} class={classes}>
      {text} <Slot />
    </QwikHTMLElement>
  );
});`}
          />
        </div>
      </div>
    </div>
  );
});
