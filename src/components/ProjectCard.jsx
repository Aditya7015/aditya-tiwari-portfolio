import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
export default function ProjectCard({p,index}){
  return (
    <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:index*.05}} className="card">
      <h3 className="text-xl font-bold">{p.title}</h3>
      <p className="text-sm opacity-80">{p.subtitle}</p>
      <p className="mt-2">{p.description}</p>
      <div className="mt-2 flex flex-wrap gap-2">{(p.tech||[]).map((t,i)=>(<span key={i} className="text-xs px-2 py-1 rounded-full border border-white/15">{t}</span>))}</div>
      <div className="mt-4 flex items-center gap-3">
        {p.links?.map((l,i)=>(<a key={i} className="underline" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>))}
        <Link className="btn ml-auto" to={'/project/'+p.slug}>Details</Link>
      </div>
    </motion.div>
  )
}