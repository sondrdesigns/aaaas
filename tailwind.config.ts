import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B2541",   // Deep Academy Navy
          secondary: "#153A61", // Lighter Navy
          accent: "#C3A358",    // Prestige Gold
        },
        surface: {
          light: "#FFFFFF",
          muted: "#F8FAFC",     // Cool Gray
        },
        text: {
          main: "#0F172A",      // Deep Slate
          muted: "#475569",     // Muted Slate
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
