import { component$, useContext, useSignal } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { QwikBitsLogo } from '../icons/qwikbits';
import { Dropdown, Toggle } from '@qwikbits/headless-ui';
import { ThemeContext } from '../../routes/layout';
import { getNormalizedPathname } from '@qwikbits/utils';
import Cta from '../genie-system/cta';
import { t8y } from '../../components/genie-system/typography';

export default component$(() => {
  const { url } = useLocation();
  const lightMode = useContext(ThemeContext);
  const links = [
    {
      href: '/',
      text: 'Home',
      pathname: '',
    },
    {
      href: '/headless-ui',
      text: 'Headless UI',
    },
    {
      href: '/utils',
      text: 'Utils',
    },
  ];
  const mobileMenuOpen = useSignal(false);
  return (
    <header class="text-sky-900 sticky bg-slate-200 top-0 z-10 flex justify-between gap-8 h-28 min-h-28 md:h-20 md:min-h-20 w-full py-2 px-8 overflow-visible">
      <a
        href="/"
        aria-label="Qwik Bits Logo"
        class="flex justify-center items-center block"
      >
        <QwikBitsLogo />
      </a>
      <nav class="flex gap-4 items-center justify-center content-center ">
        <div class="gap-4 items-center justify-center content-center hidden lg:flex">
          {links.map((link) => (
            <div key={link.href}>
              <Cta
                key={link.href}
                href={link.href}
                typography={{
                  size: 'text-lg',
                }}
                variantProps={{
                  intent: 'link',
                }}
                class={{
                  underline:
                    getNormalizedPathname(url.pathname) === link.pathname ||
                    getNormalizedPathname(url.pathname) === link.href,
                }}
              >
                {link.text}
              </Cta>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/genie-design/qwikbits"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Repo"
        >
          <div class="i-lucide-github text-3xl" />
        </a>
        <div class="lg:hidden h-[36px]">
          <Dropdown
            open={mobileMenuOpen}
            triggerProps={{ class: 'bg-transparent text-sky-900' }}
          >
            <div q:slot="trigger" class="i-lucide-menu text-4xl bg-sky-900 " />
            <div
              q:slot="content"
              class="flex flex-col w-fit bg-slate-100 gap-4 p-8 rounded-4 absolute -translate-x-[calc(100%-36px)] border border-slate-200"
            >
              {links.map((link) => (
                <div key={link.href}>
                  <Cta
                    href={link.href}
                    onClick$={() => {
                      mobileMenuOpen.value = false;
                      console.log('click');
                    }}
                    typography={{
                      size: 'text-lg',
                    }}
                    variantProps={{
                      intent: 'link',
                    }}
                    class={{
                      'whitespace-nowrap': true,
                      underline:
                        getNormalizedPathname(url.pathname) === link.pathname ||
                        getNormalizedPathname(url.pathname) === link.href,
                    }}
                  >
                    {link.text}
                  </Cta>
                </div>
              ))}
            </div>
          </Dropdown>
        </div>
      </nav>
      <div class="fixed right-8 bottom-8 flex gap-4 items-center lg:bg-transparent bg-slate-200 py-1 px-4 rounded-8">
        <h6 class={t8y({ size: 'text-lg' })}>Dark Mode:</h6>
        <Toggle
          invertChecked
          checked={lightMode}
          class="mt-1"
          switchProps={{
            style: { '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)' },
            class:
              'inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-black data-[state=unchecked]:bg-slate',
          }}
          thumbProps={{
            class:
              'i-lucide-sun-moon pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
          }}
        />
      </div>
    </header>
  );
});
