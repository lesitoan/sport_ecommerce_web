/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "secondary-color": "var(--secondary-color)"
      },
    },
  },
  plugins: [],
}

