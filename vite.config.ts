import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const port = isProduction ? 8996 : 8998;
  
  // Load env file based on `mode` in the current directory.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      host: "0.0.0.0",
      port: port,
      strictPort: true,
      open: true,
    },
    preview: {
      port: port,
      strictPort: true,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'state': ['react-redux', '@reduxjs/toolkit'],
            'ui': ['framer-motion', 'lucide-react', 'styled-components'],
          },
        },
      },
      chunkSizeWarningLimit: 1200,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      'process.env': env,
      __APP_ENV__: JSON.stringify(mode),
    },
  };
});
