import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Lulu's Chinese Kitchen",
        short_name: "Lulu's",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#DC143C',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  base: '/',
  build: { sourcemap: false },
  test: {
    environment: 'jsdom'
  },
});
