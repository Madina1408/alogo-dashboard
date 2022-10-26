/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
      {
      'palm': "linear-gradient(to right bottom, rgba(255, 255, 255, 0.752), rgba(255, 255, 255, 0.703)),url('./assets/NavbarImages/background.png')",
    }},
  },
  plugins: [],
}