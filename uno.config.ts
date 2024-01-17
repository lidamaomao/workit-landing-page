// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  //   shortcuts: [
  //     // ...
  //   ],
  theme: {
    colors: {
      darkPurple: "#24053E",
      davyGrey: "#584D62",
      eucaplyptus: "#44FFA1",
      ghostWhite: "#FCF8FF",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    // presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     // ...
    //   },
    // }),
  ],
  //   transformers: [transformerDirectives(), transformerVariantGroup()],
});
