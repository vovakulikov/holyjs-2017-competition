module.exports = () => ({
  plugins: {
    'postcss-import': {path: ['src']},
    'postcss-custom-media': {
      extensions: {
        '--large': '(min-width: 1024px)',
        '--medium': '(max-width: 1023px)',
        '--small': '(max-width: 767px)',
        '--palm': '(max-width: 479px)',
      },
    },
    'postcss-cssnext': true
  },
})
