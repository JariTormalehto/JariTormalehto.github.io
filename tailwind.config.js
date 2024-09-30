/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#358E64', // Custom color
        customContrast: '#234C3E', // Custom color

      },
    },
  },
  plugins: [],
}