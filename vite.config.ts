import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'vue-router/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'vue-router/unplugin'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Layouts from 'vite-plugin-vue-layouts-next'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({/* options */}),
    vue(),
    vueJsx(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      /* options */
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.vue\.[tj]sx?\?vue/, /\.md$/],
      imports: ['vue', VueRouterAutoImports, '@vueuse/core'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      /* options */
      directoryAsNamespace: false, //使用文件夹名称作为前缀
      collapseSamePrefixes: true, //合并相同前缀
      resolvers: [ElementPlusResolver()],
    }),
    Layouts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
