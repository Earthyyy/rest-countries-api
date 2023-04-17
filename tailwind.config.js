/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1080px",
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
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(4px)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 150ms linear forwards',
      },
    },
  },
  plugins: [],
}

