import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        navy: "#0B1B3A",
        "navy-dark": "#060d1a",
        "navy-light": "#152846",
        neon: "#00e662",
      },
      boxShadow: {
        neon: "0 0 25px rgba(0,230,98,0.45), 0 0 50px rgba(0,230,98,0.2)",
        "neon-sm": "0 0 12px rgba(0,230,98,0.3), 0 0 24px rgba(0,230,98,0.12)",
        card: "0 8px 32px rgba(0,0,0,0.45)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.55)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(0,230,98,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,98,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
