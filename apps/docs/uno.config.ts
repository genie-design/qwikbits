import { defineConfig } from 'unocss';
import { presetForms } from '@julr/unocss-preset-forms';
import { presetIcons } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import presetWebFonts from '@unocss/preset-web-fonts';
import type { Theme } from '@unocss/preset-wind';
import presetWind from '@unocss/preset-wind';
import presetTheme from 'unocss-preset-theme';

const wind = presetWind({
  dark: 'class',
});
let darkColors: Theme['colors'] = {};
if (wind.theme?.colors) {
  wind.theme.colors.richblue = {
    100: '#7da6ff',
    200: '#598dff',
    300: '#446bc1',
    400: '#37569b',
    500: '#2a4175',
    600: '#243967',
    700: '#1c2c4f',
    800: '#0f1729',
    900: '#090e1a',
  };
  darkColors = Object.keys(wind.theme?.colors).reduce<Theme['colors']>(
    (acc, colorkey) => {
      if (acc && wind.theme?.colors) {
        const colors = wind.theme.colors[colorkey];
        if (colorkey === 'white') {
          acc[colorkey] = '#000';
        } else if (colorkey === 'black') {
          acc[colorkey] = '#fff';
        } else if (typeof colors === 'object' && Object.keys(colors).length) {
          const newColors: typeof colors = {};
          Object.keys(colors).forEach((key) => {
            let newKey = key;
            if (key === '50') {
              newKey = '950';
            } else if (key === '950') {
              newKey = '50';
            } else {
              newKey = newKey.replace('9', '1');
              newKey = newKey.replace('8', '2');
              newKey = newKey.replace('7', '3');
              newKey = newKey.replace('6', '4');
              if (newKey === key) {
                newKey = newKey.replace('4', '6');
                newKey = newKey.replace('3', '7');
                newKey = newKey.replace('2', '8');
                newKey = newKey.replace('1', '9');
              }
            }
            newColors[newKey] = colors[key];
            if (key === 'DEFAULT') {
              newColors[key] =
                (colors['600'] as string) ??
                (colors['6'] as string) ??
                colors.DEFAULT;
            }
          });
          acc[colorkey] = newColors;
        } else {
          acc[colorkey] = colors;
        }
      }

      return acc;
    },
    {} as Theme['colors']
  );
}

const config = defineConfig({
  rules: [
    [
      /^content-\[(.*)\]$/,
      ([, content]) => ({ content: JSON.stringify(content) }),
    ],
  ],
  shortcuts: {
    'custom-shortcut': 'text-lg text-orange hover:text-teal',
  },
  transformers: [transformerDirectives()],
  presets: [
    wind,
    presetForms(),
    presetIcons({
      scale: 1.0,
      cdn: 'https://esm.sh/',
    }),
    presetTheme({
      theme: {
        dark: {
          colors: { ...darkColors },
        },
      },
    }),
    presetWebFonts({
      provider: 'none', // default provider
      fonts: {
        //   // these will extend the default theme
        //   sans: [
        //     "Overpass",
        //     {
        //       name: "sans-serif",
        //       provider: "none",
        //     },
        //   ],
        sans: 'Cal Sans',
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        poppins: [
          'Poppins',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
    }),
  ],
  theme: {
    colors: {
      dark: {
        colors: darkColors,
      },
    },
  },
});

export default config;
