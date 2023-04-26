import {
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./header.css?inline";
import { QwikBitsLogo } from "../icons/qwikbits";

export default component$(() => {
  useStyles$(styles);

  const pico = useSignal<Element | null>(null);
  useVisibleTask$(
    () => {
      pico.value = document.getElementById("pico-css");
    },
    { strategy: "document-ready" }
  );
  return (
    <nav class="container-fluid">
      <ul>
        <li>
          <a href="#" aria-label="Back home">
            <QwikBitsLogo />
          </a>
        </li>
        <li>Documentation</li>
      </ul>
      <ul>
        <li>
          <label class="flex gap-2 items-center">
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
    </nav>
  );
});
