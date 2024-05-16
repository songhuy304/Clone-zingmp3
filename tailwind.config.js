/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          "scrollbar-width": "none",
          "scrollbar-color": "rgb(31 29 29) white",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "6px",
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white",
          },
          "&::-webkit-scrollbar-track": {
            background: "white",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    // require('tailwind-scrollbar'),
  ],
}