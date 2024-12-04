/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      glow: "0 0 20px 5px rgba(255, 255, 0, 0.7)",
    },
    keyframes: {
      slideUp: {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-30%)" },
      },
      slideDown: {
        "0%": { transform: "translateY(-30%)" },
        "100%": { transform: "translateY(0)" },
      },
    },
    animation: {
      slideUp: "slideUp 0.7s ease-in-out",
      slideDown: "slideDown 0.7s ease-in-out",
    },
    transitionTimingFunction: {
      "ease-in-out": "ease-in-out",
    },
    transitionDuration: {
      500: "0.5s",
    },
  },
  plugins: [],
};
