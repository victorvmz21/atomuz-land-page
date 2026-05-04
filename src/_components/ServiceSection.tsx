"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, MonitorSmartphone, Cpu, Code2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
});

const items = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "High-performance iOS and Android apps using Swift, Kotlin, and Flutter. From payments to analytics, your app will scale seamlessly and retain users.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Platform Development",
    text: "Responsive, secure, and scalable web applications powered by Next.js and modern APIs. From dashboards to marketplaces, built for growth.",
  },
  {
    icon: Cpu,
    title: "AI & Business Automation",
    text: "Leverage AI to boost productivity and revenue. Predictive analytics, automated workflows, and intelligent features that impact your bottom line.",
  },
  {
    icon: Code2,
    title: "Custom Software Solutions",
    text: "Your business is unique—your software should be too. Production-ready solutions you own end-to-end, designed for long-term maintainability.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">

      {/* Dot grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(11,27,58,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle top-right accent blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(0,230,98,0.15) 0%, transparent 65%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-neon/10 border border-neon/30 px-4 py-1.5 text-sm font-semibold text-neon mb-4">
            <Code2 size={13} /> What We Build
          </span>
        </motion.div>
        <motion.h2 {...fadeUp(0.05)} className="text-3xl md:text-4xl text-navy font-bold text-center">
          Our Services — What We Do
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="mt-4 text-gray-500 max-w-3xl mx-auto text-center leading-relaxed">
          End-to-end digital solutions for startups and enterprises. From{" "}
          <strong className="text-navy">mobile apps</strong> to{" "}
          <strong className="text-navy">AI-powered automation</strong>, our senior engineers
          turn complex ideas into production-ready products.
        </motion.p>

        {/* Service grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                {...fadeUp(0.1 + i * 0.07)}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(0,230,98,0.5)",
                  boxShadow: "0 0 0 1px rgba(0,230,98,0.2), 0 12px 40px rgba(0,230,98,0.08), 0 4px 16px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm overflow-hidden cursor-default"
              >
                {/* Top neon accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="h-12 w-12 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-5 text-neon group-hover:bg-neon/8 group-hover:border-neon/25 transition-colors duration-300">
                  <Icon size={22} />
                </div>

                <h3 className="text-base text-navy font-semibold mb-3">{it.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{it.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.2)} className="mt-16 text-center">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-navy text-white font-bold text-sm
                       hover:shadow-[0_8px_30px_rgba(11,27,58,0.3)] transition-shadow duration-300"
          >
            Let&apos;s discuss your project <ArrowRight size={16} />
          </motion.a>
          <p className="mt-3 text-sm text-gray-400">
            Free consultation • Fixed quotes • Senior engineering team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
