/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0b0b0c', surface: '#111214', border: '#26272b', text: '#e6e7ea', muted: '#a2a6b3', primary: '#ffffff', accent: '#7c5cff', amber: '#f59e0b',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        'slide-up': { '0%': { transform: 'translateY(12px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
        'pulse-once': { '0%,100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.02)' } },
      },
      animation: {
        'fade-in': 'fade-in 400ms ease-out', 'slide-up': 'slide-up 450ms ease-out', 'pulse-once': 'pulse-once 800ms ease-in-out',
      },
      boxShadow: { soft: '0 1px 3px rgba(0,0,0,.2)' },
      borderRadius: { xl: '16px' },
    },
  },
  plugins: [],
}
