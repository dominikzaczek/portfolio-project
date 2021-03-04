module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'cutive': ['Cutive Mono', 'mono'],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            p: {
              fontSize: '1.5em',
            },
            blockquote:{
              color: '#fff',
            },
            a: {
              color: '#5ec9c4',
              '&:hover': {
                color: '#2c5282',
              },
            },
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#5ec9c4',
              fontSize: '2em',
            },
            h4: {
              color: '#fff'
            }
          },
        },
      }
    },
  },
  variants: {
    extend: {
     animation: ['hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
