/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans Hebrew', 'Arial', 'sans-serif'],
      },
      colors: {
        'chinese-red': '#DC143C',
        'chinese-gold': '#FFD700',
        'chinese-darkRed': '#8B0000',
        'chinese-black': '#1A1A1A',
        'chinese-lightGold': '#FFF8DC',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      height: {
        '96': '24rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
