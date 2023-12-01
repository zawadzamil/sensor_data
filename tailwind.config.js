/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title_green: '#52BD94',
        natural: '#101840'
      },
      fontWeight: {
        title: '400',
        600: '600'
      },
      fontSize: {
        '16p': '16px'
      },
      lineHeight: {
        24: '24px'
      },
      fontFamily: {
        lato: ['Google Font Name', 'lato'],
      },
      spacing: {
        '12px': '12px',
        '8px': '8px',
        '16px': '16px',
      }


    },
  },
  plugins: [],
}

