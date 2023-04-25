import { component$, Slot } from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="container" id="docs">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
