"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Am I a candidate for joint replacement?",
    a: "Candidacy depends on the severity of your arthritis, your pain level, and how much your daily function is affected. If conservative treatments like physical therapy, injections, or medications have not provided lasting relief, a consultation can clarify whether replacement is the right next step.",
  },
  {
    q: "What is the Muscle/Tendon Sparing Subvastus approach for knee replacement?",
    a: "This technique works below the quadriceps tendon rather than cutting through it. By sparing this critical structure, patients typically experience less post-operative pain, better early quad function, and a more natural feel in the knee, while still achieving the same precision and implant longevity as a standard approach.",
  },
  {
    q: "What is the Bikini Incision Anterior Approach for hip replacement?",
    a: "This minimally invasive technique approaches the hip from the front, working between natural muscle planes instead of cutting through them. The incision is placed along a natural skin crease for a cosmetically favorable result. Benefits include faster recovery, fewer post-operative restrictions, and a lower risk of dislocation.",
  },
  {
    q: "What makes robotic-assisted surgery different?",
    a: "Robotic assistance uses pre-operative 3D imaging to build a surgical plan customized to your anatomy, then guides placement with precision during the procedure. This means more accurate implant positioning, better joint balance, and a more predictable recovery, while I remain fully in control throughout the surgery.",
  },
  {
    q: "How long is recovery after joint replacement?",
    a: "Most patients walk the same day of surgery. Many return to driving within 2–4 weeks and to light activity within 6–8 weeks. Full return to sports or strenuous activity is typically 3–6 months depending on your procedure and overall health.",
  },
  {
    q: "How long do joint replacements last?",
    a: "Modern implants are engineered for long-term durability. Studies show 90–95% of replacements remain functional at 15–20 years. Factors like activity level, weight, and implant selection all play a role. I'll help you choose the right implant for your anatomy and goals.",
  },
  {
    q: "Where will my surgery be performed?",
    a: "Surgery is performed at Elmhurst Hospital, Plainfield Surgical Center, or Edwards Hospital, depending on your procedure and health profile. Many patients qualify for same-day or next-day discharge through our rapid recovery program.",
  },
  {
    q: "What should I expect at my first consultation?",
    a: "You'll meet directly with Dr. Ahmed, not a physician assistant or rotating provider. We'll review your imaging, discuss your symptoms and goals, and walk through your options in plain language. You'll leave with a clear picture of whether surgery is right for you and exactly what the process looks like.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-16 sm:py-20 lg:py-28"
      style={{ background: "#F8F7F4" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16 items-start">

          {/* Left: heading + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:sticky lg:top-36"
          >
            <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
              Patient FAQ
            </p>
            <h2
              className="text-[#061B33] leading-[1.1] font-bold mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.9rem,3.2vw,2.8rem)",
              }}
            >
              Questions we hear most.
            </h2>
            <p className="text-[#061B33]/55 text-[14px] sm:text-[15px] leading-relaxed mb-8">
              Can&rsquo;t find your answer? A one-on-one consultation is the best way to get
              answers specific to your situation.
            </p>
            <a
              href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] font-bold px-6 py-3 rounded text-[12px] tracking-[0.1em] uppercase transition-all duration-200 shadow-sm hover:shadow-[0_6px_24px_rgba(200,162,90,0.3)]"
            >
              Request a Consultation
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
              </svg>
            </a>
          </motion.div>

          {/* Right: accordion */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "#fff",
                  border: open === i ? "1px solid rgba(200,162,90,0.35)" : "1px solid rgba(6,27,51,0.07)",
                  boxShadow: open === i ? "0 4px 20px rgba(200,162,90,0.1)" : "0 1px 4px rgba(6,27,51,0.04)",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className="font-semibold text-[15px] leading-snug"
                    style={{ color: open === i ? "#061B33" : "rgba(6,27,51,0.78)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: open === i ? "#C8A25A" : "rgba(6,27,51,0.06)",
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={open === i ? "#061B33" : "#C8A25A"}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px mb-4" style={{ background: "rgba(6,27,51,0.06)" }} />
                        <p className="text-[#061B33]/65 text-[14px] leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Bottom CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-xl p-6 mt-4"
              style={{
                background: "linear-gradient(135deg, #061B33 0%, #071D49 100%)",
                border: "1px solid rgba(200,162,90,0.2)",
              }}
            >
              <p className="text-[#C8A25A] text-[11px] tracking-[0.2em] uppercase font-bold mb-2">
                Still have questions?
              </p>
              <p className="text-white/70 text-[14px] leading-relaxed mb-4">
                Every patient is different. Let&rsquo;s discuss your specific situation and find the right path forward together.
              </p>
              <a
                href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] font-bold px-5 py-2.5 rounded text-[12px] tracking-[0.08em] uppercase transition-all duration-200"
              >
                Schedule a Consultation
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
