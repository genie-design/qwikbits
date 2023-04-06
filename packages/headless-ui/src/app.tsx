import { component$ } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { Collapse, Dialog } from ".";

export const App = component$(() => {
  const dialogSignal = useSignal(false);
  return (
    <>
      <Collapse>
        <span q:slot="trigger">Open Accordion</span> <div>CONTENT</div>
      </Collapse>
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
    </>
  );
});
