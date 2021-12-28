import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'

const __dirname1 = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname1, "src"),
      "&": resolve(__dirname1, "management"),
    }
  },
  build: {
    outDir: './backend/resource',
    rollupOptions: {
      input: {
        main: resolve(__dirname1, 'index.html'),
        management: resolve(__dirname1, 'management/index.html')
      }
    }
  },
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: true,
      imports: ['vue', 'vue-router'],
    })
  ]
})
