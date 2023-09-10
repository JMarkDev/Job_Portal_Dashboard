/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '150': '150px',
        '40': '40px',
        'custom-sm': '0.75rem', 
        'custom-base': '15px',
      },
      colors: {
        'primary': '#40189d',
        'notfound-color': '#3d4465',
        'notfound-p': '#7e7e7e',
        'filter-bg':'#babbbf',
        'skills-bg': '#dfdbe9',
        'border_table': '#f0f1f5',
      },
      width: {
        '350': '350px'
      },
      padding: {
        '30': '30px',
      }
    },
  },
  plugins: [],
}