/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{html,js,pug}'],
  theme: {
    extend: {
      fontFamily: {
        garamond: 'EB Garamond',
        bodoni: 'Bodoni Moda',
        montserrat: 'Montserrat',
      },
      colors: {
        sixtyAlu: '#F6F1F1',
        sixty: '#FFF4E0',
        thirthyAlu: '#AFD3E2',
        thirty: '#FFBF9B',
        tenAlu: '#19A7CE',
        ten: '#B46060',
        contrastAlu: '#146C94',
        contrast: '#4D4D4D',
        white: '#fff',
        cta: '#B46060',
      },
      height: {
        navBar: '106px',
      },
    },
  },
  plugins: [],
};
