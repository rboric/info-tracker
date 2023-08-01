/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      dark: {
        900: "#1f1e1e",
        800: "#363636",
        700: "#4a4a4a",
        600: "#595757",
        500: "#6b6969",
        400: "#7d7d7d",
        300: "#8c8c8c",
        200: "#b3b3b3",
        100: "#d1d1d1",
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
      },
    },
  },
  plugins: [],
};
