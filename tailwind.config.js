/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yrgo-red": "#F52A3B",
        "placeholder-grey": "#BDBDBD",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
    },
    fontFamily: {
      sans: ["inter", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
