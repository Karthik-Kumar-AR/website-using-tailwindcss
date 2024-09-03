/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const rotateY = plugin(function({ addUtilities }){
  addUtilities ({
    '.rotate-y-180': {
      transform:"rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary":"#01051e",
        "primary-light":"#020726",
        "primary-dark":"#010417",
        "secondary":"#ff7d3b",
        "white":"#fff",
        "gray":"#333",
        "blob":"#a427df",
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'20px',
        md:'50px'
      }
    }
  },
  plugins: [rotateY],
}

