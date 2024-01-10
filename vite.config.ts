import path from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [uni(), unocss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
})
