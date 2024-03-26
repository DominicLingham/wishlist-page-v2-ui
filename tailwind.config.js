/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-primary': '#2B2B2B',
        'background-secondary': '#888888'
      }
    },
    fontFamily: {
      FiraCode: ['Fira Code, monospace'],
      Roboto: ['Roboto, sans-serif']
    },
    container: {
      padding: '2rem',
      center: true
    }
  },
  plugins: []
}
