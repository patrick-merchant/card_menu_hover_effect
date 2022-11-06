/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-light-gray": "#434343",
        "background-dark-gray": "#262626",
        "text-orange": "#ff7a18",
        "text-light-gray": "#d4d4d4",
        "text-dark-gray": "#777",
      },
      boxShadow: {
        "first-child": "-2rem 0 3rem -2rem #000",
        DEFAULT: "-3rem 0 3rem -2rem #000",
      },
      minHeight: {
        "card-height": "350px",
      },
      minWidth: {
        "card-width-sm": "190px",
        "card-width-md": "220px",
        "card-width-lg": "300px",
      },
      translate: {
        "first-card-rotate": "translateY(-0.5rem, -1rem) rotate(3deg)",
        "card-rotate": "translateY(-1rem) rotate(3deg)",
      },
      borderColor: {
        gradient:
          "linear-gradient(130deg,#ff7a18,#af002d 41.07%,#319197 76.05%)",
      },
      fontFamily: {
        rubik: "Rubik",
      },
    },
  },
  plugins: [],
};
