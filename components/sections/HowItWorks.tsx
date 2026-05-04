"use client";

import { motion } from "framer-motion";
import PulseIcon from "@/components/shared/PulseIcon";

const steps = [
  {
    num: "01",
    icon: "download",
    title: "Import the token layer",
    body: "Install the Pulse package and bring in the CSS variable theme. Tokens are framework-agnostic — wire them into Tailwind, CSS-in-JS, or plain CSS in under five minutes.",
    code: `npm install @pulse/tokens\nimport '@pulse/tokens/theme.css';`,
  },
  {
    num: "02",
    icon: "layers",
    title: "Compose with components",
    body: "Drop in pre-built React components — buttons, form fields, vitals tiles, alarm badges — all typed and pre-wired to your token theme. Customize via className; override via token.",
    code: `import { VitalsCard, AlarmBadge } from '@pulse/react';\n\n<VitalsCard metric="hr" value={72} />`,
  },
  {
    num: "03",
    icon: "shield",
    title: "Validate before you ship",
    body: "Run the built-in contrast audit and touch-target checker against your UI. Pulse flags WCAG failures and sub-44px interactive elements before they reach a clinical environment.",
    code: `npx pulse audit ./src\n✓ 38 tokens · ✓ Contrast AA\n✓ 44px touch targets`,
  },
  {
    num: "04",
    icon: "zap",
    title: "Iterate with confidence",
    body: "Update a single token and every dependent surface updates. Dark mode, accent hue changes, and density shifts propagate from one place — no scattered hex values to hunt.",
    code: `/* One change, every surface */\n--b-700: oklch(32% 0.10 220);\n--accent: var(--b-700);`,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HowItWorks() {
  return (
    <section
      id="patterns"
      className="py-24 lg:py-32 bg-ink-50 border-t border-ink-200"
      aria-labelledby="how-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <div className="eyebrow mb-4">How it works</div>
          <h2
            id="how-heading"
            className="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-0.020em] leading-[1.05] mb-4 text-ink-800"
          >
            From tokens to production in four steps.
          </h2>
          <p className="text-[17px] text-ink-500 leading-[1.6] text-pretty">
            Pulse is designed to integrate without ceremony. Import, compose,
            validate, and ship — the same workflow whether you&apos;re building
            a monitor UI or a patient app.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-4 lg:gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={itemVariants}
              className="group bg-white border border-ink-200 rounded-xl overflow-hidden hover:border-brand-200 hover:shadow-md transition-all duration-200"
            >
              <div className="p-6 pb-0 flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-brand-700 text-brand-50 grid place-items-center">
                    <PulseIcon name={step.icon} size={18} stroke={1.5} />
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-brand-500 uppercase tracking-[0.10em] mb-2">
                    Step {step.num}
                  </div>
                  <h3 className="text-[16px] font-semibold text-ink-800 tracking-[-0.005em] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-ink-500 leading-[1.6] text-pretty">
                    {step.body}
                  </p>
                </div>
              </div>
              <div className="mt-5 mx-6 mb-6 bg-ink-900 rounded-lg overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.06]">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <pre className="p-4 text-[12px] font-mono text-brand-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {step.code}
                </pre>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
