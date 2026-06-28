"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    tag: "PLAN",
    detail: "Advanced imaging builds a 3D plan customized to your anatomy.",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/>
        <circle cx="17" cy="7" r="3" fill="rgba(200,162,90,0.2)" stroke="#C8A25A"/>
      </svg>
    ),
  },
  {
    number: "02",
    tag: "PERFORM",
    detail: "Robotic-arm precision helps execute the plan with accuracy and control.",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    number: "03",
    tag: "RECOVER",
    detail: "Minimally invasive techniques and modern protocols help you get back to life, sooner.",
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
];

const bioCredentials = [
  {
    label: "MEDICAL DEGREE",
    value: "University of Illinois at Chicago, College of Medicine (2010)",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    label: "RESIDENCY",
    value: "Orthopedic Surgery, Saint Louis University Hospital (2016)",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    label: "FELLOWSHIP",
    value: "Adult Reconstruction (Hip & Knee), Cleveland Clinic Foundation (2017)",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9,12 11,14 15,10" stroke="#C8A25A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "LANGUAGES",
    value: "English · Urdu",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    label: "CERTIFICATION",
    value: "Board-Certified, American Board of Orthopaedic Surgery (2019)",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/>
      </svg>
    ),
  },
];

export default function RoboticProcess() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section
      id="approach"
      className="py-16 sm:py-20 lg:py-28"
      style={{ background: "#F8F7F4" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] xl:grid-cols-[300px_1fr_320px] gap-8 lg:gap-8 items-start">

          {/* ── Col 1: heading + steps ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
              My Approach
            </p>
            <h2
              className="text-[#061B33] font-bold leading-tight mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.7rem,2.5vw,2.4rem)",
              }}
            >
              Technology is powerful.<br />
              Care is personal.
            </h2>
            <p className="text-[#061B33]/60 text-[14px] leading-relaxed mb-8">
              I combine advanced technology with a patient-first approach to deliver
              smaller, more precise surgery and a faster, more predictable recovery.
            </p>

            {/* Steps */}
            <div className="space-y-5">
              {steps.map((step, i) => (
                <motion.div
                  key={step.tag}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="flex gap-4"
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#C8A25A]"
                    style={{
                      background: "rgba(200,162,90,0.1)",
                      border: "1.5px solid rgba(200,162,90,0.3)",
                    }}
                  >
                    {step.svg}
                  </div>
                  <div className="pt-1">
                    <p className="text-[#C8A25A] text-[10px] tracking-[0.2em] uppercase font-bold mb-1">
                      {step.tag}
                    </p>
                    <p className="text-[#061B33]/65 text-[13px] leading-snug">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Col 2: video ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              height: "clamp(360px,50vw,560px)",
              background: "#000",
            }}
          >
            <video
              ref={videoRef}
              src="/assets/approach-video.mp4"
              muted
              loop
              playsInline
              controls
              className="absolute inset-0 w-full h-full object-cover object-center"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(6,27,51,0.2) 100%)" }}
              />
            )}
            {!playing && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "rgba(0,0,0,0.18)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
                  style={{
                    background: "rgba(4,15,30,0.8)",
                    border: "2px solid rgba(200,162,90,0.6)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#C8A25A">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </button>
            )}
          </motion.div>

          {/* ── Col 3: "Your Surgeon" bio ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-3">
              Your Surgeon. Your Partner.
            </p>
            <p className="text-[#061B33]/70 text-[14px] leading-relaxed mb-4">
              I believe the best outcomes start with understanding your goals. At your
              consultation, you&rsquo;ll meet with me, not a team or rotating providers.
            </p>
            <p
              className="text-[#C8A25A] text-[16px] italic mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Mohammed Ahmed, MD
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              {bioCredentials.map((cred) => (
                <div key={cred.label} className="flex gap-3 items-start">
                  <div className="shrink-0 mt-0.5">{cred.svg}</div>
                  <div>
                    <p className="text-[#061B33]/40 text-[9px] tracking-[0.18em] uppercase font-semibold mb-0.5">
                      {cred.label}
                    </p>
                    <p className="text-[#061B33]/80 text-[13px] leading-snug">{cred.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6" style={{ borderTop: "1px solid rgba(6,27,51,0.1)" }}>
              <a
                href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold px-5 py-2.5 rounded text-[12px] tracking-[0.08em] uppercase transition-all duration-200 shadow-sm hover:shadow-md hover:opacity-90"
                style={{ background: "#061B33" }}
              >
                Schedule a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
