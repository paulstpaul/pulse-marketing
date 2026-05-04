"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const brandRamp = [
  { name: "50",  hex: "#F4F8FC", dark: false },
  { name: "100", hex: "#E4EEF7", dark: false },
  { name: "200", hex: "#C8DDEE", dark: false },
  { name: "300", hex: "#9CC2DF", dark: false },
  { name: "400", hex: "#7FB3E6", dark: false },
  { name: "500", hex: "#1D6FB8", dark: true },
  { name: "600", hex: "#155A99", dark: true },
  { name: "700", hex: "#0B3D6F", dark: true },
  { name: "800", hex: "#0A2F55", dark: true },
  { name: "900", hex: "#0F1A2B", dark: true },
];

const inkRamp = [
  { name: "0",   hex: "#FFFFFF", dark: false },
  { name: "50",  hex: "#F5F7FA", dark: false },
  { name: "100", hex: "#ECEFF4", dark: false },
  { name: "200", hex: "#DCE2EA", dark: false },
  { name: "300", hex: "#B6BFCC", dark: false },
  { name: "400", hex: "#7B8696", dark: true },
  { name: "500", hex: "#525E70", dark: true },
  { name: "600", hex: "#37424F", dark: true },
  { name: "700", hex: "#202B38", dark: true },
  { name: "800", hex: "#121A24", dark: true },
  { name: "900", hex: "#0A0F16", dark: true },
];

const statusColors = [
  { name: "Critical",  hex: "#C8322B", desc: "High-priority alarm, immediate response required. IEC 60601-1-8 red.", icon: "⬤" },
  { name: "Warning",   hex: "#D88A1A", desc: "Medium-priority, operator awareness needed. IEC 60601-1-8 yellow.", icon: "⬤" },
  { name: "Stable",    hex: "#2F8F5E", desc: "Within target range, no clinical action required.", icon: "⬤" },
  { name: "Info",      hex: "#1D6FB8", desc: "Neutral system message or informational hint.", icon: "⬤" },
];

function Swatch({ name, hex, dark }: { name: string; hex: string; dark: boolean }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 900);
  };
  return (
    <button
      onClick={copy}
      className="rounded-md p-3 flex flex-col justify-between cursor-copy border border-black/[0.04] hover:-translate-y-0.5 transition-transform duration-150"
      style={{ background: hex, height: 80, color: dark ? "rgba(255,255,255,.85)" : "rgba(15,26,43,.75)" }}
      title={`Copy ${hex}`}
    >
      <span className="font-mono text-[11px] font-medium">{name}</span>
      <span className="font-mono text-[10px] opacity-70">{copied ? "copied!" : hex}</span>
    </button>
  );
}

export default function ColorSection() {
  return (
    <section
      id="color"
      className="py-24 lg:py-32 bg-white border-t border-ink-200"
      aria-labelledby="color-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <div className="eyebrow mb-4">01 — Foundations</div>
          <h2
            id="color-heading"
            className="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-0.020em] leading-[1.05] mb-4 text-ink-800"
          >
            Color
          </h2>
          <p className="text-[17px] text-ink-500 leading-[1.6] text-pretty">
            A cool, clinical palette anchored in deep navy. Blues carry hierarchy
            and brand; neutrals carry structure; status colors follow IEC 60601-1-8
            alarm conventions for hardware-adjacent contexts.
          </p>
        </motion.div>

        <div className="space-y-14">
          {/* Brand ramp */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-baseline mb-3">
              <div className="font-mono text-[11px] text-ink-400 uppercase tracking-[0.08em]">Brand ramp — primary</div>
              <div className="font-mono text-[10px] text-ink-300">10 steps · 50–900 · tap to copy</div>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
              {brandRamp.map((s) => <Swatch key={s.name} {...s} />)}
            </div>
          </motion.div>

          {/* Ink ramp */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-baseline mb-3">
              <div className="font-mono text-[11px] text-ink-400 uppercase tracking-[0.08em]">Ink — surfaces, text, borders</div>
              <div className="font-mono text-[10px] text-ink-300">11 steps · 0–900</div>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-11 gap-1.5">
              {inkRamp.map((s) => <Swatch key={s.name} {...s} />)}
            </div>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-[11px] text-ink-400 uppercase tracking-[0.08em] mb-3">
              Semantic — status &amp; alarms
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {statusColors.map((s) => (
                <div
                  key={s.name}
                  className="flex gap-3 p-4 bg-ink-50 border border-ink-200 rounded-lg"
                >
                  <span
                    className="w-8 h-8 rounded-md grid place-items-center text-white flex-shrink-0"
                    style={{ background: s.hex }}
                    aria-hidden="true"
                  >
                    <span className="text-[9px]">●</span>
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold text-[14px] text-ink-800">{s.name}</div>
                    <div className="text-[12px] text-ink-500 leading-snug mt-0.5">{s.desc}</div>
                    <div className="font-mono text-[11px] text-ink-400 mt-1.5">{s.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
