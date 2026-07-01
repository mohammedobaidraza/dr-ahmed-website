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
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(200,162,90,0.6)" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-[3px]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const HospitalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(200,162,90,0.6)" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-[3px]">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12h6M12 9v6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "linear-gradient(180deg, #020C18 0%, #010810 100%)",
      }}
    >

      {/* ── Premium CTA ───────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(200,162,90,0.12)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-8 py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div className="max-w-xl">
            <p
              className="text-white font-bold leading-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.45rem, 2.4vw, 2rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Ready to get back to the life you love?
            </p>
            <p className="text-white/40 text-[15px] leading-relaxed">
              One consultation could be the first step toward living pain-free again.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <a
              href="tel:+16306467000"
              className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-200"
            >
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/10 group-hover:border-[#C8A25A]/40 text-white/40 group-hover:text-[#C8A25A] transition-all duration-200"
              >
                <PhoneIcon />
              </span>
              <span style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.4rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
                (630) 646-7000
              </span>
            </a>
            <a
              href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#C8A25A] hover:bg-[#D4B06A] text-[#05141F] font-bold px-6 py-3 rounded text-[12.5px] tracking-[0.1em] uppercase transition-all duration-200"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>

      {/* ── Main grid ─────────────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_1.25fr_0.75fr] py-[80px]"
          style={{ gap: "0 52px", rowGap: "48px" }}
        >


          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/mma-logo.webp"
                alt="MMA logo"
                width={40}
                height={40}
                className="object-contain shrink-0"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
              />
              <div>
                <p className="text-white font-semibold text-[12px] tracking-[0.15em] uppercase leading-snug">
                  Mohammed Ahmed, MD
                </p>
                <p className="text-[#C8A25A] text-[10px] tracking-[0.18em] uppercase mt-0.5">
                  Hip &amp; Knee Replacement
                </p>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/endeavor-health-logo.svg"
              alt="Endeavor Health"
              style={{ height: 20, width: "auto", opacity: 0.38, marginBottom: 18 }}
            />
            <p className="text-white/30 text-[12.5px] leading-[1.75] mb-6 max-w-[260px]">
              Board-certified, fellowship-trained orthopedic surgeon. Subspecialized in minimally invasive robotic-assisted joint replacement.
            </p>
            <a
              href="tel:+16306467000"
              className="inline-flex items-center gap-2 text-[#C8A25A] hover:text-[#D4B06A] text-[13px] font-semibold transition-colors duration-150"
            >
              <PhoneIcon />
              (630) 646-7000
            </a>
          </div>

          {/* Col 2 — Clinic Locations */}
          <div>
            <p className="text-[#C8A25A] text-[9.5px] font-bold tracking-[0.28em] uppercase mb-6">
              Clinic Locations
            </p>
            <div className="space-y-5">
              {clinics.map((c) => (
                <div key={c.name} className="flex gap-2.5">
                  <PinIcon />
                  <div>
                    <p className="text-white/75 text-[12.5px] font-medium leading-snug">{c.name}</p>
                    <p className="text-white/30 text-[11.5px] mt-1">{c.address}</p>
                    <p className="text-white/22 text-[11px] mt-0.5">{c.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3 — Hospitals */}
          <div>
            <p className="text-[#C8A25A] text-[9.5px] font-bold tracking-[0.28em] uppercase mb-6">
              Hospitals
            </p>
            <div className="space-y-5">
              {hospitals.map((h) => (
                <div key={h.name} className="flex gap-2.5">
                  <HospitalIcon />
                  <div>
                    <p className="text-white/75 text-[12.5px] font-medium leading-snug">{h.name}</p>
                    <p className="text-white/30 text-[11.5px] mt-1">{h.address}</p>
                    <p className="text-white/22 text-[11px] mt-0.5">{h.city}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4 — Memberships */}
          <div>
            <p className="text-[#C8A25A] text-[9.5px] font-bold tracking-[0.28em] uppercase mb-6">
              Memberships
            </p>

            <div className="flex flex-col items-start">
              <img
                src="/assets/aaos1.png"
                alt="AAOS"
                className="block w-[180px] lg:w-[200px] h-auto object-contain"
                style={{
                  filter: "brightness(2.1) saturate(0.6)",
                }}
              />

              <div className="my-8 h-px w-[180px] bg-white/10" />

              <img
                src="/assets/aahks1.png"
                alt="AAHKS"
                className="block w-[280px] lg:w-[320px] h-auto object-contain -ml-8"
                style={{
                  filter: "brightness(2.0) saturate(0.65)",
                }}
              />
            </div>
          </div>

          {/* Col 5 — Navigation */}
          <div>
            <p className="text-[#C8A25A] text-[9.5px] font-bold tracking-[0.28em] uppercase mb-6">
              Navigate
            </p>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white/65 text-[13px] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/18 text-[11.5px]">
            &copy; {new Date().getFullYear()} Mohammed Ahmed, MD. All rights reserved.
          </p>
          <p className="text-white/18 text-[11.5px]">
            In affiliation with <span className="text-white/28 font-medium">Endeavor Health</span>
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms", "Accessibility"].map((item) => (
              <a key={item} href="#" className="text-white/18 hover:text-white/42 text-[11.5px] transition-colors duration-150">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
