import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: 'http://localhost:3000',
  plugins: [react()],
  server: {
    port: 3000,
    cors: true,
  },
  build: {
    // target: 'esnext',
    // cssCodeSplit: false,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: 'src/hr-forte-webapp.tsx',
      output: {
        format: 'esm',
        entryFileNames: 'hr-forte-webapp.js',
      },
      external: ['single-spa'],
    },
  },
});
