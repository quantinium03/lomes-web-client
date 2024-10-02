import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4173,
    proxy: {
      '/api/': {
        target: 'http://localhost:6969/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/hls_segment': {
        target: 'http://localhost:6969/hls_segment',
        changeOrigin: true,
        secure: false,
      },
    }
  },
})
