"use client";

import { motion } from "framer-motion";
import type { BudgetRange } from "../data";

interface Props {
  budgets: BudgetRange[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function StepBudget({ budgets, selected, onSelect }: Props) {
  return (
    <div>
      <p className="text-sm text-[#7a5c52] mb-5">
        Select a budget range so we can tailor recommendations.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {budgets.map((budget, i) => {
          const active = selected === budget.id;
          return (
            <motion.button
              key={budget.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              whileHover={{ y: -3 }}
              onClick={() => onSelect(budget.id)}
              className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                active
                  ? "border-[#B96D56] ring-2 ring-[#B96D56]/20 bg-white shadow-lg shadow-[#B96D56]/10"
                  : "border-[#F0CDAF]/60 bg-white hover:border-[#B96D56]/40 shadow-sm"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[#B96D56]">
                    {budget.label}
                  </p>
                  <h3 className="font-serif text-2xl text-[#1a0f0a] mt-1">
                    {budget.range}
                  </h3>
                </div>
                {active && (
                  <motion.div
                    layoutId="budget-check"
                    className="w-7 h-7 rounded-full bg-[#B96D56] flex items-center justify-center shrink-0"
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                )}
              </div>

              <p className="text-xs text-[#7a5c52] mt-3 leading-relaxed">
                {budget.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {budget.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#7a5c52]">
                    <svg
                      className="w-3.5 h-3.5 text-[#B96D56] shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
