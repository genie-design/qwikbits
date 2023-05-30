import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Cta from '../components/genie-system/cta';
import { t8y } from '../components/genie-system/typography';
import { CodeBlock } from '@qwikbits/code-block';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <h2 class={t8y({ size: 'text-5xl' })}>Qwikbits Utils</h2>
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
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Docs Starter',
};
