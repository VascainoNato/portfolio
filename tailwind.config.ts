import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B2B2B',
        secondary: '#6F8FAF',
        background: '#FDFCF9',
        accent: '#D1BFA3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
