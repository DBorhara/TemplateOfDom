let primary = "#B85042";
let secondary = "#E7E8D1";
let tertiary = "#A7BEAE";
/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Scarlet, Light Olive, and Light Teal
      colors: { primary, secondary, tertiary },
      backgroundImage: {
        404: `linear-gradient(65deg, ${primary} 20%, ${secondary} 20%, ${secondary} 65%, ${tertiary} 65%, ${tertiary} 85%)`,
        500: `linear-gradient(65deg, ${tertiary} 20%, ${secondary} 20%, ${secondary} 65%, ${primary} 65%, ${primary} 85%)`,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
