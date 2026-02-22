"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We begin with a deep conversation about your vision, lifestyle, budget, and timeline. This shapes the entire design direction.",
  },
  {
    number: "02",
    title: "Concept & Moodboard",
    description:
      "Our designers craft a visual concept — mood boards, colour palettes, and spatial sketches — for your feedback and approval.",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Full drawings, 3D renders, material selections and furniture plans are developed into a comprehensive design package.",
  },
  {
    number: "04",
    title: "Execution & Handover",
    description:
      "We manage contractors, deliveries, and on-site supervision. You walk into a finished space — perfect, punctual, polished.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" ref={ref} className="bg-[#faf8f5] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#B96D56] text-xs tracking-[0.3em] uppercase mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#1a0f0a]"
          >
            Our Process
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#B96D56]/30 via-[#F0CDAF]/30 to-transparent" />

          <div className="flex flex-col gap-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-3 h-3 bg-[#B96D56] rounded-full shadow-[0_0_12px_rgba(185,109,86,0.4)]" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] bg-white border border-[#F0CDAF]/50 rounded-2xl p-8 hover:border-[#B96D56]/25 transition-colors duration-300 shadow-sm ${
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <span className="text-[#F0CDAF] font-serif text-4xl font-light block mb-4">{step.number}</span>
                  <h3 className="font-serif text-2xl text-[#1a0f0a] mb-3">{step.title}</h3>
                  <p className="text-[#7a5c52] text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
