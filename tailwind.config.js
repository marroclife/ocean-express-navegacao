/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          abyss: '#0a1628',
          deep: '#1e3a5f',
          mid: '#2d5a87',
          surface: '#4a90d9',
          foam: '#e8f4f8',
          navy: '#1a365d', // Legacy
          gold: '#f6ad55', // Legacy
        },
        sand: {
          gold: '#c9a050',
          light: '#f4e8d0',
        },
        coral: {
          accent: '#e07a5f',
        },
        white: {
          soft: '#fafbfc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}