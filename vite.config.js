import { defineConfig } from 'vite'
import react from '@vitejs/react-plugin' // or your current react plugin

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // 👈 Only needed for GitHub Pages. Match your repo name exactly.
})