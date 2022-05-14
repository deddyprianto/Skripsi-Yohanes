module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        gridCustom: "60px 1fr",
      },
      gridTemplateColumns: {
        colCustom: "256px 1fr",
      },
      fontFamily: {
        cabin: ["Cabin"],
      },
    },
  },
  plugins: [],
};
