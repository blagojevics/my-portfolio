/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensure dark mode is enabled via class
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background-color)",
        text: "var(--text-color)",
      },
    },
  },
  plugins: [],
};
