"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  designThemes,
  roomTypes,
  furnitureStyles,
  colorSchemes,
  budgetRanges,
  stepLabels,
} from "./data";
import StepTheme from "./steps/StepTheme";
import StepRoom from "./steps/StepRoom";
import StepFurniture from "./steps/StepFurniture";
import StepColors from "./steps/StepColors";
import StepBudget from "./steps/StepBudget";
import StepSummary from "./steps/StepSummary";

const TOTAL_STEPS = stepLabels.length;

export default function ExperiencePage() {
  const [step, setStep] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedFurniture, setSelectedFurniture] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  const canContinue = useMemo(() => {
    switch (step) {
      case 0: return !!selectedTheme;
      case 1: return !!selectedRoom;
      case 2: return !!selectedFurniture;
      case 3: return !!selectedColor;
      case 4: return !!selectedBudget;
      default: return false;
    }
  }, [step, selectedTheme, selectedRoom, selectedFurniture, selectedColor, selectedBudget]);

  const summarySelections = useMemo(
    () => ({
      theme: designThemes.find((t) => t.id === selectedTheme),
      room: roomTypes.find((r) => r.id === selectedRoom),
      furniture: furnitureStyles.find((f) => f.id === selectedFurniture),
      colorScheme: colorSchemes.find((c) => c.id === selectedColor),
      budget: budgetRanges.find((b) => b.id === selectedBudget),
    }),
    [selectedTheme, selectedRoom, selectedFurniture, selectedColor, selectedBudget]
  );

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const restart = () => {
    setStep(0);
    setSelectedTheme(null);
    setSelectedRoom(null);
    setSelectedFurniture(null);
    setSelectedColor(null);
    setSelectedBudget(null);
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_right,#F0CDAF30,transparent_40%),linear-gradient(to_bottom,#fdf6f0,#f9f4ef)]">
      {/* ── Top navigation bar ── */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#F0CDAF]/40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-serif text-lg text-[#1a0f0a] group-hover:text-[#B96D56] transition-colors">
              House of Nine
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs text-[#7a5c52]">
              Step {step + 1} of {TOTAL_STEPS}
            </span>
            <div className="w-32 h-1.5 rounded-full bg-[#F0CDAF]/40 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#B96D56]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
          <Link
            href="/"
            className="text-sm text-[#B96D56] hover:text-[#a05c47] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[#B96D56]">
            Experience Center
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a0f0a] mt-3">
            Design Your Space
          </h1>
          <p className="text-[#7a5c52] mt-3 max-w-2xl mx-auto">
            Walk through our interactive guide to discover your ideal interior style.
            Make selections at each step and receive a personalized design direction.
          </p>
        </motion.div>

        {/* ── Step indicators ── */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 mb-10 overflow-x-auto pb-2">
          {stepLabels.map((label, i) => {
            const isActive = i === step;
            const isComplete = i < step;
            return (
              <button
                key={label}
                onClick={() => {
                  if (i < step) setStep(i);
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#B96D56] text-white shadow-md shadow-[#B96D56]/20"
                    : isComplete
                    ? "bg-[#F0CDAF]/30 text-[#B96D56] cursor-pointer hover:bg-[#F0CDAF]/50"
                    : "bg-[#fdfaf7] text-[#7a5c52]/50 border border-[#F0CDAF]/40"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? "bg-white/20"
                      : isComplete
                      ? "bg-[#B96D56] text-white"
                      : "bg-[#F0CDAF]/30"
                  }`}
                >
                  {isComplete ? (
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </button>
            );
          })}
        </div>

        {/* ── Step title ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-[#1a0f0a]">
              {step < TOTAL_STEPS - 1
                ? `Step ${step + 1}: ${stepLabels[step]}`
                : "Your Design Summary"}
            </h2>
          </motion.div>
        </AnimatePresence>

        {/* ── Step content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {step === 0 && (
              <StepTheme themes={designThemes} selected={selectedTheme} onSelect={setSelectedTheme} />
            )}
            {step === 1 && (
              <StepRoom rooms={roomTypes} selected={selectedRoom} onSelect={setSelectedRoom} />
            )}
            {step === 2 && (
              <StepFurniture styles={furnitureStyles} selected={selectedFurniture} onSelect={setSelectedFurniture} />
            )}
            {step === 3 && (
              <StepColors schemes={colorSchemes} selected={selectedColor} onSelect={setSelectedColor} />
            )}
            {step === 4 && (
              <StepBudget budgets={budgetRanges} selected={selectedBudget} onSelect={setSelectedBudget} />
            )}
            {step === 5 && (
              <StepSummary selections={summarySelections} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* ── Navigation buttons ── */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            {step > 0 && (
              <button
                onClick={back}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#F0CDAF]/70 text-[#7a5c52] hover:border-[#B96D56]/50 hover:text-[#B96D56] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {step === TOTAL_STEPS - 1 ? (
              <button
                onClick={restart}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B96D56] text-white hover:bg-[#a05c47] transition-colors shadow-lg shadow-[#B96D56]/20"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Start Over
              </button>
            ) : (
              <button
                onClick={next}
                disabled={!canContinue}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B96D56] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#a05c47] transition-colors shadow-lg shadow-[#B96D56]/20"
              >
                {step === TOTAL_STEPS - 2 ? "View Summary" : "Continue"}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ── Mobile progress ── */}
        <div className="sm:hidden mt-6">
          <div className="w-full h-1.5 rounded-full bg-[#F0CDAF]/40 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-[#B96D56]"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-[#7a5c52] text-center mt-2">
            Step {step + 1} of {TOTAL_STEPS}
          </p>
        </div>
      </div>
    </main>
  );
}