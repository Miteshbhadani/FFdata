import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'forward-data-labs' with your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/', 
})