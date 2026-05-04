"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Pulse specific to a particular framework or component library?",
    a: "No. The core of Pulse is a set of CSS variables and design tokens that work with any stack — React, Vue, Angular, or plain CSS. The React component library is built on top of those tokens and is optional. You can adopt the tokens alone and build your own components if your codebase requires it.",
  },
  {
    q: "How does Pulse handle FDA Software as a Medical Device (SaMD) requirements?",
    a: "Pulse provides a compliant design foundation — IEC 60601-1-8 alarm color conventions, WCAG 2.1 AA contrast ratios, and 44px minimum touch targets — but it is not itself an FDA submission artifact. Your team remains responsible for the UX design history file, usability engineering per IEC 62366, and submission documentation. Pulse reduces design-level risk; it does not replace regulatory process.",
  },
  {
    q: "Can Pulse be used for patient-facing apps, not just clinician interfaces?",
    a: "Yes. The system includes a comfortable-density mode and larger touch targets specifically for consumer health contexts. The same token layer powers both the clinician-dense and patient-simple register — ensuring visual consistency across products without duplicating the design language.",
  },
  {
    q: "What is the difference between Pulse tokens and Pulse components?",
    a: "Tokens are the raw design values — colors, fonts, spacing, radius, and shadows — expressed as CSS variables. Components are opinionated React implementations wired to those tokens. You can use tokens without components, but components always depend on the token layer. This separation means you can adopt Pulse incrementally.",
  },
  {
    q: "Does Pulse support right-to-left (RTL) layouts?",
    a: "The token layer is direction-agnostic. The React component library uses CSS logical properties (start/end rather than left/right) for layout-sensitive values. RTL rendering has been tested on the core form controls and navigation patterns. Complex data-visualization components (waveforms, vitals tiles) require additional RTL consideration at the application level.",
  },
  {
    q: "How do I contribute or report a clinical convention error?",
    a: "Pulse is maintained as an open design system. Clinical convention issues — such as an alarm color that deviates from IEC 60601-1-8, or a vital-sign color that conflicts with your hardware monitor standard — are treated as high-priority issues. Open an issue in the repository with the clinical standard reference and the deviation observed.",
  },
  {
    q: "What license does Pulse ship under?",
    a: "Pulse is released under the MIT license. You can use it in commercial, clinical, and proprietary products without attribution requirements. Contributions back to the system are welcome and reviewed with the same clinical precision standard applied to the original codebase.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-ink-50 border-t border-ink-200"
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow mb-4">FAQ</div>
            <h2
              id="faq-heading"
              className="text-[clamp(28px,3.5vw,44px)] font-semibold tracking-[-0.018em] leading-[1.1] text-ink-800 mb-4"
            >
              Common questions.
            </h2>
            <p className="text-[15px] text-ink-500 leading-[1.65] text-pretty">
              Clinical contexts raise questions that generic design system FAQs
              don&apos;t answer. These are the ones we hear most often.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl border border-ink-200 px-6 divide-y-0">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.q}</AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
