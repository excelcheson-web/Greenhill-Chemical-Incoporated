import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          anthracite: "#2D3436",
          mint: "#00FFC2",
          clean: "#FFFFFF",
          light: "#F5F6FA",
          border: "#DFE6E9",
          amber: "#F59E0B",
          "amber-warning": "#FFDA9A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
