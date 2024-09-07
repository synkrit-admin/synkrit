// tailwind-config.js

// Custom Tailwind configuration
tailwind.config = {
  theme: {
      extend: {
          colors: {
              clifford: '#da373d',  // Add your custom color
              customGray: '#f4f4f4', // Another example custom color
          },
          // spacing: {
          //     '128': '32rem',
          //     '144': '36rem',
          // },
          // borderRadius: {
          //     '4xl': '2rem',
          // },
      },
  },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/container-queries'),
    ],
  }
  