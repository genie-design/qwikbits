import { component$, useSignal } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import Cta from '../../../components/genie-system/cta';
import { Dialog } from '@qwikbits/headless-ui';

export default component$(() => {
  const open = useSignal(false);

  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/headless-ui/dialog">
          <h2>Dialog</h2>
        </Cta>
        <h5>
          A component overlaid on the window, rendering the content underneath
          inert.
        </h5>
        <h5>Demo:</h5>
        <div class="max-w-prose w-full grid grid-cols-1 gap-8">
          <Dialog
            open={open}
            dialogProps={{ class: `dialog-dialog rounded p-0` }}
            contentProps={{
              class: `dialog-content py-8 px-16 flex flex-col gap-4`,
            }}
            triggerButton={true}
            triggerProps={{ class: `dialog-trigger` }}
            closeButton={true}
            closeProps={{ class: `dialog-close` }}
            titleProps={{ class: `dialog-title` }}
            descriptionProps={{ class: `dialog-description` }}
          >
            <div
              q:slot="trigger"
              class="bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2"
            >
              Open Dialog
            </div>
            <div q:slot="close" class="absolute right-4 top-4">
              X
            </div>
            <span q:slot="title">Title Slot Content</span>
            <span q:slot="description">Description Slot Content</span>
            <span>Default Slot Content</span>
            <span q:slot="content">Content Slot Content</span>
            <div class="flex w-full justify-between" q:slot="footer">
              <button onClick$={() => (open.value = false)}>Cancel</button>
              <button onClick$={() => (open.value = false)}>Submit</button>
            </div>
          </Dialog>
          <button
            class="bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2"
            onClick$={() => (open.value = true)}
          >
            External Dialog Open. Is open: {String(open.value)}
          </button>
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
    <div class="max-w-prose w-full grid grid-cols-1 gap-8">
      <Dialog
        open={open}
        dialogProps={{ class: "dialog-dialog rounded p-0" }}
        contentProps={{
          class: "dialog-content py-8 px-16 flex flex-col gap-4",
        }}
        triggerButton={true}
        triggerProps={{ class: "dialog-trigger" }}
        closeButton={true}
        closeProps={{ class: "dialog-close" }}
        titleProps={{ class: "dialog-title" }}
        descriptionProps={{ class: "dialog-description" }}
      >
        <div
          q:slot="trigger"
          class="bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2"
        >
          Open Dialog
        </div>
        <div q:slot="close" class="absolute right-4 top-4">
          X
        </div>
        <span q:slot="title">Title Slot Content</span>
        <span q:slot="description">Description Slot Content</span>
        <span>Default Slot Content</span>
        <span q:slot="content">Content Slot Content</span>
        <div class="flex w-full justify-between" q:slot="footer">
          <button onClick$={() => (open.value = false)}>Cancel</button>
          <button onClick$={() => (open.value = false)}>Submit</button>
        </div>
      </Dialog>
      <button
        class="bg-sky-900 text-white hover:bg-sky-700 rounded px-4 py-2"
        onClick$={() => (open.value = true)}
      >
        External Dialog Open. Is open: {String(open.value)}
      </button>
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
            code={`export type DialogProps = Partial<DialogState> & {
  rootProps?: QwikHTMLElementIntrinsic;
  contentProps?: QwikHTMLElementIntrinsic;
  triggerButton?: boolean;
  triggerProps?: QwikHTMLElementIntrinsic;
  dialogProps?: QwikIntrinsicElements["dialog"];
  titleProps?: QwikHTMLElementIntrinsic;
  descriptionProps?: QwikHTMLElementIntrinsic;
  footerProps?: QwikHTMLElementIntrinsic;
  closeButton?: boolean;
  closeProps?: QwikHTMLElementIntrinsic;
  strategy?: VisibleTaskStrategy | undefined;
  class?: ClassList | Signal<ClassList>;
  wrappers?: {
    rootChildren?: QwikHTMLElementIntrinsic;
    content?: QwikHTMLElementIntrinsic;
  };
};             
`}
          />
        </div>
        <h5>Slots:</h5>
        <p>
          default: Content in the dialog (within content wrapper, before
          "content" slot)
        </p>
        <p>trigger: Button to open the dialog</p>
        <p>title: first slot of the dialog, within titleProps element</p>
        <p>
          close: within closeProps element (which is within titleProps element)
        </p>
        <p>
          description: second slot of the dialog, within descriptionProps
          element
        </p>
        <p>
          content: third slot of the dialog, within wrappers.content element
        </p>
        <p>footer: fourth slot of the dialog, within footerProps element</p>
      </div>
    </div>
  );
});
