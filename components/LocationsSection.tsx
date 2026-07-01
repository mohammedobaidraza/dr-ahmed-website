"use client";

import { motion } from "framer-motion";

const locations = [
  {
    name: "Elmhurst Center For Health",
    address: "1200 S. York St., Suite 2000",
    city: "Elmhurst, IL 60126-5634",
    phone: "(630) 646-7000",
    mapSrc:
      "https://maps.google.com/maps?q=1200+S+York+St+Suite+2000+Elmhurst+IL+60126&output=embed&z=15",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=1200+S+York+St+Elmhurst+IL+60126",
  },
  {
    name: "Addison Office",
    address: "303 W. Lake St., Suite 200",
    city: "Addison, IL 60101-2500",
    phone: "(630) 646-7000",
    mapSrc:
      "https://maps.google.com/maps?q=303+W+Lake+St+Suite+200+Addison+IL+60101&output=embed&z=15",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=303+W+Lake+St+Addison+IL+60101",
  },
  {
    name: "Lombard Office",
    address: "130 S. Main St., Suite 202",
    city: "Lombard, IL 60148-2670",
    phone: "(630) 646-7000",
    mapSrc:
      "https://maps.google.com/maps?q=130+S+Main+St+Suite+202+Lombard+IL+60148&output=embed&z=15",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=130+S+Main+St+Lombard+IL+60148",
  },
];

export default function LocationsSection() {
  return (
    <section
      id="locations"
      style={{ background: "linear-gradient(180deg, #040F1E 0%, #061B33 100%)" }}
      className="py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-3">
            Serving the Western Suburbs
          </p>
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
            }}
          >
            Three convenient orthopedic clinic locations near Chicago.
          </h2>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ border: "1px solid rgba(200,162,90,0.15)" }}
            >
              {/* Map */}
              <div className="relative" style={{ height: 220 }}>
                <iframe
                  src={loc.mapSrc}
                  title={loc.name}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info */}
              <div
                className="flex-1 px-5 py-5"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Pin icon + name */}
                <div className="flex items-start gap-2.5 mb-3">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8A25A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="mt-0.5 shrink-0"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="text-[#C8A25A] text-[12px] font-bold tracking-[0.12em] uppercase leading-snug">
                    {loc.name}
                  </p>
                </div>

                <p className="text-white/70 text-[13px] leading-snug pl-5">{loc.address}</p>
                <p className="text-white/35 text-[12px] pl-5 mb-4">{loc.city}</p>

                {/* Actions */}
                <div
                  className="flex items-center gap-4 pt-4 pl-5"
                  style={{ borderTop: "1px solid rgba(200,162,90,0.1)" }}
                >
                  <a
                    href="tel:+16306467000"
                    className="flex items-center gap-1.5 text-[#C8A25A] text-[12px] font-semibold hover:text-[#D9B96E] transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    {loc.phone}
                  </a>
                  <a
                    href={loc.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-[12px] transition-colors"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-white/20 text-[11px] text-center mt-6">
          All locations share the same number · (630) 646-7000
        </p>
      </div>
    </section>
  );
}
