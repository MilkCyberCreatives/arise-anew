/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#00683A", 600: "#045C35", 700: "#064D2C" },
        accent: { DEFAULT: "#4FB865", 600: "#42A957" },
      },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.08)" },
    },
  },
  plugins: [],
};
