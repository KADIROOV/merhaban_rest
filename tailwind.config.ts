import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        "bg-raised": "hsl(var(--bg-raised))",
        "bg-raised-2": "hsl(var(--bg-raised-2))",
        text: "hsl(var(--text))",
        "text-muted": "hsl(var(--text-muted))",
        ember: "hsl(var(--ember))",
        "ember-deep": "hsl(var(--ember-deep))",
        gold: "hsl(var(--gold))",
        wine: "hsl(var(--wine))",
        hairline: "hsl(var(--hairline))",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        menu: "0.04em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.9" },
          "100%": {
            transform: "translateY(-140px) translateX(var(--drift-x, 12px))",
            opacity: "0",
          },
        },
        "count-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        ember: "drift linear forwards",
      },
      boxShadow: {
        ember: "0 0 40px -8px hsl(var(--ember) / 0.45)",
      },
      transitionTimingFunction: {
        weighted: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
