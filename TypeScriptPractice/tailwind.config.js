/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'max-xl': {'max': '1279px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};
