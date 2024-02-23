/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: "DM Serif Display",
      body: "Work Sans",
    },
    container:{
      padding:{
        DEFAULT: "1rem",
        lg: "3rem"
      },
    },
    extend:{
      screens:{
        'xtrasm': '300px'
      },
      colors:{
        "light-primary": "#92C7CF",
        "light-secondary": "#AAD7D9",
        "light-tail-100": "#FBF9F1",
        "light-tail-500": "#E5E1DA",
        "dark-primary": "#040D12",
        "dark-secondary": "#183D3D",
        "dark-tail-100": "#5C8374",
        "dark-tail-500": "#93B1A6",
        blue: colors.blue,
        indigo: colors.indigo,
        green:colors.green,
        red: colors.red,
        paragraph: "#878e99",
        accent: {
          DEFAULT: "#ac6b34",
          hover: "#925a2b"
        }

      }

    }
  },
  plugins: [],
}

