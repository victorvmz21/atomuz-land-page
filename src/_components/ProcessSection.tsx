"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MonitorSmartphone, Code2, Rocket } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
});

const steps = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Discover",
    description:
      "Strategy workshops to align on goals, define success metrics, and identify the smallest lovable product. Sets a clear foundation for every sprint.",
  },
  {
    icon: MonitorSmartphone,
    number: "02",
    title: "Design",
    description:
      "From user flows and wireframes to high-fidelity UI, our design phase prioritizes speed, clarity, and scalability. Intuitive interfaces that delight users.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    description:
      "Agile sprints and weekly demos. Senior engineers ship production-grade code. Transparency is built in—milestones are always visible.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description:
      "We handle deployment, monitoring, and iteration. Post-launch, we continuously optimize and tie every improvement to measurable business outcomes.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#f8fafc" }}>

      {/* Diagonal stripe texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, rgba(11,27,58,0.022) 0px, rgba(11,27,58,0.022) 1px, transparent 1px, transparent 32px)",
        }}
      />

      {/* Faint neon glow — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(circle, rgba(0,230,98,0.4) 0%, transparent 65%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-neon/10 border border-neon/30 px-4 py-1.5 text-sm font-semibold text-neon mb-4">
            <Rocket size={13} /> How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Our Proven Development Process
          </h2>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto leading-relaxed">
            A structured yet flexible framework that ensures every project moves from idea
            to launch with clarity, speed, and measurable results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                {...fadeUp(0.1 + i * 0.08)}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(0,230,98,0.45)",
                  boxShadow: "0 0 0 1px rgba(0,230,98,0.15), 0 12px 36px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.2 }}
                className="group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm overflow-hidden cursor-default"
              >
                {/* Step number — large watermark */}
                <span
                  className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none"
                  style={{ color: "rgba(11,27,58,0.04)" }}
                >
                  {s.number}
                </span>

                {/* Top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 380, damping: 14 }}
                    className="p-2.5 rounded-xl bg-neon/8 border border-neon/20 flex-shrink-0"
                  >
                    <Icon className="text-neon" size={19} />
                  </motion.div>
                  <h3 className="font-bold text-navy text-sm leading-tight">
                    <span className="text-neon">{s.number}</span> — {s.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
