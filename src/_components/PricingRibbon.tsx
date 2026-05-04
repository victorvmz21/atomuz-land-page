"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket, CheckCircle2 } from "lucide-react";

const features = [
  "MVP ready in 6–8 weeks",
  "Authentication & database included",
  "Transparent milestones & weekly demos",
  "Secure CI/CD pipelines baked in",
  "Senior engineering team",
  "Fixed quote with no hidden fees",
];

export default function PricingSection() {
  return (
    <section
      id="saas"
      className="relative py-20 md:py-28 bg-[#060d1a] overflow-hidden"
    >
      {/* Background glow orbs */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-10 blur-[140px] -z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,230,98,0.6) 0%, transparent 65%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] -z-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,80,200,0.6) 0%, transparent 65%)" }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid bg-grid opacity-50"
      />

      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        {/* Animated Rocket */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ boxShadow: ["0 0 15px rgba(0,230,98,0.2)", "0 0 35px rgba(0,230,98,0.5)", "0 0 15px rgba(0,230,98,0.2)"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-4 rounded-full bg-neon/10 border border-neon/25 text-neon"
          >
            <Rocket size={34} />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          Launch your{" "}
          <span
            className="text-neon"
            style={{ textShadow: "0 0 30px rgba(0,230,98,0.4)" }}
          >
            MVP
          </span>{" "}
          with confidence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed"
        >
          Micro-SaaS starting at{" "}
          <span className="text-neon font-bold" style={{ textShadow: "0 0 20px rgba(0,230,98,0.35)" }}>
            $5k
          </span>
          . Authentication, database, and deployment included. Delivered in weeks, not months.
        </motion.p>

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-10 mx-auto max-w-2xl rounded-2xl border border-neon/20 bg-navy/60 backdrop-blur-sm p-8"
          style={{ boxShadow: "0 0 40px rgba(0,230,98,0.08), 0 16px 48px rgba(0,0,0,0.5)" }}
        >
          <ul className="grid sm:grid-cols-2 gap-3.5 text-left">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="flex items-center gap-2.5 text-white/75 text-sm"
              >
                <CheckCircle2 size={16} className="text-neon flex-shrink-0" />
                <span>{f}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 35px rgba(0,230,98,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-neon text-[#060d1a] text-lg font-bold transition-all duration-300"
          >
            Get your fixed quote <ArrowRight size={20} />
          </motion.a>
          <p className="mt-4 text-sm text-white/40">
            Free consultation • Fast response • Clear milestones
          </p>
        </motion.div>
      </div>
    </section>
  );
}
