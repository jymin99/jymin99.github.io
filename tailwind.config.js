/** @type {import('tailwindcss').Config} */
module.exports={
  content: ['./src/**/*.{js,jsx,ts,tsx,css}','./index.html',],
  theme: {
    extend:{
      fontFamily: {
        pre: ['Pretendard'],
        mango: ['Mango'],
        leferi: ['Leferi'],
        mabeop: ['Mabeop'],
      },
      colors: {
        'primary': '#F6F0CF',
        'secondary': '#202020',
      }
    },
    
  },
  plugins: [],
};

