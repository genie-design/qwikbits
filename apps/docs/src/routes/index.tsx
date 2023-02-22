import {
  component$,
  createContextId,
  useSignal,
  useStyles$,
} from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import * as Dialog from '@qwikbits/dialog';
import { DialogState, dialogStyles } from '@qwikbits/dialog';
export default component$(() => {
  useStyles$(dialogStyles);
  const dialogSignal = useSignal(false);
  const alertDialogSignal = useSignal(false);
  const DialogContext = createContextId<DialogState>(`qb-dialog`);
  const AlertDialogContext = createContextId<DialogState>(`qb-alertdialog`);
  return (
    <>
      <Dialog.Root context={DialogContext} open={dialogSignal}>
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
      <Dialog.Root
        context={AlertDialogContext}
        role="alertdialog"
        open={alertDialogSignal}
      >
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
            <button onClick$={() => (alertDialogSignal.value = false)}>
              Cancel
            </button>
            <br />
            <button onClick$={() => (alertDialogSignal.value = false)}>
              Submit
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
