import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/*.{jpg,jpeg,png,ico}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'testing': "url('/testing.png')",
        'process-analysis': "url('/process-analysis.jpeg')",
        'motorcycle': "url('/motorcycle.jpg')",
        'gui-girl': "url('/gui.jpg')",
        'servers': "url('/servers.jpg')",
        'welder': "url('/welder.jpg')",
        'ai': "url('/ai.jpg')",
        'rpa-desk': "url('/monitors1.jpg')",
        'laptop-terminal': "url('/laptop.jpg')",
        'stock-tickers': "url('/stock-background-red.jpg')",
        'gradient-radial': "radial-gradient(var(--tw-gradient-stops))",
        'gradient-conic': "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
}
export default config
