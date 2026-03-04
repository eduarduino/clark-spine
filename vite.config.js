import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => ({
  base: '/clark-spine/',
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    minify: 'esbuild',
    // Keep old bundles so cached index.html on mobile still resolves its CSS/JS
    emptyOutDir: false,
    // Never expose source maps in production — they reveal your full source code
    sourcemap: false,
    esbuildOptions: {
      // Strip console.* and debugger statements from production bundle
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    },
  },

  // Dev server hardening (mitigates CVE GHSA-67mh-4wv8-2f99)
  server: {
    allowedHosts: ['localhost', '127.0.0.1'],
    // Do not expose the dev server on the network unless explicitly needed
    host: false,
  },

  preview: {
    // Preview server should also be locked down
    allowedHosts: ['localhost', '127.0.0.1'],
    host: false,
  },
}))
