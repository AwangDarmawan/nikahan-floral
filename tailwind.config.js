/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
       poppins: ['Poppins', 'sans-serif'],
       montserrat: ['Montserrat', 'sans-serif'],
       allura: ['Allura', 'cursive'],
      },
      colors : {
        "putih" : "#FFFFFF",
        "pinkw"  :"#F0BCE3",
        'darkgold': '#B8860B',
        'goldenyellow': '#FDB813',
        'gold': '#FDB813',
        netral:{
          600:'#6B7280'
        },
        orchid: {
          500: '#DA70D6',  
          300: '#A40781'
        },   
      },
       boxShadow: { 
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 100px 200px rgba(182, 97, 176, 0.8)',
      },
   
    },

    keyframes: {
      typing: {
      from: { width: '0' },
      to: { width: '100%' },
    },
    blink: {
      '50%': {
        borderColor: 'transparent',
      },
    },
    float: {
      '0%, 100%': {
        transform: 'translateY(0px)',
      },
      '50%': {
        transform: 'translateY(-15px)',
      },
    },
  },
  animation: {
    typing:'typing 10s steps(100, end), blink .8s step-end infinite',
    float: 'float 4s ease-in-out infinite',
  },
      screens: {
      xs: '568px',
    },
  },
  plugins: [],
}
