import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { profile, skills, projects, education, experience } from "../data";
import ProjectCard from "../components/ProjectCard";
import { Github, Linkedin, Mail, ArrowDownCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* SEO Meta */}
      <Helmet>
        <title>{profile.name} · {profile.role}</title>
        <meta name="description" content={`Portfolio of ${profile.name} — ${profile.role}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="inline-flex items-center gap-2 text-sm px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white w-fit shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> Open to Work · MERN
          </p>
          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            {profile.name} <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">.</span>
          </h1>
          <p className="text-2xl opacity-80 mt-2 font-medium">{profile.role}</p>
          <p className="opacity-80 mt-6 text-lg leading-relaxed max-w-xl">{profile.summary}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a className="btn-primary" href="/adityaresume.pdf" download>Download Resume</a>
            <a className="btn-outline flex items-center gap-2" href="#projects">View Projects <ArrowDownCircle size={18} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative p-10 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-2xl"
        >
          <h3 className="text-2xl font-bold">Let’s Connect</h3>
          <p className="opacity-90 mt-2">{profile.email}</p>
          <p className="opacity-90">{profile.phone}</p>
          <div className="mt-6 flex gap-6 text-white text-xl">
            <a href={profile.links.find(l=>l.label==='GitHub')?.url} target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform"><Github /></a>
            <a href={profile.links.find(l=>l.label==='LinkedIn')?.url} target="_blank" rel="noreferrer" className="hover:scale-125 transition-transform"><Linkedin /></a>
            <a href={`mailto:${profile.email}`} className="hover:scale-125 transition-transform"><Mail /></a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.sort((a,b) => a.slug==='quickstay'? -1 : 1).map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16">
        {/* Experience Timeline */}
        <div>
          <h2 className="text-4xl font-extrabold mb-10">Experience</h2>
          <div className="relative border-l-2 border-gray-300 dark:border-gray-600 pl-8 space-y-10">
            {experience.map((x,i) => (
              <motion.div key={i} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.1}}>
                <span className="absolute -left-4 top-2 w-3 h-3 bg-violet-600 rounded-full shadow-lg" />
                <h3 className="font-semibold text-lg">{x.title} · {x.company}</h3>
                <span className="text-sm opacity-60">{x.start} – {x.end || 'Present'}</span>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {(x.tech||[]).map((t,j)=>(<span key={j} className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white">{t}</span>))}
                </div>
                <ul className="list-disc list-inside mt-2 text-sm opacity-90 space-y-1">{(x.highlights||[]).map((h,j)=><li key={j}>{h}</li>)}</ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Skills */}
        <div>
          <h2 className="text-4xl font-extrabold mb-10">Education</h2>
          <div className="space-y-8">
            {education.map((e,i)=>(
              <motion.div key={i} initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 shadow-lg border border-gray-200/40 dark:border-white/10">
                <h3 className="font-semibold text-lg">{e.degree} · {e.school}</h3>
                <span className="text-sm opacity-60">{e.start} – {e.end}</span>
              </motion.div>
            ))}
          </div>

          <h2 className="text-4xl font-extrabold mt-16 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s,i)=>(
              <motion.span key={i} initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:i*0.03}} className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-md">{s}</motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-32">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.8}} className="p-10 rounded-3xl bg-white/10 backdrop-blur-md shadow-xl border border-white/20">
          <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="grid gap-4">
            <input className="input" name="name" placeholder="Your name" required />
            <input className="input" type="email" name="email" placeholder="Your email" required />
            <textarea className="input" name="message" rows="5" placeholder="Let's build something awesome…" required></textarea>
            <button className="btn-primary w-fit" type="submit">Send Message</button>
          </form>
          <p className="mt-4 opacity-90 text-sm">Or email me at <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
        </motion.div>
      </section>
    </main>
  );
}
