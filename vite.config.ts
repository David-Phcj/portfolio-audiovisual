import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Para GitHub Pages, usa el nombre del repositorio como base path
    // Si tu repo se llama "portfolio-audiovisual", usa base: '/portfolio-audiovisual/'
    // Si lo despliegas en la raíz del dominio, usa base: '/'
    // IMPORTANTE: Si tu repositorio NO es tu-usuario.github.io, debes usar el nombre del repo
    const base = process.env.GITHUB_PAGES_BASE || '/portfolio-audiovisual/';
    
    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
