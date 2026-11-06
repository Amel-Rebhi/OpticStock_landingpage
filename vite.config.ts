

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/OpticStock_landingpage/',
  build: {
    outDir: 'docs', // <-- Tells Vite to build into 'docs' instead of 'dist'
  },
})