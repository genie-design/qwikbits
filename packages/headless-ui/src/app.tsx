import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { useSignal } from "@builder.io/qwik";
import { Collapse, Dialog, Dropdown } from ".";

export const App = component$(() => {
  useStyles$(`
  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  p {
    max-width: 65ch;
  }


`);
  const dialogSignal = useSignal(false);
  const valueSet = useSignal(false);
  const pico = useSignal<Element | null>(null);

  const page = useSignal<"getting-started" | "headlessui" | "utils">(
    "getting-started"
  );

  useVisibleTask$(({ track }) => {
    track(() => page.value);
    if (valueSet.value) {
      window.location.hash = `#${page.value}`;
    }
  });

  useVisibleTask$(
    () => {
      pico.value = document.getElementById("pico-css");
      console.log(window.location.hash);
      if (window.location.hash) {
        const loc = window.location.hash.replace("#", "");
        if (
          loc === "getting-started" ||
          loc === "headlessui" ||
          loc === "utils"
        ) {
          page.value = loc;
        }
      }
      valueSet.value = true;
    },
    { strategy: "document-ready" }
  );
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin: "2rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <ul>
          <li>
            <strong>Qwik Bits</strong>
          </li>
          <li>
            <label>
              Enable Pico{" "}
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
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="#"
              preventdefault:click
              onClick$={() => (page.value = "getting-started")}
            >
              Getting Started
            </a>
          </li>
          <li>
            <a
              preventdefault:click // This will prevent the default behavior of the "click" event.
              onClick$={() => (page.value = "headlessui")}
              href="#"
            >
              headlessui
            </a>
          </li>
          <li>
            <a
              preventdefault:click
              onClick$={() => (page.value = "utils")}
              href="#"
            >
              utils
            </a>
          </li>
        </ul>
      </nav>
      <section
        hidden={page.value !== "getting-started"}
        id="getting-started"
        class="flex flex-col"
      >
        <h1>Qwik Bits</h1>
        <h2>Getting Started</h2>

        <article style={{ marginTop: "1rem", marginBot: "1rem" }}>
          <h3>
            <a href="">@qwikbits/headless-ui</a>
          </h3>
          <p>
            Low level, unstyled (or styled with{" "}
            <a target="_blank" href="https://picocss.com">
              pico css
            </a>
            ), accessible, and fast ui components. Highly customizable, to the
            point of being able to change individual element tags that the
            component creates.
          </p>
          <code>npm install @qwikbits/headless-ui</code>
        </article>
        <article style={{ marginTop: "0rem", marginBot: "1rem" }}>
          <h3>
            <a href="">@qwikbits/utils</a>
          </h3>
          <p>Utilities and other helpers for qwik</p>
          <code>npm install @qwikbits/utils</code>
        </article>
      </section>
      <section
        hidden={page.value !== "headlessui"}
        id="headlessui"
        class="flex flex-col"
      >
        <h1>Qwik Bits</h1>
        <h2>headless-ui</h2>
        <article>
          <p>
            Type <code>QwikHTMLElementIntrinsic</code> means you can send the{" "}
            <code>tag</code> prop to change the html element, as well as any
            other props you want on that html element (class, etc)
          </p>
        </article>
        <div>
          <h3>Collapse</h3>
          <Collapse>
            <span q:slot="trigger">Open Accordion</span> <div>CONTENT</div>
          </Collapse>
          <Collapse>
            <span q:slot="trigger">Open Accordion 2</span> <div>CONTENT</div>
          </Collapse>
          <pre>
            <code>
              &lt;Collapse&gt;{"\n"}
              {"\t"}&lt;span q:slot="trigger"&gt;Open Accordion&lt;/span&gt;
              {"\n"}
              {"\t"}&lt;div&gt;CONTENT&lt;/div&gt;{"\n"}
              &lt;/Collapse&gt;{"\n"}
            </code>
          </pre>
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
      </section>
    </div>
  );
});
