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
      'gray': '#1d232a',
      'dark-gray': '#0c0e11',
      'mainShade': {
        100: "#96b0d0", 
        200: "#80a0c7",
        300: "#6b90bd",
        400: "#5681b4",
        500: "#2c61a1",
        600: "#285791",
        700: "#234e81",
        800: "#1f4471",
        900: "#1a3a61",
        950: "#163151"
      }
    },
    extend: {
      backgroundImage: {
        'arm-and-press-brake': "url('/arm-and-press-brake.png')",
        'big-plating-bath': "url('/big-plating-bath.jpg')",
        // '': "url('/.png')",

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
