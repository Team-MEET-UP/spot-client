/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      /* Typography */
      fontSize: {
        xxxl: ["24px", { lineHeight: "150%" }],
        xxl: ["22px", { lineHeight: "150%" }],
        xl: ["20px", { lineHeight: "150%" }],
        lg: ["18px", { lineHeight: "150%" }],
        md: ["16px", { lineHeight: "150%" }],
        sm: ["14px", { lineHeight: "150%" }],
        xs: ["12px", { lineHeight: "150%" }],
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
        regular: "400",
      },
      /* Color Pallet */
      colors: {
        gray: {
          5: "#F7F7F8",
          10: "#E9E9ED",
          20: "#CDCDD6",
          30: "#B0B0BF",
          40: "#9494A8",
          50: "#787891",
          60: "#606076",
          70: "#49495A",
          80: "#32323E",
          85: "#272730",
          90: "#1C1C22",
        },
      },
    },
  },
  plugins: [],
};
