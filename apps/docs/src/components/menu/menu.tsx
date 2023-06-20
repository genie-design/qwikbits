import { component$ } from "@builder.io/qwik";
import CTA from "../genie-system/cta";
import { useLocation } from "@builder.io/qwik-city";
import { getNormalizedPathname } from "@qwikbits/utils";

export type MenuProps = {
  items?: {
    text: string;
    href: string;
  }[];
};

export default component$((props: MenuProps) => {
  const loc = useLocation();

  return (
    <aside class="flex flex-wrap justify-center lg:justify-start lg:flex-nowrap lg:flex-col gap-4 lg:border-r border-slate-300 lg:pr-8">
      {props.items
        ? props.items?.map((item) => (
            <ul key={item.href}>
              <li>
                <CTA
                  href={item.href}
                  class={{
                    underline:
                      getNormalizedPathname(loc.url.href) ===
                      getNormalizedPathname(item.href, loc.url.origin),
                  }}
                >
                  {item.text}
                </CTA>
              </li>
            </ul>
          ))
        : null}
      <hr class="border-slate-300 border-b-2 w-full lg:hidden" />
    </aside>
  );
});
