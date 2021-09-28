module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      'fern-green': {
        '50': '#f6f8f6', 
        '100': '#edf2ec', 
        '200': '#d3ded0', 
        '300': '#b9c9b3', 
        '400': '#84a17b', 
        '500': '#4f7942', 
        '600': '#476d3b', 
        '700': '#3b5b32', 
        '800': '#2f4928', 
        '900': '#273b20'
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
