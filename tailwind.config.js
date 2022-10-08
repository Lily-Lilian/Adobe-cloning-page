/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'adobe-clean':"adobe-clean",
      },
      colors:{
        'primary-red': "#FA0F00",
        'soft-blue':'#9797FC',
        'soft-red':'#FFA493',
        'chocolate':'#4B1640',
        'soft-gray':'#F3F3F3',
        'soft-green':'#66CCCC'
      
      },
    },
  },
  plugins: [],
};
