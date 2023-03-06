/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      gridTemplateColumns: {
        'auto-recomended' : 'repeat(auto-fill, minmax(210px, 1fr))',
        'auto-details' : 'repeat(auto-fill, minmax(210px, 1fr))',
        //'auto-compare' : 'repeat(auto-fill, minmax(340px, 1fr))',
      },
      screens : {
        mobile : '500px',
        tablet : '768px',
        desktop : '1024px'
      },
      colors : {
        'gray-primary' : '#7B7B7B',
        'blue-primary' : '#4074C1',
        'gray-secondary' : '#575757',
        'gray-tertiary' : '#DBDBDB',
        'gray-ghost' : '#E8E8E8',
        'yellow-primary' :'#FFC800',
        'black-primary' :'#272727'
      }
    },
  
  
    
  },
  plugins: [],
}