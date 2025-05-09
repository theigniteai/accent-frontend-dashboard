// Tailwind CSS configuration
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B21A8", // Purple
        secondary: "#1E40AF", // Indigo
      },
    },
  },
  plugins: [],
};
