import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: if your repo is https://github.com/username/webdev
// your site will be at https://username.github.io/webdev/
// So base must match your repo name. Change 'webdev' if your repo has a different name.
export default defineConfig({
  plugins: [react()],
  base: '/webdev/',
})
