/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title_green: '#429777',
        natural: '#101840'
      },
      fontWeight: {
        title: '400'
      },
      fontSize: {
        16: '16px'
      },
      lineHeight: {
        24: '24px'
      },
      fontFamily: {
        lato: ['Google Font Name', 'lato'],
      },

    },
  },
  plugins: [],
}

