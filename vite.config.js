import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' for custom domain (summercampsbt.online / summercampsbt.com) — github.io/webdev will redirect to it
export default defineConfig({
  plugins: [react()],
  base: '/',
})
