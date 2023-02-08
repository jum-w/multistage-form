/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, ts, js, jsx}"],
  theme: {
    extend: {
      spacing: {
        'defh': '38rem',
        'defw': '43%',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}
