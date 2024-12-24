import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the build output goes to the "dist" folder
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://auth-project-umber.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
