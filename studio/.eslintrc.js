module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'single-quotes': ['never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
