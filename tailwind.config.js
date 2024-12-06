/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      fontFamily:{
        nunito:['Nunito', 'sans-serif']
      },screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      }
    },
  },
  plugins: [],
}
