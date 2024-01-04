/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#43695A",
        second: "#F2F1DF",
        third: "#A39771",
        white: "#ffff",
        red: "#FF0000",
        gray: "#808080",
        blue: "#3B82F6",
      },
    },
  },
  plugins: [],
};
