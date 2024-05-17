/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: `"Inter", 'sans-serif'`,
      Cinzel: `"Cinzel", serif`,
    },
  },
  plugins: [require("daisyui")],
};
