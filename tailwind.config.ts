import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        scissorsGradient:
          "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        paperGradient:
          "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        rockGradient: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        lizardGradient:
          "linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        spockGradient:
          "linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
