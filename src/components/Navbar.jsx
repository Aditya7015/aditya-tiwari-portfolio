import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) =>
    isActive ? 'text-brand-500 font-semibold' : 'text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5 dark:bg-gray-900/70 dark:border-white/10 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white">
          Aditya<span className="text-brand-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/#projects" className="hover:text-brand-500 transition-colors">Products</a>
          <a href="/#experience" className="hover:text-brand-500 transition-colors">Experience</a>
          <NavLink to="/blog" className={navClass}>Blog</NavLink>
          <NavLink to="/admin" className={navClass}>Admin</NavLink>
          <ThemeToggle />
          <a href="/resume.pdf" download className="btn px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">Resume</a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-black/5 dark:border-white/10 shadow-md">
          <div className="flex flex-col px-6 py-4 gap-3">
            <a href="/#projects" className="hover:text-brand-500 transition-colors" onClick={() => setOpen(false)}>Products</a>
            <a href="/#experience" className="hover:text-brand-500 transition-colors" onClick={() => setOpen(false)}>Experience</a>
            <NavLink to="/blog" className={navClass} onClick={() => setOpen(false)}>Blog</NavLink>
            <NavLink to="/admin" className={navClass} onClick={() => setOpen(false)}>Admin</NavLink>
            <a href="/resume.pdf" download className="btn px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all" onClick={() => setOpen(false)}>Resume</a>
          </div>
        </div>
      )}
    </header>
  );
}
