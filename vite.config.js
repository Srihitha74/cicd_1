// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cicd_1/', // 👈 Important for GitHub Pages
  plugins: [react()],
})
