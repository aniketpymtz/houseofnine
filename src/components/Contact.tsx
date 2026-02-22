"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" ref={ref} className="bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#B96D56] text-xs tracking-[0.3em] uppercase mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-[#1a0f0a] mb-4"
          >
            Let&apos;s Create Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#7a5c52] max-w-md mx-auto text-sm leading-relaxed"
          >
            Tell us about your project and we&apos;ll get back to you within 24 hours
            to arrange a complimentary discovery call.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#fdf6f0] border border-[#F0CDAF]/50 rounded-3xl p-8 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 border border-[#B96D56]/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-[#B96D56]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-[#1a0f0a] mb-2">Message Received</h3>
              <p className="text-[#7a5c52] text-sm">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#7a5c52] text-xs tracking-widest uppercase">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="bg-white border border-[#F0CDAF]/60 rounded-xl px-5 py-3.5 text-[#1a0f0a] text-sm placeholder:text-[#7a5c52]/40 focus:outline-none focus:border-[#B96D56]/50 transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#7a5c52] text-xs tracking-widest uppercase">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="bg-white border border-[#F0CDAF]/60 rounded-xl px-5 py-3.5 text-[#1a0f0a] text-sm placeholder:text-[#7a5c52]/40 focus:outline-none focus:border-[#B96D56]/50 transition-colors duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#7a5c52] text-xs tracking-widest uppercase">Project Type</label>
                <select
                  className="bg-white border border-[#F0CDAF]/60 rounded-xl px-5 py-3.5 text-[#1a0f0a] text-sm focus:outline-none focus:border-[#B96D56]/50 transition-colors duration-300 appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Spaces</option>
                  <option value="turnkey">Turnkey Project</option>
                  <option value="consultation">Consultation Only</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#7a5c52] text-xs tracking-widest uppercase">Budget Range</label>
                <select
                  className="bg-white border border-[#F0CDAF]/60 rounded-xl px-5 py-3.5 text-[#1a0f0a] text-sm focus:outline-none focus:border-[#B96D56]/50 transition-colors duration-300 appearance-none"
                >
                  <option value="">Select budget</option>
                  <option value="5-15">₹5L – ₹15L</option>
                  <option value="15-50">₹15L – ₹50L</option>
                  <option value="50+">₹50L+</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[#7a5c52] text-xs tracking-widest uppercase">Tell us about your project</label>
                <textarea
                  rows={5}
                  placeholder="Describe your vision, space size, timeline..."
                  className="bg-white border border-[#F0CDAF]/60 rounded-xl px-5 py-3.5 text-[#1a0f0a] text-sm placeholder:text-[#7a5c52]/40 focus:outline-none focus:border-[#B96D56]/50 transition-colors duration-300 resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#B96D56] text-white py-4 rounded-xl font-semibold text-sm tracking-wide hover:bg-[#F0CDAF] hover:text-[#1a0f0a] transition-colors duration-300 hover:shadow-[0_0_40px_rgba(185,109,86,0.20)]"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { label: "Email", value: "hello@houseofnine.in" },
            { label: "Phone", value: "+91 98765 43210" },
            { label: "Studio", value: "Mumbai, India" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[#B96D56] text-xs tracking-widest uppercase mb-1">{item.label}</p>
              <p className="text-[#7a5c52] text-sm">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
