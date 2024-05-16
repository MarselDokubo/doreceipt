/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // screen: {

  //   "md": "760",
  //   "lg": "1200"
  // },
  theme: {
    fontFamily: {
      'sans': ['Expensify-Neue', 'system-ui', ],
      'serif': ['Expensify-NewKansas', 'Georgia', ],
      'mono': ['Expensify-Mono', 'SFMono-Regular',],
      'expens': ['expensicons',],
      'cursive': ['cursive']
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      fontSize: {
        'xs': "0.8125rem"
      },
      colors: {
        primary: {
          "100": "#0F968C33",
          "200": "#0F968C",
          "300": "#072E33",
          "300-alpha": "#1a3d32",
          "400": "#071a1f",
          "500": "#4A4063"
        },
        light: {

          "300": "#FAFAFA",
          "300-alpha": "rgba(255,255,255, .3)",
          "400": "#EDF1F6"
        },
        black: {
          "alpha" : "rgba(50,50,50,0.9)"
        }
      }
    },
  },
  plugins: [],
}
