/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-library': 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("../src/images/library3.jpg")',
      },
    },
  },
  plugins: [],
}