import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({

  plugins: [react(), tsConfigPaths()],
  
  base: "/",

  preview: {
    host: true,
    port: 8080
  }

})
