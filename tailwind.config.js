/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          light: '#FFFDF9',
          DEFAULT: '#F8F1E5',
          dark: '#EADBCA'
        },
        maroon: {
          light: '#8F1E1E',
          DEFAULT: '#6F1717',
          dark: '#4D0E0E'
        },
        punjabi: {
          light: '#B83226',
          DEFAULT: '#9B2920',
          dark: '#7D1F17'
        },
        gold: {
          light: '#E5BF5F',
          DEFAULT: '#D4A441',
          dark: '#B0842B'
        },
        brass: {
          light: '#EAD793',
          DEFAULT: '#C5A059',
          dark: '#8C6F32'
        },
        brown: {
          light: '#614131',
          DEFAULT: '#493024',
          dark: '#322017'
        },
        charcoal: {
          light: '#332924',
          DEFAULT: '#211A16',
          dark: '#14100E'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Outfit"', 'system-ui', '-apple-system', 'sans-serif'],
        hindi: ['"Rozha One"', '"Poppins"', 'sans-serif']
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(33, 26, 22, 0.15)',
        'brass-glow': '0 0 30px rgba(212, 164, 65, 0.3)',
        'maroon-glow': '0 0 30px rgba(111, 23, 23, 0.4)'
      },
      animation: {
        'steam': 'steam 3s ease-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear'
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0' },
          '50%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-40px) scale(1.4)', opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}

