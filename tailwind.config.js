/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))'
    },
    gridTemplateRows: {
      '20': 'repeat(20, minmax(0, 1fr))'
    },
    gridColumn: {
      'span-18': 'span 18 / span 18',
    },
    backgroundColor : {
      'basicBG':' #f1efee'
    },
  },
  plugins: [],
}
}
