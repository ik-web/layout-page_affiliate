/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'family-main': ['Raleway', 'sans-serif'],
        'family-title': ['Bitter', 'serif'],
      },
      colors: {
        'color-main': '#1D2F38',
        'color-gray': '#768F9C',
        'color-gray-light': '#eeeeee',
        'color-gray-dark': '#5c6c75',
        'color-green': '#1fbe5f',
        'color-green-dark': '#17A550',
        'color-yellow': '#ffdf28',
        'color-yellow-dark': '#FFC728',
        'color-blue': '#E3EBF1'
      },
      gridTemplateRows: {
        'page-template': 'auto 1fr auto',
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
