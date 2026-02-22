import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/webdev/' = site works at https://amolanil1234.github.io/webdev/
// When summercampsbt.com is set in GitHub Pages: change to base: '/' and push — then custom domain works and github.io/webdev redirects to it
export default defineConfig({
  plugins: [react()],
  base: '/webdev/',
})
