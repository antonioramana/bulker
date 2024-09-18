/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  theme: {
    extend: {
      colors: {
        marronBlaire: '#8B4513',  
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}

