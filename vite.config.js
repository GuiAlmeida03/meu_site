import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANTE: Altere '/meu-portfolio/' para o nome exato do seu repositório no GitHub
// Exemplo: se o repo se chama 'guilherme-portfolio', use base: '/guilherme-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/meu_site/',
})
