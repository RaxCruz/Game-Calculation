module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       backgroundImage: theme => ({
        'header-pattern': "url('/src/header.png')",
      }),
      colors:{
        'game-dark':"#111827",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
