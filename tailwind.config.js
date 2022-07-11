/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // maxWidth: {
    //   mw: "80%",
    // },
    extend: {
      keyframes: {
        movein: {
          "0%": { transform: "translate(-100%,)" },
          "20%": { transform: "translate(-80%, -80%)" },
          "40%": { transform: "translate(-60%, -60%)" },
          "60%": { transform: "translate(-40%, -40%)" },
          "80%": { transform: "translate(-20%, -20%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        productinfo: {
          "0%": { transform: "translate(100%,)" },
          "20%": { transform: "translate(80%, 80%)" },
          "40%": { transform: "translate(60%, 60%)" },
          "60%": { transform: "translate(40%, 40%)" },
          "80%": { transform: "translate(20%, 20%)" },
          "100%": { transform: "translate(0%, 0%)" },
        },
        logo: {
          "0%": { transform: "translate(-200%)" },
          "20%": { transform: "translate(-80% )" },
          "40%": { transform: "translate(-60% )" },
          "60%": { transform: "translate(-40% )" },
          "80%": { transform: "translate(-20% )" },
          "100%": { transform: "translate(0% )" },
        },
        profilebounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
        nav: {
          "0%": { transform: "translate(0,-100%)" },
          "20%": { transform: "translate(0,0% )" },
          "40%": { transform: "translate(0,-60% )" },
          "60%": { transform: "translate(0,0% )" },
          "80%": { transform: "translate(0,-20% )" },
          "100%": { transform: "translate(0% 0%)" },
        },
      },

      animation: {
        movein: "movein 0.8s ease-in 0.6s 1 backwards",
        productinfo: "productinfo 1.2s ease-in 0.6s 1 backwards",
        logo: "logo 0.8s ease-in-out 0.6s 1 backwards ",
        profilebounce: "profilebounce 1s 3",
        nav: "nav 1.2s ease-in-out 1 ",
      },
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        Verydarkblue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        lightbox: "hsl(0, 0%, 0%)",
      },
    },
    screens: {
      xsm: "446px",
      sm: "640px",
      md: "768px",
      lmd: "924px",
      lg: "1024px",
      xl: "	1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
