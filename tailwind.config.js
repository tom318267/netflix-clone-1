module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      primary: "#E50914",
      black: "black",
      grey: "#222222",
      darkRed: "#b20101",
      transparent: "#ffffff00",
    }),
    extend: {},
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [],
};
