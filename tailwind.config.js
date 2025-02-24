/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F5528",
        darkPrimary: "#182815",
        lightGray: "#E9EBE0",
        black: "#000000",
        darkGray: "#525252",
      },
    },
  },
  plugins: [],
};
