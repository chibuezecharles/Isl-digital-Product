/** @type {import('tailwindcss').Config} */
const tailwindAnimate = require("tailwindcss-animate");

module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        background: "#F5F8FA",
        foreground: "#181C32",

        primary: {
          100: "#163E76",
          hover: "#163E76",
          200: "#1DAEE4",
          foreground: "#E6F7FD",
        },
        secondary: {
          100: "#F8F8F8",
          200: "#F1F1F1",
          300: "#D9D9D9",
          400: "#C2C2C2",
          500: "#AAAAAA",
          600: "#999999",
          700: "#666666",
          800: "#4D4D4D",
          900: "#333333",
        },
        green: {
          100: "#DFF1EB",
          foreground: "#2BA579",
        },
        grey: {
          100: "#181C32",
          200: "#3F4254",
          300: "#5E6278",
          400: "#7E8299",
          500: "#A1A5B7",
          600: "#B5B5C3",
          700: "#E4E6EF",
          800: "#EFF2F5",
          900: "#F5F8FA",
        },
        orange: {
          100: "#FFFBEB",
          foreground: "#FEF3C7",
        },
        blue: {
          100: "#009EF6",
          foreground: "#ECF8FF",
        },
      },
    },
  },
  plugins: [tailwindAnimate],
};
