"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&fit=crop",
    alt: "Clinician at a patient monitoring workstation with multiple vital signs displayed",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80&fit=crop",
    alt: "Digital health dashboard showing patient metrics and clinical data",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop",
    alt: "Medical monitoring equipment with digital waveform display",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1614308457932-e46f0d4a37aa?w=600&q=80&fit=crop",
    alt: "Healthcare professional reviewing patient records on tablet",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&q=80&fit=crop",
    alt: "Patient health app showing vitals and medication schedule",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&q=80&fit=crop",
    alt: "Nurse using electronic health record system at workstation",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80&fit=crop",
    alt: "Medical device interface showing real-time patient monitoring data",
    span: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-white border-t border-ink-200"
      aria-labelledby="gallery-heading"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <div className="eyebrow mb-4">Showcase</div>
          <h2
            id="gallery-heading"
            className="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-0.020em] leading-[1.05] mb-4 text-ink-800"
          >
            Designed for the context that matters.
          </h2>
          <p className="text-[17px] text-ink-500 leading-[1.6] text-pretty">
            Pulse components compose into clinical interfaces that are
            immediately legible to the people using them — whether at a bedside
            workstation, on a tablet round, or on a patient&apos;s phone.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3"
        >
          {galleryItems.map((item, i) => (
            <motion.figure
              key={i}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-xl border border-ink-200 bg-ink-100 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 320px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
