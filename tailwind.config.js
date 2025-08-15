/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme:{ extend:{
    colors:{ brand:{500:'#7c3aed',400:'#8b5cf6'} },
    boxShadow:{ card:'0 10px 30px rgba(0,0,0,.35)' }
  }},
  plugins:[]
}