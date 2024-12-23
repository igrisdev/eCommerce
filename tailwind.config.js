/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        screens: {
          xl: '1536px',
        },
      },
    },
  },
  plugins: [daisyui],
}
