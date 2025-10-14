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
      cursor: {
        browsingBlack: 'url(/media/icons/cursor.png), default',
        browsingWhite: 'url(/media/icons/cursor-white.png), default',
        browsingPurple: 'url(/media/icons/cursor-purple.png), default',
        browsingPink: 'url(/media/icons/cursor-pink.png), default',
        browsingBlue: 'url(/media/icons/cursor-blue.png), default',
        browsingYellow: 'url(/media/icons/cursor-yellow.png), default',
        clicking: 'url(/media/icons/hover.png), pointer',
      },
    },
  },
  plugins: [],
};
