import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { profile, skills, projects, education, experience } from '../data'
import ProjectCard from '../components/ProjectCard'

export default function Home(){
  return (
    <main>
      <Helmet><title>{profile.name} · {profile.role}</title><meta name="description" content="Portfolio of Aditya Tiwari — MERN Stack Developer" /></Helmet>
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}}>
          <span className="inline-block text-sm px-3 py-1 rounded-full border border-white/15">Open to Work · MERN</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4">{profile.name}</h1>
          <p className="text-lg opacity-80 mt-1">{profile.role}</p>
          <p className="opacity-80 mt-4">{profile.summary}</p>
          <div className="flex gap-3 mt-6">
            <a className="btn" href="/adityaresume.pdf" download>Download Resume</a>
            <a className="btn" href="#projects">View Products</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.6}} className="card">
          <p className="opacity-80">Contact</p>
          <h3 className="text-xl font-bold mt-1">{profile.email}</h3>
          <p className="opacity-80">{profile.phone}</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {profile.links.map((l,i)=>(<a key={i} className="underline" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>))}
          </div>
        </motion.div>
      </section>
      <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Products & Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{projects.map((p,i)=>(<ProjectCard key={p.slug} p={p} index={i}/>))}</div>
      </section>
      <section id="experience" className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-5">
        <div>
          <h2 className="text-2xl font-bold mb-3">Experience</h2>
          <div className="space-y-4">
            {experience.map((x,i)=>(
              <div key={i} className="card">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold">{x.title} · {x.company}</h3>
                  <span className="text-sm opacity-60">{(x.start||'')}{' – '}{x.end?x.end:'Present'} · {x.location||''}</span>
                </div>
                <div className="mt-2 flex gap-2 flex-wrap">{(x.tech||[]).map((t,j)=>(<span key={j} className="text-xs px-2 py-1 rounded-full border border-white/15">{t}</span>))}</div>
                <ul className="list-disc list-inside mt-2 opacity-90">{(x.highlights||[]).map((h,j)=>(<li key={j}>{h}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Education</h2>
          <div className="space-y-4">
            {education.map((e,i)=>(
              <div key={i} className="card">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold">{e.degree} · {e.school}</h3>
                  <span className="text-sm opacity-60">{e.start} – {e.end}</span>
                </div>
                {e.highlights?.length ? <ul className="list-disc list-inside mt-2 opacity-90">{e.highlights.map((h,j)=>(<li key={j}>{h}</li>))}</ul> : null}
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-bold mt-6 mb-3">Skills</h2>
          <div className="card flex flex-wrap gap-2">{skills.map((s,i)=>(<span key={i} className="text-sm px-3 py-1 rounded-full border border-white/15">{s}</span>))}</div>
        </div>
      </section>
      <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
        <div className="card">
          <h2 className="text-2xl font-bold">Contact</h2>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-3 mt-3 max-w-xl">
            <input className="rounded-xl border px-4 py-2 bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10" name="name" placeholder="Your name" required />
            <input className="rounded-xl border px-4 py-2 bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10" type="email" name="email" placeholder="Your email" required />
            <textarea className="rounded-xl border px-4 py-2 bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10" name="message" rows="5" placeholder="Let's build something awesome…" required></textarea>
            <button className="btn w-fit" type="submit">Send</button>
          </form>
          <p className="opacity-80 mt-3">Or email me at <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </div>
      </section>
    </main>
  )
}