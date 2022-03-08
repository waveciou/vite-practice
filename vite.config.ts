import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const assetsDir = 'resources';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: assetsDir,
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: `${assetsDir}/js/main.js`,
        chunkFileNames: `${assetsDir}/js/[name].js`,
        assetFileNames: ({ name = '' }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name)){
            return `${assetsDir}/img/[name].[ext]`;
          }
          if (/\.css$/.test(name)) {
            return `${assetsDir}/css/[name].[ext]`;
          }
          return `${assetsDir}/[name].[ext]`;
        }
      }
    },
  }
});
