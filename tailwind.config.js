/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'text': '#130e01',
        'background': '#fffaeb',
        'primary': '#ff8400',
        'secondary': '#fff5d6',
        'accent': '#cf4307',
       },
       boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
}

