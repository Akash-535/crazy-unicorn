/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        "2xl":"1330px"
      },
    },
    extend: {
      fontSize:{
        "custom-2xl":"22px",
        "custom-4xl":"40px",
        "custom-7xl":"70px"
      },
      lineHeight:{
        "custom-lg":"115%",
        "custom-5xl":"174%",
        "custom-6xl":"182%"
      },
      backgroundImage:{
        "header-line":"url(../public/assets/images/webp/header-text-line.webp)",
      }
    },
  },
  plugins: [],
}