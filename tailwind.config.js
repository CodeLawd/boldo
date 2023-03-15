module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./helpers/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0A2640",
          "primary-content": "#ffffff",
          "primary-focus": "#0A2640",
          secondary: "#65E4A3",
          "secondary-content": "#ffffff",
          "secondary-focus": "#65E4A3",
          accent: "#FFCCD9",
          "accent-content": "#ffffff",
          "accent-focus": "#FFCCD9",
          warning: "#FF3366",
          "warning-content": "#ffffff",
          "warning-focus": "#FF3366",
          info: "#222222",
          "info-content": "#ffffff",
          "info-focus": "#222222",
        },
      },
    ],
  },
};
