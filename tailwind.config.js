module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          300: "#e0e0e0",
          400: "#b9b9b9",
          500: "#9f9f9f",
          600: "#6f6f6f",
          700: "#686868",
          800: "#404040",
          900: "#1b1b1b",
          "600_99": "#6f6f6f99",
          "800_02": "#3c3c3c",
          "900_6c": "#1b1b1b6c",
          "800_01": "#3e3e3e",
          "500_01": "#a4a4a4",
          "900_02": "#222222",
          "900_03": "#212121",
          "900_04": "#2a2a2a",
          "900_05": "#252525",
          "600_01": "#6f6c6c",
          "900_01": "#1c1b1b",
          "400_01": "#cacaca",
          "700_87": "#68686887",
        },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_66": "#00000066",
          "900_a2": "#000000a2",
        },
        yellow: {
          200: "#ffef9d",
          300: "#ffe872",
          A700_6c: "#fadc006c",
          A700: "#fadc00",
        },
        blue_gray: { 900: "#2b2b2b", "900_01": "#2e2e2e" },
        lime: { 600: "#d9b945", 900: "#8e7e0f" },
        amber: { 500: "#d9c006" },
        orange: { 300: "#e0c155" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { rubik: "Rubik", mulish: "Mulish", inter: "Inter" },
      boxShadow: {
        bs: "0px 14px  46px 0px #0000003f",
        bs1: "0px 2px  30px 0px #00000066",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
