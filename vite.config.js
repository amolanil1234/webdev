import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain: summercamp.com (served at root, so base is '/')
export default defineConfig({
  plugins: [react()],
  base: '/',
})
