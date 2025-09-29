import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-black/5 dark:border-white/10 flex flex-col items-center gap-4">
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} Aditya Tiwari — Built with React
      </p>
      
      {/* Social Links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/Aditya7015"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/adityatiwari77/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:adityatiwari3105@gmail.com"
          className="text-gray-700 dark:text-gray-300 hover:text-brand-500 transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </footer>
  );
}
