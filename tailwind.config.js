/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FF6B35', // Capstone-like orange
          teal: '#00F0FF',   // Neon teal
          dark: '#0B0C10',   // Deep black
          gray: '#1F2833',   // Dark gray
        }
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}