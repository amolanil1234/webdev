import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://amolanil1234.github.io/webdev/
// When you own a custom domain (e.g. summercamp.com), change base to '/' and add domain in Settings → Pages
export default defineConfig({
  plugins: [react()],
  base: '/webdev/',
})
