/** @type {import('tailwindcss').Config} */
export default {
  content: [
  
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
         Base:"24px",
      },
      fontFamily:{
        SpaceMono: [ "Space Mono", "monospace"],
      },
      colors:{
        //Primary
        Strongcyan:"hsl(172, 67%, 45%)",
         
         //Neutral
         VerydarkCyan:"hsl(183, 100%, 15%)",
         DarkGrayishCyan:"hsl(186, 14%, 43%)",
         GrayishCyan: "hsl(184, 14%, 56%)",
         LightGrayishCyab:"hsl(185, 41%, 84%)",
         veryLightGrayishCyan: "hsl(189, 41%, 97%)",
         White: "hsl(0, 0%, 100%)",

      },
      boxShadow: {
        'custom': '0px 3px 12px 4px rgba(85,255,170,0.83)',
      },

    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}