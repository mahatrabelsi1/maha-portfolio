/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0a0c12",
        panel: "#12151f",
        peri: "#6d7cff",
        violet: "#8b5cf6",
        coral: "#ff6b6b",
        sunny: "#ffd166",
        mist: "#9aa3b8",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(var(--r, 0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--r, 0deg))" },
        },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        dash: { to: { strokeDashoffset: "0" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "spin-slow": "spinSlow 24s linear infinite",
      },
    },
  },
  plugins: [],
};
