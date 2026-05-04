"use client";

import { motion } from "framer-motion";

const typeScale = [
  { name: "Display",  size: 64, lh: 1.04, weight: 600, tracking: "-0.020em", use: "Hero pages, marketing only" },
  { name: "H1",       size: 44, lh: 1.10, weight: 600, tracking: "-0.018em", use: "Page title" },
  { name: "H2",       size: 32, lh: 1.15, weight: 600, tracking: "-0.014em", use: "Section heading" },
  { name: "H3",       size: 24, lh: 1.22, weight: 600, tracking: "-0.010em", use: "Subsection" },
  { name: "H4",       size: 18, lh: 1.30, weight: 600, tracking: "-0.005em", use: "Card / form heading" },
  { name: "Body L",   size: 17, lh: 1.55, weight: 400, tracking: "0",        use: "Reading prose, patient-facing" },
  { name: "Body",     size: 15, lh: 1.55, weight: 400, tracking: "0",        use: "Default body text" },
  { name: "Body S",   size: 13, lh: 1.50, weight: 400, tracking: "0",        use: "Secondary metadata" },
  { name: "Caption",  size: 12, lh: 1.40, weight: 500, tracking: "0.01em",   use: "Labels, helper" },
  { name: "Overline", size: 11, lh: 1.30, weight: 600, tracking: "0.10em",   use: "Eyebrows, all-caps" },
];

const SAMPLE = "Patient's resting heart rate stabilized at 72 bpm.";

export default function TypographySection() {
  return (
    <section
      id="typography"
      className="py-24 lg:py-32 bg-ink-50 border-t border-ink-200"
      aria-labelledby="type-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <div className="eyebrow mb-4">02 — Foundations</div>
          <h2
            id="type-heading"
            className="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-0.020em] leading-[1.05] mb-4 text-ink-800"
          >
            Typography
          </h2>
          <p className="text-[17px] text-ink-500 leading-[1.6] text-pretty">
            Inter Tight for UI — a geometric sans with tight x-height for
            dense data. JetBrains Mono for vitals readouts, dose codes, and
            tabular numerics where character widths must lock.
          </p>
        </motion.div>

        {/* Font pairing */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 gap-4 mb-12"
        >
          <div className="bg-white border border-ink-200 rounded-xl p-6">
            <div className="flex justify-between items-baseline mb-4 pb-4 border-b border-ink-100">
              <div className="text-[18px] font-semibold font-sans">Inter Tight</div>
              <code className="text-[11px] text-ink-400 font-mono">Geometric sans · 400/500/600</code>
            </div>
            <div className="text-[96px] font-semibold leading-none tracking-[-0.03em] text-ink-800">Aa</div>
            <div className="mt-4 text-[13px] text-ink-400 leading-[1.7] font-sans">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 — () [] — × ÷
            </div>
          </div>

          <div className="bg-white border border-ink-200 rounded-xl p-6">
            <div className="flex justify-between items-baseline mb-4 pb-4 border-b border-ink-100">
              <div className="text-[18px] font-semibold font-mono">JetBrains Mono</div>
              <code className="text-[11px] text-ink-400 font-mono">Monospace · 400/500/600</code>
            </div>
            <div className="text-[96px] font-medium leading-none tracking-[-0.02em] text-ink-800 font-mono">72</div>
            <div className="mt-4 text-[13px] text-ink-400 leading-[1.7] font-mono">
              0123456789  bpm  mmHg<br />
              SpO₂ 98%  Temp 37.0°C<br />
              ──────────────────────
            </div>
          </div>
        </motion.div>

        {/* Type scale table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white border border-ink-200 rounded-xl overflow-hidden"
          role="table"
          aria-label="Type scale"
        >
          <div
            className="hidden sm:grid gap-4 px-5 py-3 bg-ink-50 border-b border-ink-200 font-mono text-[10px] text-ink-400 uppercase tracking-[0.08em]"
            style={{ gridTemplateColumns: "90px 80px 60px 1fr 180px" }}
            role="row"
          >
            <div role="columnheader">Token</div>
            <div role="columnheader">Size / LH</div>
            <div role="columnheader">Weight</div>
            <div role="columnheader">Sample</div>
            <div role="columnheader">Use</div>
          </div>

          {typeScale.map((t, i) => (
            <div
              key={t.name}
              className={`grid gap-4 px-5 py-4 items-center border-b border-ink-100 last:border-b-0 sm:grid-cols-[90px_80px_60px_1fr_180px] ${i % 2 === 0 ? "bg-white" : "bg-ink-25"}`}
              role="row"
            >
              <div className="font-mono text-[11px] text-brand-600" role="cell">{t.name}</div>
              <div className="font-mono text-[11px] text-ink-500" role="cell">
                {t.size}/{Math.round(t.size * t.lh)}
              </div>
              <div className="font-mono text-[11px] text-ink-500" role="cell">{t.weight}</div>
              <div
                className="text-ink-800 overflow-hidden text-ellipsis whitespace-nowrap"
                style={{ fontSize: Math.min(t.size, 32), lineHeight: t.lh, fontWeight: t.weight, letterSpacing: t.tracking }}
                role="cell"
              >
                {SAMPLE}
              </div>
              <div className="text-[12px] text-ink-400 hidden sm:block" role="cell">{t.use}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
