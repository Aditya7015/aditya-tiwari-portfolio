import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-violet-500/10 to-indigo-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 text-center
        backdrop-blur-xl bg-white/70 dark:bg-white/5
        border-t border-black/5 dark:border-white/10
        rounded-t-3xl shadow-[0_-20px_60px_-20px_rgba(168,85,247,0.5)]">

        {/* Name */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold mb-2"
        >
          Aditya
          <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
            Tiwari
          </span>
        </motion.h3>

        {/* Tagline */}
        <p className="opacity-80 max-w-xl mx-auto text-sm md:text-base">
          MERN Stack Developer · AI SaaS Builder · Full-Stack Engineer
        </p>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-8">
          {[
            {
              icon: Github,
              label: "GitHub",
              link: "https://github.com/Aditya7015",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              link: "https://www.linkedin.com/in/adityatiwari77/",
            },
            {
              icon: Mail,
              label: "Email",
              link: "mailto:adityatiwari3105@gmail.com",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -6, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-14 h-14 rounded-2xl
                flex items-center justify-center
                bg-white/80 dark:bg-black/30
                shadow-lg hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.6)]
                transition"
                aria-label={item.label}
              >
                {/* Glow */}
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-pink-500/30 to-violet-600/30 blur-xl transition" />

                <Icon className="relative z-10 text-gray-800 dark:text-gray-200" size={22} />
              </motion.a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-400/40 to-transparent" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">

          <span>
            © {new Date().getFullYear()} Aditya Tiwari. All rights reserved.
          </span>

          <a
            href="#top"
            className="inline-flex items-center gap-1 hover:opacity-100 transition"
          >
            Back to top <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
