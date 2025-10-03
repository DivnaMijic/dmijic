/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
        musty: ['musty', 'sans-serif'],
        edigo: ['edigo', 'sans-serif'],
        sunday: ['sunday', 'sans-serif'],
        suranna: ['suranna', 'sans-serif'],
        josefin: ['josefin', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
