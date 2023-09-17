/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primery: '#FFB562', //brown
        secondary:'#F9F2ED', //yellowish
        text:'#3AB0FF',    //blue
        background:'#F87474',   //red
      },
      fontFamily: {
       
        'sf-pro-display':['SF Pro Display', 'sans-serif'],
        'family':[ 'Poppins', 'sans-serif'],

        'nfamily': ['Raleway', 'sans-serif']
      }
    },
  },
}