/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        enlarge: "160%",
      },
    },
  },
  variants: {
    borderWidth: ({ after }) => after(["hover", "group-hover", "focus"]),
    border: ({ after }) => after(["hover", "group-hover", "focus"]),
    gridColumn: ({ after }) => after(["first"]),
  },
  plugins: [],
};
