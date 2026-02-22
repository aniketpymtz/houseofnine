"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  { title: "The Ivory Penthouse", category: "Residential", location: "Mumbai" },
  { title: "Umber & Oak Office", category: "Commercial", location: "Bangalore" },
  { title: "Casa Serene Villa", category: "Residential", location: "Goa" },
  { title: "The Velvet Lounge", category: "Hospitality", location: "Delhi" },
  { title: "Studio Nine HQ", category: "Commercial", location: "Pune" },
  { title: "Meadowlight Retreat", category: "Residential", location: "Shimla" },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="portfolio" ref={ref} className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#B96D56] text-xs tracking-[0.3em] uppercase mb-4"
          >
            Selected Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#1a0f0a]"
          >
            Our Portfolio
          </motion.h2>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image placeholder */}
              <div className="relative w-full aspect-4/3 bg-[#fdf6f0] rounded-xl overflow-hidden border border-[#F0CDAF]/40 mb-4 transition-all duration-500 group-hover:border-[#B96D56]/30 group-hover:shadow-[0_8px_40px_rgba(185,109,86,0.10)]">
                {/* Decorative placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 border border-[#B96D56]/15 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:border-[#B96D56]/40 transition-colors duration-300">
                      <svg className="w-5 h-5 text-[#B96D56]/25 group-hover:text-[#B96D56]/50 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[#7a5c52]/30 text-xs tracking-widest uppercase">Project Photo</p>
                  </div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1a0f0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                  <span className="text-[#F0CDAF] text-xs tracking-widest uppercase">View Project →</span>
                </div>
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#B96D56]/15 group-hover:border-[#B96D56]/40 transition-colors duration-300" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[#1a0f0a] font-serif text-lg group-hover:text-[#B96D56] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#7a5c52] text-xs mt-1 tracking-wide">{project.category}</p>
                </div>
                <span className="text-[#7a5c52]/50 text-xs mt-1">{project.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#B96D56] border border-[#B96D56]/30 px-8 py-4 rounded-full text-sm tracking-wide hover:border-[#B96D56]/60 hover:bg-[#F0CDAF]/20 transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
