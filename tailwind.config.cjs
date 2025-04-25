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
        xxs: ["10px", { lineHeight: "120%" }],
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
        subway: {
          // 기타 노선
          KA: "#0065B3", // 공항철도
          A: "#0090D2", // 인천국제공항철도
          J: "#F97600", // 공항직통
          UL: "#22246F", // 의정부경량전철
          U: "#FDA600", // 의정부 경전철
          YL: "#6FB245", // 용인경량전철
          E: "#509F22", // 용인 경전철
          SB: "#ED1C24", // 네오트랜스
          S: "#D4003B", // 신분당선
          S9: "#BB8336", // 서울시메트로9호선
          GG: "#AD8605", // 김포골드라인운영
          G: "#A17800", // 김포골드라인
          LRT: "#787878", // 서울시경전철
          UI: "#B7C452", // 우이신설경전철
          UIS: "#B0CE18", // 서울 경전철 우이신설선

          // 수도권 광역 철도
          rail1: "#77C4A3", // 경의중앙선
          rail2: "#F5A200", // 수인분당선
          rail3: "#003DA5", // 경강선, 동해선, 대경선
          rail4: "#0C8E72", // 경춘선

          // 서울 지하철
          line1: "#0052A4",
          line2: "#00A84D",
          line3: "#EF7C1C",
          line4: "#00A5DE",
          line5: "#996CAC",
          line6: "#CD7C2F",
          line7: "#747F00",
          line8: "#E6186C",
          line9: "#BDB092",
        },
        kakao: { yellow: "#FEE500", black: "#1E1E20" },
      },
    },
  },
  plugins: [],
};
