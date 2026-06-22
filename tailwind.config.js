/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "568px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        allura: ["Allura", "cursive"],
      },

      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0,0,0,.3)",
        "4xl": "0 100px 200px rgba(182,97,176,.8)",
      },

      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
        },
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-15px)",
          },
        },
        borderMove: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },

      animation: {
        typing: "typing 10s steps(100,end), blink .8s step-end infinite",
        float: "float 4s ease-in-out infinite",
        border: "borderMove 20s linear infinite",
      },
    },
  },
  plugins: [],
};
