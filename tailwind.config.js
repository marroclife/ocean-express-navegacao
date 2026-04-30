/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          navy: '#1a365d',
          gold: '#f6ad55',
        },
      },
    },
  },
  plugins: [],
}