module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    options: {
      safelist: ['header-desktop-dark', 'header-mobile-dark']
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'cyan': 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-biolet': 'hsl(260, 8%, 14%)'
      },
      backgroundImage: theme => ({
        'boost-desktop': "url('/src/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('/src/images/bg-boost-mobile.svg')",
        'shorten-desktop': "url('/src/images/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('/src/images/bg-shorten-mobile.svg')",
        'illustration-working': "url('/src/images/illustration-working.svg')",
        'menu': "url('/src/images/menu.svg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}