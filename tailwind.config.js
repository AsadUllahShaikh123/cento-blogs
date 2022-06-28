/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '48': '48%',
        '1140':'1140px',
        '23':'23%'
       }
    },
  },
  plugins: [],
}
