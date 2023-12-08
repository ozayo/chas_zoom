/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Open Sans', sans-serif"],
        serif: ["'Playfair Display', serif"],
      },
    },
  },
  plugins: [],
}
