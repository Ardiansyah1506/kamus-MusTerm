/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-dark": "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
        "hero-glow": "radial-gradient(circle at 50% -20%, rgba(14, 165, 233, 0.25) 0%, rgba(2, 6, 23, 1) 70%)"
      },
      colors: {
        "hero": "#020617",
        "btn-blue": "#0ea5e9",
        "glass-white": "rgba(255, 255, 255, 0.05)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      textColor: {
        "gradient-blue": "linear-gradient(90deg, #38bdf8 0%, #a78bfa 100%)",
        "primary-blue": "#38bdf8",
      }
    },
  },
  plugins: [],
}
