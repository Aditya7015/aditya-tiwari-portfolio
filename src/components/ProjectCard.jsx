import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectCard({ p, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group relative card bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      {/* Title & Subtitle */}
      <h3 className="text-xl font-bold group-hover:text-brand-500 transition-colors">{p.title}</h3>
      <p className="text-sm opacity-70 mt-1">{p.subtitle}</p>

      {/* Description */}
      <p className="mt-3 text-gray-700 dark:text-gray-300 flex-1">{p.description}</p>

      {/* Tech Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {(p.tech || []).map((t, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full border border-white/15 bg-white/10 dark:bg-white/5 backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-5 flex items-center gap-3 flex-wrap">
        {p.links?.map((l, i) => (
          <a
            key={i}
            className="text-brand-500 font-medium hover:underline transition"
            href={l.url}
            target="_blank"
            rel="noreferrer"
          >
            {l.label}
          </a>
        ))}
        <Link
          className="ml-auto btn px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
          to={'/project/' + p.slug}
        >
          Details
        </Link>
      </div>
    </motion.div>
  );
}
