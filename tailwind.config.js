module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-pattern": "url('/src/header.png')",
      }),
      colors: {
        "game-dark": "#111827",
      },
      animation: {
        ChangeNum: "pulse 1.5s  cubic-bezier(0,0,1,1) infinite",
      },
      keyframes: {
        pulse: {
          "0%": { opacity: 0 },
          "10%": { opacity: 0 },
          "60%": { opacity: 1 },

          "100%": { opacity: 0 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
