import { component$, useContext } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { QwikBitsLogo } from "../icons/qwikbits";
import { Toggle } from "@qwikbits/headless-ui";
import { ThemeContext } from "~/routes/layout";

export default component$(() => {
  const { url } = useLocation();
  const darkMode = useContext(ThemeContext);
  return (
    <header class="sticky bg-slate-200 top-0 z-10 flex justify-between gap-8 h-20 min-h-20 w-full py-2 px-8 overflow-hidden">
      <a class="block" href="/">
        <QwikBitsLogo />
      </a>
      <nav class="flex gap-4 items-center text-richblue-700">
        <Toggle
          checked={darkMode}
          switchProps={{
            style: { "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" },
            class:
              "inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=unchecked]:bg-slate",
          }}
          thumbProps={{
            class:
              "i-lucide-sun-moon pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          }}
        />
        <a
          href="/docs"
          class={{
            "no-underline hover:underline color-sky-900": true,
            "font-bold": url.pathname.startsWith("/docs"),
          }}
        >
          Docs
        </a>
        <a
          href="/about-us"
          class={{
            "color-sky-900": true,
            "font-bold": url.pathname.startsWith("/about-us"),
          }}
        >
          About Us
        </a>
      </nav>
    </header>
  );
});
