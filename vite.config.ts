import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    dts({
      include: ['src'],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'geoCityFinder',
      formats: ['es', 'umd'],
      fileName: (format) => `geo-city-finder.${format}.js`
    },
  },
});