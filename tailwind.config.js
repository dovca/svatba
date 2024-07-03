/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.vue", "./pages/**/*.vue", "./app.vue", "./formkit.theme.ts"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#fffdfa",
      },
      fontFamily: {
        sans: ["Hubballi", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "0",
      },
    },
  },
  plugins: [],
};
