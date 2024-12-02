module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        'ag-display': ['AG-Display', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        // Purple shades with gradients
        'purple-900':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.71)), #533594',
        'purple-700':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), #533594',
        'purple-500': '#533594',
        'purple-300':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #533594',
        'purple-100':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), #533594',
        'purple-50':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #533594',

        // Green shades with gradients
        'green-900':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #1CA060',
        'green-700':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), #1CA060',
        'green-500': '#1CA060',
        'green-300':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24)), #1CA060',
        'green-100':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #1CA060',
        'green-50':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #1CA060',

        // Blue shades with gradients
        'blue-900':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #1560FF',
        'blue-700':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), #1560FF',
        'blue-500': '#1560FF',
        'blue-300':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.24)), #1560FF',
        'blue-100':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #1560FF',
        'blue-50':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #1560FF',

        // Gray shades with gradients
        'gray-900':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), #1C1A20',
        'gray-700':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), #1C1A20',
        'gray-500': '#1C1A20',
        'gray-300':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #1C1A20',
        'gray-100':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), #1C1A20',
        'gray-50':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #1C1A20',
      },
      colors: {
        basic: {
          white: '#ffffff',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
