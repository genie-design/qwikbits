// import { qwikVite } from '@builder.io/qwik/optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
// import { defineConfig } from 'vite';

import { qwikNxVite } from 'qwik-nx/plugins';

// export default defineConfig({
//   cacheDir: '../node_modules/.vite/utils',
//   plugins: [qwikNxVite(), qwikVite(), tsconfigPaths({ root: '../' })],

//   test: {
//     globals: true,
//     cache: {
//       dir: '../node_modules/.vitest',
//     },
//     environment: 'node',
//     include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
//     coverage: {
//       reportsDirectory: '../coverage/utils',
//     },
//   },
// });
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';

export default defineConfig(() => {
  return {
    plugins: [qwikVite()],
    build: {
      target: 'es2020',
      rollupOptions: {
        external: ['@builder.io/qwik'],
      },
      lib: {
        entry: './src/index.ts',
        formats: ['es', 'cjs'],
        fileName: (format) => `index.qwik.${format === 'es' ? 'mjs' : 'cjs'}`,
      },
    },
  };
});
