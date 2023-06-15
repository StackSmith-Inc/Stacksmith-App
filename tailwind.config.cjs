/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,ts,tsx,html}'],

  daisyui: {
    themes: [
      'cmyk'
    ],
  },
  plugins: [require('daisyui')]
};