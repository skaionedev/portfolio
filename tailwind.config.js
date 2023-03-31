/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#fcfcfc",
        primary: "#0097ec", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "fade-up": "fade-dup .7s ease ",
        "fade-down": "fade-down .7s ease ",
      },
      keyframes: {
        "fade-down": {
          from: { transform: "translateY(-100%)", opacity: 0 },
          to: { transform: "translateY(0%)", opacity: 1 },
        },
        "fade-up": {
          from: { transform: "translateY(100%)", opacity: 0 },
          to: { transform: "translateY(0%)", opacity: 1 },
        },
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fcfcfc 5px,#fcfcfc 100px)",

        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fcfcfc 5px,#fcfcfc 80px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fcfcfc 5px,#fcfcfc 60px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",

        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#fcfcfc 5px,#fcfcfc 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
      },
    },
  },
  plugins: [],
}
