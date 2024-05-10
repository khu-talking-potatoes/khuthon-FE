import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/sentence_length': {
        target: 'http://localhost:80',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '*': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        secure: false,
        // '/api' 로 시작하는 모든 경로를 '/fallback/' 로 재작성
        rewrite: (path) => path.replace(/\/api/, '/fallback/')
      }
    }
  },
      // http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
  plugins: [react()],
})