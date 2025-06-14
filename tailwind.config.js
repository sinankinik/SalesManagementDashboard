/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#30313A',
        'primary': '#171821',
        'secondary': '#21222D',
        'third': '#A9DFD8',
      },
      fontFamily: {
        'inter': ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}