"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type {
  DesignTheme,
  RoomType,
  FurnitureStyle,
  ColorScheme,
  BudgetRange,
} from "../data";

interface Selections {
  theme: DesignTheme | undefined;
  room: RoomType | undefined;
  furniture: FurnitureStyle | undefined;
  colorScheme: ColorScheme | undefined;
  budget: BudgetRange | undefined;
}

interface Props {
  selections: Selections;
}

function SummaryCard({
  label,
  title,
  description,
  children,
  delay,
}: {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="rounded-2xl border border-[#F0CDAF]/60 bg-white p-5"
    >
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#B96D56]">
        {label}
      </p>
      <h4 className="font-serif text-xl text-[#1a0f0a] mt-1">{title}</h4>
      {description && (
        <p className="text-xs text-[#7a5c52] mt-2 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}

export default function StepSummary({ selections }: Props) {
  const { theme, room, furniture, colorScheme, budget } = selections;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <p className="text-sm text-[#7a5c52]">
          Here&apos;s a snapshot of your design direction. Share this with our team to get started.
        </p>
      </motion.div>

      {/* Hero preview card */}
      {theme && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden mb-6 border border-[#F0CDAF]/60"
        >
          <div className="relative h-52 md:h-64">
            <Image
              src={theme.image}
              alt={theme.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#F0CDAF]">
                Your Design Direction
              </p>
              <h3 className="font-serif text-3xl md:text-4xl text-white mt-1">
                {theme.name} {room ? `${room.name}` : ""}
              </h3>
              {budget && (
                <p className="text-sm text-white/80 mt-2">
                  {budget.label} Package · {budget.range}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Detail grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {theme && (
          <SummaryCard label="Design Theme" title={theme.name} description={theme.description} delay={0.1}>
            <div className="flex gap-1.5 mt-3">
              {theme.palette.map((c) => (
                <span key={c} className="w-6 h-6 rounded-full border border-black/10" style={{ backgroundColor: c }} />
              ))}
            </div>
          </SummaryCard>
        )}

        {room && (
          <SummaryCard label="Room Type" title={`${room.icon} ${room.name}`} description={room.description} delay={0.15} />
        )}

        {furniture && (
          <SummaryCard label="Furniture Style" title={furniture.name} description={furniture.description} delay={0.2}>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {furniture.tags.map((tag) => (
                <span key={tag} className="text-[10px] rounded-full border border-[#F0CDAF]/70 bg-[#fdf6f0] px-2.5 py-0.5 text-[#7a5c52]">
                  {tag}
                </span>
              ))}
            </div>
          </SummaryCard>
        )}

        {colorScheme && (
          <SummaryCard label="Color Palette" title={colorScheme.name} description={colorScheme.description} delay={0.25}>
            <div className="flex h-8 rounded-lg overflow-hidden border border-black/5 mt-3">
              {colorScheme.colors.map((c, i) => (
                <div key={i} className="flex-1" style={{ backgroundColor: c }} />
              ))}
            </div>
          </SummaryCard>
        )}

        {budget && (
          <SummaryCard label="Budget" title={budget.range} description={budget.description} delay={0.3}>
            <ul className="mt-3 space-y-1">
              {budget.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-[#7a5c52]">
                  <svg className="w-3.5 h-3.5 text-[#B96D56] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </SummaryCard>
        )}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="mt-8 rounded-2xl border border-[#B96D56]/20 bg-[#B96D56]/5 p-6 text-center"
      >
        <h4 className="font-serif text-xl text-[#1a0f0a]">Ready to bring this to life?</h4>
        <p className="text-sm text-[#7a5c52] mt-2 max-w-lg mx-auto">
          Our design team will review your selections and prepare a personalized mood board and proposal within 48 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-5">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#B96D56] text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-[#a05c47] transition-colors duration-300"
          >
            Book a Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="inline-flex items-center gap-2 border border-[#B96D56]/30 text-[#B96D56] px-6 py-3 rounded-full text-sm hover:bg-[#B96D56]/5 transition-colors"
          >
            Share This Selection
          </button>
        </div>
      </motion.div>
    </div>
  );
}
