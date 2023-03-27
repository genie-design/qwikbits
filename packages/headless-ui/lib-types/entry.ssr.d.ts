/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is render outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import { type RenderToStreamOptions } from '@builder.io/qwik/server';
export default function (opts: RenderToStreamOptions): Promise<import("@builder.io/qwik/server").RenderToStreamResult>;
