/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


  theme: {
    extend: {
      colors: {
        'marronclair': '#DFD3C3',
        'rose': '#EFC7C2',
        'marronfonce': '#44332C'
      },
      fontFamily: {
        corinthia: ['Corinthia', 'cursive'],
      },
    },
  },
  plugins: [],
}

