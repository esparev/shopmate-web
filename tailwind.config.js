const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}', './containers/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
        manrope: ['Manrope', ...defaultTheme.fontFamily.sans],
        dela: ['Dela Gothic One', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        black: '#000000',
        'carbon-100': '#171717',
        'carbon-200': '#323232',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-70': 'rgba(255, 255, 255, 0.7)',
        'white-100': '#FFFFFF',
        'gray-100': '#EEEEEE',
        'gray-200': '#D9D9D9',
        'gray-300': '#818181',
        'green-50': 'rgba(0, 125, 17, 0.5)',
        'green-100': '#4EE062',
        'green-200': '#007D11',
        'green-300': '#00373E',
        'green-400': '#40686E',
      },
      spacing: {
        '1/2': '2px',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '28px',
        8: '32px',
        9: '36px',
        10: '40px',
      },
    },
  },
  plugins: [],
};
