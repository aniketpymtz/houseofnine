"use client";

import { motion } from "framer-motion";
import { ChevronDownCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdf6f0]">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-[#F0CDAF]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-[#B96D56]/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-[#F0CDAF]/20 rounded-full blur-[80px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#B96D56 1px, transparent 1px), linear-gradient(90deg, #B96D56 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#F0CDAF]/30 border border-[#B96D56]/20 text-[#B96D56] text-xs tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#B96D56] rounded-full animate-pulse" />
          Luxury Interior Design Studio
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a0f0a] leading-[1.05] tracking-tight mb-6"
        >
          Where Spaces
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B96D56] via-[#F0CDAF] to-[#B96D56]">
            Tell Stories
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-[#7a5c52] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6"
        >
          We craft bespoke interiors that reflect your essence — blending
          timeless elegance with contemporary vision for spaces that inspire.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-3 bg-[#B96D56] text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide hover:bg-[#F0CDAF] hover:text-[#1a0f0a] transition-all duration-300 hover:shadow-[0_0_40px_rgba(185,109,86,0.25)]"
          >
            View Our Work
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[#B96D56] border border-[#B96D56]/30 px-8 py-4 rounded-full text-sm tracking-wide hover:border-[#B96D56]/60 hover:bg-[#F0CDAF]/20 transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>

        {/* Scroll hint */}
      </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[#7a5c52]/60 text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-linear-to-b from-[#B96D56]/50 to-transparent"
          />
          <ChevronDownCircle className="w-4 h-4 text-[#B96D56]/50 animate-bounce" />
        </motion.div>
    </section>
  );
}
