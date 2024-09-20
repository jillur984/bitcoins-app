/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],  // Add the Inter font
      },
      colors: {
        customBlue: 'rgba(16, 38, 73, 0.06)', 
        customGray: 'rgba(211, 224, 230, 1)' // Your rgba color as a custom color
      },
    },
  },
  plugins: [],
}
