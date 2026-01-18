import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projects } from "../data";
import { ArrowLeft, ExternalLink, Github, Rocket } from "lucide-react";

/* ============ TECH ICON MAP ============ */
const TECH_ICONS = {
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Tailwind: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  JWT: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%23007ACC'/><text x='50' y='60' font-size='36' text-anchor='middle' fill='white'>JWT</text></svg>"
};

export default function Project() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  const { scrollYProgress } = useScroll();

  if (!p) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-extrabold">Project not found</h1>
        <Link to="/" className="inline-flex gap-2 mt-6 text-violet-600 hover:underline">
          <ArrowLeft /> Back home
        </Link>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden">

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-violet-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <Helmet>
        <title>{p.title} · Project</title>
        <meta name="description" content={p.description} />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">

        {/* Background glow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-40
          bg-gradient-to-br from-pink-500 via-violet-600 to-indigo-600" />

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-violet-600 hover:underline"
        >
          <ArrowLeft size={16} /> Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold
            bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500
            bg-clip-text text-transparent">
            {p.title}
          </h1>

          <p className="text-xl opacity-80 mt-4 max-w-3xl">
            {p.subtitle}
          </p>
        </motion.div>

        {/* CTA LINKS */}
        <div className="mt-10 flex flex-wrap gap-4">
          {p.links?.map((l, i) => (
            <a
              key={i}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl
                bg-gradient-to-r from-pink-500 to-violet-600
                text-white font-semibold shadow-xl
                hover:scale-105 transition"
            >
              {l.label === "GitHub" ? <Github /> : <ExternalLink />}
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* ================= PREVIEW ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur"
          >
            {p.video ? (
              <video
                src={p.video}
                controls
                className="w-full max-h-[500px] object-cover"
              />
            ) : p.image ? (
              <img
                src={p.image}
                alt={p.title}
                className="w-full max-h-[500px] object-cover"
              />
            ) : null}
          </motion.div>
        </Tilt>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-lg leading-relaxed opacity-85 max-w-4xl"
        >
          {p.description}
        </motion.p>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-extrabold mb-10">Tech Stack</h2>

        <div className="flex flex-wrap gap-6">
          {(p.tech || []).map((t, i) => {
            const icon = TECH_ICONS[t];
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15, y: -6 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl
                  bg-white/70 dark:bg-white/5 backdrop-blur
                  shadow-lg border border-white/20"
              >
                {icon && (
                  <img src={icon} alt={t} className="w-8 h-8 object-contain" />
                )}
                <span className="font-medium">{t}</span>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-12 rounded-3xl
            bg-gradient-to-r from-pink-500 to-violet-600
            text-white shadow-2xl"
        >
          <h2 className="text-3xl font-extrabold mb-4">
            Want to build something like this?
          </h2>
          <p className="opacity-90 mb-8">
            Let’s collaborate and turn ideas into production-ready products.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
              bg-white text-black font-semibold shadow-lg hover:scale-105 transition"
          >
            Let’s Talk <Rocket />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
