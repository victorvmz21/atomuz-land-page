"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#hero",     label: "Home" },
    { href: "#about",    label: "About us" },
    { href: "#services", label: "Services" },
    { href: "#process",  label: "Process" },
    { href: "#saas",     label: "Micro SaaS" },
    { href: "#work",     label: "Work" },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_24px_rgba(11,27,58,0.1)]" : "shadow-none"
      }`}
    >
      {/* Bottom border — thin neon line separating white nav from dark hero */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-3.5 flex items-center justify-between">
        {/* Logo — green+blue shows perfectly on white */}
        <a href="#hero" onClick={scrollToTop} className="flex items-center">
          <Image
            src="/atomuzLogo.png"
            alt="Atomuz Development"
            width={160}
            height={72}
            className="object-contain block"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={l.href === "#hero" ? scrollToTop : undefined}
              className="relative text-gray-600 font-medium hover:text-navy transition-colors duration-200 group py-1"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-neon rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-lg
                     bg-navy text-white hover:shadow-[0_4px_20px_rgba(11,27,58,0.3)] transition-shadow duration-300"
        >
          Contact us <ArrowRight size={15} />
        </motion.a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:text-navy hover:border-navy/30 transition-colors"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={(e) => {
                    if (l.href === "#hero") scrollToTop(e);
                    setOpen(false);
                  }}
                  className="py-3 px-2 text-gray-600 font-medium hover:text-navy transition-colors border-b border-gray-50 last:border-0"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26 }}
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-bold px-4 py-3 rounded-lg bg-navy text-white"
              >
                Contact us <ArrowRight size={15} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
