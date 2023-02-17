import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import * as Dialog from '@qwikbits/dialog';
export default component$(() => {
  const dialog_signal = useSignal(false);
  return (
    <Dialog.Root open={dialog_signal}>
      <Dialog.Trigger>Open Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class="dialog-overlay" />
        <Dialog.Content class="dialog-content">
          <Dialog.Close>X</Dialog.Close>
          <Dialog.Title>Welcome to Qwik</Dialog.Title>
          <Dialog.Description>DIalog </Dialog.Description>
          Hello World
          <br />
          <button onClick$={() => (dialog_signal.value = false)}>Cancel</button>
          <br />
          <button onClick$={() => (dialog_signal.value = false)}>Submit</button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
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
