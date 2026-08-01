import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative assets work on both user and project GitHub Pages URLs.
  base: './',
  plugins: [react(), tailwindcss()],
})
