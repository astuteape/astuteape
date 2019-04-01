import Typography from "typography"

const typography = new Typography({
  baseFontSize: `18px`,
  baseLineHeight: `1`,
  googleFonts: [
    {
      name: "Ubuntu",
      styles: ["400", "400i", "500", "500i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Arial", "Arial", "Helvetica", "sans-serif"],
  bodyFontFamily: ["Ubuntu", "Arial", "Helvetica", "sans-serif"],
})

export default typography
