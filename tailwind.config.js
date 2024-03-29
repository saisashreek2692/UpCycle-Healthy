/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx.tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx.tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        indigo: { A400: "#5356ff" },
        white: { A700: "#ffffff" },
        gray: {
          50: "#fafafa",
          100: "#f3f3f3",
          200: "#eaeaea",
          500: "#929a9d",
          "200_01": "#f0f0f0",
          "200_02": "#ebebeb",
          "50_01": "#fcfafa"
        },
        black: { 900: "#000000" },
        blue_gray: { 50: "#f1f1f1", 100: "#cdcdcd", 200: "#9db2bf" },
      },
      boxShadow: {
        xs: "0px 4px 4px 0px #0000003f",
        sm: "0px 3px 2px 0px #0000003f",
        bs: "inset 0px 1px 1px 0px #0000003f",
      },
      fontFamily: { quicksand: "Quicksand" },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

