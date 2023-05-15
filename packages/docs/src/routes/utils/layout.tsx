import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Menu from "~/components/menu/menu";

export default component$(() => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-[max-content_1fr] gap-8 m-8">
      <Menu
        items={[
          { text: "Getting Started", href: "/utils/" },
          { text: "QwikHTMLElement", href: "/utils/qwik-html-element/" },
          { text: "100vh", href: "/utils/100vh/" },
        ]}
      />
      <article>
        <Slot />
      </article>
    </div>
  );
});

export const head: DocumentHead = ({ head }) => {
  return {
    title: `${head.title} - Documentation`,
  };
};
