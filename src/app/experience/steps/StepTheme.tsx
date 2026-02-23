"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { DesignTheme } from "../data";

interface Props {
  themes: DesignTheme[];
  selected: string | null;
  onSelect: (id: string) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function StepTheme({ themes, selected, onSelect }: Props) {
  return (
    <div>
      <p className="text-sm text-[#7a5c52] mb-5">
        Choose the overall aesthetic that resonates with your vision.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme, i) => {
          const active = selected === theme.id;
          return (
            <motion.button
              key={theme.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -4 }}
              onClick={() => onSelect(theme.id)}
              className={`group relative rounded-2xl border overflow-hidden text-left transition-all duration-300 ${
                active
                  ? "border-[#B96D56] ring-2 ring-[#B96D56]/20 shadow-lg shadow-[#B96D56]/10"
                  : "border-[#F0CDAF]/60 hover:border-[#B96D56]/40 shadow-sm"
              }`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                {active && (
                  <motion.div
                    layoutId="theme-check"
                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#B96D56] flex items-center justify-center"
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 bg-white">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#B96D56]">
                  {theme.tagline}
                </p>
                <h3 className="font-serif text-xl text-[#1a0f0a] mt-1">{theme.name}</h3>
                <p className="text-xs text-[#7a5c52] mt-1.5 leading-relaxed line-clamp-2">
                  {theme.description}
                </p>

                {/* Palette dots */}
                <div className="flex gap-1.5 mt-3">
                  {theme.palette.map((c) => (
                    <span
                      key={c}
                      className="w-5 h-5 rounded-full border border-black/10"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {theme.features.map((f) => (
                    <span
                      key={f}
                      className="text-[10px] rounded-full border border-[#F0CDAF]/70 bg-[#fdf6f0] px-2.5 py-0.5 text-[#7a5c52]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
