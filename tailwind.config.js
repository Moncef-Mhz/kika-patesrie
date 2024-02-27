const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#fefbf6",
        background: "#151515",
        primary: "#1A120B",
        secondary: "#3C2A21",
        accent: "#D5CEA3",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
