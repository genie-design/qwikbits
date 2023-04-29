import sentryPlugin, { type PluginArgs } from "@cloudflare/pages-plugin-sentry";
import { Toucan } from "toucan-js";

const dsn =
  "https://8949fa86569542f1a5f3ad7d9ea64783@o4504414345166848.ingest.sentry.io/4505098277224448";
const sentryConfig: PluginArgs = {
  dsn,
  tracesSampleRate: 1.0,
};
export const onRequestSentry: PagesFunction = sentryPlugin(sentryConfig);
export async function onRequestHandle(
  context: EventContext<unknown, any, Record<string, unknown>>
) {
  const cerr = console.error;
  console.error = (...args) => {
    const sentry = new Toucan({
      ...sentryConfig,
      context,
      request: context.request,
    });
    sentry.captureException(...args);
    cerr(args);
  };
  return await context.next();
}

export const onRequest = [onRequestSentry, onRequestHandle];
