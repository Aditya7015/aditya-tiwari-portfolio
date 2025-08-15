import React from 'react'
export default function Footer(){
  return <footer className="py-8 text-center border-t border-black/5 dark:border-white/10">
    <p className="text-sm opacity-70">© {new Date().getFullYear()} Aditya Tiwari — Built with React</p>
  </footer>
}