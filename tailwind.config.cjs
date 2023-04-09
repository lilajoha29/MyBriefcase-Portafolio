/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
      'negro': '#252526',
      'blanco': '#FFFFFF',
      'rosado': '#FF7777',
      'pastel': '#FCADAD'
      },
      fontFamily: {
        DynaPuff: ['"DynaPuff","Comic Sans MS"']
      },
      backgroundImage: {
        'default': "url('./src/assets/img/fondo.jpg')",
        'gif': "url('./src/assets/img/logogif.gif')"
      }
    },
  },
  plugins: [],
}
