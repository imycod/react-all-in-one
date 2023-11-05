/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-09-29 00:37:04
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 04:04:18
 * @FilePath: \react-all-in-one\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE babelrc: true,
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

import jsxClassExtractor from './jsx-class-extractor'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(
      {
        babel: {
          babelrc: false,
          presets: [

          ],
          plugins: [
            // jsxClassExtractor()
          ],
          // Use babel.config.js files
          configFile: false,
        }
      }
    )],
  resolve: {
    alias: {
      '@': resolve(__dirname, '.', './src/'),
    },
  },
  server:{
    proxy:{
      '/mockapi': {
        // target: 'https://jsonplaceholder.typicode.com',
        target: 'https://6537c864a543859d1bb0d3b5.mockapi.io',
        ws: true, // 是否启用 WebSocket
        changeOrigin: true, // 是否修改请求头中的 Origin 字段
        rewrite: (path) => path.replace(/^\/mockapi/, '')
      },
    }
  }
})
