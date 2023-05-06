/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        yellowgreen: '#9BC53D',
      },
      boxShadow: {
        sidebar: '1px 0px 15px 0px rgba(0,0,0,0.20)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
