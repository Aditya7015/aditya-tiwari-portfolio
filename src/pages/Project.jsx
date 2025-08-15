import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { projects } from '../data'

export default function Project(){
  const { slug } = useParams()
  const p = projects.find(x=>x.slug===slug)
  if(!p){ return <main className="max-w-4xl mx-auto px-4 py-14"><h1 className="text-2xl font-bold">Project not found</h1><Link className="underline" to="/">← Back home</Link></main> }
  return (
    <main className="max-w-4xl mx-auto px-4 py-14">
      <Helmet><title>{p.title} · Project</title><meta name="description" content={p.description} /></Helmet>
      <Link className="underline" to="/">← Back</Link>
      <h1 className="text-3xl font-extrabold mt-3">{p.title}</h1>
      <p className="opacity-80">{p.subtitle}</p>
      <p className="mt-4">{p.description}</p>
      <div className="mt-3 flex gap-2 flex-wrap">{(p.tech||[]).map((t,i)=>(<span key={i} className="text-xs px-2 py-1 rounded-full border border-white/15">{t}</span>))}</div>
      <div className="mt-5 flex gap-3">{p.links?.map((l,i)=>(<a key={i} className="btn" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>))}</div>
    </main>
  )
}