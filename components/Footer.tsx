"use client";

import Image from "next/image";

const clinics = [
  { name: "Elmhurst Center For Health", address: "1200 S. York St., Ste 2000", city: "Elmhurst, IL 60126" },
  { name: "Addison Office", address: "303 W. Lake St., Ste 200", city: "Addison, IL 60101" },
  { name: "Lombard Office", address: "130 S. Main St., Ste 202", city: "Lombard, IL 60148" },
];

const hospitals = [
  { name: "Elmhurst Hospital", address: "155 E. Brush Hill Rd.", city: "Elmhurst, IL 60126" },
  { name: "Plainfield Surgical Center", address: "24600 W. 127th St.", city: "Plainfield, IL 60585" },
  { name: "Edwards Hospital", address: "801 S. Washington St.", city: "Naperville, IL 60540" },
];

const footerNav = [
  { label: "About Dr. Ahmed", href: "#about" },
  { label: "Procedures", href: "#procedures" },
  { label: "My Approach", href: "#approach" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const HospitalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(200,162,90,0.5)" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12h6M12 9v6" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "linear-gradient(180deg, #030D1A 0%, #020810 100%)",
        borderTop: "1px solid rgba(200,162,90,0.1)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* ── Main grid ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[220px_1fr_160px_1fr_120px] gap-x-10 gap-y-12 py-14 border-b border-white/[0.06]">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/assets/mma-logo.png"
                alt="MMA logo"
                width={44}
                height={44}
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div>
                <p className="text-white font-semibold text-[12px] tracking-[0.14em] uppercase leading-snug">
                  Mohammed Ahmed, MD
                </p>
                <p className="text-[#C8A25A] text-[10px] tracking-[0.16em] uppercase">
                  Hip &amp; Knee
                </p>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/endeavor-health-logo.svg"
              alt="Endeavor Health"
              style={{ height: 22, width: "auto", opacity: 0.45, marginBottom: 16 }}
            />
            <p className="text-white/35 text-[12.5px] leading-relaxed mb-5">
              Board-certified, fellowship-trained. Subspecialized in minimally
              invasive robotic-assisted joint replacement.
            </p>
            <a
              href="tel:+16306467000"
              className="inline-flex items-center gap-1.5 text-[#C8A25A] text-[13px] font-semibold hover:text-[#D9B96E] transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (630) 646-7000
            </a>
          </div>

          {/* Col 2 — Clinic Locations */}
          <div>
            <p className="text-[#C8A25A] text-[10px] font-bold tracking-[0.24em] uppercase mb-4">
              Clinic Locations
            </p>
            <div className="space-y-4">
              {clinics.map((c) => (
                <div key={c.name} className="flex gap-2.5">
                  <PinIcon />
                  <div>
                    <p className="text-white/80 text-[13px] font-medium leading-snug">{c.name}</p>
                    <p className="text-white/35 text-[12px] mt-0.5">{c.address}</p>
                    <p className="text-white/25 text-[11px]">{c.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — Professional Memberships */}
          <div>
            <p className="text-[#C8A25A] text-[10px] font-bold tracking-[0.24em] uppercase mb-4">
              Memberships
            </p>
            <div className="space-y-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aaos-logo.png"
                alt="AAOS – American Academy of Orthopaedic Surgeons"
                style={{ height: 52, width: "auto", objectFit: "contain", display: "block", opacity: 0.8 }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aahks-logo.png"
                alt="AAHKS – American Association of Hip and Knee Surgeons"
                style={{ height: 52, width: "auto", objectFit: "contain", display: "block", opacity: 0.8 }}
              />
            </div>
          </div>

          {/* Col 4 — Operates At */}
          <div>
            <div className="mb-4">
              <p className="text-white/25 text-[9px] tracking-[0.2em] uppercase mb-2">Operates At</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/endeavor-health-logo.svg"
                alt="Endeavor Health"
                style={{ width: 140, height: "auto", opacity: 0.5 }}
              />
            </div>
            <div className="space-y-4">
              {hospitals.map((h) => (
                <div key={h.name} className="flex gap-2.5">
                  <HospitalIcon />
                  <div>
                    <p className="text-white/80 text-[13px] font-medium leading-snug">{h.name}</p>
                    <p className="text-white/35 text-[12px] mt-0.5">{h.address}</p>
                    <p className="text-white/25 text-[11px]">{h.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 5 — Navigation */}
          <div>
            <p className="text-[#C8A25A] text-[10px] font-bold tracking-[0.24em] uppercase mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/35 hover:text-white/70 text-[13px] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── CTA row ───────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-8 border-b border-white/[0.06]">
          <div>
            <p
              className="text-white font-bold leading-tight mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.1rem,1.8vw,1.4rem)" }}
            >
              Ready to talk about your joint?
            </p>
            <p className="text-white/40 text-[13px]">Schedule a consultation, personalized and one-on-one with Dr. Ahmed.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+16306467000"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-[#C8A25A]/50 text-white/60 hover:text-[#C8A25A] text-[12px] font-medium px-4 py-2.5 rounded transition-all duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (630) 646-7000
            </a>
            <a
              href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] font-bold px-5 py-2.5 rounded text-[12px] tracking-[0.08em] uppercase transition-all duration-200"
            >
              Request Consultation
            </a>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-white/20 text-[11.5px]">
              &copy; {new Date().getFullYear()} Mohammed Ahmed, MD. All rights reserved.
            </p>
            <span className="text-white/12 hidden sm:block">·</span>
            <span className="text-white/20 text-[11px]">
              In affiliation with <span className="text-white/30 font-medium">Endeavor Health</span>
            </span>
          </div>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a key={item} href="#" className="text-white/20 hover:text-white/45 text-[11.5px] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
