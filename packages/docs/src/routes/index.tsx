import { component$, useSignal } from "@builder.io/qwik";
import { Toggle } from "@qwikbits/headless-ui";
export default component$(() => {
  const toggleChecked = useSignal(false);
  return (
    <>
      <aside>
        <nav class="closed-on-mobile">
          <a href="./" class="secondary" id="toggle-docs-navigation">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="expand"
              fill="currentColor"
              viewBox="0 0 16 16"
              height="16px"
            >
              <title>Expand</title>
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
              ></path>
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="collapse"
              fill="currentColor"
              viewBox="0 0 16 16"
              height="16px"
            >
              <title>Collapse</title>
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707l-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"
              ></path>
            </svg>{" "}
            Table of contents
          </a>
          <details>
            <summary>Getting started</summary>
            <ul>
              <li>
                <a href="./" id="start-link" class="secondary">
                  Usage
                </a>
              </li>
              <li>
                <a href="./themes.html" id="themes-link" class="secondary">
                  Themes
                </a>
              </li>
              <li>
                <a
                  href="./customization.html"
                  id="customization-link"
                  class="secondary"
                >
                  Customization
                </a>
              </li>
              <li>
                <a
                  href="./classless.html"
                  id="classless-link"
                  class="secondary"
                >
                  Class-less version
                </a>
              </li>
              <li>
                <a href="./rtl.html" id="rtl-link" class="secondary">
                  RTL
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Layout</summary>
            <ul>
              <li>
                <a
                  href="./containers.html"
                  id="containers-link"
                  class="secondary"
                >
                  Containers
                </a>
              </li>
              <li>
                <a href="./grid.html" id="grid-link" class="secondary">
                  Grid
                </a>
              </li>
              <li>
                <a href="./scroller.html" id="scroller-link" class="secondary">
                  Horizontal scroller
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Elements</summary>
            <ul>
              <li>
                <a
                  href="./typography.html"
                  id="typography-link"
                  class="secondary"
                >
                  Typography
                </a>
              </li>
              <li>
                <a href="./buttons.html" id="buttons-link" class="secondary">
                  Buttons
                </a>
              </li>
              <li>
                <a href="./forms.html" id="forms-link" class="secondary">
                  Forms
                </a>
              </li>
              <li>
                <a href="./tables.html" id="tables-link" class="secondary">
                  Tables
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Components</summary>
            <ul>
              <li>
                <a
                  href="./accordions.html"
                  id="accordions-link"
                  class="secondary"
                >
                  Accordions
                </a>
              </li>
              <li>
                <a href="./cards.html" id="cards-link" class="secondary">
                  Cards
                </a>
              </li>
              <li>
                <a
                  href="./dropdowns.html"
                  id="dropdowns-link"
                  class="secondary"
                >
                  Dropdowns
                </a>
              </li>
              <li>
                <a href="./modal.html" id="modal-link" class="secondary">
                  Modal
                </a>
              </li>
              <li>
                <a href="./navs.html" id="navs-link" class="secondary">
                  Navs
                </a>
              </li>
              <li>
                <a href="./progress.html" id="progress-link" class="secondary">
                  Progress
                </a>
              </li>
            </ul>
          </details>
          <details open={true}>
            <summary>Utilities</summary>
            <ul>
              <li>
                <a href="./loading.html" id="loading-link" class="secondary">
                  Loading
                </a>
              </li>
              <li>
                <a
                  href="./tooltips.html"
                  id="tooltips-link"
                  class="secondary"
                  aria-current="page"
                >
                  Tooltips
                </a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Extend</summary>
            <ul>
              <li>
                <a
                  href="./we-love-classes.html"
                  id="we-love-classes-link"
                  class="secondary"
                >
                  We love .classes
                </a>
              </li>
            </ul>
          </details>
        </nav>
        <script>
          const activeLink=document.querySelector("aside
          a#tooltips-link"),parentAccordion=activeLink.closest("details");activeLink.setAttribute("aria-current","page"),parentAccordion.setAttribute("open","true")
        </script>
      </aside>
      <div role="document">
        <section id="tooltips">
          <Toggle
            switchProps={{ class: "ToggleSwitch" }}
            thumbProps={{ class: "ToggleThumb" }}
            label="Test Label Toggle"
            checked={toggleChecked}
          ></Toggle>
          <p>{toggleChecked.value.toString()}</p>
          <hgroup>
            <h1>Tooltips</h1>
            <h2>
              Enable tooltips everywhere in pure HTML, without JavaScript.
            </h2>
          </hgroup>
          <article aria-label="Tooltips examples">
            <p>
              Tooltip on a{" "}
              <a href="#" preventdefault:click data-tooltip="Tooltip">
                link
              </a>
            </p>
            <p>
              Tooltip on <em data-tooltip="Tooltip">inline element</em>
            </p>
            <p>
              <button data-tooltip="Tooltip" aria-label="Example button">
                Tooltip on a button
              </button>
            </p>
            <footer class="code">
              <pre>
                <code>
                  &lt;<b>p</b>&gt;Tooltip on a &lt;<b>a</b> <i>href</i>=
                  <u>"#"</u> <i>data-tooltip</i>=<u>"Tooltip"</u>&gt;link&lt;/
                  <b>a</b>&gt;&lt;/<b>p</b>&gt; &lt;<b>p</b>&gt;Tooltip on &lt;
                  <b>em</b> <i>data-tooltip</i>=<u>"Tooltip"</u>&gt;inline
                  element&lt;/<b>em</b>&gt;&lt;/<b>p</b>&gt; &lt;<b>p</b>
                  &gt;&lt;<b>button</b> <i>data-tooltip</i>=<u>"Tooltip"</u>
                  &gt;Tooltip on a button&lt;/<b>button</b>&gt;&lt;/<b>p</b>
                  &gt;
                </code>
              </pre>
            </footer>
          </article>
          <p>
            <code>
              <i>data-placement</i>
            </code>{" "}
            with the values{" "}
            <code>
              <u>top</u>
            </code>
            ,{" "}
            <code>
              <u>right</u>
            </code>
            ,{" "}
            <code>
              <u>bottom</u>
            </code>{" "}
            or{" "}
            <code>
              <u>left</u>
            </code>{" "}
            is used to control the position of the tooltip.
          </p>
          <article aria-label="Tooltips examples">
            <div class="grid">
              <div class="top">
                <button data-tooltip="Top" data-placement="top">
                  Top
                </button>
              </div>
              <div class="right">
                <button data-tooltip="Right" data-placement="right">
                  Right
                </button>
              </div>
              <div class="bottom">
                <button data-tooltip="Bottom" data-placement="bottom">
                  Bottom
                </button>
              </div>
              <div class="left">
                <button data-tooltip="Left" data-placement="left">
                  Left
                </button>
              </div>
            </div>
            <footer class="code">
              <pre>
                <code>
                  &lt;<b>button</b> <i>data-tooltip</i>=<u>"Top"</u>{" "}
                  <i>data-placement</i>=<u>"top"</u>&gt;Top&lt;/<b>button</b>
                  &gt; &lt;<b>button</b> <i>data-tooltip</i>=<u>"Right"</u>{" "}
                  <i>data-placement</i>=<u>"right"</u>&gt;Right&lt;/
                  <b>button</b>&gt; &lt;<b>button</b> <i>data-tooltip</i>=
                  <u>"Bottom"</u> <i>data-placement</i>=<u>"bottom"</u>
                  &gt;Bottom&lt;/<b>button</b>&gt; &lt;<b>button</b>{" "}
                  <i>data-tooltip</i>=<u>"Left"</u> <i>data-placement</i>=
                  <u>"left"</u>&gt;Left&lt;/<b>button</b>&gt;
                </code>
              </pre>
            </footer>
          </article>
        </section>
        <footer>
          <hr />
          <p>
            <small>
              Code licensed{" "}
              <a
                href="https://github.com/picocss/pico/blob/master/LICENSE.md"
                class="secondary"
              >
                MIT
              </a>
            </small>
          </p>
        </footer>
      </div>
    </>
  );
});
