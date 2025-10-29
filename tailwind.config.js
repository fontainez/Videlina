/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6A0DAD',
          50: '#F5EDFA',
          100: '#E8D5F5',
          200: '#D4AEEB',
          300: '#BF86E0',
          400: '#AA5ED6',
          500: '#6A0DAD',
          600: '#5A0B93',
          700: '#4A0979',
          800: '#3A075F',
          900: '#2A0545',
        },
        accent: {
          DEFAULT: '#C21807',
          50: '#FDECEA',
          100: '#FBD9D5',
          200: '#F7B3AB',
          300: '#F38D81',
          400: '#EF6757',
          500: '#C21807',
          600: '#A41406',
          700: '#861005',
          800: '#680C04',
          900: '#4A0803',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #6A0DAD 0%, #FFFFFF 50%, #C21807 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(106, 13, 173, 0.3)',
        'glow-strong': '0 0 30px rgba(106, 13, 173, 0.5)',
      },
    },
  },
  plugins: [],
}
