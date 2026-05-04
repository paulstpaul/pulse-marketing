"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PulseIcon from "@/components/shared/PulseIcon";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const stats = [
  { label: "Foundations", value: "3" },
  { label: "Components", value: "12+" },
  { label: "Color tokens", value: "38" },
  { label: "Min touch target", value: "44px" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink-50"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #DCE2EA 1px, transparent 1px), linear-gradient(to bottom, #DCE2EA 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.35,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-brand-50/60 via-transparent to-ink-50" />

      <div className="section-container relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="eyebrow mb-6"
            >
              Pulse / v1.0 — May 2026
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[clamp(40px,5.5vw,80px)] font-semibold leading-[1.04] tracking-[-0.025em] text-ink-800 mb-6 max-w-[14ch]"
            >
              Design clinical software that{" "}
              <em className="not-italic text-brand-600">clinicians trust.</em>
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[17px] leading-[1.6] text-ink-500 max-w-[56ch] mb-8 text-pretty"
            >
              Pulse is a foundation of color, type, and components for
              healthcare interfaces — from bedside monitors and clinician
              dashboards to patient companion apps. Calm, legible, and
              engineered for accuracy under fatigue.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap gap-3"
            >
              <Button variant="primary" size="lg" asChild>
                <a href="#get-started">
                  <PulseIcon name="plus" size={18} />
                  Get access
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#components">
                  View components
                  <PulseIcon name="chev" size={18} />
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-ink-200"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-[11px] text-ink-400 uppercase tracking-[0.08em] mb-1.5">
                    {s.label}
                  </div>
                  <div className="text-[26px] font-semibold tracking-[-0.014em] text-ink-800">
                    {s.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — interface mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            {/* Mock browser chrome */}
            <div className="rounded-xl border border-ink-200 shadow-lg overflow-hidden bg-white">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-ink-100 bg-ink-25">
                <span className="w-3 h-3 rounded-full bg-ink-200" />
                <span className="w-3 h-3 rounded-full bg-ink-200" />
                <span className="w-3 h-3 rounded-full bg-ink-200" />
                <div className="ml-4 flex-1 bg-ink-100 rounded-sm h-6 px-3 flex items-center">
                  <span className="font-mono text-[11px] text-ink-400">
                    pulse.design/clinical
                  </span>
                </div>
              </div>
              {/* Screenshot */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=85&fit=crop"
                  alt="Clinical interface showing patient data visualization"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1280px) 50vw, 600px"
                />
                {/* Overlay UI elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />
                {/* Floating vital card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg border border-ink-200 shadow-md p-4 w-48">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-status-success animate-pulse-dot" />
                    <span className="text-[11px] font-mono text-ink-400 uppercase tracking-[0.08em]">Heart rate</span>
                  </div>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-[32px] font-medium text-ink-800 leading-none">72</span>
                    <span className="text-[12px] text-ink-400">bpm</span>
                  </div>
                  <svg className="w-full h-8 mt-3" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <polyline
                      points="0,18 10,16 20,20 30,14 40,16 50,10 55,18 58,5 62,22 66,14 80,16 90,12 100,14"
                      fill="none"
                      stroke="#2F8F5E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Floating alarm badge */}
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-brand-700 text-brand-50 rounded-md px-3 py-2 text-[12px] font-mono font-medium shadow-md">
                  <PulseIcon name="activity" size={14} stroke={2} />
                  SpO₂ 98% · Stable
                </div>
              </div>
            </div>

            {/* Floating color swatch */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg border border-ink-200 shadow-md p-3 flex gap-1.5">
              {["#F4F8FC","#9CC2DF","#1D6FB8","#0B3D6F","#0F1A2B"].map((c) => (
                <span
                  key={c}
                  className="w-6 h-6 rounded-sm"
                  style={{ background: c }}
                />
              ))}
            </div>

            {/* Floating type label */}
            <div className="absolute -top-4 -right-4 bg-brand-700 text-brand-50 rounded-lg px-4 py-2 shadow-md">
              <div className="font-mono text-[10px] text-brand-300 uppercase tracking-[0.08em] mb-1">Display</div>
              <div className="font-sans text-[16px] font-semibold tracking-[-0.015em]">Inter Tight</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-ink-400 uppercase tracking-[0.12em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ink-300 to-transparent" />
      </motion.div>
    </section>
  );
}
