import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { posts } from "../data";
import { mdToHtml } from "../markdown";
import { ArrowLeft } from "lucide-react";

export default function Post() {
  const { slug } = useParams();
  const p = posts.find((x) => x.slug === slug);

  if (!p) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
          Post not found
        </h1>
        <Link
          className="inline-flex items-center gap-2 mt-4 text-teal-600 dark:text-teal-400 hover:underline"
          to="/blog"
        >
          <ArrowLeft size={18} /> Back to blog
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* SEO */}
      <Helmet>
        <title>{p.title} · Blog</title>
        <meta name="description" content={p.excerpt} />
      </Helmet>

      {/* Back link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 hover:underline"
      >
        <ArrowLeft size={16} /> Back
      </Link>

      {/* Post Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-6"
      >
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {p.title}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{p.date}</p>
      </motion.div>

      {/* Blog Content */}
      <motion.div
        className="card mt-8 prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-teal-500 hover:prose-a:text-purple-500 max-w-none"
        dangerouslySetInnerHTML={{ __html: mdToHtml(p.content) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </main>
  );
}
