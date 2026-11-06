import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Vite pour le déploiement sur GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/OpticStock_landingpage/',
});