/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        typeBgColor: '#EFF8FF',
        typeBorderColor: '#B2DDFF',
        typeColor: '#175CD3',
        borderColor: '#D5D7DA',
        blue:'#1570EF',
        bgColor: '#FAFAFA',
        cardColor: '#fdfdfd',
        purpleText: '#0049C6',
        purpleFill:'#9D90FA'
        
      },
      boxShadow: {
        'outer-glow': '0 0 24px rgba(8, 23, 53, 0.16)', 
      },
      
    },
  },
  plugins: [],
};
