"use client";

import { motion } from "framer-motion";

const logos = [
  {
    name: "MedCore Systems",
    svg: (
      <svg viewBox="0 0 120 32" fill="currentColor" aria-label="MedCore Systems">
        <rect x="0" y="11" width="10" height="10" rx="2" />
        <rect x="4" y="7" width="2" height="18" />
        <rect x="0" y="14" width="10" height="2" />
        <text x="16" y="22" fontFamily="inherit" fontSize="14" fontWeight="600" letterSpacing="-0.01em">MedCore</text>
        <text x="72" y="22" fontFamily="inherit" fontSize="14" fontWeight="400">Systems</text>
      </svg>
    ),
  },
  {
    name: "Axiom Health",
    svg: (
      <svg viewBox="0 0 120 32" fill="currentColor" aria-label="Axiom Health">
        <polygon points="12,4 20,16 12,28 4,16" />
        <text x="28" y="22" fontFamily="inherit" fontSize="14" fontWeight="600" letterSpacing="-0.01em">Axiom</text>
        <text x="75" y="22" fontFamily="inherit" fontSize="14" fontWeight="400">Health</text>
      </svg>
    ),
  },
  {
    name: "Veridian Clinical",
    svg: (
      <svg viewBox="0 0 140 32" fill="currentColor" aria-label="Veridian Clinical">
        <path d="M6 6l6 14 6-14" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" />
        <text x="22" y="22" fontFamily="inherit" fontSize="14" fontWeight="600" letterSpacing="-0.01em">Veridian</text>
        <text x="87" y="22" fontFamily="inherit" fontSize="14" fontWeight="400">Clinical</text>
      </svg>
    ),
  },
  {
    name: "NovaBed",
    svg: (
      <svg viewBox="0 0 100 32" fill="currentColor" aria-label="NovaBed">
        <circle cx="12" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="16" r="3" />
        <text x="28" y="22" fontFamily="inherit" fontSize="14" fontWeight="600" letterSpacing="-0.01em">NovaBed</text>
      </svg>
    ),
  },
  {
    name: "Caritas EHR",
    svg: (
      <svg viewBox="0 0 120 32" fill="currentColor" aria-label="Caritas EHR">
        <path d="M14 9a6 6 0 0 0-10 4.5C4 18 14 24 14 24s10-6 10-10.5A6 6 0 0 0 14 9z" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="30" y="22" fontFamily="inherit" fontSize="14" fontWeight="600" letterSpacing="-0.01em">Caritas</text>
        <text x="85" y="22" fontFamily="inherit" fontSize="14" fontWeight="400">EHR</text>
      </svg>
    ),
  },
  {
    name: "Stratagen",
    svg: (
      <svg viewBox="0 0 110 32" fill="currentColor" aria-label="Stratagen">
        <rect x="2" y="20" width="20" height="2" rx="1" />
        <rect x="6" y="14" width="12" height="2" rx="1" />
        <rect x="10" y="8" width="4" height="2" rx="1" />
        <text x="28" y="22" fontFamily="inherit" fontSize="14" fontWeight="600" letterSpacing="-0.01em">Stratagen</text>
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="border-y border-ink-200 bg-white py-10"
      aria-label="Trusted by healthcare organizations"
    >
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-mono text-[11px] text-ink-400 uppercase tracking-[0.10em] mb-8"
        >
          Trusted by clinical engineering teams across healthcare
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-ink-300 hover:text-ink-400 transition-colors duration-200"
              style={{ width: 120, height: 32 }}
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
