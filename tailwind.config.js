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
        "2xl": "1440px",
        "3xl": "1920px",
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
        orange: "#FF6846",
      },
    },
  },
  plugins: [],
};
