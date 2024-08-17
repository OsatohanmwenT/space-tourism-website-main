/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "serif": ["Bellefair", 'serif'],
      "sans-cond": ['Barlow Condensed', 'sans-serif'],
      "sans-normal": ["Barlow", "sans-serif"],
    },
    colors: {
      "clr-dark": "#0B0D17",
      "clr-light": "#D0D6F9",
      "clr-white": "#FFFFFF",
    },
    fontSize: {
      'sm': '0.875rem',
      'base': '0.9375rem',
      'md': '1rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3.5rem',
      '6xl': '5rem',
      '7xl': '6.25rem',
      '8xl': '9.375rem'
    },
    extend: {
    },
  },
  plugins: [],
}