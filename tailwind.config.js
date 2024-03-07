import { colors } from "./src/styles/colors"
import { fontFamily } from "./src/styles/font-family"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}"],//atenção, na configuração padrão é  ["./app/**/...
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      //aqui puxa as configurações da pasta styles
      colors,
      fontFamily,
    },
  },
  plugins: [],
}
