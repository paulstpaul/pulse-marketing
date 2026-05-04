"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PulseIcon from "@/components/shared/PulseIcon";

export default function FinalCTA() {
  return (
    <section
      id="get-started"
      className="py-24 lg:py-32 bg-brand-700 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-brand-500/20 blur-[80px] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Pulse waveform icon */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-xl bg-brand-600 text-brand-50 grid place-items-center border border-brand-500/50">
              <PulseIcon name="pulse" size={28} stroke={2} />
            </div>
          </div>

          <h2
            id="cta-heading"
            className="text-[clamp(32px,5vw,64px)] font-semibold tracking-[-0.022em] leading-[1.04] text-brand-50 mb-6"
          >
            Start building with Pulse.
          </h2>
          <p className="text-[17px] text-brand-300 leading-[1.6] mb-10 max-w-[52ch] mx-auto text-pretty">
            Access the full token set, React component library, Figma file, and
            clinical reference documentation. Open-source. MIT licensed. Built
            for the stakes healthcare software actually carries.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-brand-800 hover:bg-brand-50 border-transparent text-[15px] px-6"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <PulseIcon name="download" size={18} />
                Get the system
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-brand-300 hover:text-brand-50 hover:bg-brand-600 text-[15px] px-6"
              asChild
            >
              <a href="#components">
                View documentation
                <PulseIcon name="chev" size={18} />
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-brand-600">
            {[
              { icon: "shield", text: "MIT License" },
              { icon: "check", text: "WCAG 2.1 AA" },
              { icon: "activity", text: "IEC 60601-1-8" },
              { icon: "lock", text: "No telemetry" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-[13px] text-brand-400"
              >
                <PulseIcon name={item.icon} size={14} stroke={2} />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
