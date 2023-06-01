import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import Cta from '../../../components/genie-system/cta';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/utils/vh-element">
          <h2>100vh</h2>
        </Cta>
        <h5>100vh fix for mobile browsers</h5>
        <p>
          Keeps content as the actual screen height even when mobile browsers
          slide away nav and other ui elements.
        </p>
        <h5>Use:</h5>
        <div>
          <CodeBlock
            class="!bg-slate-200 !text-slate-900"
            codeClass="!text-sky-800"
            language="tsx"
            code={`import { VHElement } from '@qwikbits/utils';
export default component$(() => {
  return (
    <VHElement
      class={{
        'font-sans flex flex-col text-lg': true,
      }}
    >
      <Header />
      <main
        class={{
          'grow bg-slate-100 color-sky-950': true,
        }}
      >
        <Slot />
      </main>
      <Footer />
    </VHElement>
  );
});`}
          />
        </div>
      </div>
    </div>
  );
});
