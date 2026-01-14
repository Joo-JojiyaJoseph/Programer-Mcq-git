import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Programer-Mcq-git/', // 👈 MUST match repo name
  plugins: [react()],
})
