"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About Dr. Ahmed", href: "#about" },
  { label: "Procedures", href: "#procedures" },
  { label: "My Approach", href: "#approach" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const NAVBAR_OFFSET = 160;
const TRACKED_SECTIONS = ["about", "locations", "procedures", "approach", "reviews", "faq", "contact"];

const clinicLocations = ["Elmhurst Center For Health", "Addison", "Lombard"];
const hospitalAffiliations = ["Elmhurst Hospital", "Plainfield Surgical Center", "Edwards Hospital"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);

      // Active section tracking
      let current = "";
      for (const id of TRACKED_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= NAVBAR_OFFSET + 20) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          scrolled
            ? {
                background: "rgba(248,247,244,0.97)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(6,27,51,0.1)",
                boxShadow: "0 4px 24px rgba(6,27,51,0.08)",
              }
            : { background: "transparent" }
        }
      >
        {/* ── Utility bar: Clinic Locations + Hospital Affiliations ── */}
        <div
          className="hidden xl:block transition-all duration-500"
          style={{
            background: scrolled ? "rgba(6,27,51,0.05)" : "rgba(4,15,30,0.55)",
            borderBottom: scrolled ? "1px solid rgba(6,27,51,0.07)" : "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-1.5 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2 min-w-0">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2.2" strokeLinecap="round" className="shrink-0">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12h6M12 9v6" />
              </svg>
              <span className={`text-[9.5px] font-bold tracking-[0.16em] uppercase mr-1 shrink-0 ${scrolled ? "text-[#061B33]/45" : "text-white/40"}`}>Operates At:</span>
              {hospitalAffiliations.map((h, i) => (
                <span key={h} className="flex items-center gap-2">
                  <span className={`text-[10.5px] font-medium whitespace-nowrap ${scrolled ? "text-[#061B33]/70" : "text-white/70"}`}>{h}</span>
                  {i < hospitalAffiliations.length - 1 && <span className={`text-[9px] ${scrolled ? "text-[#061B33]/25" : "text-white/25"}`}>·</span>}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 min-w-0">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2.2" strokeLinecap="round" className="shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span className={`text-[9.5px] font-bold tracking-[0.16em] uppercase mr-1 shrink-0 ${scrolled ? "text-[#061B33]/45" : "text-white/40"}`}>Clinic:</span>
              {clinicLocations.map((loc, i) => (
                <span key={loc} className="flex items-center gap-2">
                  <span className={`text-[10.5px] font-medium whitespace-nowrap ${scrolled ? "text-[#061B33]/70" : "text-white/70"}`}>{loc}</span>
                  {i < clinicLocations.length - 1 && <span className={`text-[9px] ${scrolled ? "text-[#061B33]/25" : "text-white/25"}`}>·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main brand row: Logo + CTA ── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center justify-between gap-4">
            <a href="#" onClick={(e) => scrollToSection(e, "#about")} className="flex items-center gap-3 sm:gap-4 shrink-0 min-w-0">
              <Image
                src="/assets/mma-logo.png"
                alt="MMA logo"
                width={72}
                height={72}
                className="object-contain shrink-0 sm:w-[80px] sm:h-[80px] transition-all duration-500"
                style={scrolled ? {} : { filter: "brightness(0) invert(1) drop-shadow(0 0 4px rgba(200,162,90,0.4))" }}
                priority
              />
              <div className="hidden sm:block h-12 w-px shrink-0" style={{ background: scrolled ? "rgba(6,27,51,0.14)" : "rgba(255,255,255,0.18)" }} />
              <div className="leading-snug min-w-0">
                <p className={`font-semibold text-[12px] sm:text-[14px] tracking-[0.14em] uppercase truncate ${scrolled ? "text-[#061B33]" : "text-white"}`}>MOHAMMED AHMED, MD</p>
                <p className="text-[#C8A25A] text-[9px] sm:text-[10.5px] tracking-[0.18em] uppercase">HIP &amp; KNEE REPLACEMENT</p>
                <Image
                  src="/assets/endeavor-health-logo.svg"
                  alt="Endeavor Health"
                  width={130}
                  height={22}
                  className="object-contain mt-1"
                  style={scrolled ? { filter: "brightness(0)", opacity: 0.45 } : { filter: "brightness(0) invert(1)", opacity: 0.5 }}
                />
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a href="tel:+16306467000" className="flex items-center gap-2 transition-colors whitespace-nowrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className={`text-[13px] font-medium ${scrolled ? "text-[#061B33]/70" : "text-white/70"}`}>(630) 646-7000</span>
              </a>
              <a
                href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] text-[12px] font-bold px-4 py-2.5 rounded tracking-[0.1em] uppercase transition-all duration-200 whitespace-nowrap shadow-sm"
              >
                Request Consultation
              </a>
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors hover:bg-white/10 ${scrolled ? "text-[#061B33]" : "text-white"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Nav links row (desktop only) ── */}
        <div
          className="hidden lg:block transition-all duration-500"
          style={{ borderTop: scrolled ? "1px solid rgba(6,27,51,0.08)" : "1px solid rgba(255,255,255,0.1)" }}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center gap-5 py-2.5 flex-wrap">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative text-[12.5px] font-medium transition-colors duration-200 whitespace-nowrap"
                    style={{
                      color: isActive
                        ? "#C8A25A"
                        : scrolled
                        ? "rgba(6,27,51,0.65)"
                        : "rgba(255,255,255,0.75)",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-[11px] left-0 right-0 h-[2px] rounded-full"
                        style={{ background: "#C8A25A" }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="fixed inset-0 z-40 flex flex-col lg:hidden"
            style={{ background: "rgba(4,15,30,0.98)", backdropFilter: "blur(24px)" }}
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-white/8">
              <div className="flex items-center gap-2.5">
                <Image src="/assets/mma-logo.png" alt="MMA" width={48} height={48} className="object-contain" style={{ filter: "brightness(0) invert(1)" }} />
                <div>
                  <p className="text-white font-semibold text-[12px] tracking-[0.14em] uppercase">MOHAMMED AHMED, MD</p>
                  <p className="text-[#C8A25A] text-[9px] tracking-[0.18em] uppercase">HIP &amp; KNEE REPLACEMENT</p>
                  <p className="text-white/30 text-[9px] tracking-[0.12em] uppercase">Endeavor Health</p>
                </div>
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="px-5 py-3 border-b border-white/6 space-y-2">
              <div className="flex items-start gap-2">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2.2" strokeLinecap="round" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-white/55 text-[11px] leading-snug">
                  <span className="text-white/30 uppercase tracking-wide text-[9px] font-semibold">Clinic: </span>
                  Elmhurst Center For Health · Addison · Lombard
                </p>
              </div>
              <div className="flex items-start gap-2">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2.2" strokeLinecap="round" className="mt-0.5 shrink-0">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12h6M12 9v6" />
                </svg>
                <p className="text-white/55 text-[11px] leading-snug">
                  <span className="text-white/30 uppercase tracking-wide text-[9px] font-semibold">Operates At: </span>
                  Elmhurst Hospital · Plainfield Surgical Center · Edwards Hospital
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="flex items-center justify-between py-4 border-b border-white/6 transition-colors"
                    style={{ color: isActive ? "#C8A25A" : "rgba(255,255,255,0.75)" }}
                  >
                    <span className="text-[17px] font-medium">{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C8A25A" }} />
                    )}
                  </motion.a>
                );
              })}
            </div>

            <div className="px-5 py-6 border-t border-white/8 space-y-3">
              <a
                href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block bg-[#C8A25A] text-[#061B33] text-[14px] font-bold px-6 py-4 rounded-lg tracking-wide text-center"
              >
                REQUEST CONSULTATION
              </a>
              <a href="tel:+16306467000" className="flex items-center justify-center gap-2 text-white/60 py-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-[15px]">(630) 646-7000</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
