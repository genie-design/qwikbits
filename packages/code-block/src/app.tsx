import { component$ } from "@builder.io/qwik";
import { CodeBlock } from ".";

export const App = component$(() => {
  return <CodeBlock language="markup" code={"<div></div>"} />;
});
