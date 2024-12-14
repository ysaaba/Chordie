import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Chordie/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  }
}) 