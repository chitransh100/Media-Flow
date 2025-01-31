import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@reduxjs/toolkit'], // Make sure this is not here unless intentionally externalizing
    },
  },
})
