/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        rale:['Raleway', 'sans-serif'],
      },
      colors: {
        veryDarkBlue: 'hsl(243, 87%, 12%)',
        desaturatedBlue: 'hsl(238, 22%, 44%)',
        brightBlue: 'hsl(224, 93%, 58%)',
        lightGray: 'hsl(0, 0%, 75%)',
        moderateCyan: 'hsl(170, 45%, 43%)',
      },
      backgroundImage: {
        mainBg: "url('../images/bg-curve-desktop.svg')",
      }
    },
  },
  plugins: [],
}

