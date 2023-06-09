/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // <== disable this!
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-red-color": "#ff2e63",
        "primary-black-color": "#252a34",
        "primary-teral-color": "#08d9d6",
        "primary-grey-color": "#eaeaea",
      },
    },
  },
  plugins: [],
};
