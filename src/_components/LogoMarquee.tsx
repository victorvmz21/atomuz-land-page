"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/raptorLogo.png",
  "/elementaLogo.png",
  "/galvanLogo.png",
  "/adscopyaiLogo.png",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, delay },
});

export default function LogoMarquee() {
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.p {...fadeUp(0)} className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
          Some of the teams we&apos;ve worked with
        </motion.p>

        {/* Marquee */}
        <div className="relative flex overflow-hidden">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {repeatedLogos.map((src, i) => (
              <div
                key={i}
                className="shrink-0 h-14 w-36 relative flex items-center justify-center mx-8
                           grayscale opacity-40 hover:grayscale-0 hover:opacity-80 transition-all duration-400"
              >
                <Image
                  src={src}
                  alt={`client-logo-${i}`}
                  width={120}
                  height={52}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
