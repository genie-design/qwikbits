import { component$, useContext } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { QwikBitsLogo } from '../icons/qwikbits';
import { Toggle } from '@qwikbits/headless-ui';
import { ThemeContext } from '../../routes/layout';
import { getNormalizedPathname } from '@qwikbits/utils';
import Cta from '../genie-system/cta';
import { t8y } from '../../components/genie-system/typography';

export default component$(() => {
  const { url } = useLocation();
  const lightMode = useContext(ThemeContext);
  return (
    <header class="sticky bg-slate-200 top-0 z-10 flex justify-between gap-8 h-20 min-h-20 w-full py-2 px-8 overflow-hidden">
      <a class="block" href="/">
        <QwikBitsLogo />
      </a>
      <nav class="flex gap-4 items-center text-sky-900">
        <Cta
          href="/"
          typography={{
            size: 'text-lg',
          }}
          variantProps={{
            intent: 'link',
          }}
          class={{
            underline: getNormalizedPathname(url.pathname) === '',
          }}
        >
          Home
        </Cta>
        <Cta
          href="/headless-ui"
          typography={{
            size: 'text-lg',
          }}
          variantProps={{
            intent: 'link',
          }}
          class={{
            underline: getNormalizedPathname(url.pathname) === '/headless-ui',
          }}
        >
          Headless UI
        </Cta>
        <Cta
          href="/utils"
          typography={{
            size: 'text-lg',
          }}
          variantProps={{
            intent: 'link',
          }}
          class={{
            underline: getNormalizedPathname(url.pathname) === '/utils',
          }}
        >
          Utils
        </Cta>
        <a
          href="https://github.com/genie-design/qwikbits"
          target="_blank"
          rel="noreferrer"
        >
          <div class="i-lucide-github text-3xl text-sky-900" />
        </a>
        <div class="fixed right-8 bottom-8 flex gap-4 items-center">
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
      </nav>
    </header>
  );
});
