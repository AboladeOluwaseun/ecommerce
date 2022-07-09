/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // maxWidth: {
    //   mw: "80%",
    // },
    extend: {
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
      lg: "1024px",
      xl: "	1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
