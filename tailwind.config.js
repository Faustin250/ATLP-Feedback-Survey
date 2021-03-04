module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        'cool-back-color': '#CEC0C3',
      },
    },

  },

  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    extend: {},
  },

  plugins: [],
}
