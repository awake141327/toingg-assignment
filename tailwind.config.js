/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "#FFFFFF",
      "green-500": "#36AA9D",
      "green-600": "#247067",
      "gray-400": "#313134",
      "gray-500": "#77787A",
      "gray-600": "#1D1E21",
      "gray-900": "#121417",
      "orange-100": "#FEF5E7",
      "orange-200": "#FDEBCF",
      "orange-400": "#FBD69E",
      "orange-600": "#FE9345",
      "orange-700": "#F56801",
      black: "#000000",
    },
    fontFamily: {
      playwrite: ['"Playwrite DK Loopet"', "sans-serif"],
      seoge: ['"Seoge UI"', "Helvetica", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
