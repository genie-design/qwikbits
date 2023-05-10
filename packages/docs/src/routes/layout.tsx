import type { Signal } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
export const ThemeContext =
  createContextId<Signal<boolean>>("docs.theme-context");
export default component$(() => {
  const darkMode = useSignal(false);
  useContextProvider(ThemeContext, darkMode);
  useVisibleTask$(() => {
    localStorage.getItem("theme") === "dark"
      ? (darkMode.value = true)
      : (darkMode.value =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
    localStorage.setItem("theme", darkMode.value ? "dark" : "light");
  });
  useVisibleTask$((ctx) => {
    ctx.track(() => darkMode.value);
    localStorage.setItem("theme", darkMode.value ? "dark" : "light");
  });
  return (
    <div
      class={{
        light: !darkMode.value,
        dark: darkMode.value,
      }}
    >
      <Header />
      <main class="bg-slate-100 color-sky-950">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
