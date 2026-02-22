"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "9+", label: "Years of Excellence" },
  { value: "240+", label: "Projects Completed" },
  { value: "18", label: "Design Awards" },
  { value: "100%", label: "Client Satisfaction" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[#B96D56] text-xs tracking-[0.3em] uppercase mb-4"
            >
              Our Philosophy
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-serif text-4xl md:text-5xl text-[#1a0f0a] leading-tight mb-6"
            >
              Design is the silent
              <br />
              <span className="text-[#B96D56]">ambassador</span> of your brand
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[#7a5c52] leading-relaxed text-base mb-5"
            >
              House of Nine was founded on the belief that every space holds
              untold potential. We are a boutique interior design studio that
              transforms homes, offices, and commercial spaces into living works
              of art — balancing beauty, function, and personal narrative.
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-[#7a5c52] leading-relaxed text-base mb-8"
            >
              Our multidisciplinary team brings together architecture,
              furniture design, and styling under one roof, ensuring every
              detail speaks with intention.
            </motion.p>
            <motion.a
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              href="#services"
              className="inline-flex items-center gap-2 text-[#B96D56] text-sm tracking-wide border-b border-[#B96D56]/40 pb-1 hover:border-[#B96D56] transition-colors duration-300"
            >
              Explore our services →
            </motion.a>
          </div>

          {/* Right — image placeholder + stats */}
          <div className="flex flex-col gap-8">
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-[#fdf6f0] border border-[#F0CDAF]/40"
            >
              {/* Decorative interior image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border border-[#B96D56]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-7 h-7 text-[#B96D56]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-[#7a5c52]/40 text-xs tracking-widest uppercase">Studio Image</p>
                </div>
              </div>
              {/* decorative corner accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#B96D56]/20" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#B96D56]/20" />
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 2}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="bg-white border border-[#F0CDAF]/50 rounded-xl p-5 hover:border-[#B96D56]/30 transition-colors duration-300 shadow-sm"
                >
                  <p className="font-serif text-3xl text-[#B96D56] mb-1">{stat.value}</p>
                  <p className="text-[#7a5c52] text-xs tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
