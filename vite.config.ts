import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  root: `src`,
  build: {
    outDir: `build`,
  },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: `GrowFix: Financial Management`,
        },
      },
    }),
  ],
});
