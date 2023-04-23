/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        18: "72px",
        120: "29rem",
        128: "32rem",
      },
      aspectRatio: {
        "5/3": "5/3",
        "2/1": "2/1",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
