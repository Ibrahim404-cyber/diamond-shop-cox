import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050A18",
          900: "#0A1226",
          850: "#0E1932",
          800: "#12203F",
          700: "#1B2C52",
          600: "#263C6B",
        },
        gold: {
          50: "#FFF8E6",
          100: "#FFEFC2",
          200: "#FFE08A",
          300: "#FFD15A",
          400: "#F5B942",
          500: "#E9A827",
          600: "#C9891A",
          700: "#9C6714",
        },
      },
      boxShadow: {
        gold: "0 8px 30px -10px rgba(245,185,66,0.45)",
        card: "0 18px 50px -24px rgba(0,0,0,0.8)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(0.75)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-dot": "pulse-dot 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
