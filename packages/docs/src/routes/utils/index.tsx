import { component$ } from "@builder.io/qwik";
import { CodeBlock } from "@qwikbits/code-block";

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <h1 class="text-3xl font-bold">Qwikbits Utils</h1>
      <div>
        <h2 class="text-xl font-bold">install</h2>
        <CodeBlock
          class="!bg-slate-200 !text-slate-900"
          codeClass="!text-slate-900"
          language="javascript"
          code={"npm install @qwikbits/utils"}
        />
      </div>
    </div>
  );
});
