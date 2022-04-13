import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line import/no-unresolved
import Icons from 'unplugin-icons/vite'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), Icons({ compiler: 'jsx', jsx: 'react' })],
})
