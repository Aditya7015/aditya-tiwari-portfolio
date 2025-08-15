import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Blog from './pages/Blog.jsx'
import Post from './pages/Post.jsx'
import Admin from './pages/Admin.jsx'

const Page = ({ children }) => (
  <motion.div initial={{opacity:0, y:14}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-14}} transition={{duration:.25}}>
    {children}
  </motion.div>
)

export default function App(){
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Page><Home /></Page>} />
            <Route path="/project/:slug" element={<Page><Project /></Page>} />
            <Route path="/blog" element={<Page><Blog /></Page>} />
            <Route path="/blog/:slug" element={<Page><Post /></Page>} />
            <Route path="/admin" element={<Page><Admin /></Page>} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
