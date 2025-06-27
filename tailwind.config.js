/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunsetCoral: '#FF6B6B',
        goldenAmber: '#FFB347',
        lilacPurple: '#C084FC',
        skyBlue: '#7EC8E3',
        forestGreen: '#2E8B57',
        softBeige: '#F5F5DC',
      },
    },
  },
  plugins: [],
}
