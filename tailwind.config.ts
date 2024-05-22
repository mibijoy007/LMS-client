import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // for darkmode using next-themes
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-JosJosefine)"],
      },
      screens:{
        "400px" : "400px",
        "800px" : "800px",
        "1000px" : "1000px",
        "1200px" : "1200px",
        "1500px" : "1500px",
      },
      
    },
  },
  plugins: [],
};
export default config;
