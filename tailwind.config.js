/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  darkMode: 'class', // Enable dark mode with 'class' strategy
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#52BD94',
          dark: '#429777',
          light: '#DCF2EA',
        },
        secondary: {
          DEFAULT: '#474D66',
          dark: '#101840',
          light: '#696F8C',
        },
        success: {
          DEFAULT: '#317159',
          light: '#F5FBF8',
        },
        warning: {
          DEFAULT: '#66460D',
          light: '#FFEFD2',
        },
        danger: '#D14343',
        neutral: {
          DEFAULT: '#101840',
          light: '#474D66',
          dark: '#C1C4D6',
          'extra-lite': '#EDEFF5',
        },
        yellow: {
          DEFAULT: '#FFC107',
          light: '#FFEFD2',
          'extra-lite': '#FFEFD2',
        },
        blue: {
          DEFAULT: '#0E2341',
          light: '#0E2341',
          dark:'#101840'
        },
        gray: {
          light: '#F4F6FA',
          moderate: '#D8DAE5',
        }
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '18px',
        lg: '20px',
        xl: '24px',
        '2xl': '36px',
        '3xl': '48px',
        base: '16px',
      },
      lineHeight: {
        normal: '24px',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      spacing: {
        xs: '8px',
        sm: '12px',
        md: '16px',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
