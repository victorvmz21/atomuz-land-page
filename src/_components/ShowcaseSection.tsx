"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Layers, ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay },
});

const highlights = [
  {
    Icon: Zap,
    title: "Speed to Market",
    description:
      "From idea to launch in weeks, not months. Our agile approach ensures you ship fast without compromising quality.",
    delay: 0.1,
  },
  {
    Icon: TrendingUp,
    title: "Revenue Focused",
    description:
      "Every feature we build ties back to business goals—driving growth, conversions, and customer retention.",
    delay: 0.2,
  },
  {
    Icon: Layers,
    title: "Scalable Foundations",
    description:
      "Future-proof architecture and CI/CD pipelines that support your product as it grows from 100 to 1M users.",
    delay: 0.3,
  },
];

export default function ShowcaseSection() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white relative overflow-hidden">

      {/* Soft radial center wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,230,98,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Subtle crosshatch */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,27,58,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(11,27,58,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/30 text-neon text-sm font-semibold mb-4"
          >
            <TrendingUp size={13} /> Proven Results
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-navy">
            Work That Delivers Real{" "}
            <span className="text-neon">Impact</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            We don&apos;t just build software — we create business outcomes. Here&apos;s
            what sets our work apart and why clients trust us to power their
            most ambitious ideas.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ Icon, title, description, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay }}
              viewport={{ once: true }}
              whileHover={{
                y: -7,
                borderColor: "rgba(0,230,98,0.5)",
                boxShadow: "0 0 0 1px rgba(0,230,98,0.18), 0 16px 40px rgba(0,0,0,0.09)",
              }}
              className="group rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm cursor-default overflow-hidden relative transition-all duration-250"
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex justify-center mb-5">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 380, damping: 14 }}
                  className="p-4 rounded-2xl bg-navy/5 border border-navy/10 group-hover:bg-neon/8 group-hover:border-neon/25 transition-colors duration-300"
                >
                  <Icon size={26} className="text-neon" />
                </motion.div>
              </div>

              <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-navy text-white font-bold text-sm
                       hover:shadow-[0_8px_28px_rgba(11,27,58,0.28)] transition-shadow duration-300"
          >
            Start a project <ArrowRight size={15} />
          </motion.a>
          <a href="#about" className="text-sm text-gray-500 hover:text-navy transition-colors font-medium">
            Read what clients say →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
