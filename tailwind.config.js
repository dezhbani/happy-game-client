/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path if your source files are elsewhere
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF754C',
        'gray': '#1F212869',
        'violet': '#6C5DD3',
        'dark-gray': '#242731'
      },
      fontFamily: {
        'Gilroy': ['Gilroy'],
        'iranSans': ['iranSans'],

      },
      height: {
        '22': '88px'
      },
      screens: {
        'lm': '425px'
      }
    },
      boxShadow: {
        'soft': '2px 4px 30px 0px #00000010',
      }
  },
   plugins: [
    // --- اینجا کد مربوط به اضافه کردن کلاس سفارشی را اضافه کنید ---
    function({ addUtilities }) {
      const newUtilities = {
        '.darkAnimation': {
          transition: 'ease-in-out 500ms',
          transitionProperty: "color, background-color, fill, stroke"
        },
      }
      addUtilities(newUtilities) // 'responsive' و 'hover' اختیاری هستند
    }
  ],
};