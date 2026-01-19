import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts } from "../data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <Helmet>
        <title>Blog · Aditya Tiwari</title>
      </Helmet>

      <motion.h1
        className="text-4xl font-extrabold mb-12 text-center bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((p) => (
          <motion.article
            key={p.slug}
            className="rounded-2xl p-6 bg-gradient-to-tr from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-2">
              <Link
                className="hover:underline text-gray-900 dark:text-white"
                to={`/blog/${p.slug}`}
              >
                {p.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{p.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{p.excerpt}</p>
            <Link
              className="inline-flex items-center gap-2 text-white font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-teal-500 hover:to-purple-600 transition shadow-md"
              to={`/blog/${p.slug}`}
            >
              Read <ArrowRight size={18} />
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
