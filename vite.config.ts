import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true,  //服务器运行后自动打开网页
    proxy: {
      // 代理配置
      '/srv': {

        target: 'http://localhost:8999/',
        changeOrigin: true,//允许跨域
        // secure:false,//解决自签名证书错误
        rewrite: (path) => path.replace(/^\/srv/, ''),
      },
    },
    fs:{
      cachedChecks: false
    }
  }
})




