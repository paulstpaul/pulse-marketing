"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PulseIcon from "@/components/shared/PulseIcon";

const pillars = [
  { icon: "activity", text: "Aligned with IEC 60601-1-8 alarm color conventions" },
  { icon: "shield", text: "WCAG 2.1 AA contrast on every surface and state" },
  { icon: "cpu", text: "Designed for 44px minimum touch targets at the bedside" },
  { icon: "zap", text: "Tokens ship as CSS variables — works with any stack" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-white border-t border-ink-200"
      aria-labelledby="about-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden border border-ink-200 shadow-md aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=85&fit=crop"
                alt="Clinician reviewing patient data on a workstation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-transparent" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-5 bg-brand-700 text-brand-50 rounded-xl p-5 shadow-lg hidden sm:block">
              <div className="font-mono text-[10px] text-brand-300 uppercase tracking-[0.08em] mb-1">
                Design accuracy
              </div>
              <div className="text-[32px] font-semibold font-mono leading-none tracking-[-0.02em]">
                99.8<span className="text-[16px] text-brand-300">%</span>
              </div>
              <div className="text-[12px] text-brand-300 mt-1">
                token coverage
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
          >
            <div className="eyebrow mb-6">Our story</div>
            <h2
              id="about-heading"
              className="text-[clamp(28px,3.5vw,44px)] font-semibold tracking-[-0.018em] leading-[1.1] text-ink-800 mb-6"
            >
              Built for the environment where errors have consequences.
            </h2>
            <div className="space-y-4 text-[15px] text-ink-500 leading-[1.65] text-pretty">
              <p>
                Healthcare interfaces are not ordinary software. A misread value,
                an ambiguous alarm, or a labeling inconsistency can lead to
                clinical harm. Pulse exists because the tools clinicians and
                patients depend on deserve the same engineering discipline applied
                to the devices themselves.
              </p>
              <p>
                We built Pulse from the bedside up — studying monitor hardware
                conventions, EHR workflows, and patient companion apps to
                distill a design language that is calm under pressure, legible
                at distance, and operable with gloved hands.
              </p>
              <p>
                Every token, every component, every spacing decision reflects
                a healthcare constraint — not a generic SaaS aesthetic applied
                to a clinical context.
              </p>
            </div>

            <ul className="mt-8 space-y-3" role="list" aria-label="Design pillars">
              {pillars.map((p) => (
                <li key={p.text} className="flex items-start gap-3">
                  <span className="mt-0.5 w-7 h-7 rounded-md bg-brand-50 text-brand-600 grid place-items-center flex-shrink-0">
                    <PulseIcon name={p.icon} size={15} stroke={1.5} />
                  </span>
                  <span className="text-[14px] text-ink-600">{p.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
