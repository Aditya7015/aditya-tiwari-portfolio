import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ArrowUpRight, Play } from "lucide-react";

/* ================= TECH ICON MAP ================= */
const TECH_ICONS = {
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Tailwind: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  JWT: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='%23007ACC'/><text x='50' y='60' font-size='36' text-anchor='middle' fill='white'>JWT</text></svg>",
  Stripe: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
  Socket: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

export default function ProjectCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <Tilt
        tiltMaxAngleX={12}
        tiltMaxAngleY={12}
        glareEnable
        glareMaxOpacity={0.15}
        scale={1.02}
        className="h-full"
      >
        <div
          className="group relative overflow-hidden h-full rounded-3xl
          bg-white/80 dark:bg-black/40 backdrop-blur-xl
          border border-white/20 dark:border-white/10
          shadow-xl hover:shadow-[0_30px_80px_-20px_rgba(168,85,247,0.6)]
          transition-all duration-300 flex flex-col p-7"
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition
            bg-gradient-to-br from-pink-500/20 via-violet-500/20 to-indigo-500/20 blur-2xl" />

          {/* FEATURED BADGE */}
          {p.featured && (
            <span className="absolute top-5 right-5 z-10 px-3 py-1 text-xs font-semibold
              rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-md">
              Featured
            </span>
          )}

          {/* VIDEO PREVIEW */}
          {p.video && (
            <div className="relative mb-4 rounded-xl overflow-hidden border border-white/20">
              <video
                src={p.video}
                muted
                loop
                playsInline
                className="w-full h-40 object-cover opacity-0 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center
                bg-black/40 group-hover:opacity-0 transition">
                <Play className="text-white" />
              </div>
            </div>
          )}

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col flex-1">

            <h3
              className="text-xl font-extrabold mb-1
              group-hover:text-transparent group-hover:bg-clip-text
              group-hover:bg-gradient-to-r from-pink-500 to-violet-600 transition"
            >
              {p.title}
            </h3>

            <p className="text-sm opacity-70 mb-3">{p.subtitle}</p>

            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
              {p.description}
            </p>

            {/* TECH ICON STACK */}
            <div className="mt-4 flex flex-wrap gap-3 items-center">
              {(p.tech || []).slice(0, 7).map((t, i) => {
                const icon = TECH_ICONS[t];
                return icon ? (
                  <img
                    key={i}
                    src={icon}
                    alt={t}
                    title={t}
                    className="w-8 h-8 object-contain hover:scale-110 transition"
                  />
                ) : (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                    bg-white/70 dark:bg-white/5 border border-white/20"
                  >
                    {t}
                  </span>
                );
              })}
              {p.tech?.length > 7 && (
                <span className="text-xs opacity-60">
                  +{p.tech.length - 7}
                </span>
              )}
            </div>

            {/* FOOTER */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex gap-3 flex-wrap">
                {p.links?.slice(0, 2).map((l, i) => (
                  <a
                    key={i}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-brand-500 hover:underline transition"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <Link
                to={`/project/${p.slug}`}
                className="ml-auto inline-flex items-center gap-1
                px-4 py-2 rounded-xl font-medium
                bg-gradient-to-r from-pink-500 to-violet-600
                text-white shadow-lg
                hover:scale-105 transition"
              >
                View <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
