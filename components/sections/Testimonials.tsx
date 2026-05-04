"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We evaluated three design systems before choosing Pulse. The others were built for SaaS dashboards and then adapted for healthcare. Pulse was built for clinical software from the start — the alarm color conventions and IEC 60601 alignment alone saved us weeks of compliance review.",
    name: "Dr. Amara Osei",
    title: "Director of Clinical Informatics, Northfield Medical Center",
    initials: "AO",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=96&q=80&fit=crop&crop=face",
  },
  {
    quote:
      "The monospace font pairing and tabular numeral system are details that most design systems miss entirely. When you&apos;re displaying heart rate and SpO₂ side by side, you cannot have the digits jumping around as values change. Pulse gets this right without documentation — it&apos;s just the correct default.",
    name: "Renata Schilling",
    title: "Lead UX Engineer, Veridian Clinical Systems",
    initials: "RS",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=96&q=80&fit=crop&crop=face",
  },
  {
    quote:
      "We built both our bedside monitoring UI and our patient companion app on Pulse. The same token layer across both products means the color patient-facing screens feel instantly familiar to the clinical-facing screens. That consistency reduces cognitive load for staff and patients alike.",
    name: "Priya Krishnamurthy",
    title: "Head of Product Design, NovaBed Technologies",
    initials: "PK",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=96&q=80&fit=crop&crop=face",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-brand-900"
      aria-labelledby="testimonials-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <div
            className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.10em] uppercase font-semibold text-brand-400 mb-4"
          >
            <span className="w-6 h-px bg-current" />
            From the field
          </div>
          <h2
            id="testimonials-heading"
            className="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-0.020em] leading-[1.05] text-brand-50"
          >
            What clinical teams say.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={cardVariants}
              className="bg-brand-800 border border-brand-700 rounded-xl p-7 flex flex-col gap-6"
            >
              {/* Quote mark */}
              <svg
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M0 20V12.8C0 9.0667 0.906667 5.8 2.72 3C4.57333 0.199999 7.21333-0.866668 10.64 0.399999L9.36 3.44C8.18667 3.01333 7.08 3.14667 6.04 3.84C5.04 4.5 4.29333 5.49333 3.8 6.82C3.34667 8.10667 3.12 9.45333 3.12 10.86H7.2V20H0ZM16.8 20V12.8C16.8 9.0667 17.7067 5.8 19.52 3C21.3733 0.199999 24.0133-0.866668 27.44 0.399999L26.16 3.44C24.9867 3.01333 23.88 3.14667 22.84 3.84C21.84 4.5 21.0933 5.49333 20.6 6.82C20.1467 8.10667 19.92 9.45333 19.92 10.86H24V20H16.8Z"
                  fill="#1D6FB8"
                />
              </svg>

              <p className="text-[15px] text-brand-200 leading-[1.65] flex-1">
                {t.quote}
              </p>

              <footer className="flex items-center gap-3 pt-4 border-t border-brand-700">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-brand-600 flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-brand-50">{t.name}</div>
                  <div className="text-[12px] text-brand-400 leading-snug mt-0.5">{t.title}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
