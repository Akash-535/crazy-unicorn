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
      colors: {
        "smoke-white":"#FCF5FD",
        "baby-pink":"#E68AFC",
        "pink-dark":"#B62AFF",
        "neon-pink":"#FF0DF2"
      },
      fontSize:{
        "custom-2xl":"22px",
        "custom-3xl":"35px",
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
        "roadmap-left-bg":"url(../public/assets/images/webp/roadmap-cloud-img-one.webp)",
        "roadmap-right-bg":"url(../public/assets/images/webp/roadmap-cloud-img-two.webp)",
        "roadmap-left-mobile":"url(../public/assets/images/webp/roadmap-cloud-one-mobile.webp)",
        "roadmap-right-mobile":"url(../public/assets/images/webp/roadmap-cloud-two-mobile.webp)"
      },
      backgroundSize:{
        "roadmap-clouds":"844px 629px",
        "roadmap-clouds-md":"345px 231px"
      }
    },
  },
  plugins: [],
}