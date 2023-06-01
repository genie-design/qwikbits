import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Cta from '../components/genie-system/cta';
import { CodeBlock } from '@qwikbits/code-block';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8 m-12 md:m-16">
      <div class="flex flex-col gap-16">
        <h1 class="w-fit text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#18b6f6] to-[#ac7ef4]">
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
            <p>
              Current components are Collapse, Dialog, Dropdown, Tabs and Toggle
            </p>
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
              Headless UI Docs
            </Cta>
          </div>
          <div class="flex flex-col gap-8 h-full">
            <Cta variantProps={{ intent: 'link' }} href="/utils">
              <h3>Utils</h3>
            </Cta>
            <h5>Utilities and other helpers for Qwik</h5>
            <p>
              Create a Qwik component based on the tag name, serialize class
              props, fix 100vh on iPhone and more!
            </p>
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
              Utils Docs
            </Cta>
          </div>
        </div>
        <p>
          Please add a star on{' '}
          <a
            href="https://github.com/genie-design/qwikbits"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Repo"
          >
            <span class="underline">github</span>
            <span class="inline-block transform translate-y-1/3 i-lucide-github text-3xl text-sky-900" />
          </a>
        </p>
        <p class="mt-16">
          Note: Qwik Bits is not a product of Qwik or Builder.io
        </p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik Docs Starter',
};
