/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", 'sans-serif']
      },
      backgroundImage: {
        banner: "url('/src/assets/images/BG Image.png')",
        banner2: "url('/src/assets/images/BG Image2.png')",
        banner3: "url('/src/assets/images/BG Image3.png')",
        promotionBanner: "url('/src/assets/images/CTA.png')",
      },
      colors: {
        primary: '#1D293F',
        para: '#546179',
        third:'#E81A46',
      },
    },
  },
  plugins: [],
})

