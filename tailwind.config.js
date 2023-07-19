/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      placeholderColor: {
        "purple-custom": "#7028E4",
      },
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
