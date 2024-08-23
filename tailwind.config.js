/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"], 
  theme: {
    extend: {
      // backgroundImage: {
      //   welcomeImg: "url('/image/welcome.jpg')",
      // },
      // container:{
      //   center:'true',
      //   color: 'red',
      // },

      colors: {
        nemi: '#727272',
        primary_color : 'var(--primary_color)',
        primary_color2: 'var(--primary_color2)',
        header_color: 'var(--header_color)',

        font_color1: 'var(--font_color1)',
        font_color2: 'var(--font_color2)',
      },

      textNe:{
        nem01: '10px',
        nem02: '12px',
      },

      // Font:{
      //   my_Font_size: 'var(--my_Font_size)',
      // },

  
    },
  },
  plugins: [],
}

