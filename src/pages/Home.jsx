import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDownCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  profile,
  projects,
  education,
  experience
} from "../data";

import ProjectCard from "../components/ProjectCard";
import CursorGlow from "../components/CursorGlow";
import BackgroundFX from "../components/BackgroundFX";
import useMagnetic from "../hooks/useMagnetic";

import profileimage from "../../public/logo.jpeg";

/* ================= SKILLS ================= */
const SKILL_GROUPS = {
  Frontend: [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" }
  ],
  Backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    {
      name: "JWT",
      icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%23007ACC'/><text x='50' y='60' font-size='36' text-anchor='middle' fill='white'>JWT</text></svg>"
    }
  ],
  Tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vercel", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
    { name: "Render", icon: "https://img.icons8.com/color/96/server.png" }
  ]
};

/* ================= CERTIFICATIONS ================= */
const CERTIFICATIONS = [
  {
    title: "Data Structures and Algorithms",
    issuer: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    issued: "Jan 2026",
    credentialId: "2WTVPPAMS6B8",
    link: "https://www.coursera.org/account/accomplishments/verify/2WTVPPAMS6B8"
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    issued: "Jan 2025",
    credentialId: "9PYUXUMXPPET",
    link: "https://www.coursera.org/account/accomplishments/verify/9PYUXUMXPPET"
  }
];

/* ================= CODING PROFILES ================= */
const CODING_PROFILES = [
  {
    name: "GeeksforGeeks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    link: "https://www.geeksforgeeks.org/profile/adityatiwari2940?from=explore"
  },
  {
    name: "LeetCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/u/Adityatiwari2940/"
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const resumeBtn = useMagnetic();
  const projectBtn = useMagnetic();
  const projectRef = useRef(null);

  const scrollProjects = (dir) => {
    if (!projectRef.current) return;
    const width = projectRef.current.offsetWidth;
    projectRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
      <BackgroundFX />
      <CursorGlow />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-violet-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Helmet>
        <title>{profile.name} · MERN Stack Developer</title>
        <meta name="description" content={profile.summary} />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-36 grid lg:grid-cols-2 gap-24 items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Open to Work · MERN
          </span>

          <h1 className="text-6xl font-extrabold mt-6">
            {profile.name}
            <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">.</span>
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer", 1500,
              "AI SaaS Builder", 1500,
              "Full-Stack Engineer", 1500
            ]}
            speed={45}
            repeat={Infinity}
            className="text-2xl opacity-80 mt-2"
          />

          <p className="mt-6 opacity-80 max-w-xl text-lg">
            {profile.summary}
          </p>

          <div className="flex gap-6 mt-10">
            <a
              ref={resumeBtn.ref}
              onMouseMove={resumeBtn.onMouseMove}
              onMouseLeave={resumeBtn.reset}
              href="/adityaresume.pdf"
              download
              className="btn-primary"
            >
              Download Resume
            </a>

            <a
              ref={projectBtn.ref}
              onMouseMove={projectBtn.onMouseMove}
              onMouseLeave={projectBtn.reset}
              href="#projects"
              className="btn-outline flex items-center gap-2"
            >
              View Projects <ArrowDownCircle size={18} />
            </a>
          </div>
        </div>

        {/* Right */}
        <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12}>
          <div className="relative p-10 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 shadow-2xl">
            <div className="relative w-44 h-44 mx-auto mb-6 aspect-square">
              <img
                src={profileimage}
                alt="Aditya Tiwari"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>

            <h3 className="text-2xl font-bold text-center text-white">Let’s Connect</h3>
            <p className="text-center opacity-90 text-white">{profile.email}</p>

            <div className="mt-6 flex justify-center gap-6 text-xl text-white">
              <a href={profile.links[0].url} target="_blank" rel="noreferrer"><Github /></a>
              <a href={profile.links[1].url} target="_blank" rel="noreferrer"><Linkedin /></a>
              <a href={`mailto:${profile.email}`}><Mail /></a>
            </div>
          </div>
        </Tilt>
      </section>

      {/* ================= CODING PROFILES ================= */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Coding Profiles</h2>
        <div className="grid sm:grid-cols-2 gap-10">
          {CODING_PROFILES.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer"
              className="p-8 rounded-3xl bg-white/70 dark:bg-white/5 shadow-xl hover:scale-105 transition">
              <img src={p.logo} alt={p.name} className="h-12 mx-auto mb-4 object-contain" />
              <p className="text-center font-semibold">{p.name}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS (HORIZONTAL SCROLL ONLY CHANGE) ================= */}
      <section id="projects" className="relative py-32">
        <h2 className="text-4xl font-extrabold mb-14 text-center">Projects</h2>

        {/* Arrows */}
        <button
          onClick={() => scrollProjects("left")}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10
          p-3 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur shadow-lg hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => scrollProjects("right")}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10
          p-3 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur shadow-lg hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

        {/* Scroll container */}
        <div
          ref={projectRef}
          className="flex gap-10 px-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className="min-w-[320px] sm:min-w-[380px] lg:min-w-[420px] snap-start"
            >
              <ProjectCard p={p} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-extrabold mb-14 text-center">Experience</h2>
        <div className="relative border-l-2 border-violet-500/40 pl-10 space-y-16">
          {experience.map((x, i) => (
            <div key={i}>
              <span className="absolute -left-[13px] w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-violet-600" />
              <div className="p-8 rounded-2xl bg-white/70 dark:bg-white/5 shadow-xl">
                <h3 className="text-xl font-bold">{x.title} · {x.company}</h3>
                <p className="text-sm opacity-60">{x.start} – {x.end || "Present"}</p>
                <ul className="mt-4 list-disc list-inside space-y-1 text-sm">
                  {x.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="max-w-5xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-extrabold mb-14 text-center">Education</h2>
        <div className="relative space-y-12">
          {education.map((e, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 shadow-lg">
              <h3 className="font-semibold">{e.degree}</h3>
              <p className="opacity-80">{e.school}</p>
              <p className="text-sm opacity-60">{e.start} – {e.end}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-extrabold mb-14 text-center">Tech Stack</h2>

        {Object.entries(SKILL_GROUPS).map(([group, items]) => (
          <div key={group} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center opacity-80">{group}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {items.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 shadow-lg flex flex-col items-center gap-3">
                  <img src={s.icon} alt={s.name} className="w-14 h-14 object-contain" />
                  <span className="font-medium">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-4xl font-extrabold mb-14 text-center">Licenses & Certifications</h2>

        <div className="grid sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((c, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/70 dark:bg-white/5 shadow-xl">
              <div className="flex items-center gap-5">
                <img src={c.logo} alt={c.issuer} className="w-20 h-12 object-contain" />
                <div>
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="opacity-80">{c.issuer}</p>
                </div>
              </div>
              <p className="mt-4 text-sm opacity-80">Issued: {c.issued}</p>
              <p className="text-sm opacity-80">Credential ID: {c.credentialId}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg"
              >
                Show Credential →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
