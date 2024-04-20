/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fullWidth: {
        '100': '100%',
      },
      boxShadow: {
        'custom': '0 0 10px 1px #4B628B',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #203B60, #4B628B)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

