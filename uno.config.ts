import { defineConfig, presetWind4, presetIcons } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind4(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
})
