/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { min: "340px", max: "667px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "668px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
