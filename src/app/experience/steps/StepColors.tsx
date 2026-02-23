"use client";

import { motion } from "framer-motion";
import type { ColorScheme } from "../data";

interface Props {
  schemes: ColorScheme[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function StepColors({ schemes, selected, onSelect }: Props) {
  return (
    <div>
      <p className="text-sm text-[#7a5c52] mb-5">
        Pick the color palette that sets the right mood.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {schemes.map((scheme, i) => {
          const active = selected === scheme.id;
          return (
            <motion.button
              key={scheme.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
              whileHover={{ y: -3 }}
              onClick={() => onSelect(scheme.id)}
              className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                active
                  ? "border-[#B96D56] ring-2 ring-[#B96D56]/20 bg-white shadow-lg shadow-[#B96D56]/10"
                  : "border-[#F0CDAF]/60 bg-white hover:border-[#B96D56]/40 shadow-sm"
              }`}
            >
              {/* Color swatches */}
              <div className="flex h-20 rounded-xl overflow-hidden border border-black/5">
                {scheme.colors.map((color, ci) => (
                  <div
                    key={ci}
                    className="flex-1 transition-all duration-300"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg text-[#1a0f0a]">{scheme.name}</h3>
                  {active && (
                    <motion.div
                      layoutId="color-check"
                      className="w-6 h-6 rounded-full bg-[#B96D56] flex items-center justify-center"
                    >
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#B96D56] mt-1">
                  {scheme.mood}
                </p>
                <p className="text-xs text-[#7a5c52] mt-2 leading-relaxed">
                  {scheme.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
