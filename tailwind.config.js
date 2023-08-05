/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      custom: ["Ubuntu-Medium", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#253031",
        clr1: "#8AB0AB",
        clr2: "#C6E0FF",
        clr3: "#BCAB79",
      },
    },
  },
  plugins: [],
}
