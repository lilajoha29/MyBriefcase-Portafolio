/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./hv.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
      'negro': '#252526',
      'blanco': '#FFFFFF',
      'rosado': '#FF7777',
      },
      fontFamily: {
        DynaPuff: ['"DynaPuff","Comic Sans MS"']
      },
    },
  },
  plugins: [],
}
