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
import { VitePWA } from 'vite-plugin-pwa'
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
    Layouts(),
    // 默认是{ registerType: 'prompt' }
     VitePWA({
      manifest: {
        name: 'Vue3 Temple',
        short_name: 'Vue3 Template',
        description: 'Vue3 Template',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192x192.png',
            sizes: '192x192', //这里必须是文件大小是192x192
            type: 'image/png',
          },
          {
            src: '/512x512.png',
            sizes: '512x512', //这里必须是文件大小是512x512
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
