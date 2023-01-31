/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        righteous: ["righteous"],
      },
      colors: {
        "my-orange": "#f8665d",
        "my-pink": "#ef079b",
        "my-black": "#0f172a",
      },
    },
  },
  plugins: [],
};
