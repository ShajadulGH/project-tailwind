module.exports = {
  mode: "jit",
  purge: ["*.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "540px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
