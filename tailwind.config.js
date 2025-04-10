/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: "#f5f0e6",
        navy: "#2b3a55",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
