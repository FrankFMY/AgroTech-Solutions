"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Проблемы", href: "#problems" },
  { label: "Возможности", href: "#features" },
  { label: "Результаты", href: "#roi" },
  { label: "Демо", href: "#demo" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 20h10" />
              <path d="M10 20c5.5-2.5 8-6.5 8-12a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1c0 5.5 2.5 9.5 8 12" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">
            Agro<span className="text-green">Tech</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray hover:text-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#demo"
            className="bg-green hover:bg-green-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Запросить демо
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-dark"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray hover:text-dark py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="bg-green hover:bg-green-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center transition-colors mt-2"
              >
                Запросить демо
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
