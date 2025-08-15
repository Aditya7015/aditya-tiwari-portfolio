import React from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  const navClass = ({isActive}) => isActive ? 'text-brand-500' : 'hover:text-brand-500'
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5 dark:bg-gray-900/70 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl">Aditya<span className="text-brand-500">.</span></Link>
        <div className="flex items-center gap-4">
          <a href="/#projects" className="hover:text-brand-500">Products</a>
          <a href="/#experience" className="hover:text-brand-500">Experience</a>
          <NavLink to="/blog" className={navClass}>Blog</NavLink>
          <NavLink to="/admin" className={navClass}>Admin</NavLink>
          <ThemeToggle />
          <a href="/resume.pdf" download className="btn">Resume</a>
        </div>
      </nav>
    </header>
  )
}
