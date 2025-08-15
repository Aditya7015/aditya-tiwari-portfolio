import React from 'react'
import { profile, skills, projects, education, experience, posts } from '../data'

export default function Admin(){
  const initial = React.useMemo(()=>({ profile, skills, projects, education, experience, posts }),[])
  const [jsonStr, setJsonStr] = React.useState(()=> JSON.stringify(initial, null, 2))
  const [status, setStatus] = React.useState('')

  function download(filename, text){
    const blob = new Blob([text], {type:'application/json'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href=url; a.download=filename; a.click()
    setTimeout(()=>URL.revokeObjectURL(url), 1000)
  }
  function handleExport(){ download('portfolio-data.json', jsonStr) }
  function handleImport(e){
    const file = e.target.files?.[0]; if(!file) return
    const reader = new FileReader()
    reader.onload = () => setJsonStr(reader.result)
    reader.readAsText(file)
  }
  function validate(){
    try{ JSON.parse(jsonStr); setStatus('✅ JSON looks valid. Replace src/data.js content with this JSON or keep using this editor.'); }
    catch(e){ setStatus('❌ Invalid JSON: ' + e.message) }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-extrabold mb-4">Admin · Data Editor (Client‑Side)</h1>
      <p className="opacity-80">Edit your content as JSON below. You can <strong>Export</strong> to save it and then paste into <code>src/data.js</code> or keep re‑importing the JSON here.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <textarea className="card h-[480px] font-mono text-sm" value={jsonStr} onChange={e=>setJsonStr(e.target.value)} />
        <div className="card">
          <h2 className="text-xl font-bold">Actions</h2>
          <div className="flex gap-3 mt-3 flex-wrap">
            <button className="btn" onClick={validate}>Validate JSON</button>
            <button className="btn" onClick={handleExport}>Export JSON</button>
            <label className="btn cursor-pointer">
              Import JSON <input type="file" accept="application/json" className="hidden" onChange={handleImport}/>
            </label>
          </div>
          <p className="mt-4">{status}</p>
          <div className="mt-6">
            <h3 className="font-bold mb-2">Quick add project</h3>
            <QuickProject jsonStr={jsonStr} setJsonStr={setJsonStr} />
          </div>
        </div>
      </div>
    </main>
  )
}

function QuickProject({ jsonStr, setJsonStr }){
  const [title,setTitle]=React.useState('')
  const [slug,setSlug]=React.useState('')
  const [subtitle,setSubtitle]=React.useState('')
  const [tech,setTech]=React.useState('React, Tailwind')
  const [description,setDescription]=React.useState('')
  function add(){
    let data; try{ data = JSON.parse(jsonStr) }catch(e){ alert('Fix JSON first'); return }
    const proj = { slug, title, subtitle, description, tech: tech.split(',').map(s=>s.trim()), links: [] }
    data.projects = data.projects || []
    if(data.projects.find(p=>p.slug===slug)){ alert('Slug already exists'); return }
    data.projects.push(proj)
    setJsonStr(JSON.stringify(data, null, 2))
  }
  return (
    <div className="grid gap-2">
      <input className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <input className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10" placeholder="Slug (unique)" value={slug} onChange={e=>setSlug(e.target.value)} />
      <input className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10" placeholder="Subtitle" value={subtitle} onChange={e=>setSubtitle(e.target.value)} />
      <input className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10" placeholder="Tech (comma separated)" value={tech} onChange={e=>setTech(e.target.value)} />
      <textarea className="rounded-xl border px-3 py-2 bg-white/80 dark:bg-white/10 border-black/10 dark:border-white/10" rows="3" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <button className="btn w-fit" onClick={add}>Add project to JSON</button>
    </div>
  )
}
