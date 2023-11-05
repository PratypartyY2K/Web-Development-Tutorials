/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      },
      fontFamily: {
        'body': ['Nunito','sans-serif']
      }
    },
  },
  plugins: [],
}

// "watch-css": "tailwindcss -i src/styles.css -o public/styles.css --watch"