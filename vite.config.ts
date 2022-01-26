import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/src/main.tsx'),
      name: 'react-heatmapjs-component',
      fileName: (format) => `react-heatmapjs-component.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        }
      }
    },
    outDir: 'lib/dist'
  }
})
