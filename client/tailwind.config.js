/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f4361',
        secondary: '#246a51',
        tertiary: '#364245',
        background: '#f8f9fa',
        surface: '#ffffff',
        error: '#ba1a1a',
        'primary-container': '#2d5b7a',
        'secondary-container': '#a8eece',
        'tertiary-container': '#4d595c',
        'on-primary': '#ffffff',
        'on-secondary': '#ffffff',
        'surface-variant': '#e1e3e4',
        outline: '#72787e',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'ambient': '0 4px 6px -1px rgba(15, 67, 97, 0.05), 0 2px 4px -2px rgba(15, 67, 97, 0.05)',
      },
      borderRadius: {
        'xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
