import { component$, useSignal, useStore, useTask$ } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import Cta from '../../../components/genie-system/cta';
import { Collapse, Tabs } from '@qwikbits/headless-ui';

export default component$(() => {
  const state = useStore({ collapses: [true, false, false] });
  const open = useSignal(false);
  const qwikString =
    'Qwik is a web framework that can deliver instant loading web applications at any size or complexity. Qwik is resumable, which means it can resume execution where the server left off in the browser without needing to download or execute any JavaScript until it is needed. Qwik uses JSX, functional components and reactivity to create a simple and consistent developer experience. Qwik also optimizes for speed by streaming JavaScript chunks in a separate thread and executing them lazily upon user interaction. Qwik is scalable, as the amount of code downloaded to the client is proportional to the complexity of the user interaction, not the size of all components on the current route.';

  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/utils/dom-utils">
          <h2>Collapse</h2>
        </Cta>
        <h5>An interactive component which expands/collapses content</h5>
        <h5>Demo:</h5>
        <div class="max-w-prose w-full grid grid-cols-1">
          {state.collapses.map((open, i) => (
            <Collapse
              key={i}
              open={state.collapses[i]}
              onChange$={(open) => {
                state.collapses[i] = open;
              }}
              class="mb-4 pb-4 border-b border-sky-800"
              triggerProps={{ class: 'block' }}
            >
              <span q:slot="trigger">
                <div class="relative">
                  Collapse {i}
                  <span
                    hidden={!state.collapses[i]}
                    class="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    ▼
                  </span>
                  <span
                    hidden={state.collapses[i]}
                    class="absolute right-1 top-1/2 transform -translate-y-1/2"
                  >
                    ▶︎
                  </span>
                </div>
              </span>
              <p class="pt-4">{qwikString}</p>
            </Collapse>
          ))}
          <Collapse
            open={open}
            class="mb-4 mt-8 pb-4 border-b border-sky-800"
            triggerProps={{ class: 'block' }}
          >
            <span q:slot="trigger">
              <div class="relative">
                Signal Collapse
                <span
                  hidden={!open.value}
                  class="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  ▼
                </span>
                <span
                  hidden={open.value}
                  class="absolute right-1 top-1/2 transform -translate-y-1/2"
                >
                  ▶︎
                </span>
              </div>
            </span>
            <p class="pt-4">{qwikString}</p>
          </Collapse>
        </div>

        <h5>Use:</h5>
        <CodeBlock
          class="!bg-slate-200 !text-sky-800"
          codeClass="!text-sky-800"
          language="javascript"
          code={`
import { component$, useStore, useSignal } from '@qwiket/qwik';

const qwikString =
  'Qwik is a web framework that can ...';

export default component$(() => {
  const state = useStore({ collapses: [true, false, false] });
  const open = useSignal(false);

  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/utils/dom-utils">
          <h2>Collapse</h2>
        </Cta>
        <h5>An interactive component which expands/collapses content</h5>
        <h5>Demo:</h5>
        <div class="max-w-prose w-full grid grid-cols-1">
          {state.collapses.map((open, i) => (
            <Collapse
              key={i}
              open={state.collapses[i]}
              onChange$={(open) => {
                state.collapses[i] = open;
              }}
              class="mb-4 pb-4 border-b border-sky-800"
              triggerProps={{ class: 'block' }}
            >
              <span q:slot="trigger">
                <div class="relative">
                  Collapse {i}
                  <span
                    hidden={!state.collapses[i]}
                    class="absolute right-2 top-1/2 transform -translate-y-1/2"
                  >
                    ▼
                  </span>
                  <span
                    hidden={state.collapses[i]}
                    class="absolute right-1 top-1/2 transform -translate-y-1/2"
                  >
                    ▶︎
                  </span>
                </div>
              </span>
              <p class="pt-4">{qwikString}</p>
            </Collapse>
          ))}
          <Collapse
            open={open}
            class="mb-4 mt-8 pb-4 border-b border-sky-800"
            triggerProps={{ class: 'block' }}
          >
            <span q:slot="trigger">
              <div class="relative">
                Signal Collapse
                <span
                  hidden={!open.value}
                  class="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  ▼
                </span>
                <span
                  hidden={open.value}
                  class="absolute right-1 top-1/2 transform -translate-y-1/2"
                >
                  ▶︎
                </span>
              </div>
            </span>
            <p class="pt-4">{qwikString}</p>
          </Collapse>
        </div>
      </div>
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
            code={`export type CollapseProps = {
  id?: string;
  open?: Signal<boolean>;
  onChange$?: PropFunction<(open: boolean) => void>;
  rootProps?: QwikHTMLElementIntrinsic;
  triggerProps?: QwikHTMLElementIntrinsic;
  contentProps?: QwikHTMLElementIntrinsic;
  class?: ClassList | Signal<ClassList>;
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
    trigger?: QwikHTMLElementIntrinsic;
    content?: QwikHTMLElementIntrinsic;
  };
};
`}
          />
        </div>
        <h5>Slots:</h5>
        <p>default: Content shown when open</p>
        <p>trigger: Always visible button</p>
      </div>
    </div>
  );
});
