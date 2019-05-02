import Typography from "typography"

const typography = new Typography({
  baseFontSize: `18px`,
  baseLineHeight: `1`,
  googleFonts: [
    {
      name: "Teko",
      styles: ["400", "500", "700"],
    },
    {
      name: "Roboto Condensed",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: ["Teko", "Arial", "Helvetica", "sans-serif"],
  bodyFontFamily: ["Roboto Condensend", "Arial", "Helvetica", "sans-serif"],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    ".primary-nav li > a": {
      fontFamily: ["Teko", "Arial", "Helvetica", "sans-serif"].join(","),
    },
  }),
})

export default typography
