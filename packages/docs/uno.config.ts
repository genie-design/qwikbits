import { defineConfig } from "unocss";
import { presetForms } from "@julr/unocss-preset-forms";
import { presetIcons } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetWind from "@unocss/preset-wind";
import presetTheme from "unocss-preset-theme";

const richblue: Record<number, string> = {
  100: "#7da6ff",
  200: "#598dff",
  300: "#446bc1",
  400: "#37569b",
  500: "#2a4175",
  600: "#243967",
  700: "#1c2c4f",
  800: "#0f1729",
  900: "#090e1a",
};

const darkRichBlue = Object.keys(richblue)
  .reverse()
  .reduce<typeof richblue>((acc, key, i) => {
    acc[100 * (i + 1)] = richblue[parseInt(key)];
    return acc;
  }, {});

export default defineConfig({
  rules: [
    [
      /^content-\[(.*)\]$/,
      ([, content]) => ({ content: JSON.stringify(content) }),
    ],
  ],
  shortcuts: {
    "custom-shortcut": "text-lg text-orange hover:text-teal",
  },
  transformers: [transformerDirectives()],
  presets: [
    presetWind({
      dark: "media",
    }),
    presetForms(),
    presetIcons({
      scale: 1.0,
      cdn: "https://esm.sh/",
    }),
    presetTheme({
      theme: {
        dark: {
          colors: {
            richblue: darkRichBlue,
          },
        },
      },
    }),
    presetWebFonts({
      provider: "google", // default provider
      fonts: {
        //   // these will extend the default theme
        //   sans: [
        //     "Overpass",
        //     {
        //       name: "sans-serif",
        //       provider: "none",
        //     },
        //   ],
        sans: "Poppins",
      },
    }),
  ],
  theme: {
    colors: {
      richblue,
    },
  },
});
