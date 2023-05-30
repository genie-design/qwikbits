import { component$, useContext } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import Cta from '../../../components/genie-system/cta';
import { Tabs, Toggle } from '@qwikbits/headless-ui';
import { ThemeContext } from '../../layout';

export default component$(() => {
  const lightMode = useContext(ThemeContext);
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/headless-ui/tabs">
          <h2>Toggle</h2>
        </Cta>
        <h5>Toggle state on or off</h5>
        <h5>Demo:</h5>
        <div class="max-w-prose w-full grid grid-cols-1 gap-8 justify-items-start">
          <Toggle
            switchProps={{
              style: { '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' },
              class:
                'inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors bg-slate-500 white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-checked:bg-black',
            }}
            thumbProps={{
              class:
                'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
            }}
          />
          <h4>Toggle Dark Mode</h4>
          <Toggle
            invertChecked
            checked={lightMode}
            switchProps={{
              style: { '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' },
              class:
                'inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=unchecked]:bg-slate',
            }}
            thumbProps={{
              class:
                'i-lucide-sun-moon pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
            }}
          />
        </div>

        <h5>Use:</h5>
        <CodeBlock
          class="!bg-slate-200 !text-sky-800"
          codeClass="!text-sky-800"
          language="javascript"
          code={`
import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  return (
  <div class="max-w-prose w-full grid grid-cols-1 gap-8 justify-items-start">
    <Toggle
      switchProps={{
        style: { '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' },
        class:
          'inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=unchecked]:bg-slate-600',
      }}
      thumbProps={{
        class:
          'pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      }}
    />
    <h4>Toggle Dark Mode</h4>
    <Toggle
      invertChecked
      checked={lightMode}
      switchProps={{
        style: { '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' },
        class:
          'inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=unchecked]:bg-slate',
      }}
      thumbProps={{
        class:
          'i-lucide-sun-moon pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      }}
    />
  </div>
  );
  
});`}
        />

        <h5>Props:</h5>
        <div>
          <CodeBlock
            class="!bg-slate-200 !text-sky-800"
            codeClass="!text-sky-800"
            language="javascript"
            code={`export type ToggleProps = {
  id?: string;
  rootProps?: QwikHTMLElementIntrinsic;
  label?: string;
  labelProps?: QwikHTMLElementIntrinsic;
  switchProps?: QwikHTMLElementIntrinsic;
  thumbProps?: QwikHTMLElementIntrinsic;
  checked?: Signal<boolean>;
  invertChecked?: boolean;
  class?: ClassList | Signal<ClassList>;
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
  };
};
`}
          />
        </div>
        <h5>Slots:</h5>
        <p>default: Tabs label</p>
        <p>label: Tabs label after default</p>
        <p>
          tab-[0,1,2...]: if not overridden by the tab config the slot name for
          the tab label will be tab-[index of tab]
        </p>
        <p>
          tab-content-[0,1,2...]: if not overridden by the tab config the slot
          name for the tab content will be tab-content-[index of tab]
        </p>
      </div>
    </div>
  );
});
