/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "smoke-white":"#FCF5FD",
        "baby-pink":"#E68AFC",
      },
      fontSize: {
        "custom-2xl": "22px",
        "custom-4xl": "40px",
        "custom-7xl": "70px"
      },
      lineHeight: {
        "custom-lg": "115%",
        "custom-5xl": "174%",
        "custom-6xl": "182%"
      },
      backgroundImage: {
        "heading-horse": "url(../public/assets/images/little-horse-image.webp)",
      }
    },
  },
  plugins: [],
}