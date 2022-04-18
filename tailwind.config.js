module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "content.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['righteous'],

        /*Portfolio*/
        ubuntu: ['Ubuntu'],
        overpass: ['Overpass'],
        josefin: ['Josefin Sans']
      },
      colors: {
        myPrimary: '#f8665d',/* Orange */
        mySecondary: '#ef079b',/* Pink */
        myDark: '#0f172a', /*Very dark purpule  */

        /*Portfolio*/

        BlogrRed: 'hsl(356, 100%, 66%)',
        BlogrLightRed: 'hsl(355, 100%, 74%)',
        BlogrVeryLightRed: 'hsl(13, 100%, 72%)',
        BlogrDarkBlue: 'hsl(208, 49%, 24%)',
        BlogrGrayishBlue: 'hsl(240, 2%, 79%)',
        BlogrDarkishBlue: 'hsl(240, 10%, 16%)',

        ChillonCyan: 'hsl(172, 67%, 45%)',
        DarkCyan: 'hsl(183, 100%, 15%)',
        LightCyan: 'hsl(185, 41%, 84%)'
      }
    },
  },
  plugins: [],
}