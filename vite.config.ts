/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-09-29 00:37:04
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-02 10:30:18
 * @FilePath: \react-all-in-one\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE babelrc: true,
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import jsxClassExtractor from './jsx-class-extractor'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(
    {
      babel: {
        babelrc: false,
        presets: [

        ],
        plugins: [
          jsxClassExtractor()
        ],
        // Use babel.config.js files
        configFile: false,
      }
    }
  )],
})
