import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? './' : './',
  plugins: [
    react(),
    tailwindcss(),
  ],
}))
