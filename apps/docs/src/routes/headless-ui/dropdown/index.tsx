import { component$, useSignal } from "@builder.io/qwik";
import { CodeBlock } from "@qwikbits/code-block";
import Cta from "../../../components/genie-system/cta";
import { Dropdown } from "@qwikbits/headless-ui";

export default component$(() => {
  const open = useSignal(true);
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/headless-ui/dropdown">
          <h2>Dropdown</h2>
        </Cta>
        <h5>
          When a button is clicked, a menu appears that presents a set of
          actions or functions to the user. Polyfills the upcoming browser
          popover API for maximum accessibility.
        </h5>
        <h5>Demo:</h5>
        <div class="max-w-prose w-full grid grid-cols-1 gap-8 justify-items-start">
          <Dropdown
            label="Dropdown"
            triggerProps={{
              class: "bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2",
            }}
            contentProps={{
              class:
                "bg-slate-50 p-8 rounded mt-2 ml-2 text-sky-900 border-2 border-sky-900",
            }}
          >
            Dropdown Content
          </Dropdown>
          <Dropdown
            label="Dropdown On Hover With Items"
            hoverMode
            triggerProps={{
              class: "bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2",
            }}
            contentProps={{
              class:
                "bg-slate-50 p-8 rounded mt-2 ml-2 text-sky-900 border-2 border-sky-900 w-max flex flex-col gap-4 !z-[99]",
            }}
            items={[
              {
                label: "Item Button",
                itemProps: {
                  tag: "button",
                  class: "bg-sky-900 text-white rounded px-2 py-1",
                },
              },
              {
                label: "Item Link",
                itemProps: { href: "#", class: "underline" },
              },
            ]}
          />

          <Dropdown
            label="Dropdown Nested"
            open={open}
            popover="manual"
            class="mb-24"
            triggerProps={{
              class: "bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2",
            }}
            contentProps={{
              class:
                "bg-slate-50 p-8 rounded mt-2 ml-2 text-sky-900 border-2 border-sky-900 w-max",
            }}
          >
            <Dropdown
              label="Dropdown Inside"
              rootProps={{
                tag: "li",
                role: "listitem",
                class: "list-none",
              }}
              triggerProps={{ class: "underline bg-transparent" }}
              contentProps={{
                class:
                  "left-full top-0 bottom-auto p-8 rounded bg-slate-50 mt-2 ml-2 text-sky-900",
              }}
            >
              Inner Content
            </Dropdown>
          </Dropdown>
        </div>

        <h5>Use:</h5>
        <CodeBlock
          class="!bg-slate-200 !text-sky-800"
          codeClass="!text-sky-800"
          language="javascript"
          code={`
import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {
  const open = useSignal(true);
  return (
    <div class="max-w-prose w-full grid grid-cols-1 gap-8 justify-items-start">
      <Dropdown
        label="Dropdown"
        triggerProps={{
          class: 'bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2',
        }}
        contentProps={{
          class:
            'bg-slate-50 p-8 rounded mt-2 ml-2 text-sky-900 border-2 border-sky-900',
        }}
      >
        Dropdown Content
      </Dropdown>
      <Dropdown
        label="Dropdown On Hover With Items"
        hoverMode
        triggerProps={{
          class: 'bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2',
        }}
        contentProps={{
          class:
            'bg-slate-50 p-8 rounded mt-2 ml-2 text-sky-900 border-2 border-sky-900 w-max flex flex-col gap-4 !z-[99]',
        }}
        items={[
          {
            label: 'Item Button',
            itemProps: {
              tag: 'button',
              class: 'bg-sky-900 text-white rounded px-2 py-1',
            },
          },
          {
            label: 'Item Link',
            itemProps: { href: '#', class: 'underline' },
          },
        ]}
      />

      <Dropdown
        label="Dropdown Nested"
        open={open}
        popover="manual"
        class="mb-24"
        triggerProps={{
          class: 'bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2',
        }}
        contentProps={{
          class:
            'bg-slate-50 p-8 rounded mt-2 ml-2 text-sky-900 border-2 border-sky-900 w-max',
        }}
      >
        <Dropdown
          label="Dropdown Inside"
          rootProps={{
            tag: 'li',
            role: 'listitem',
            class: 'list-none',
          }}
          triggerProps={{ class: 'underline bg-transparent' }}
          contentProps={{
            class:
              'left-full top-0 bottom-auto p-8 rounded bg-slate-50 mt-2 ml-2 text-sky-900',
          }}
        >
          Inner Content
        </Dropdown>
      </Dropdown>
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
            code={`export type DropdownProps = {
  id?: string;
  popoverId?: string;
  popover?: 'auto' | 'manual' | null;
  rootProps?: QwikHTMLElementIntrinsic;
  label?: string;
  triggerProps?: QwikHTMLElementIntrinsic;
  contentProps?: QwikHTMLElementIntrinsic;
  hoverMode?: boolean;
  hoverCloseDelay?: number;
  open?: Signal<boolean>;
  class?: ClassList | Signal<ClassList>;
  items?: {
    label?: string;
    key?: string;
    class?: ClassList | Signal<ClassList>;
    itemWrapperProps?: QwikHTMLElementIntrinsic;
    itemProps?: QwikHTMLElementIntrinsic;
    labelWrapperProps?: QwikHTMLElementIntrinsic;
    labelBeforeProps?: QwikHTMLElementIntrinsic;
    labelAfterProps?: QwikHTMLElementIntrinsic;
  }[];
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
  };
};
`}
          />
        </div>
        <h5>Slots:</h5>
        <p>
          default: Content in the dropdown (within content wrapper, before
          "content" slot)
        </p>
        <p>trigger: Button to open the dropdown</p>
        <p>
          content: third slot of the dropdown, within content element but before
          any items
        </p>
        <p>
          content_after: fourth slot of dropdown, within content but after items
        </p>
      </div>
    </div>
  );
});
