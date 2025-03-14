import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

const port = 8081;

// https://vite.dev/config/
export default defineConfig({
  base: `http://localhost:${port}`,
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'mife',
      projectId: 'hr-forte-webapp',
      serverPort: port,
      spaEntryPoints: 'src/hr-forte-webapp.tsx',
    }),
  ],
  // server: {
  // cors: true,
  // },
  // build: {
  // target: 'esnext',
  // cssCodeSplit: false,
  // rollupOptions: {
  // preserveEntrySignatures: 'strict',
  // input: 'src/hr-forte-webapp.tsx',
  // output: {
  //   format: 'systemjs',
  //   entryFileNames: 'hr-forte-webapp.js',
  // },
  // external: [
  //   'single-spa',
  //   /^@hr-forte\//,
  //   'react',
  //   'react-dom',
  //   'react-dom/client',
  // ],
  // },
  // },
});
