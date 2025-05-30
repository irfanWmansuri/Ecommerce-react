import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@tinymce/tinymce-react'],
    exclude: ['tinymce']
  },
  server: {
    fs: {
      strict: false
    }
  }
})

