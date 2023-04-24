import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { Collapse, Dialog, Dropdown } from ".";
import { HeightScreenElement } from "@qwikbits/utils";

export const App = component$(() => {
  const dialogSignal = useSignal(false);
  const pico = useSignal<Element | null>(null);
  useVisibleTask$(
    () => {
      pico.value = document.getElementById("pico-css");
    },
    { strategy: "document-ready" }
  );
  return (
    <HeightScreenElement>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "2rem",
        }}
      >
        <label>
          Pico{" "}
          <input
            type="checkbox"
            onChange$={() => {
              if (pico.value) {
                pico.value.remove();
                pico.value = null;
              } else {
                const link = document.createElement("link");
                link.id = "pico-css";
                link.rel = "stylesheet";
                link.href =
                  "https://unpkg.com/@picocss/pico@1.*/css/pico.min.css";
                document.head.appendChild(link);
                pico.value = link;
              }
            }}
            checked={!!pico}
          ></input>
        </label>
        <div>
          <Collapse>
            <span q:slot="trigger">Open Accordion</span> <div>CONTENT</div>
          </Collapse>
          <Collapse>
            <span q:slot="trigger">Open Accordion 2</span> <div>CONTENT</div>
          </Collapse>
        </div>
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
        Dropdown
        <Dropdown label="Dropdown">Content Content</Dropdown>
        Dropdown Pico
        <Dropdown
          label="Dropdown Pico"
          rootProps={{ tag: "details" }}
          triggerProps={{ tag: "summary" }}
          items={[{ label: "Item 1" }, { label: "Item 2" }]}
        />
        <Dropdown
          label="Dropdown Pico Radio"
          rootProps={{ tag: "details" }}
          triggerProps={{ tag: "summary" }}
          items={[
            {
              label: "Item 1",
              itemProps: { tag: "label", for: "item1" },
              labelBeforeProps: {
                tag: "input",
                type: "radio",
                name: "items",
                id: "item1",
              },
            },
            {
              label: "Item 2",
              itemProps: { tag: "label", for: "item2" },
              labelBeforeProps: {
                tag: "input",
                type: "radio",
                name: "items",
                id: "item2",
              },
            },
          ]}
        />
        <Dropdown
          label="Dropdown Pico Checkbox"
          rootProps={{ tag: "details" }}
          triggerProps={{ tag: "summary" }}
          items={[
            {
              label: "Item 1",
              itemProps: { tag: "label" },
              labelBeforeProps: {
                tag: "input",
                type: "checkbox",
                name: "items",
              },
            },
            {
              label: "Item 2",
              itemProps: { tag: "label" },
              labelBeforeProps: {
                tag: "input",
                type: "checkbox",
              },
            },
          ]}
        />
        <nav>
          <ul>
            <Dropdown
              label="Dropdown Pico Hover"
              rootProps={{ tag: "li" }}
              lockOpen={true}
              triggerProps={{ tag: "summary" }}
              items={[{ label: "Item 1" }, { label: "Item 2" }]}
            />
          </ul>
        </nav>
      </div>
    </HeightScreenElement>
  );
});
