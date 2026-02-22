"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-[#B96D56]/10 border border-[#B96D56]/20 w-[90vw] max-w-4xl"
          : "bg-white/70 backdrop-blur-sm border border-[#F0CDAF]/60 w-[88vw] max-w-3xl"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 group">
        <Image
          src="/logo.png"
          alt="House of Nine"
          width={50}
          height={64}
          className="object-contain drop-shadow-[0_0_6px_rgba(200,169,110,0.3)]"
          priority
        />

      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="relative px-4 py-2 text-sm text-[#1a0f0a]/70 hover:text-[#B96D56] transition-colors duration-300 tracking-wide group"
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-[#B96D56] transition-all duration-300 group-hover:w-4/5 rounded-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 bg-[#B96D56] text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide hover:bg-[#F0CDAF] hover:text-[#1a0f0a] transition-colors duration-300"
      >
        Let&apos;s Talk
      </a>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          className="block w-5 h-px bg-[#B96D56]"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-5 h-px bg-[#B96D56]"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          className="block w-5 h-px bg-[#B96D56]"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full mt-3 left-0 right-0 bg-white/98 backdrop-blur-md rounded-2xl border border-[#F0CDAF]/60 py-4 px-4 flex flex-col gap-1 md:hidden shadow-lg shadow-[#B96D56]/10"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#1a0f0a]/70 hover:text-[#B96D56] py-2 px-3 rounded-lg hover:bg-[#F0CDAF]/20 transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-[#B96D56] text-white px-4 py-2 rounded-full text-sm font-semibold text-center hover:bg-[#F0CDAF] hover:text-[#1a0f0a] transition-colors duration-300"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
