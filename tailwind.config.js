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
      },
      colors: {
        myPrimary: '#f8665d',/* Orange */
        mySecondary: '#ef079b',/* Pink */
        myDark: '#0f172a', /*Very dark purpule  */
      }
    },
  },
  plugins: [],
}