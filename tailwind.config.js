/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "yrgo-red": "#F52A3B",
        "yrgo-blue": "#001A52",
      },
    },
    fontFamily: {
      sans: ["inter", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
