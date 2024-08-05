/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '320px','max': '350px'},
        // => @media (max-width: 639px) { ... }
        
        'md': {'min': '360px','max': '440px'},
        // => @media (max-width: 767px) { ... }
      }
    },
  },
  plugins: [],
}

