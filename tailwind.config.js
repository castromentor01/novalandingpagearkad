/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#0040A0',
        },
        purple: {
          700: '#A14EFF',
        },
        pink: {
          500: '#FF3C7E',
        },
        sky: {
          400: '#61C6FF',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};