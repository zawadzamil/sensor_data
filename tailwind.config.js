/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    darkTheme: "light",
   },
  theme: {
    extend: {
      colors: {
        title_green: '#52BD94',
        natural: '#101840',
        lite_blue: '#474D66',
        lite_green: '#429777',
        bg_green: '#DCF2EA',
        bg_green_fade: '##F5FBF8',
        filter_green: '#317159',
        natural_bg_green: '#F4F6FA',
        badge_yellow: '#66460D',
        badge_yellow_bg: '#FFEFD2'
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
        lato: ["Lato",  "sans-serif"]
      },
      spacing: {
        '12px': '12px',
        '8px': '8px',
        '16px': '16px',
      }


    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

