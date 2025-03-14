import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginSingleSpa from 'vite-plugin-single-spa';
import externalize from 'vite-plugin-externalize-dependencies';

//  TODO: Move this to a .env file
const port = 8081;
// https://vite.dev/config/
export default defineConfig({
  base: `http://localhost:${port}`,
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'mife',
      serverPort: port,
      spaEntryPoints: 'src/hr-forte-webapp.tsx',
    }),
    externalize({
      externals: ['single-spa'],
    }),
  ],
  // server: {
  //   port: 3000,
  //   cors: true,
  // },
  // build: {
  // target: 'esnext',
  // cssCodeSplit: false,
  // rollupOptions: {
  // preserveEntrySignatures: 'strict',
  // input: 'src/hr-forte-webapp.tsx',
  // output: {
  //   format: 'esm',
  //   entryFileNames: 'hr-forte-webapp.js',
  // },
  // external: ['react', 'react-dom', 'single-spa'],
  // },
  // },
});
