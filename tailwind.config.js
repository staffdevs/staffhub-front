/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        yellowgreen: '#9BC53D',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
