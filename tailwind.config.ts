import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/*.{jpg,jpeg,png,ico}',
  ],
  theme: {
    colors: {
      'main': '#2c61a1',
      'white': '#ffffff',
    },
    extend: {
      backgroundImage: {
        // 'testing': "url('/testing.png')",
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
