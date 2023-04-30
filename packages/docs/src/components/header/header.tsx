import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { QwikBitsLogo } from "../icons/qwikbits";

export default component$(() => {
  const { url } = useLocation();

  return (
    <header class="sticky bg-white top-0 z-10 flex justify-between gap-8 h-20 w-full p-2 overflow-hidden">
      <a class="block" href="/">
        <QwikBitsLogo />
      </a>
      <nav class="text-right">
        <a
          href="/docs"
          class={{
            "no-underline inline-block px-2 py-4 hover:underline": true,
            "font-bold": url.pathname.startsWith("/docs"),
          }}
        >
          Docs
        </a>
        <a
          href="/about-us"
          class={{ "font-bold": url.pathname.startsWith("/about-us") }}
        >
          About Us
        </a>
      </nav>
    </header>
  );
});
