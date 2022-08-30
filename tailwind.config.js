/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/rr-website/src/images/background-features.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
