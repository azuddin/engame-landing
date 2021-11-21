module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        roboto: "Roboto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
