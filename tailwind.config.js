/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mui/material/**/*.js", // for MUI compatibility (optional)
  ],
  theme: {
    extend: {

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        "Zen Kaku": ['Zen Kaku Gothic Antique', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
