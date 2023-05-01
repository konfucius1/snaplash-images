/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  fontFamily: {
    satoshi: ['Satoshi', 'sans-serif'],
    rubik: 'rubik',
  },

  plugins: [daisyui],

  daisyui: {
    themes: ['light', 'dark'],
  },
};
