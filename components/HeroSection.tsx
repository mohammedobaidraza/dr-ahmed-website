"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/* ── Count-up hook ── */
function useCountUp(target: number, decimals = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, decimals]);

  return { count, ref };
}

/* ── Single stat item ── */
function StatItem({
  icon,
  value,
  suffix,
  label,
  decimals = 0,
  isStars = false,
}: {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  isStars?: boolean;
}) {
  const { count, ref } = useCountUp(value, decimals);
  return (
    <div className="flex items-start gap-3">
      <div className="text-[#C8A25A] mt-0.5 shrink-0">{icon}</div>
      <div>
        <div className="flex items-baseline gap-0.5 flex-wrap">
          <span ref={ref} className="text-white font-bold text-xl md:text-2xl leading-none">
            {decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString()}
          </span>
          {suffix && (
            <span className="text-white font-bold text-lg md:text-xl leading-none">{suffix}</span>
          )}
        </div>
        {isStars && (
          <div className="flex gap-0.5 my-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#C8A25A">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            ))}
          </div>
        )}
        <p className="text-white/50 text-[10px] tracking-[0.1em] uppercase mt-1 leading-tight">{label}</p>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #040F1E 0%, #061B33 45%, #071D49 75%, #061B33 100%)",
        minHeight: "100svh",
      }}
    >
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 70% 40%, rgba(200,162,90,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(rgba(200,162,90,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── MOBILE: stacked layout ── */}
      <div className="lg:hidden relative flex flex-col min-h-[100svh]">
        {/* Doctor photo */}
        <div className="relative w-full" style={{ height: "85vw", minHeight: 320, maxHeight: 560 }}>
          <Image
            src="/assets/dr-ahmed-profile.png"
            alt="Dr. Mohammed Ahmed, MD"
            fill
            className="object-contain object-top"
            priority
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(4,15,30,0.15) 0%, transparent 40%, rgba(6,27,51,1) 100%)",
            }}
          />
        </div>

        {/* Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 px-5 pt-4 pb-10 flex flex-col"
        >
          <motion.p variants={item} className="text-[#C8A25A] text-[10px] tracking-[0.24em] uppercase font-semibold mb-4">
            Hip &amp; Knee Replacement &nbsp;·&nbsp; Western Chicago Suburbs
          </motion.p>

          <motion.h1
            variants={item}
            className="text-white font-bold leading-[1.05] mb-0.5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 10vw, 3.2rem)",
            }}
          >
            Precision care.
          </motion.h1>

          <motion.h1
            variants={item}
            className="font-bold italic leading-[1.05] mb-6"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.2rem, 10vw, 3.2rem)",
              background: "linear-gradient(135deg,#B8923F 0%,#C8A25A 40%,#E8C980 70%,#C8A25A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Personal to you.
          </motion.h1>

          <motion.p variants={item} className="text-white/60 text-[15px] leading-relaxed mb-8 font-light max-w-[520px]">
            I help patients move beyond pain with robotic-assisted, minimally
            invasive joint replacement so they can get back to the life they love.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] font-bold px-6 py-3.5 rounded text-[13px] tracking-[0.08em] uppercase transition-all duration-200 shadow-lg"
            >
              Request a Consultation
            </a>
            <a
              href="https://patients.stryker.com/knee-replacement/options/mako-robotic-arm-assisted-total-knee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-white/25 hover:border-white/50 text-white font-medium px-6 py-3.5 rounded text-[13px] tracking-wide transition-all duration-200"
            >
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </span>
              How Robotic Surgery Works
            </a>
          </motion.div>

          {/* Stats 2×2 */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-white/10 pt-7"
          >
            <StatItem
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
              value={1500} suffix="+" label="Joint Replacements" />
            <StatItem
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>}
              value={4.7} suffix="/5" label="Patient Rating" decimals={1} isStars />
            <StatItem
              icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>}
              value={98} suffix="%" label="Patients Would Recommend" />
            <div className="flex items-start gap-3">
              <div className="text-[#C8A25A] mt-0.5 shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight uppercase">One Goal</p>
                <p className="text-white/50 text-[10px] tracking-[0.1em] uppercase mt-1 leading-tight">Getting You Back<br/>To Your Life</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── DESKTOP: side-by-side layout ── */}
      <div className="hidden lg:flex relative min-h-[100svh] max-w-[1400px] mx-auto px-10 w-full">
        {/* Left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center lg:pt-40 xl:pt-48 pb-12 w-[52%] shrink-0 pr-8"
        >
          <motion.p variants={item} className="text-[#C8A25A] text-[11px] tracking-[0.28em] uppercase font-semibold mb-6">
            Hip &amp; Knee Replacement &nbsp;·&nbsp; Western Chicago Suburbs
          </motion.p>

          <motion.h1
            variants={item}
            className="text-white font-bold leading-[1.02] mb-0.5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3rem,5.5vw,5.4rem)",
            }}
          >
            Precision care.
          </motion.h1>

          <motion.h1
            variants={item}
            className="font-bold italic leading-[1.02] mb-8"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(3rem,5.5vw,5.4rem)",
              background: "linear-gradient(135deg,#B8923F 0%,#C8A25A 40%,#E8C980 70%,#C8A25A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Personal to you.
          </motion.h1>

          <motion.p variants={item} className="text-white/60 text-[16px] leading-relaxed max-w-[460px] mb-10 font-light">
            I help patients move beyond pain with robotic-assisted, minimally
            invasive joint replacement so they can get back to the life they love.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
            <a
              href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] font-bold px-7 py-3.5 rounded text-[13px] tracking-[0.08em] uppercase transition-all duration-200 shadow-lg hover:shadow-[0_8px_32px_rgba(200,162,90,0.35)]"
            >
              Request a Consultation
            </a>
            <a
              href="https://patients.stryker.com/knee-replacement/options/mako-robotic-arm-assisted-total-knee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/25 hover:border-white/50 text-white font-medium px-7 py-3.5 rounded text-[13px] tracking-wide transition-all duration-200 hover:bg-white/5"
            >
              <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
              </span>
              How Robotic Surgery Works
            </a>
          </motion.div>

          {/* Stats 4-col */}
          <motion.div variants={item} className="grid grid-cols-4 gap-5 border-t border-white/10 pt-8 pb-4">
            <StatItem
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
              value={1500} suffix="+" label="Joint Replacements Performed" />
            <StatItem
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>}
              value={4.7} suffix="/5" label="Patient Rating" decimals={1} isStars />
            <StatItem
              icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>}
              value={98} suffix="%" label="Patients Would Recommend Dr. Ahmed" />
            <div className="flex items-start gap-3">
              <div className="text-[#C8A25A] mt-0.5 shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-tight uppercase tracking-wide">One Goal</p>
                <p className="text-white/50 text-[11px] tracking-[0.1em] uppercase mt-2 leading-tight">Getting You Back<br/>To Your Life</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Doctor portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex-1 relative overflow-hidden"
        >
          {/* Full-height image anchored to bottom */}
          <Image
            src="/assets/dr-ahmed-profile.png"
            alt="Dr. Mohammed Ahmed, MD – Hip & Knee Replacement Surgeon"
            fill
            className="object-contain object-bottom"
            style={{ filter: "brightness(1.08) contrast(1.02)" }}
            priority
          />
          {/* Blend: left edge into navy + bottom coat into navy. Face (top 55%) untouched. */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #061B33 0%, rgba(6,27,51,0.55) 18%, transparent 42%), linear-gradient(to top, #061B33 0%, rgba(6,27,51,0.4) 22%, transparent 50%)",
            }}
          />

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute bottom-32 left-8 z-20 rounded-xl"
            style={{
              background: "rgba(4,15,30,0.88)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(200,162,90,0.3)",
              padding: "14px 20px",
            }}
          >
            <p className="text-[#C8A25A] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">
              Fellowship Trained
            </p>
            <p className="text-white text-[14px] font-semibold">Cleveland Clinic</p>
            <p className="text-white/50 text-[12px] mt-0.5">Adult Reconstruction</p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Credentials strip — full width, bottom of hero ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="relative z-10"
        style={{ borderTop: "1px solid rgba(200,162,90,0.15)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.6" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10" strokeWidth="1.8"/></svg>,
                label: "Board-Certified",
                sub: "American Board of Orthopaedic Surgery",
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.6" strokeLinecap="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
                label: "Fellowship-Trained",
                sub: "Adult Reconstruction, Cleveland Clinic",
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>,
                label: "Robotic-Assisted",
                sub: "Robot-assisted knee & hip replacement",
              },
              {
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="#C8A25A"/></svg>,
                label: "Subspecialized",
                sub: "Practice focused on hip & knee replacement",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="px-6 py-6 flex flex-col gap-2"
                style={{
                  borderRight: i < 3 ? "1px solid rgba(200,162,90,0.1)" : "none",
                  borderTop: i >= 2 ? "1px solid rgba(200,162,90,0.08)" : "none",
                }}
              >
                <div className="mb-1">{item.icon}</div>
                <p className="text-[#C8A25A] text-[10px] font-bold tracking-[0.22em] uppercase leading-none">
                  {item.label}
                </p>
                <p className="text-white/50 text-[12.5px] leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
