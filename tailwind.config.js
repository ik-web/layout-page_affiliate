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
      },

      animation: {
        linkArrow: 'linkArrow 1s ease-in-out infinite',
      },

      keyframes: {
        linkArrow: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' }
        }
      }
    },
  },
  plugins: [],
}
