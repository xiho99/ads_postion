module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.vue'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    height: {
      '128': '32rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}