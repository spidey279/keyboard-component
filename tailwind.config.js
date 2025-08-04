// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        floatY: 'floatY 1.2s ease-in-out infinite',
      },
    },
  },
};
