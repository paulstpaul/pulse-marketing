import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pulse brand ramp (cool clinical blues)
        brand: {
          50:  "#F4F8FC",
          100: "#E4EEF7",
          200: "#C8DDEE",
          300: "#9CC2DF",
          400: "#7FB3E6",
          500: "#1D6FB8",
          600: "#155A99",
          700: "#0B3D6F",
          800: "#0A2F55",
          900: "#0F1A2B",
        },
        // Ink neutrals (slightly cool-tinted)
        ink: {
          0:   "#FFFFFF",
          25:  "#FBFCFD",
          50:  "#F5F7FA",
          100: "#ECEFF4",
          200: "#DCE2EA",
          300: "#B6BFCC",
          400: "#7B8696",
          500: "#525E70",
          600: "#37424F",
          700: "#202B38",
          800: "#121A24",
          900: "#0A0F16",
        },
        // Semantic status
        status: {
          critical: "#C8322B",
          warning:  "#D88A1A",
          success:  "#2F8F5E",
          info:     "#1D6FB8",
        },
        // CSS variable aliases for shadcn compatibility
        background:    "hsl(var(--background))",
        foreground:    "hsl(var(--foreground))",
        primary: {
          DEFAULT:    "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT:    "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT:    "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT:    "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border:  "hsl(var(--border))",
        input:   "hsl(var(--input))",
        ring:    "hsl(var(--ring))",
        card: {
          DEFAULT:    "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        // Pulse type scale
        "overline": ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.10em", fontWeight: "600" }],
        "caption":  ["0.75rem",   { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "500" }],
        "body-sm":  ["0.8125rem", { lineHeight: "1.5" }],
        "body":     ["0.9375rem", { lineHeight: "1.55" }],
        "body-lg":  ["1.0625rem", { lineHeight: "1.55" }],
        "h4":       ["1.125rem",  { lineHeight: "1.3",  letterSpacing: "-0.005em", fontWeight: "600" }],
        "h3":       ["1.5rem",    { lineHeight: "1.22", letterSpacing: "-0.010em", fontWeight: "600" }],
        "h2":       ["2rem",      { lineHeight: "1.15", letterSpacing: "-0.014em", fontWeight: "600" }],
        "h1":       ["2.75rem",   { lineHeight: "1.10", letterSpacing: "-0.018em", fontWeight: "600" }],
        "display":  ["4rem",      { lineHeight: "1.04", letterSpacing: "-0.020em", fontWeight: "600" }],
      },
      borderRadius: {
        none: "0",
        xs:   "3px",
        sm:   "5px",
        md:   "8px",
        lg:   "12px",
        xl:   "16px",
        "2xl":"20px",
        pill: "999px",
        // shadcn alias
        DEFAULT: "8px",
      },
      boxShadow: {
        xs: "0 1px 0 rgba(15,26,43,.04), 0 1px 2px rgba(15,26,43,.06)",
        sm: "0 1px 2px rgba(15,26,43,.06), 0 2px 6px rgba(15,26,43,.05)",
        md: "0 2px 4px rgba(15,26,43,.05), 0 8px 20px rgba(15,26,43,.07)",
        lg: "0 4px 8px rgba(15,26,43,.06), 0 24px 40px rgba(15,26,43,.10)",
        none: "none",
      },
      spacing: {
        // 4-pt Pulse grid key steps
        "0.5": "2px",
        "1":   "4px",
        "1.5": "6px",
        "2":   "8px",
        "3":   "12px",
        "4":   "16px",
        "5":   "20px",
        "6":   "24px",
        "8":   "32px",
        "10":  "40px",
        "14":  "56px",
        "18":  "72px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to:   { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to:   { height: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.4", transform: "scale(0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "pulse-dot":      "pulse-dot 1.6s infinite",
      },
      maxWidth: {
        "8xl": "1280px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
