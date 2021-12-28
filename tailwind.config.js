module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
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
    extend: {
      filter: ["hover"],
      grayscale: ["hover"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          textDecoration: "underline",
          "text-decoration-thickness": ".35rem",
        },
        ".underline-yellow": {
          "text-decoration-color": "#FFA800",
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
