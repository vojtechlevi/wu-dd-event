/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yrgo-red": "#F52A3B",
      },
    },
    fontFamily: {
      sans: ["inter", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
