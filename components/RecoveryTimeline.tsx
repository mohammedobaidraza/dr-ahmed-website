"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <circle cx="12" cy="5" r="2.5"/>
        <path d="M12 8v7M9.5 11l2.5 2 2.5-2M9.5 20l2.5-3 2.5 3"/>
      </svg>
    ),
    time: "Day of Surgery",
    milestone: "Up and walking",
    detail: "Most patients stand and take their first steps within hours of the procedure. Many go home the same day.",
    photo: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Medical care and recovery",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>
    ),
    time: "Weeks 1–2",
    milestone: "Moving at home",
    detail: "Walking, stairs and therapy focused on motion, confidence and comfort. Most patients drive around week 2–3.",
    photo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Home recovery",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    time: "Weeks 3–8",
    milestone: "Back to daily life",
    detail: "Driving, errands and desk work as strength and endurance build. Return to work and social life.",
    photo: "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Active daily life outdoors",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M3 17l4-8 4 4 4-6 4 4"/>
      </svg>
    ),
    time: "Months 2–3+",
    milestone: "Back to active life",
    detail: "Golf, biking, hiking, travel, pickleball, the activities that matter most to you.",
    photo: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80",
    photoAlt: "Hiking and active outdoor life",
  },
];

export default function RecoveryTimeline() {
  const [fill, setFill] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (!sectionRef.current) return;
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 75%",
        end: "top 15%",
        scrub: 1.2,
        onUpdate: (self) => setFill(Math.min(100, self.progress * 115)),
      });
    };
    init();
    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return (
    <section
      id="recovery"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#040F1E 0%,#061B33 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
            Your Journey
          </p>
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.9rem,3.2vw,2.8rem)",
            }}
          >
            A clear path back to the life you love.
          </h2>
          <p className="text-white/50 text-[14px] sm:text-[15px] mt-4 max-w-xl mx-auto leading-relaxed">
            Robotic-assisted surgery means less trauma to surrounding tissue, and a
            faster, smoother recovery than traditional methods.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[43px] left-[12.5%] right-[12.5%] z-0">
            <div className="relative h-[2px] rounded-full" style={{ background: "rgba(200,162,90,0.15)" }}>
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-none"
                style={{
                  width: `${fill}%`,
                  background: "linear-gradient(90deg,#C8A25A,#E8C980)",
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, i) => {
              const active = fill > (i / steps.length) * 100;
              return (
                <motion.div
                  key={step.time}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.65,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  }}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  {/* Icon circle */}
                  <div
                    className="w-[86px] h-[86px] rounded-full flex items-center justify-center mb-5 transition-all duration-700"
                    style={{
                      background: active ? "rgba(200,162,90,0.15)" : "rgba(255,255,255,0.04)",
                      border: active ? "2px solid rgba(200,162,90,0.55)" : "2px solid rgba(255,255,255,0.1)",
                      color: active ? "#C8A25A" : "rgba(255,255,255,0.28)",
                    }}
                  >
                    {step.icon}
                  </div>
                  <p className="text-[#C8A25A] text-[10px] tracking-[0.18em] uppercase font-bold mb-2">
                    {step.time}
                  </p>
                  <h3
                    className="text-white font-semibold text-[15px] sm:text-[16px] mb-2"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {step.milestone}
                  </h3>
                  <p className="text-white/45 text-[13px] leading-relaxed px-2">{step.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Lifestyle photo grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {steps.map((step, i) => (
            <div
              key={step.time + "-photo"}
              className="relative rounded-xl overflow-hidden"
              style={{ height: "clamp(140px, 20vw, 220px)" }}
            >
              <Image
                src={step.photo}
                alt={step.photoAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Dark overlay with label */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(4,12,35,0.85) 0%, rgba(4,12,35,0.2) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[#C8A25A] text-[9px] tracking-[0.18em] uppercase font-bold">
                  {step.time}
                </p>
                <p className="text-white text-[11px] font-semibold leading-tight mt-0.5">
                  {step.milestone}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Panorama + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 relative rounded-2xl overflow-hidden"
          style={{ height: "clamp(180px, 30vw, 300px)" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80"
            alt="Mountain landscape — the life you'll get back to"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
            style={{ background: "rgba(4,12,35,0.5)" }}
          >
            <p className="text-white/70 text-[14px] mb-5">Ready to start your recovery journey?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] font-bold px-7 py-3.5 rounded text-[13px] tracking-[0.08em] uppercase transition-all duration-200 shadow-lg hover:shadow-[0_8px_32px_rgba(200,162,90,0.35)]"
            >
              Schedule a Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
