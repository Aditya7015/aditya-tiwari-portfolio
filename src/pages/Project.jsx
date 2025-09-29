import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { projects } from "../data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function Project() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
          Project not found
        </h1>
        <Link
          className="inline-flex items-center gap-2 mt-4 text-teal-600 dark:text-teal-400 hover:underline"
          to="/"
        >
          <ArrowLeft size={18} /> Back home
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      {/* SEO */}
      <Helmet>
        <title>{p.title} · Project</title>
        <meta name="description" content={p.description} />
      </Helmet>

      {/* Back link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:underline"
      >
        <ArrowLeft size={16} /> Back
      </Link>

      {/* Project Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {p.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          {p.subtitle}
        </p>
      </motion.div>

      {/* Image / Cover */}
      {p.image && (
        <motion.img
          src={p.image}
          alt={p.title}
          className="mt-8 rounded-2xl shadow-xl border border-gray-200/30 dark:border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}

      {/* Description */}
      <p className="mt-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        {p.description}
      </p>

      {/* Tech stack */}
      <div className="mt-6 flex flex-wrap gap-3">
        {(p.tech || []).map((t, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-teal-500 to-purple-500 text-white shadow-md hover:shadow-lg transition"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-8 flex flex-wrap gap-4">
        {p.links?.map((l, i) => (
          <a
            key={i}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-teal-500 hover:to-purple-600 transition shadow-lg"
          >
            {l.label === "GitHub" ? (
              <Github size={18} />
            ) : (
              <ExternalLink size={18} />
            )}
            {l.label}
          </a>
        ))}
      </div>
    </main>
  );
}
