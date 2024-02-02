import { defineConfig, presetIcons, transformerVariantGroup } from 'unocss'
import { presetWeapp } from 'unocss-preset-weapp'
import { transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  presets: [
    presetWeapp(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: { display: 'inline-block', 'vertical-align': 'middle' }
    })
  ],
  transformers: [transformerClass(), transformerVariantGroup()]
})
