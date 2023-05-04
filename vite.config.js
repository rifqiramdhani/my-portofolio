import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://rifqiramdhani.github.io/my-portofolio/",
  plugins: [react()],
})
