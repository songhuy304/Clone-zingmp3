/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [ 

    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '1px black',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px black',
        },
        // Thêm các lớp tiện ích khác nếu cần
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    // require('tailwind-scrollbar'),
    require('tailwindcss-animated')
  ],
}