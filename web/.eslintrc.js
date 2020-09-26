module.exports = {
  extends: ["standard", "standard-react", "plugin:import/errors", "plugin:import/warnings"],
  plugins: ["prettier"],
  rules: {
    "react/prop-types": 0,
    "prettier/prettier": "error",
    quotes: 0,
    "space-before-function-paren": 0,
    indent: 0,
    "jsx-quotes": 0
  },
  settings: {
    react: {
      pragma: "React",
      version: "16.8.4"
    }
  }
}
