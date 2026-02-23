"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { FurnitureStyle } from "../data";

interface Props {
  styles: FurnitureStyle[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function StepFurniture({ styles, selected, onSelect }: Props) {
  return (
    <div>
      <p className="text-sm text-[#7a5c52] mb-5">
        What kind of furniture speaks to you?
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {styles.map((style, i) => {
          const active = selected === style.id;
          return (
            <motion.button
              key={style.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              whileHover={{ y: -3 }}
              onClick={() => onSelect(style.id)}
              className={`group relative rounded-2xl border overflow-hidden text-left transition-all duration-300 ${
                active
                  ? "border-[#B96D56] ring-2 ring-[#B96D56]/20 shadow-lg shadow-[#B96D56]/10"
                  : "border-[#F0CDAF]/60 hover:border-[#B96D56]/40 shadow-sm"
              }`}
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                {active && (
                  <motion.div
                    layoutId="furniture-check"
                    className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#B96D56] flex items-center justify-center"
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </div>

              <div className="p-4 bg-white">
                <h3 className="font-serif text-lg text-[#1a0f0a]">{style.name}</h3>
                <p className="text-xs text-[#7a5c52] mt-1.5 leading-relaxed line-clamp-2">
                  {style.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {style.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] rounded-full border border-[#F0CDAF]/70 bg-[#fdf6f0] px-2.5 py-0.5 text-[#7a5c52]"
                    >
                      {tag}
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
