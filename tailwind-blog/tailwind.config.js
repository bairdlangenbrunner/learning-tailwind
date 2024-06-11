/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Roboto','"Open Sans"','sans-serif'],
      'serif': ['Domine','Courier','Georgia','serif']
    },
    extend: {},
  },

  plugins: [
    // function ({ addBase, theme }) {
    //   addBase({
    //     'p': { 
    //       fontFamily: theme('fontFamily.serif'), 
    //       marginTop: '1.5rem', 
    //       marginBottom: '1.5rem',
    //       color: '#363636'
    //     },
    //   });
    // },
  ],

}