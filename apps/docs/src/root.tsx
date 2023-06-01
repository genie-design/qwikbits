import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { isBrowser } from "@builder.io/qwik/build";
import * as Sentry from "@sentry/browser";
import "@unocss/reset/tailwind-compat.css";
import "./global.css";
import "./uno.css";
import "cal-sans";
import "virtual:uno.css";
export default component$(() => {
  /*
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  if (isBrowser) {
    Sentry.init({
      dsn: "https://f21c7eb8cec741eb87f2b7b3fa95f47f@o4504414345166848.ingest.sentry.io/4505098271260672",
      integrations: [new Sentry.BrowserTracing()],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    });
  }
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Your one stop for accessible components and other helpers for Qwik."
        ></meta>
        <title>Qwik Bits</title>
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
