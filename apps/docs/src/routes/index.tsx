import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Cta from '../components/genie-system/cta';
import { t8y } from '../components/genie-system/typography';
import { CodeBlock } from '@qwikbits/code-block';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8 m-16">
      <div class="flex flex-col gap-16">
        <h1 class="w-fit font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#18b6f6] to-[#ac7ef4]">
          Qwik Bits
        </h1>
        <h4>
          Your one stop for accessible components and other helpers for Qwik
        </h4>
        <div class="grid lg:grid-cols-2 gap-16">
          <div class="flex flex-col gap-8">
            <Cta variantProps={{ intent: 'link' }} href="/headless-ui">
              <h3>Headless-ui</h3>
            </Cta>
            <h5>Low level, unstyled, accessible, and fast ui components.</h5>
            <h5>
              Highly customizable, to the point of being able to change
              individual element tags that the component creates.
            </h5>
            <CodeBlock
              class="!bg-slate-200 !text-slate-900 font-mono"
              codeClass="!text-sky-800"
              language="javascript"
              code={'npm install @qwikbits/headless-ui @qwikbits/utils'}
            />
            <Cta
              class="w-fit self-end"
              typography={{ size: 'text-xl' }}
              variantProps={{ intent: 'primary' }}
              href="/headless-ui"
            >
              Learn More
            </Cta>
          </div>
          <div class="flex flex-col gap-8 h-full">
            <Cta variantProps={{ intent: 'link' }} href="/utils">
              <h3>Utils</h3>
            </Cta>
            <h5>Utilities and other helpers for Qwik</h5>
            <div class="mt-auto">
              <CodeBlock
                class="!bg-slate-200 !text-slate-900 font-mono"
                codeClass="!text-sky-800"
                language="javascript"
                code={'npm install @qwikbits/utils'}
              />
            </div>
            <Cta
              class="w-fit self-end"
              typography={{ size: 'text-xl' }}
              variantProps={{ intent: 'primary' }}
              href="/utils"
            >
              Learn More
            </Cta>
          </div>
        </div>
        <pre class="mt-16">
          Note: Qwik Bits is not a product of Qwik or Builder.io
        </pre>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Docs Starter',
};
