/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'main': ['Raleway', 'sans-serif'],
        'title': ['Bitter', 'serif'],
      },
      colors: {
        'main': '#1D2F38',
      },
      gridTemplateRows: {
        'page': 'auto 1fr auto',
      },
      maxWidth: {
        container: '1174px',
      }
    },
  },
  plugins: [],
}
