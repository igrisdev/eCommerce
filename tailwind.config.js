/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        screens: {
          xl: '1440px',
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          'base-100': '#1e1e1e',
          'base-200': '#2a2a2a',
          'base-300': '#3a3a3a',
          primary: '#fff',
        },
      },
    ],
  },
}
