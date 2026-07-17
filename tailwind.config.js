/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sam-green': '#1a3a2e',
        'sam-gold': '#e8dcc3',
        'sam-cream': '#faf8f3',
        'sam-dark': '#2a2a2a',
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
