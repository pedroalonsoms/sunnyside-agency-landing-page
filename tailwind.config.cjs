/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "my-neutral": {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(210, 4%, 67%)",
          300: "hsl(232, 10%, 55%)",
          400: "hsl(213, 9%, 39%)",
          800: "hsl(212, 27%, 19%)",
        },
        "my-red": {
          200: "hsl(7, 99%, 70%)",
        },
        "my-yellow": {
          200: "hsl(51, 100%, 49%)",
        },
        "my-green": {
          200: "hsl(167, 43%, 70%)",
          300: "hsl(168, 34%, 41%)",
          600: "hsl(167, 40%, 24%)",
        },
        "my-blue": {
          600: "hsl(198, 62%, 26%)",
        },
        "my-sky": {
          400: "hsl(200, 100%, 62%)",
        },
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],

        // Default font override
        sans: ["Barlow", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
