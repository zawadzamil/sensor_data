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
        natural: '#101840',
        lite_blue: '#474D66',
        lite_green: '#429777',
        bg_green: '#DCF2EA',
        filter_green: '#317159',
        natural_bg_green: '#F4F6FA'
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
        play: ["Lato", "sans-serif"],
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

