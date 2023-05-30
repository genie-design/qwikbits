import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import Cta from '../../../components/genie-system/cta';
import { Tabs } from '@qwikbits/headless-ui';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/headless-ui/tabs">
          <h2>Tabs</h2>
        </Cta>
        <h5>Tabs organize and allow navigation between groups of content</h5>
        <h5>Demo:</h5>
        <div class="max-w-prose w-full grid grid-cols-1 gap-8 justify-items-start">
          <Tabs
            label="Qwikbits Tabs"
            class="w-full"
            tabListProps={{
              class: 'w-full flex',
            }}
            labelProps={{
              tag: 'h4',
              class: 'text-center mb-2',
            }}
            allTabProps={{
              class:
                'grow bg-sky-900 text-white hover:bg-sky-700 border-2 border-slate-50 px-4 py-2 aria-selected:bg-sky-700',
            }}
            allContentProps={{
              class:
                'bg-slate-50 p-8 rounded text-sky-900 border-t-0 border-2 border-slate-50',
            }}
            tabs={[
              {
                contentProps: { tag: 'p' },
                content:
                  'Qwik is a web framework that can deliver instant loading web applications at any size or complexity. Qwik is resumable, which means it can resume execution where the server left off in the browser without needing to download or execute any JavaScript until it is needed. Qwik uses JSX, functional components and reactivity to create a simple and consistent developer experience. Qwik also optimizes for speed by streaming JavaScript chunks in a separate thread and executing them lazily upon user interaction. Qwik is scalable, as the amount of code downloaded to the client is proportional to the complexity of the user interaction, not the size of all components on the current route.',
                tabLabel: 'Tab 1',
              },
              {},
              {
                tabSlotName: 'qwikbits-tab-3',
                contentSlotName: 'qwikbits-tab-content-3',
              },
            ]}
          >
            <div q:slot="tab-2">Tab 2</div>
            <p q:slot="tab-content-2">
              Tab 2 Label and Content set with default slot
            </p>
            <div q:slot="qwikbits-tab-3">Tab 3</div>
            <p q:slot="qwikbits-tab-content-3">
              Tab 3 label and content set with custom slot
            </p>
          </Tabs>
        </div>

        <h5>Use:</h5>
        <CodeBlock
          class="!bg-slate-200 !text-sky-800"
          codeClass="!text-sky-800"
          language="javascript"
          code={`
import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const open = useSignal(false);
  return (
    <div class="max-w-prose w-full grid grid-cols-1 gap-8 justify-items-start">
      <Tabs
        label="Qwikbits Tabs"
        class="w-full"
        tabListProps={{
          class: 'w-full flex',
        }}
        labelProps={{
          tag: 'h4',
          class: 'text-center mb-2',
        }}
        allTabProps={{
          class:
            'grow bg-sky-900 text-white hover:bg-sky-700 border-2 border-slate-50 px-4 py-2 aria-selected:bg-sky-700',
        }}
        allContentProps={{
          class:
            'bg-slate-50 p-8 rounded text-sky-900 border-t-0 border-2 border-slate-50',
        }}
        tabs={[
          {
            contentProps: { tag: 'p' },
            content:
              'Qwik is a web framework that can deliver instant loading web applications at any size or complexity. Qwik is resumable, which means it can resume execution where the server left off in the browser without needing to download or execute any JavaScript until it is needed. Qwik uses JSX, functional components and reactivity to create a simple and consistent developer experience. Qwik also optimizes for speed by streaming JavaScript chunks in a separate thread and executing them lazily upon user interaction. Qwik is scalable, as the amount of code downloaded to the client is proportional to the complexity of the user interaction, not the size of all components on the current route.',
            tabLabel: 'Tab 1',
          },
          {},
          {
            tabSlotName: 'qwikbits-tab-3',
            contentSlotName: 'qwikbits-tab-content-3',
          },
        ]}
      >
        <div q:slot="tab-2">Tab 2</div>
        <p q:slot="tab-content-2">
          Tab 2 Label and Content set with default slot
        </p>
        <div q:slot="qwikbits-tab-3">Tab 3</div>
        <p q:slot="qwikbits-tab-content-3">
          Tab 3 label and content set with custom slot
        </p>
      </Tabs>
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
            code={`export type TabsProps = {
  id?: string;
  tabs: Tab[];
  class?: ClassList | Signal<ClassList>;
  rootProps?: QwikHTMLElementIntrinsic;
  label?: string;
  labelProps?: QwikHTMLElementIntrinsic;
  selected?: Signal<number>;
  tabListProps?: QwikHTMLElementIntrinsic;
  allTabProps?: QwikHTMLElementIntrinsic;
  allContentProps?: QwikHTMLElementIntrinsic;
  onChange$?: PropFunction<(selected: number) => void>;
  wrappers?: {
    content?: QwikHTMLElementIntrinsic;
  };
};
export type Tab = {
  tabProps?: QwikHTMLElementIntrinsic;
  contentProps?: QwikHTMLElementIntrinsic;
  tabSlotName?: string;
  contentSlotName?: string;
  class?: ClassList | Signal<ClassList>;
  key?: string;
  tabLabel?: string;
  content?: string;
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
