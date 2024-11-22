import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';



export default defineConfig({
  base: 'Portfolio',
  plugins: [
            react(), 
            svgr(),
          ],
  server: {
    port: 5173,
    host: true
  }
});