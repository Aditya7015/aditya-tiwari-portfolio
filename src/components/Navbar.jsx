import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem =
    "relative px-1 text-gray-700 dark:text-gray-300 hover:text-brand-500 transition";

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
            ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-lg"
            : "bg-white/40 dark:bg-gray-900/40 backdrop-blur-md"
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
              Aditya
            </span>
            <span className="text-brand-500">.</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navItem}>
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-500 to-violet-600 transition-all group-hover:w-full" />
            </NavLink>

            <a href="/#projects" className={navItem}>
              Projects
            </a>

            <a href="/#experience" className={navItem}>
              Experience
            </a>

            <NavLink to="/blog" className={navItem}>
              Blog
            </NavLink>

            <NavLink to="/admin" className={navItem}>
              Admin
            </NavLink>

            <ThemeToggle />

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="/adityaresume.pdf"
              download
              className="ml-2 px-5 py-2 rounded-xl text-white font-medium
              bg-gradient-to-r from-pink-500 to-violet-600 shadow-lg
              hover:shadow-pink-500/40 transition"
            >
              Resume
            </motion.a>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-xl bg-white/60 dark:bg-black/30 backdrop-blur hover:scale-110 transition"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 p-8 rounded-b-3xl shadow-2xl"
            >
              <div className="flex flex-col gap-6 text-lg font-medium">
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <a href="/#projects" onClick={() => setOpen(false)}>Projects</a>
                <a href="/#experience" onClick={() => setOpen(false)}>Experience</a>
                <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>
                <Link to="/admin" onClick={() => setOpen(false)}>Admin</Link>
                <a
                  href="/adityaresume.pdf"
                  download
                  className="mt-4 inline-flex justify-center px-6 py-3 rounded-xl
                  bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
