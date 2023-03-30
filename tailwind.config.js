let defaultColors = {
  primary: "#B85042",
  secondary: "#E7E8D1",
  tertiary: "#A7BEAE",
};

const { primary, secondary, tertiary } = defaultColors;

/** @type {import('tailwindcss').Config} */
module.exports = {
  // enable dark mode
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      // Scarlet, Light Olive, and Light Teal
      backgroundImage: {
        404: `linear-gradient(65deg, ${primary} 20%, ${secondary} 20%, ${secondary} 65%, ${tertiary} 65%, ${tertiary} 85%)`,
        500: `linear-gradient(65deg, ${tertiary} 20%, ${secondary} 20%, ${secondary} 65%, ${primary} 65%, ${primary} 85%)`,
      },
      // Custom gradients for 400 and 500 pages
      colors: { primary: "#B85042", secondary: "#E7E8D1", tertiary: "#A7BEAE" },
    },
  },
  // https://tailwindcss.com/docs/typography-plugin
  plugins: [require("@tailwindcss/typography")],
};
