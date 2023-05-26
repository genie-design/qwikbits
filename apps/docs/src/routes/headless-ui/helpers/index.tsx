import { component$ } from '@builder.io/qwik';
import { CodeBlock } from '@qwikbits/code-block';
import { t8y } from '../../../components/genie-system/typography';
import Cta from '../../../components/genie-system/cta';

export default component$(() => {
  return (
    <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-8">
        <Cta href="/utils/dom-utils">
          <h2>Helpers</h2>
        </Cta>
        <p>Helper functions for various uses</p>
        <h5>getNormalizedPathname</h5>
        <div>
          <CodeBlock
            class="!bg-slate-200 !text-slate-900"
            codeClass="!text-sky-800"
            language="markup"
            code={`/**
 * Returns the pathname of a URL given its href and origin, normalized for comparisons.
 *
 * @param {string} href - the URL to extract the pathname from.
 * @param {string} [origin] - the origin to prefix the href with, if it''s not a full URL.
 * @return {string} - the pathname of the URL.
 */`}
          />
        </div>
        <h5>Use:</h5>
        <div>
          <CodeBlock
            class="!bg-slate-200 !text-slate-900"
            codeClass="!text-sky-800"
            language="tsx"
            code={`<a
  href={item.href}
  class={{
    underline:
      getNormalizedPathname(loc.url.href) ===
      getNormalizedPathname(item.href, loc.url.origin),
  }}
>
  {item.text}
</a>`}
          />
        </div>
      </div>
    </div>
  );
});
