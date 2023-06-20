import type { Signal } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { VHElement } from "@qwikbits/utils";
import Header from "../components/header/header";
export const ThemeContext =
  createContextId<Signal<boolean>>("docs.theme-context");
export default component$(() => {
  const lightMode = useSignal<boolean | null>(null);
  useContextProvider(ThemeContext, lightMode);
  useVisibleTask$(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      lightMode.value = true;
    } else if (theme === "dark") {
      lightMode.value = false;
    } else {
      lightMode.value =
        !window.matchMedia ||
        !window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  });
  useVisibleTask$((ctx) => {
    ctx.track(() => lightMode.value);
    localStorage.setItem("theme", lightMode.value ? "light" : "dark");
  });
  return (
    <VHElement
      class={{
        light: lightMode.value,
        dark: !lightMode.value,
        "font-sans flex flex-col text-lg bg-slate-100 color-sky-950": true,
      }}
    >
      <Header />
      <main
        class={{
          "grow m-8 md:m-16 mb-24": true,
        }}
      >
        <Slot />
      </main>
      {/* <Footer /> */}
    </VHElement>
  );
});
