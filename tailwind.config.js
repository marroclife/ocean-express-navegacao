/** @type {import('tailwindcss').Config} */
export default {
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