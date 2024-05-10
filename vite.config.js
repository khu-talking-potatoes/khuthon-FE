import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // http://localhost:5173/foo -> http://localhost:4567/foo
      // http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/sentence_length': {
        target: 'http://localhost:80',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
    }
  },
  plugins: [react()],
})