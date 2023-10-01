/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,astro}",
    "./components/**/*.{ts,tsx,astro}",
    "./app/**/*.{ts,tsx,astro}",
    "./src/**/*.{ts,tsx,astro}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-regular": ["SF-Pro-Regular", "sans-serif"],
        "sf-pro-medium": ["SF-Pro-Medium", "sans-serif"],
        "sf-pro-semibold": ["SF-Pro-Semibold", "sans-serif"],
        "sf-pro-bold": ["SF-Pro-Bold", "sans-serif"],
        "sf-pro-black": ["SF-Pro-Black", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
