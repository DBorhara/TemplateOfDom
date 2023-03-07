let primary = "#B85042";
let secondary = "#E7E8D1";
let tertiary = "#A7BEAE";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Scarlet, Light Olive, and Light Teal
    colors: { primary, secondary, tertiary },
    extend: {
      backgroundImage: {
        404: `linear-gradient(65deg, ${primary} 20%, ${secondary} 20%, ${secondary} 65%, ${tertiary} 65%, ${tertiary} 85%)`,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
