/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D0EBD1",
        primaryLight: "rgba(227,242,228,0.8)",
      },
    },
  },
  plugins: [],
}

