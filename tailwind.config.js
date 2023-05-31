/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8E3DD",
        secondary: "#232323",
        whitesmoke: "#F5F5F5",
      },

      fontFamily: {
        'dancing': ['"Dancing Script"', 'sans-serif'],
        'jost': ['"Jost"', 'sans-serif'],
      },

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },

      backgroundImage: {
        'homepageCat': "url('../public/Kings/Yossi/Yossi15.jpg')",
      },
    },
  },
  plugins: [],
}
