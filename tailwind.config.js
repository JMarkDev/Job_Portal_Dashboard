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
        'not-found-bg': '##dfdbe9',
        'filter-bg':'#babbbf',
        'skills-bg': '#dfdbe9',
        'border_table': '#f0f1f5',
        'table-font': '#000',
        'input_bg': '#eee',
        'applicant': '#f8f8f8'
      },
      width: {
        '100vh': '100vh',
        '350': '350px',
        '400': '400px',
        '500': '500px',
        '250': '250px',
      },
      height:{
        '100vh': '100vh',
        '600': '600px',
        '110': '110px',
        '450': '450px'
      },
      padding: {
        '30': '30px',
      },
      backgroundImage: {
        'register-bg': "url('./src/assets/img/bg_purple.jpg')",
      }
    },
  },
  plugins: [],
}