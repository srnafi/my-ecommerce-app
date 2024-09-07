module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class", // or 'media' or false
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
