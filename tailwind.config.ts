import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nubank: {
          purple: "#820AD1",
          "purple-dark": "#5F0A9A",
          "purple-light": "#A020D0",
          "purple-50": "#F5E6FF",
          "purple-100": "#E8C6FF",
          "purple-900": "#3B0066",
          pink: "#FF006E",
          black: "#1C0032",
          gray: {
            50: "#F8F5FA",
            100: "#EEE8F4",
            200: "#D9CDE6",
            300: "#BCA8D0",
            400: "#9A80B5",
            500: "#7A5E9A",
            600: "#5E4478",
            700: "#432F58",
            800: "#2A1B3D",
            900: "#140D20",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-nubank": "linear-gradient(135deg, #820AD1 0%, #5F0A9A 50%, #3B0066 100%)",
        "gradient-nubank-light": "linear-gradient(135deg, #A020D0 0%, #820AD1 100%)",
        "gradient-hero": "linear-gradient(160deg, #1C0032 0%, #3B0066 40%, #820AD1 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
