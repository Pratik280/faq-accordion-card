module.exports = {
  content: ["./dist/index.html"],
  theme: {
    // fontFamily: {
    //   'sans': ['Iowan Old Style','Apple Garamond','Baskerville','Times New Roman','Droid Serif, Times','Source Serif Pro','serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'],
    //   'serif': ['-apple-system','BlinkMacSystemFont','avenir next','avenir','segoe ui','helvetica neue','helvetica','Ubuntu','roboto','noto','arial','sans-serif'],
    //   'mono': ['Menlo','Consolas','Monaco','Liberation Mono','Lucida Console','monospac'],
    // },
    extend: {
      colors: {
        // text primary
        'very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)', // hover
        // gradient
        'soft-violet': 'hsl(273, 75%, 66%)',
        'soft-blue': 'hsl(240, 73%, 65%)',
        // text neutral
        'very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'dark-grayish-blue': 'hsl(240, 6%, 50%)',
        // dividers
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
      }
    },
  },
  plugins: [],
}
