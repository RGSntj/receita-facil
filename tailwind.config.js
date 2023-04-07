/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F3F9FF",
        backgroundLogo: "#4CBE6C",
      },
    },
  },
  plugins: [],
};
