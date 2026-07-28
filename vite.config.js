import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages (user site at gulfam7.github.io → root).
  base: '/',
  build: {
    // Split rarely-changing vendor code out of the app bundle so a content
    // edit doesn't force visitors to re-download React and MUI.
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'mui-vendor': ['@mui/material', '@mui/icons-material'],
        },
      },
    },
    chunkSizeWarningLimit: 700,
  },
})
