import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { posts } from '../data'
import { mdToHtml } from '../markdown'

export default function Post(){
  const { slug } = useParams()
  const p = posts.find(x=>x.slug===slug)
  if(!p){ return <main className="max-w-4xl mx-auto px-4 py-14"><h1 className="text-2xl font-bold">Post not found</h1><Link className="underline" to="/blog">← Back to blog</Link></main> }
  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      <Helmet><title>{p.title} · Blog</title><meta name="description" content={p.excerpt}/></Helmet>
      <Link className="underline" to="/blog">← Back</Link>
      <h1 className="text-3xl font-extrabold mt-3">{p.title}</h1>
      <p className="text-sm opacity-70">{p.date}</p>
      <div className="card mt-4 prose prose-invert max-w-none" dangerouslySetInnerHTML={{__html: mdToHtml(p.content)}} />
    </main>
  )
}