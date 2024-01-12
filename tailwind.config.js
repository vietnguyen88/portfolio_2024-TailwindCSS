import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textShadow: { sm: '0 1px 2px var(--tw-shadow-color)' },
    },

    fontFamily: {
      robo: ['Roboto', ' sans-serif'],
      playfair: ['Playfair Display', 'serif'],
      bodoni: ['Bodoni Moda'],
    },
    keyframes: {
      sliding: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      bounce: {
        '0% ,100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        'text-shadow': (value) => ({ textShadow: value }),
      }),
        { value: theme('textShadow') };
    }),
  ],
};
