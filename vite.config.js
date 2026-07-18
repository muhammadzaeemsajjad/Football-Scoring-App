import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 👈 Fixed this line

export default defineConfig({
  plugins: [react()],
  base: '/Football-Scoring-App/', 
})