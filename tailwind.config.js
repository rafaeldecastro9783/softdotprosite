/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sdblue: {
          DEFAULT: '#03C6F0', // ajuste fino se quiser
          600: '#00BFEA',
        },
        sdgreen: {
          DEFAULT: '#8CE88B',
          600: '#6EE074',
        },
        sdtext: '#0f172a'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial'],
      },
    },
  },
  plugins: [],
}
