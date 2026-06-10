module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
        pixel: ["'VT323'", "monospace"],
        title: ["'Silkscreen'", "cursive"],
      },
      colors: {
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#191919",
        "dark-card": "#363636",
        "green-text": "#018C0F",
        "greenbg": "#D7FFE0",
        "dave-deep": "#003B5C",
        "dave-teal": "#00A3AD",
        "dave-sun": "#F9E076",
        "dave-coral": "#FF6F61",
        "bancho-wood": "#2D1B14",
        "bancho-red": "#E63946",
        "bancho-rice": "#F1FAEE",
      },
    },
  },
  plugins: [],
};
