module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B61FF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#E1DBFF',
          '300': '#BFB3FF',
          '400': '#9D8AFF',
          '500': '#7B61FF',
          '600': '#4C29FF',
          '700': '#2700F0',
          '800': '#1E00B8',
          '900': '#150080'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
