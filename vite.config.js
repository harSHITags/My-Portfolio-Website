import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Needed for Docker/network access
    port: 3000,
    strictPort: true,
      css: {
    transformer: "postcss", 
      },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});



