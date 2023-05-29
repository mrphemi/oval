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
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-libre)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "oval-grey": {
          light: "#8E8C95",
          dark: {
            primary: "#64626A",
            secondary: "#3B3A40",
          },
        },
        "oval-green": {
          light: "#C2EED8",
        },
        "oval-blue": {
          light: "#C0EEF5",
        },
        "oval-orange": "#FF6846",
        "oval-gold": "#FFDEA7",
      },
    },
  },
  plugins: [],
};
