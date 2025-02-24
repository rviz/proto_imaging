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
        mostlablue: {
          100: "#452BE0"},
        mostlawhite: {
          100: "#f4f4f4"},
        mostlablack: {
          100: "#131314"},
        mostlagray: {
          100: "#7A8386"},
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],

};
export default config;
