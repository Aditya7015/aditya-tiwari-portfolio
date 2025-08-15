import React from 'react'
const KEY='prefers-dark'
export default function ThemeToggle(){
  const [dark,setDark] = React.useState(()=> localStorage.getItem(KEY)==='true')
  React.useEffect(()=>{ document.documentElement.classList.toggle('dark', dark); localStorage.setItem(KEY, dark) },[dark])
  return <button onClick={()=>setDark(d=>!d)} className="rounded-xl border px-3 py-2 border-black/10 dark:border-white/10">{dark?'🌙':'☀️'}</button>
}