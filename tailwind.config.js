/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        secondary: 'var(--color-input)',
        primary: 'var(--color-text)',
      },
      backgroundColor: {
        primary: 'var(--color-background)',
        secondary: 'var(--color-elements)',
      },
    },
  },
  plugins: [],
}

