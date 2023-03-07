import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import unocss from 'unocss/vite'
import presetIcons from 'unocss/preset-icons'
import presetWeapp from 'unocss-preset-weapp'
import { transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      uni({ vueOptions: { reactivityTransform: true } }),
      unocss({
        presets: [presetIcons(), presetWeapp()],
        transformers: [transformerClass()]
      })
    ]
  }
})
