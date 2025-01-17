/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {    
    extend: {
      fontFamily: {
        empire: ['Roboto Slab'],
        noto: ['Noto Sans']
      },

      backgroundImage: {
        'hero-desktop': "url('/public/img/hero-desktop.png')",
        'hero-mobile': "url('/public/img/hero-mobile-large .png')"
      },

      colors: {
        primaryYellow: 'rgba(221, 143, 25)',
        primaryWhite: 'rgba(249, 249, 249)',
        primaryBlack: 'rgba(28, 28, 28)',
        secondaryBlack: 'rgba(36, 36, 36)',
        primaryGray: 'rgba(45, 45, 45)',
        primaryGrayOpacity: 'rgba(45, 45, 45 / 75%)',
        secondaryYellow: 'rgba(157, 134, 41)'
      },
  
    },
  },
  plugins: [],
}

