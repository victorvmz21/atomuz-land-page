"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Users,
  BarChart3,
  Rocket,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, delay },
});

const inputClass =
  "w-full rounded-xl border border-white/15 bg-[#060d1a] text-white placeholder-white/35 " +
  "pl-12 pr-5 py-4 focus:border-neon focus:ring-2 focus:ring-neon/20 focus:outline-none " +
  "transition-all duration-200 text-sm";

export default function FinalCTA() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStatus("success");
    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#060d1a] overflow-hidden pb-32">
      {/* Background glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-10 blur-[120px] -z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0,230,98,0.6) 0%, transparent 65%)" }}
      />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl md:text-5xl font-extrabold text-white flex flex-wrap items-center justify-center gap-3"
          >
            <motion.span
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket className="text-neon" size={36} />
            </motion.span>
            Ready to launch something you{" "}
            <span
              className="text-neon"
              style={{ textShadow: "0 0 25px rgba(0,230,98,0.4)" }}
            >
              love
            </span>
            ?
          </motion.h2>
          <motion.p
            {...fadeUp(0.06)}
            className="mt-4 text-white/60 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Tell us about your product. Our senior team will reply with a clear
            plan and roadmap tailored to your vision.
          </motion.p>
        </div>

        {/* Form */}
        <motion.form
          {...fadeUp(0.12)}
          onSubmit={handleSubmit}
          className="rounded-2xl border border-neon/20 bg-navy/60 backdrop-blur-sm p-8 md:p-12"
          style={{ boxShadow: "0 0 40px rgba(0,230,98,0.06), 0 16px 50px rgba(0,0,0,0.5)" }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="relative flex items-center">
              <span className="absolute left-4 text-white/35 pointer-events-none">
                <Users size={18} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className={inputClass}
              />
            </div>
            {/* Email */}
            <div className="relative flex items-center">
              <span className="absolute left-4 text-white/35 pointer-events-none">
                <Mail size={18} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Phone */}
          <div className="relative flex items-center mt-5">
            <span className="absolute left-4 text-white/35 pointer-events-none">
              <Phone size={18} />
            </span>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              required
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div className="relative flex items-start mt-5">
            <span className="absolute left-4 top-4 text-white/35 pointer-events-none">
              <MessageSquare size={18} />
            </span>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your project..."
              required
              className={inputClass + " resize-none"}
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end mt-8">
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,230,98,0.45)" }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#060d1a] bg-neon transition-all duration-300 disabled:opacity-50 overflow-hidden"
            >
              {/* Shimmer on hover */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.55 }}
              />
              {status === "loading" ? "Sending..." : "Send Message"}
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* Status messages */}
          <AnimatePresence>
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 text-neon font-semibold text-sm flex items-center gap-2"
              >
                ✅ Message sent successfully! We'll be in touch within 24h.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-5 text-red-400 font-semibold text-sm"
              >
                ❌ {errorMsg || "Failed to send. Please try again later."}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>

        {/* Footer perks */}
        <motion.div
          {...fadeUp(0.18)}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-white/45"
        >
          {[
            { icon: Clock, label: "Response within 24h" },
            { icon: Users, label: "Senior team" },
            { icon: BarChart3, label: "Clear milestones & demos" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={14} className="text-neon" /> {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient ramp → white footer */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04))" }}
      />
    </section>
  );
}
