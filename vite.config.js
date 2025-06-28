import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // Allow external connections
    strictPort: true, // Ensure the port is used
    port: 5173, 
    build: {
    outDir: 'build' // Makes Vite output to build folder instead
  }     , // Your React app's port
    allowedHosts: [
      "eb54-196-190-176-114.ngrok-free.app", // Your current Ngrok URL
      ".ngrok-free.app" // Allow ALL Ngrok URLs (recommended)
    ],
  },
});

