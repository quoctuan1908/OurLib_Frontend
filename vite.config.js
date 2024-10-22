import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3001,
    listen: 80,
    root: './dist/assets/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true
      }
    }
  }
})
