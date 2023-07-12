/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f4f4f4",
        secondaryBg: "#f0e5c9",
        textPrimary: "#594433",
        textSecondary: "#a68c69",
        textSpecial: "#9ba657"
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1436px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
