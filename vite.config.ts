import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'GeoCityFinder',
      formats: ['es', 'umd'],
      fileName: (format) => `geo-city-finder.${format}.js`
    },
  },
});