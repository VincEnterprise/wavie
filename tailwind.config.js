/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1a1a1a',
      white: '#ffffff',

      yellow: {
        DEFAULT: '#FFBC52',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFF7EB',
        300: '#FFE4B8',
        400: '#FFD085',
        500: '#FFBC52',
        600: '#FFA81F',
        700: '#EB9000',
        800: '#B87100',
        900: '#855100',
      },
      gray: {
        DEFAULT: '#9CA3AF',
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: ' #4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      orange: {
        DEFAULT: '#FF8652',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFF1EB',
        300: '#FFCDB8',
        400: '#FFAA85',
        500: '#FF8652',
        600: '#FF621F',
        700: '#EB4700',
        800: '#B83700',
        900: '#852800',
      },
      green: {
        DEFAULT: '#A9DC76',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#F6FBF0',
        300: '#DCF1C7',
        400: '#C3E69F',
        500: '#A9DC76',
        600: '#90D24D',
        700: '#76BC30',
        800: '#5D9326',
        900: '#436B1B',
      },
    },

    fontFamily: {
      sans: [
        'Quicksand',
        'Nunito',
        'Gotham Rounded',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
    },

    extend: {
      backgroundImage: _theme => ({
        'button-edge': `linear-gradient(
            to left,
            theme(colors.gray.200) 0%,
            theme(colors.gray.100) 10%,
            theme(colors.gray.100) 90%,
            theme(colors.gray.200) 100%
            )`,
        'number-card': `linear-gradient(
            to bottom,
            theme(colors.gray.200) 0%,
            theme(colors.gray.100) 10%,
            theme(colors.gray.100) 90%,
            theme(colors.gray.200) 100%
            )`,
      }),
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fade: 'fade 2s ease-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fade: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      borderWidth: {
        3: '3px',
        5: '5px',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '3rem',
      },
      transitionDuration: {
        34: '34ms',
        250: '250ms',
        400: '400ms',
        600: '600ms',
      },
      transitionTimingFunction: {
        'button-cubic-1': 'cubic-bezier(0.3, 0.7, 0.4, 1)',
        'button-cubic-2': 'cubic-bezier(0.3, 0.7, 0.4, 2)',
      },
      zIndex: {
        '-1': '-1',
        '1': '1',
      },
      container: {
        center: true,
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '1150px',
        },
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
  ],
}
