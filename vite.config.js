import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin' // or your current react plugin

export default defineConfig({
  plugins: [react()],
  base: '/Football-Scoring-App/',
})