"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay },
});

export default function HeroModern() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[calc(100vh-72px)] flex items-center bg-[#060d1a]">

      {/* ── LAYER 1: dot grid — clearly visible ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ── LAYER 2: neon diagonal lines — more visible ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(0,230,98,0.07) 0px, rgba(0,230,98,0.07) 1px, transparent 1px, transparent 40px)",
        }}
      />

      {/* ── LAYER 3: noise grain ── */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full -z-20"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.045 }}
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* ── Animated colour orbs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 top-[-8%] left-[-4%] w-[520px] h-[520px] rounded-full opacity-30 blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(0,230,98,0.55) 0%, transparent 70%)",
          animation: "orb1 8s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 bottom-[-10%] right-[-4%] w-[460px] h-[460px] rounded-full opacity-25 blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(0,100,255,0.55) 0%, transparent 70%)",
          animation: "orb2 10s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-12 blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(0,180,255,0.4) 0%, transparent 70%)",
          animation: "orb2 13s ease-in-out infinite reverse",
        }}
      />

      {/* ── LAYER 4: concentric rings + crosshairs — sit ABOVE orbs ── */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ zIndex: -5 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Neon rings radiating from top-left green orb */}
        <circle cx="-30" cy="-20" r="220" fill="none" stroke="rgba(0,230,98,0.18)" strokeWidth="1" />
        <circle cx="-30" cy="-20" r="380" fill="none" stroke="rgba(0,230,98,0.1)" strokeWidth="1" />
        <circle cx="-30" cy="-20" r="560" fill="none" stroke="rgba(0,230,98,0.06)" strokeWidth="0.75" />
        <circle cx="-30" cy="-20" r="750" fill="none" stroke="rgba(0,230,98,0.03)" strokeWidth="0.5" />

        {/* Blue rings radiating from bottom-right blue orb */}
        <circle cx="1490" cy="940" r="200" fill="none" stroke="rgba(80,140,255,0.18)" strokeWidth="1" />
        <circle cx="1490" cy="940" r="370" fill="none" stroke="rgba(80,140,255,0.11)" strokeWidth="1" />
        <circle cx="1490" cy="940" r="560" fill="none" stroke="rgba(80,140,255,0.06)" strokeWidth="0.75" />

        {/* Scattered crosshair markers */}
        {([
          [160, 140], [420, 60], [780, 110], [1080, 180], [1340, 80],
          [80,  580], [340, 780],[700, 820], [1050, 750],[1380, 660],
          [550, 380], [920, 420],
        ] as [number, number][]).map(([x, y], i) => (
          <g key={i} opacity="0.22">
            <line x1={x} y1={y - 7} x2={x} y2={y + 7} stroke="white" strokeWidth="1.2" />
            <line x1={x - 7} y1={y} x2={x + 7} y2={y} stroke="white" strokeWidth="1.2" />
          </g>
        ))}

        {/* Corner bracket accents */}
        <g opacity="0.15" stroke="rgba(0,230,98,1)" strokeWidth="1.5" fill="none">
          <path d="M 30 30 L 30 60 M 30 30 L 60 30" />
          <path d="M 1410 30 L 1380 30 M 1410 30 L 1410 60" />
          <path d="M 30 870 L 30 840 M 30 870 L 60 870" />
          <path d="M 1410 870 L 1380 870 M 1410 870 L 1410 840" />
        </g>
      </svg>

      {/* ── Vignette (lighter so patterns stay visible at edges) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
          bg-[radial-gradient(ellipse_85%_70%_at_50%_50%,transparent_35%,rgba(6,13,26,0.6)_100%)]"
      />

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full bg-neon/10 border border-neon/30 px-4 py-1.5 text-sm font-semibold text-neon">
              <Sparkles size={14} className="text-neon" /> Senior team. Ship fast. Own your code.
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight text-white"
          >
            Build market-ready{" "}
            <span
              className="text-neon"
              style={{
                textShadow: "0 0 30px rgba(0,230,98,0.4), 0 0 60px rgba(0,230,98,0.15)",
              }}
            >
              products in weeks
            </span>
            .
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="mt-5 text-lg text-white/65 max-w-xl leading-relaxed">
            Custom <strong className="text-white/90">mobile</strong> and{" "}
            <strong className="text-white/90">web apps</strong> engineered to deliver speed,
            reliability, and lasting growth.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="mt-7 flex flex-col sm:flex-row gap-3">
            <motion.a
              href="#saas"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
                         border border-neon/30 text-white bg-neon/8 hover:bg-neon/15 hover:border-neon/60 transition-all duration-300 overflow-hidden"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-neon/10 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.6 }}
              />
              AI Micro-SaaS starting at <span className="text-neon">$5k</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#work"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0,230,98,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neon font-bold text-[#060d1a] transition-all duration-300"
            >
              See Our Work
            </motion.a>
          </motion.div>

          {/* Tech pills */}
          <motion.ul {...fadeUp(0.2)} className="mt-7 flex flex-wrap gap-2.5 text-sm">
            {["iOS & Android", "Next.js / React", "Python / Node", "Firebase / Supabase", "AWS / GCP"].map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(0,230,98,0.6)" }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy border border-white/15 text-white font-medium text-sm cursor-default transition-colors"
              >
                <CheckCircle2 size={13} className="text-neon flex-shrink-0" /> {t}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right — hero image */}
        <div className="relative flex justify-center items-center">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <Image
              src="/phoneAndComputer2.png"
              alt="Modern code editor on a laptop"
              width={1400}
              height={1400}
              className="object-contain max-w-full scale-110"
              priority
            />
          </motion.div>

          {/* Glow underneath image */}
          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 blur-3xl -z-10 rounded-full opacity-30"
            style={{ background: "radial-gradient(ellipse, rgba(0,230,98,0.5) 0%, transparent 70%)" }}
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 -z-10
          bg-gradient-to-t from-[#060d1a] to-transparent"
      />
    </section>
  );
}
