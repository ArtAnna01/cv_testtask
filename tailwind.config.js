/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        originalBlue: "#373AF5",
        lightGrey: "#EBEBEB",
        grey: "#6B6B6B",
        whiteGrey: "#F7F7FA",
        lightGreen: "#25BC86",
      },
    },
  },
  plugins: [],
};
