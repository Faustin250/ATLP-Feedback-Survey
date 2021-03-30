
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        'cool-back-color': '#F8F8F8',
        'textColor': '#000',
        'blackColor1': '#333333',
        'blackColor2': '#555555',
        'colorCool': '#DB2777'

      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },

    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      semiLight: 350,
      normal: 400,
      semiNormal: 450,
      medium: 500,
      semiMedium: 550,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    fontSize: {
      xs: ['13px'],
      sm: ['14px']

    },

  },

  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    extend: {},
  },

  plugins: [],
}
