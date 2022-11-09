/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange': '#ecebff',
        'purple':'#ff77e9',
      },
      backgroundImage:
      {
      'palm': "linear-gradient(to right bottom, rgba(255, 255, 255, 0.752), rgba(255, 255, 255, 0.703)),url('./assets/NavbarImages/background.png')",
    },
      textColor:{
        skin:{
          base:"var(--text-color)",
        },
      },
      backgroundColor:{
        skin:{
          fill: "var(--bg-color)",
          bar: "var(--bar-color)",
        },
      },
  },
  },
  plugins: [],
}