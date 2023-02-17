import {
  component$,
  useStyles$,
  useSignal,
  NoSerialize,
} from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { Dialog } from '@qwikbits/dialog';
import A11yDialog from 'a11y-dialog';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);
  const dialog = useSignal<NoSerialize<A11yDialog | undefined>>();
  const alert = useSignal<NoSerialize<A11yDialog | undefined>>();
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        TEST
        <button onClick$={() => dialog.value?.show()}>Show</button>
        <button onClick$={() => alert.value?.show()}>Alert</button>
        <Dialog
          title="Hello World"
          id="hello-world-dialog"
          closeButtonPosition="last"
          dialogSignal={dialog}
        >
          Hello World
        </Dialog>
        <Dialog
          title="Hello World Alert"
          id="hello-world-alert"
          closeButtonPosition="last"
          dialogSignal={alert}
          role="alertdialog"
        >
          Hello World Alert
        </Dialog>
      </body>
    </QwikCityProvider>
  );
});
