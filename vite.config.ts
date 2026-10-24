import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Render serves from the domain root; GitHub Pages serves from /EcoReport/.
  base: process.env.GITHUB_ACTIONS === 'true' ? '/EcoReport/' : '/',
  plugins: [react(), tailwindcss()],
})
