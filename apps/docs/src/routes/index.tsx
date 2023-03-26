import { component$, useSignal } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import { Accordion } from '@qwikbits/accordion';
import { Dialog } from '@qwikbits/dialog';
export default component$(() => {
  const dialogSignal = useSignal(false);

  return (
    <>
      <div class="wrapped">
        <Accordion>
          <div q:slot="trigger">Open Accordion</div> <div>CONTENT</div>
        </Accordion>
        <Dialog
          open={dialogSignal}
          dialogProps={{ class: `dialog-content` }}
          triggerButton={true}
          triggerProps={{ class: `dialog-trigger` }}
          closeButton={true}
          closeProps={{ class: `dialog-close` }}
          titleProps={{ class: `dialog-title` }}
          descriptionProps={{ class: `dialog-description` }}
        >
          <div q:slot="trigger">Open Dialog</div>
          <div q:slot="close">X</div>
          <span q:slot="title">Welcome to Qwik</span>
          <span q:slot="description">Dialog</span>
          Hello World
          <br />
          <button onClick$={() => (dialogSignal.value = false)}>Cancel</button>
          <br />
          <button onClick$={() => (dialogSignal.value = false)}>Submit</button>
          <div q:slot="content"> More Content</div>
        </Dialog>
        <button onClick$={() => (dialogSignal.value = true)}>
          Custom open. Is open: {String(dialogSignal.value)}
        </button>
      </div>
      {/* <Dialog.Root context={DialogContext} open={dialogSignal}>
        <Dialog.Trigger context={DialogContext}>Open Dialog</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay context={DialogContext} class="dialog-overlay" />
          <Dialog.Content context={DialogContext} class="dialog-content">
            <Dialog.Close context={DialogContext}>X</Dialog.Close>
            <Dialog.Title context={DialogContext}>Welcome to Qwik</Dialog.Title>
            <Dialog.Description context={DialogContext}>
              Dialog
            </Dialog.Description>
            Hello World
            <br />
            <button onClick$={() => (dialogSignal.value = false)}>
              Cancel
            </button>
            <br />
            <button onClick$={() => (dialogSignal.value = false)}>
              Submit
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <button onClick$={() => (dialogSignal.value = true)}>
        Custom open. Is open: {String(dialogSignal.value)}
      </button>
      <Dialog.Root context={AlertDialogContext} role="alertdialog">
        <Dialog.Trigger context={AlertDialogContext}>Open Alert</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay context={AlertDialogContext} class="dialog-overlay" />
          <Dialog.Content context={AlertDialogContext} class="dialog-content">
            <Dialog.Close context={AlertDialogContext}>X</Dialog.Close>
            <Dialog.Title context={AlertDialogContext}>
              Welcome to Qwik
            </Dialog.Title>
            <Dialog.Description context={AlertDialogContext}>
              Alert Dialog
            </Dialog.Description>
            Hello World
            <br />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root> */}
    </>
  );
});

export const head: DocumentHead = {
  title: `Welcome to Qwik`,
  meta: [
    {
      name: `description`,
      content: `Qwik site description`,
    },
  ],
};
