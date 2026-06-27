/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        void: "#070813",
        ink: "#dfe8ff",
        mint: "#6fffd2",
        neon: "#ff4ecd",
        amber: "#ffd166",
        plasma: "#7c5cff",
      },
      boxShadow: {
        glow: "0 0 48px rgba(111, 255, 210, 0.22)",
        portal: "0 0 60px rgba(124, 92, 255, 0.3), inset 0 0 34px rgba(111, 255, 210, 0.1)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        scan: "scan 5s linear infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 28px rgba(111, 255, 210, 0.22)" },
          "50%": { boxShadow: "0 0 54px rgba(255, 78, 205, 0.32)" },
        },
      },
    },
  },
  plugins: [],
};
