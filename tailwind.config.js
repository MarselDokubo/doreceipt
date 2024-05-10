/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      colors: {
        primary: {
          "100": "#6DA5C0",
          "200": "#0F968C",
          "300": "#072E33",
          "400": "#071a1f",
          "500": "#4A4063"
        },
        light: {
          "300": "#FAFAFA",
          "400": "#EDF1F6"
        }
      }
    },
  },
  plugins: [],
}
