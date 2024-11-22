/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      lineClamp: {
        2: '2',
      },
      colors: {
        'periglacial-blue': {
          '50': '#f3f6ef',
          '100': '#dde6d5',
          '200': '#cad8be',
          '300': '#a8bf97',
          '400': '#8aa774',
          '500': '#6b8b57',
          '600': '#536d43',
          '700': '#425536',
          '800': '#37452f',
          '900': '#313c2b',
          '950': '#181f14',
        },
        'beige': {
        '50': '#f9f7f3',
        '100': '#f1ede3',
        '200': '#ded4c0',
        '300': '#cebfa3',
        '400': '#baa07d',
        '500': '#ac8b63',
        '600': '#9f7957',
        '700': '#84634a',
        '800': '#6c5140',
        '900': '#584336',
        '950': '#2f231b',
    },
      },
    },
  },
  
  plugins: [],
};