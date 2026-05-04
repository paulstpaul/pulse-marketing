"use client";

import { motion } from "framer-motion";
import PulseIcon from "@/components/shared/PulseIcon";

const features = [
  {
    icon: "drop",
    title: "Clinical color system",
    body: "A 10-step brand ramp in cool navy blue, paired with IEC 60601-1-8 compliant alarm colors. Critical red, warning amber, and stable green — grounded in hardware monitor conventions.",
    tag: "38 tokens",
  },
  {
    icon: "activity",
    title: "Typography for vitals",
    body: "Inter Tight for UI density. JetBrains Mono for numeric readouts, dose codes, and tabular data where character widths must be fixed. A 10-step scale from Overline to Display.",
    tag: "10-step scale",
  },
  {
    icon: "layers",
    title: "Production components",
    body: "Buttons, form inputs, toggles, badges, alarm strips, vitals tiles, patient cards, and 24 stroked icons. Every component targets 44px minimum touch regions for bedside use.",
    tag: "12+ components",
  },
  {
    icon: "shield",
    title: "WCAG 2.1 AA accessible",
    body: "All contrast ratios tested at standard and large text thresholds. Focus rings, ARIA roles, and keyboard navigation built into every interactive component by default.",
    tag: "Accessibility-first",
  },
  {
    icon: "monitor",
    title: "Clinical conventions",
    body: "Vital-sign waveform colors match hardware monitor standards (ECG green, SpO₂ blue, NIBP violet). Status semantics align with alarm classification — not repurposed for UI decoration.",
    tag: "Hardware-aligned",
  },
  {
    icon: "moon",
    title: "Dark mode support",
    body: "A full dark-mode token set engineered for low-light clinical environments. Surfaces dim without losing contrast. Accent hues remain readable against dark backgrounds.",
    tag: "Built-in",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Features() {
  return (
    <section
      id="components"
      className="py-24 lg:py-32 bg-ink-50"
      aria-labelledby="features-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <div className="eyebrow mb-4">04 — Components</div>
          <h2
            id="features-heading"
            className="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-0.020em] leading-[1.05] mb-4 text-ink-800"
          >
            Every token you need.<br />None you don&apos;t.
          </h2>
          <p className="text-[17px] text-ink-500 leading-[1.6] text-pretty">
            Pulse ships the minimum vocabulary for a complete clinical interface
            — color, type, spacing, and components — tuned for the context where
            precision matters most.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((f) => (
            <motion.article
              key={f.title}
              variants={cardVariants}
              className="group bg-white border border-ink-200 rounded-xl p-6 flex flex-col gap-4 hover:border-brand-300 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <span className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 grid place-items-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                  <PulseIcon name={f.icon} size={20} stroke={1.5} />
                </span>
                <span className="font-mono text-[10px] text-ink-400 bg-ink-50 border border-ink-200 px-2 py-1 rounded-pill">
                  {f.tag}
                </span>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-ink-800 tracking-[-0.005em] mb-2">
                  {f.title}
                </h3>
                <p className="text-[14px] text-ink-500 leading-[1.6] text-pretty">
                  {f.body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
