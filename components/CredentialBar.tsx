"use client";

import { motion } from "framer-motion";

const credentials = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.4">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
    title: "BOARD-CERTIFIED",
    subtitle: "American Board of Orthopaedic Surgery",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.4">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "FELLOWSHIP-TRAINED",
    subtitle: "Adult Reconstruction, Cleveland Clinic",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "ROBOTIC-ASSISTED",
    subtitle: "Robot-assisted knee & hip replacement",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="1.4">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "SUBSPECIALIZED",
    subtitle: "Practice focused on hip & knee replacement",
  },
];

export default function CredentialBar() {
  return (
    <section className="bg-[#F8F7F4]" id="credentials">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0 mt-0.5">{cred.icon}</div>
              <div>
                <p className="font-bold text-[#061B33] text-[11px] sm:text-[12px] tracking-[0.15em] uppercase mb-1">
                  {cred.title}
                </p>
                <p className="text-[#061B33]/60 text-[13px] leading-snug">{cred.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
