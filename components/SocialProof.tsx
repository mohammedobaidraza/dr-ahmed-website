"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Verified Patient",
    date: "May 16, 2026",
    rating: 5,
    text: "I had Dr. Ahmed at his previous hospital. He did a great job on my left knee replacement and I wanted him to do my right knee. Well pleased with the outcome.",
    source: "Endeavor Health",
  },
  {
    name: "Verified Patient",
    date: "May 15, 2026",
    rating: 5,
    text: "Dr. Ahmed was very kind & patient with me. I did not feel rushed thru the appointment or that he had to hurry to get to the next patient. He answered my multitude of questions & I am very grateful for that!",
    source: "Endeavor Health",
  },
  {
    name: "Verified Patient",
    date: "May 9, 2026",
    rating: 5,
    text: "First meeting with him — pleasant, informative, good listener, very knowledgeable and happy I chose him for my upcoming knee replacement surgery!",
    source: "Endeavor Health",
  },
  {
    name: "Verified Patient",
    date: "May 2, 2026",
    rating: 5,
    text: "Great experience with Dr. Mohammed M. Ahmed. He did my knee injection and removed fluid quickly and smoothly. Very helpful, explained everything clearly, and made me feel comfortable. Friendly staff too — highly recommend!",
    source: "Endeavor Health",
  },
  {
    name: "Verified Patient",
    date: "May 19, 2026",
    rating: 5,
    text: "Dr. Ahmed was excellent, very knowledgeable, kind and very efficient. I would highly recommend him.",
    source: "Endeavor Health",
  },
  {
    name: "Verified Patient",
    date: "March 28, 2026",
    rating: 5,
    text: "Very personable and included me in planning my care.",
    source: "Endeavor Health",
  },
  {
    name: "Verified Patient",
    date: "April 16, 2026",
    rating: 5,
    text: "The doctor was very patient and answered all my questions.",
    source: "Endeavor Health",
  },
  {
    name: "Verified Patient",
    date: "June 8, 2026",
    rating: 5,
    text: "When I call the office, I get excellent service from the staff when scheduling appointments or if I have questions.",
    source: "Endeavor Health",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#C8A25A">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section
      id="reviews"
      style={{
        background: "#F8F7F4",
        borderTop: "1px solid rgba(6,27,51,0.08)",
        borderBottom: "1px solid rgba(6,27,51,0.08)",
      }}
    >
      {/* Header row */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">

          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-3">
              Patient Reviews — Hip &amp; Knee Replacement
            </p>
            <h2
              className="text-[#061B33] font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.6rem,2.6vw,2.2rem)",
              }}
            >
              Hear it from the people<br className="hidden sm:block" /> who've been there.
            </h2>
          </motion.div>

          {/* Right: stats + affiliations */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-wrap items-center gap-6 sm:gap-8"
          >
            {/* Rating block */}
            <div className="flex items-center gap-3">
              <span
                className="text-[#061B33] font-bold leading-none"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2.6rem" }}
              >
                4.8
              </span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map((i) => (
                    <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#C8A25A">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[#061B33]/45 text-[11px]">218 verified reviews</p>
                <p className="text-[#061B33]/35 text-[10px] tracking-[0.1em] uppercase mt-0.5 flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2.2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9,12 11,14 15,10" strokeLinecap="round"/>
                  </svg>
                  Verified · Endeavor Health
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-12 w-px bg-[#061B33]/10" />

            {/* Affiliations */}
            <div className="space-y-2">
              <p className="text-[#061B33]/35 text-[10px] tracking-[0.18em] uppercase font-semibold">
                Affiliated With
              </p>
              {[
                { name: "Cleveland Clinic", sub: "Center for Adult Reconstructive Surgery" },
                { name: "AAHKS", sub: "American Association of Hip and Knee Surgeons" },
              ].map((a) => (
                <div key={a.name} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#C8A25A]" />
                  <div>
                    <span className="text-[#061B33] font-semibold text-[12px]">{a.name}</span>
                    <span className="text-[#061B33]/40 text-[11px]"> · {a.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Auto-scrolling review ticker */}
      <div className="overflow-hidden pb-10">
        <div className="relative">
          {/* Edge fade masks */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to right, #F8F7F4, transparent)" }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
            style={{ background: "linear-gradient(to left, #F8F7F4, transparent)" }}
          />

          <div className="flex gap-4 review-ticker" style={{ width: "max-content" }}>
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="shrink-0 w-[360px] sm:w-[420px] rounded-xl px-7 py-6"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(6,27,51,0.08)",
                  boxShadow: "0 2px 12px rgba(6,27,51,0.05)",
                }}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <Stars count={review.rating} />
                  <span
                    className="text-[10px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded"
                    style={{
                      color: "#C8A25A",
                      background: "rgba(200,162,90,0.1)",
                    }}
                  >
                    {review.source}
                  </span>
                </div>
                <p className="text-[#061B33]/65 text-[14px] leading-relaxed mb-4 line-clamp-3">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div>
                  <p className="text-[#061B33] font-semibold text-[13px]">{review.name}</p>
                  <p className="text-[#061B33]/40 text-[12px]">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .review-ticker {
          animation: reviewScroll 45s linear infinite;
        }
        .review-ticker:hover {
          animation-play-state: paused;
        }
        @keyframes reviewScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
