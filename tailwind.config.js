/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}",  "./node_modules/flowbite/**/*.js"],
  theme: {
      extend: {
        colors: {
          theme: "#3fd0ef",
          accent: "#032388",
          dark: "#101010",
          light: "#fafafa",
        },
        backgroundImage: {
          
          'heroImg': "url('assets/img/hero.jpg')",
          'aboutImg': "url('assets/img/about.jpg')",
          'courses': "url('dist/assets/img/courses.jpg')",
        }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

