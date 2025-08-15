import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { posts } from '../data'

export default function Blog(){
  return (
    <main className="max-w-4xl mx-auto px-4 py-14">
      <Helmet><title>Blog · Aditya Tiwari</title></Helmet>
      <h1 className="text-3xl font-extrabold mb-6">Blog</h1>
      <div className="space-y-4">
        {posts.map(p => (
          <article key={p.slug} className="card">
            <h2 className="text-xl font-bold"><Link className="underline" to={'/blog/'+p.slug}>{p.title}</Link></h2>
            <p className="text-sm opacity-70">{p.date}</p>
            <p className="mt-2">{p.excerpt}</p>
            <Link className="btn mt-3 inline-flex" to={'/blog/'+p.slug}>Read</Link>
          </article>
        ))}
      </div>
    </main>
  )
}