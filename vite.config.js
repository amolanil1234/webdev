import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain: https://summercampsbt.com (base '/' so assets load at root)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
