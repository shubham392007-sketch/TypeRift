import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        void: "#05030a",
        ink: "#0b0612",
        rift: "#8b2cff",
        magenta: "#ff2ddf",
        crimson: "#ff214f",
        cyan: "#24eaff",
        ember: "#ff7a1a"
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "sans-serif"],
        arcade: ["var(--font-arcade)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      boxShadow: {
        neon: "0 0 24px rgba(139,44,255,.55), inset 0 0 18px rgba(255,45,223,.16)",
        crimson: "0 0 26px rgba(255,33,79,.46)",
        cyan: "0 0 26px rgba(36,234,255,.42)"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        },
        fog: {
          "0%, 100%": { transform: "translate3d(-2%,0,0) scale(1)" },
          "50%": { transform: "translate3d(2%,-1%,0) scale(1.04)" }
        },
        spark: {
          "0%": { transform: "translateY(0) scale(.8)", opacity: ".1" },
          "50%": { opacity: ".9" },
          "100%": { transform: "translateY(-72px) scale(1.2)", opacity: "0" }
        }
      },
      animation: {
        scan: "scan 3.4s linear infinite",
        fog: "fog 10s ease-in-out infinite",
        spark: "spark 2.2s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
