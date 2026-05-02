import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#064e3b",
        "accent-orange": "#f97316",
        "light-sage": "#f0fdf4",
        "whatsapp-brand": "#25D366",
        "shopee-brand": "#EE4D2D",
        "background-light": "#ffffff",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        large: "2rem",
      },
    },
  },
  plugins: [forms, typography, containerQueries],
};

export default config;
