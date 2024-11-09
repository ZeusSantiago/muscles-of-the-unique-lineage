/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
    },
    colors: {
      //Light:
      "lc-#F9F4F5": "#F9F4F5",
      "lc-#FCEDD5": "#FCEDD5",
      "lc-#F9E5C4": "#F9E5C4",
      "lc-#CFB594": "#CFB594",
      "lc-#B4D0CA": "#B4D0CA",
      "lc-#798F8B": "#798F8B",
      "lc-#83A197": "#83A197",
      "dc-#A3B3BC": "#A3B3BC",
      "dc-#6489A8": "#6489A8",
      "dc-#909CA7": "#909CA7",
      "dc-#3C81B4": "#3C81B4",
      "dc-#52789F": "#52789F",
      "dc-#021331": "#021331",
      "dc-#1B3959": "#1B3959",
    },
    extend: {},
  },
  plugins: [],
};
