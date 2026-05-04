"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Star, Quote, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

function StarRating({ value = 5 }: { value?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={15}
          className={i <= value ? "fill-current text-neon" : "text-white/20"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const items = useMemo(
    () => [
      { quote: "Atomuz Development shipped our MVP in 6 weeks and it's already driving revenue. Clear milestones and excellent communication throughout.", name: "A. Patel", role: "Founder, B2B SaaS", rating: 5 },
      { quote: "They felt like part of our team. Senior engineers who actually deliver—no fluff, just pragmatic execution from day one.", name: "K. Chen", role: "CTO, HealthTech", rating: 5 },
      { quote: "From idea to App Store fast. We'll be back for phase two—Atomuz Development nailed the details and the deadlines.", name: "M. Rivera", role: "Product Lead, Consumer Apps", rating: 5 },
      { quote: "Concise updates, tight sprints, and no surprises. Exactly what we needed to hit our date.", name: "J. Morgan", role: "Head of Product, Fintech", rating: 5 },
      { quote: "Architecture decisions were spot on. Performance and reliability have been rock solid.", name: "S. Ibrahim", role: "VP Engineering, Logistics", rating: 5 },
      { quote: "Design system and code quality exceeded expectations. Easy to maintain and extend.", name: "T. Almeida", role: "Design Lead, SaaS", rating: 5 },
      { quote: "They uncovered scope risks early and kept us focused on outcomes, not tickets.", name: "L. Nguyen", role: "Founder, MarTech", rating: 5 },
      { quote: "Security, CI/CD, and observability baked in. Launch was smooth and uneventful.", name: "E. Wilson", role: "CTO, Health", rating: 5 },
      { quote: "Our dashboard loads 5× faster and support tickets dropped. Couldn't ask for more.", name: "R. Silva", role: "Ops Lead, B2B", rating: 5 },
      { quote: "Clear pricing, crisp communication, and dependable delivery. We're planning phase two already.", name: "C. Romero", role: "Founder, Consumer Apps", rating: 5 },
    ],
    []
  );

  const perPage = 3;
  const pages = useMemo(() => {
    const out: typeof items[] = [];
    for (let i = 0; i < items.length; i += perPage) out.push(items.slice(i, i + perPage));
    const last = out[out.length - 1];
    if (last.length < perPage) last.push(...items.slice(0, perPage - last.length));
    return out;
  }, [items]);

  const [page, setPage] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % pages.length), 6000);
    return () => clearInterval(id);
  }, [pages.length]);

  const prev = () => setPage((p) => (p - 1 + pages.length) % pages.length);
  const next = () => setPage((p) => (p + 1) % pages.length);

  const variants = {
    enter: { opacity: 0, x: 40, scale: 0.98 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -40, scale: 0.98 },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-navy"
      style={{ minHeight: "900px", display: "flex", alignItems: "center" }}
    >
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(0,230,98,0.025) 0px, rgba(0,230,98,0.025) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(-45deg, rgba(0,230,98,0.025) 0px, rgba(0,230,98,0.025) 1px, transparent 1px, transparent 20px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Neon glow top-left */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] -z-10"
        style={{ background: "radial-gradient(circle, rgba(0,230,98,0.8) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 relative w-full z-10 py-20 md:py-28">
        {/* About us */}
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-neon/10 border border-neon/25 px-4 py-1.5 text-sm font-semibold text-neon mb-5">
            <ShieldCheck size={14} /> About Atomuz
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Atomuz Development builds fast, scalable, and reliable software products.
            From MVPs to enterprise apps, we partner with founders and teams to bring
            ambitious ideas to life with speed and precision.
          </p>
        </motion.div>

        {/* Carousel header */}
        <motion.div {...fadeUp(0.1)} className="flex items-end justify-between gap-4 mb-8">
          <h3 className="text-2xl md:text-3xl text-white font-bold">
            Trusted by founders & product teams
          </h3>
          <div className="hidden md:flex items-center gap-2 text-white/60 text-sm">
            <Star className="text-neon fill-neon" size={15} />
            <span>Average rating: 5.0</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="grid gap-5 md:grid-cols-3"
            >
              {pages[page].map((t) => (
                <motion.figure
                  key={t.name + t.role}
                  whileHover={{ y: -4, borderColor: "rgba(0,230,98,0.35)" }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-2xl border border-white/10 bg-[#060d1a] p-6 flex flex-col cursor-default"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <StarRating value={t.rating} />
                    <span className="text-[10px] uppercase tracking-widest text-neon/60 font-semibold">
                      Verified
                    </span>
                  </div>

                  <blockquote className="text-white/80 leading-relaxed flex-1 text-sm">
                    <Quote size={16} className="inline-block align-[-2px] text-neon mr-1.5" />
                    "{t.quote}"
                  </blockquote>

                  <figcaption className="mt-4 pt-4 border-t border-white/8 text-sm text-white/50">
                    <span className="font-semibold text-white/80">{t.name}</span> — {t.role}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {[prev, next].map((fn, i) => (
                <button
                  key={i}
                  onClick={fn}
                  aria-label={i === 0 ? "Previous testimonials" : "Next testimonials"}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/60 hover:text-neon hover:border-neon/40 transition-colors"
                >
                  {i === 0 ? <ArrowLeft size={15} /> : <ArrowRight size={15} />}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "w-6 bg-neon" : "w-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
        >
          {["5.0 Avg Rating","On-Time Delivery","Code Ownership","Secure Deploys","NDA Friendly","Senior Engineers"].map((b) => (
            <motion.div
              key={b}
              whileHover={{ borderColor: "rgba(0,230,98,0.4)", color: "#00e662" }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center rounded-lg border border-white/10 bg-white/4 px-3 py-2.5 text-xs text-white/60 cursor-default transition-colors"
            >
              {b}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
