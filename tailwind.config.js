/** @type {import('tailwindcss').Config} **/

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
        "2xl": "1920px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        grey: {
          light: "#8E8C95",
          dark: {
            primary: "#64626A",
            secondary: "#3B3A40",
          },
        },
        green: {
          light: "#C2EED8",
        },
        orange: "#FF6846",
        gold: "#FFDEA7",
      },
    },
  },
  plugins: [],
};
