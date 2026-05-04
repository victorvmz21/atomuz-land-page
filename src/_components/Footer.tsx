"use client";

import Image from "next/image";
import { Facebook, Instagram, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#hero",     label: "Home" },
  { href: "#about",    label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#process",  label: "Process" },
  { href: "#saas",     label: "Micro SaaS" },
  { href: "#work",     label: "Work" },
  { href: "#contact",  label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white border-t-[3px] border-neon overflow-hidden">

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-8 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <Image
            src="/atomuzLogo.png"
            alt="Atomuz Development"
            width={160}
            height={72}
            className="object-contain block mb-4"
          />
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            We design & build high-performing SaaS products and mobile apps
            for startups and enterprise teams.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neon hover:text-neon/80 transition-colors"
          >
            Start a project <ArrowRight size={14} />
          </motion.a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
            Navigation
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-gray-500 hover:text-navy font-medium transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-px w-0 bg-neon transition-all duration-200 group-hover:w-2.5 rounded-full" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">
            Get in Touch
          </h4>
          <a
            href="mailto:contact@atomuz.com"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-navy font-medium transition-colors duration-200 group"
          >
            <span className="p-1.5 rounded-md bg-neon/10 group-hover:bg-neon/20 transition-colors">
              <Mail size={13} className="text-neon" />
            </span>
            contact@atomuz.com
          </a>

          <div className="mt-5 flex items-center gap-3">
            {[
              { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
              { href: "https://facebook.com",  Icon: Facebook,  label: "Facebook"  },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-gray-100 hover:bg-navy hover:text-white border border-gray-200 hover:border-navy transition-all duration-200"
              >
                <Icon size={16} className="text-gray-500 group-hover:text-white" />
              </motion.a>
            ))}
          </div>

          {/* Trust signals */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["Senior Engineers", "Fixed Quotes", "Fast Delivery"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full border border-neon/30 text-neon bg-neon/5 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Atomuz Development. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with <span className="text-neon font-semibold mx-0.5">precision</span> & care
          </span>
        </div>
      </div>
    </footer>
  );
}
