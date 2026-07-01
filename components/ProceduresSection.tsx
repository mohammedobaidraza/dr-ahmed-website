"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── X-ray style SVG illustrations ── */
const XrayTotalKnee = () => (
  <svg viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="gk1" cx="50%" cy="55%" r="55%">
        <stop offset="0%" stopColor="rgba(60,100,200,0.18)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>
    <rect width="160" height="210" fill="url(#gk1)" />
    {/* Femur shaft */}
    <path d="M68 5 C68 5 72 4 74 10 L78 35 C80 52 80 68 77 80 C75 86 71 90 67 91 L63 91 C59 90 55 86 53 80 C50 68 50 52 52 35 L56 10 C58 4 62 5 68 5Z"
      stroke="rgba(190,210,248,0.82)" strokeWidth="1.2" fill="rgba(150,180,235,0.1)" />
    {/* Lateral condyle */}
    <path d="M67 90 C73 92 80 97 84 104 C88 111 87 120 83 126 C79 131 73 133 67 133 C63 133 59 131 57 128 C54 123 54 117 56 111 C58 105 62 96 67 90Z"
      stroke="rgba(190,210,248,0.82)" strokeWidth="1.2" fill="rgba(150,180,235,0.12)" />
    {/* Medial condyle */}
    <path d="M63 90 C57 92 50 97 46 104 C42 111 43 120 47 126 C51 131 57 133 63 133 C67 133 71 131 73 128 C76 123 76 117 74 111 C72 105 68 96 63 90Z"
      stroke="rgba(190,210,248,0.82)" strokeWidth="1.2" fill="rgba(150,180,235,0.12)" />
    {/* Patella */}
    <ellipse cx="83" cy="112" rx="7" ry="9"
      stroke="rgba(190,210,248,0.7)" strokeWidth="1" fill="rgba(160,190,240,0.18)" />
    {/* Femoral component — bright metal */}
    <path d="M43 133 C43 137 47 141 53 143 C59 145 65 145 65 145 L65 145 C65 145 71 145 77 143 C83 141 87 137 87 133Z"
      stroke="rgba(225,240,255,0.96)" strokeWidth="1.6" fill="rgba(210,228,255,0.38)" />
    {/* Poly liner gap */}
    <rect x="43" y="145" width="44" height="4" rx="1"
      fill="rgba(4,12,35,0.65)" />
    {/* Tibial tray — bright metal */}
    <rect x="43" y="149" width="44" height="6" rx="1.2"
      stroke="rgba(225,240,255,0.93)" strokeWidth="1.5" fill="rgba(210,228,255,0.32)" />
    {/* Central tibial peg */}
    <rect x="61" y="155" width="8" height="20" rx="1.5"
      stroke="rgba(220,238,255,0.88)" strokeWidth="1.2" fill="rgba(210,228,255,0.22)" />
    {/* Tibia */}
    <path d="M47 155 C46 168 45 185 45 198 C45 208 50 212 65 212 C80 212 85 208 85 198 C85 185 84 168 83 155Z"
      stroke="rgba(185,208,245,0.76)" strokeWidth="1.1" fill="rgba(145,175,230,0.1)" />
    {/* Fibula */}
    <path d="M85 162 C87 163 89 165 90 170 L91 198 C91 208 89 212 86 212 C83 212 83 208 83 198 L84 170Z"
      stroke="rgba(180,202,242,0.52)" strokeWidth="0.9" fill="rgba(140,170,225,0.06)" />
  </svg>
);

const XrayPartialKnee = () => (
  <svg viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="gk2" cx="50%" cy="52%" r="52%">
        <stop offset="0%" stopColor="rgba(60,100,200,0.16)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>
    <rect width="160" height="210" fill="url(#gk2)" />
    {/* Femur shaft */}
    <path d="M68 5 C68 5 72 4 74 10 L78 35 C80 52 80 68 77 80 C75 86 71 90 67 91 L63 91 C59 90 55 86 53 80 C50 68 50 52 52 35 L56 10 C58 4 62 5 68 5Z"
      stroke="rgba(185,208,245,0.8)" strokeWidth="1.2" fill="rgba(145,175,230,0.1)" />
    {/* Lateral condyle - natural bone */}
    <path d="M67 90 C73 92 80 97 84 104 C88 111 87 120 83 126 C79 131 73 133 67 133Z"
      stroke="rgba(185,208,245,0.8)" strokeWidth="1.2" fill="rgba(145,175,230,0.12)" />
    {/* Medial condyle - natural bone */}
    <path d="M63 90 C57 92 50 97 46 104 C42 111 43 120 47 126 C51 131 57 133 63 133Z"
      stroke="rgba(185,208,245,0.8)" strokeWidth="1.2" fill="rgba(145,175,230,0.12)" />
    {/* Patella */}
    <ellipse cx="83" cy="112" rx="7" ry="9"
      stroke="rgba(185,208,245,0.68)" strokeWidth="1" fill="rgba(155,185,238,0.16)" />
    {/* Partial (medial only) femoral component — bright metal */}
    <path d="M43 133 C43 137 46 141 51 143 C56 145 63 145 65 145 L65 133Z"
      stroke="rgba(225,240,255,0.95)" strokeWidth="1.6" fill="rgba(210,228,255,0.4)" />
    {/* Natural lateral cartilage space */}
    <path d="M65 133 L67 133 C73 133 80 131 83 126 C83 130 83 133 83 133Z"
      fill="rgba(4,12,35,0.3)" stroke="rgba(185,208,245,0.3)" strokeWidth="0.6" />
    {/* Partial poly + tibial component medial side */}
    <rect x="43" y="145" width="23" height="4" rx="1"
      fill="rgba(4,12,35,0.6)" />
    <rect x="43" y="149" width="23" height="6" rx="1.2"
      stroke="rgba(225,240,255,0.92)" strokeWidth="1.5" fill="rgba(210,228,255,0.3)" />
    {/* Natural lateral tibial plateau */}
    <path d="M66 148 C70 148 76 147 83 145 L83 149 C76 151 70 152 66 152Z"
      stroke="rgba(185,208,245,0.65)" strokeWidth="0.8" fill="rgba(145,175,230,0.09)" />
    {/* Tibial peg */}
    <rect x="46" y="155" width="7" height="20" rx="1.5"
      stroke="rgba(220,238,255,0.85)" strokeWidth="1.2" fill="rgba(210,228,255,0.2)" />
    {/* Tibia */}
    <path d="M47 155 C46 168 45 185 45 198 C45 208 50 212 65 212 C80 212 85 208 85 198 C85 185 84 168 83 155Z"
      stroke="rgba(185,208,245,0.74)" strokeWidth="1.1" fill="rgba(145,175,230,0.09)" />
    {/* Fibula */}
    <path d="M85 162 C87 163 89 165 90 170 L91 198 C91 208 89 212 86 212 C83 212 83 208 83 198 L84 170Z"
      stroke="rgba(178,200,240,0.5)" strokeWidth="0.9" fill="none" />
  </svg>
);

const XrayHip = () => (
  <svg viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="ghip" cx="45%" cy="45%" r="55%">
        <stop offset="0%" stopColor="rgba(60,100,200,0.2)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>
    <rect width="160" height="210" fill="url(#ghip)" />
    {/* Pelvis - iliac wing */}
    <path d="M18 8 C15 15 14 30 20 50 C25 65 35 72 50 74 C58 75 65 73 70 68 L75 62 C80 56 82 48 80 40 C78 28 70 15 60 8 C50 2 28 2 18 8Z"
      stroke="rgba(185,208,245,0.72)" strokeWidth="1.1" fill="rgba(140,170,228,0.08)" />
    {/* Acetabulum socket */}
    <circle cx="70" cy="74" r="18"
      stroke="rgba(185,208,245,0.8)" strokeWidth="1.2" fill="rgba(140,170,228,0.06)" />
    {/* Acetabular cup — METAL implant */}
    <path d="M54 68 A18 18 0 0 1 86 68 A18 18 0 0 0 54 68Z"
      stroke="rgba(225,240,255,0.94)" strokeWidth="1.6" fill="rgba(210,228,255,0.32)" />
    <path d="M56 76 A16 16 0 0 1 84 76"
      stroke="rgba(225,240,255,0.9)" strokeWidth="1.3" fill="none" />
    {/* Femoral head (ball) — METAL */}
    <circle cx="70" cy="82" r="12"
      stroke="rgba(225,240,255,0.93)" strokeWidth="1.5" fill="rgba(210,228,255,0.28)" />
    {/* Femoral neck */}
    <path d="M68 94 C64 100 62 108 64 118 L68 118 C68 108 70 100 72 94Z"
      stroke="rgba(225,240,255,0.88)" strokeWidth="1.2" fill="rgba(210,228,255,0.2)" />
    {/* Greater trochanter */}
    <path d="M62 96 C55 98 48 104 46 112 C44 118 48 122 54 120 C60 118 64 112 66 106Z"
      stroke="rgba(185,208,245,0.7)" strokeWidth="1" fill="rgba(140,170,228,0.1)" />
    {/* Femoral stem — METAL, long */}
    <path d="M60 118 C58 125 56 140 56 155 C56 175 58 195 62 208 L72 208 C76 195 78 175 78 155 C78 140 76 125 74 118Z"
      stroke="rgba(225,240,255,0.9)" strokeWidth="1.4" fill="rgba(210,228,255,0.22)" />
    {/* Distal femur */}
    <path d="M56 205 C56 205 58 210 65 210 C72 210 74 205 74 205Z"
      stroke="rgba(225,240,255,0.7)" strokeWidth="1" fill="rgba(210,228,255,0.15)" />
  </svg>
);

const XrayRevision = () => (
  <svg viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="grev" cx="50%" cy="50%" r="55%">
        <stop offset="0%" stopColor="rgba(60,100,200,0.18)" />
        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
      </radialGradient>
    </defs>
    <rect width="160" height="210" fill="url(#grev)" />
    {/* Proximal femur / greater trochanter region */}
    <path d="M45 15 C40 22 36 35 38 50 C40 62 48 70 58 73 C65 75 72 74 76 70 C82 65 84 55 82 44 C80 32 73 20 64 14 C58 10 49 10 45 15Z"
      stroke="rgba(185,208,245,0.72)" strokeWidth="1.1" fill="rgba(140,170,228,0.08)" />
    {/* Cerclage cable wire 1 */}
    <ellipse cx="65" cy="80" rx="22" ry="5"
      stroke="rgba(225,240,255,0.88)" strokeWidth="1.2" fill="none" />
    {/* Cerclage cable wire 2 */}
    <ellipse cx="65" cy="105" rx="20" ry="4"
      stroke="rgba(225,240,255,0.85)" strokeWidth="1.1" fill="none" />
    {/* Long revision femoral stem — METAL, prominent */}
    <path d="M56 73 C54 88 52 110 52 135 C52 160 54 185 58 205 L72 205 C76 185 78 160 78 135 C78 110 76 88 74 73Z"
      stroke="rgba(225,240,255,0.95)" strokeWidth="1.8" fill="rgba(215,232,255,0.30)" />
    {/* Modular junction */}
    <rect x="52" y="110" width="26" height="7" rx="2"
      stroke="rgba(225,240,255,0.9)" strokeWidth="1.3" fill="rgba(215,232,255,0.32)" />
    {/* Distal screws */}
    <line x1="42" y1="150" x2="88" y2="150"
      stroke="rgba(225,240,255,0.82)" strokeWidth="1.1" />
    <line x1="42" y1="150" x2="44" y2="145" stroke="rgba(225,240,255,0.7)" strokeWidth="0.8" />
    <line x1="88" y1="150" x2="86" y2="145" stroke="rgba(225,240,255,0.7)" strokeWidth="0.8" />
    <line x1="45" y1="170" x2="85" y2="170"
      stroke="rgba(225,240,255,0.78)" strokeWidth="1.1" />
    {/* Distal femur / knee component */}
    <path d="M46 185 C43 190 42 196 44 202 C46 206 52 210 64 210 C76 210 82 206 84 202 C86 196 85 190 82 185Z"
      stroke="rgba(225,240,255,0.88)" strokeWidth="1.4" fill="rgba(210,228,255,0.18)" />
  </svg>
);

/* ── Procedure data ── */
const procedures = [
  {
    slug: "muscle-tendon-sparing-subvastus-total-knee-replacement",
    category: "KNEE · MINIMALLY INVASIVE",
    title: "Muscle/Tendon Sparing Subvastus Total Knee Replacement",
    description:
      "Works below the quadriceps tendon, avoiding cutting through it, for less pain, better early function, and a more natural feel after surgery.",
    photo: "https://drahmedtest.lovable.app/assets/proc-knee-total-B_iZfErq.jpg",
  },
  {
    slug: "partial-knee-replacement",
    category: "KNEE",
    title: "Partial knee replacement",
    description:
      "Resurface only the damaged compartment. Preserve healthy bone and ligaments for a more natural outcome.",
    photo: "https://drahmedtest.lovable.app/assets/proc-knee-partial-CVy689SG.jpg",
  },
  {
    slug: "bikini-incision-anterior-approach-total-hip-replacement",
    category: "HIP · MINIMALLY INVASIVE",
    title: "Bikini Incision Anterior Approach Total Hip Replacement",
    description:
      "Muscle-sparing approach from the front with a cosmetically placed incision. Faster recovery, fewer restrictions, and reduced dislocation risk.",
    photo: "https://drahmedtest.lovable.app/assets/proc-hip-anterior-w4nLZAuS.jpg",
  },
  {
    slug: "complex-revision-joint-replacement",
    category: "HIP & KNEE",
    title: "Complex & revision joint replacement",
    description:
      "Expertise in complex primary and revision surgery for challenging cases requiring advanced reconstruction.",
    photo: "https://drahmedtest.lovable.app/assets/proc-revision-DjxB73uc.jpg",
  },
];

export default function ProceduresSection() {
  return (
    <section
      id="procedures"
      className="py-16 sm:py-20 lg:py-28"
      style={{ background: "#F8F7F4" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-14 items-start">

          {/* ── Left label + text ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
              Hip &amp; Knee Procedures
            </p>
            <h2
              className="text-[#061B33] leading-[1.1] font-bold mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.9rem,3.2vw,2.8rem)",
              }}
            >
              Focused on what moves you.
            </h2>
            <p className="text-[#061B33]/55 text-[14px] sm:text-[15px] leading-relaxed mb-7">
              Subspecialization matters. My practice is dedicated to hip and knee
              replacement, not a little bit of everything.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#C8A25A] text-[12px] font-bold tracking-[0.18em] uppercase hover:gap-4 transition-all duration-200"
            >
              VIEW ALL PROCEDURES
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
              </svg>
            </a>
          </motion.div>

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {procedures.map(({ slug, category, title, description, photo }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="procedure-card rounded-xl overflow-hidden flex flex-col group cursor-pointer"
                style={{ background: "#0B2248", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Photo area */}
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={photo}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center card-img"
                    loading="lazy"
                  />
                  {/* Light navy tint so photo is visible */}
                  <div className="absolute inset-0" style={{ background: "rgba(6,18,52,0.42)" }} />
                  {/* Gradient fade to card body color at bottom */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, transparent 40%, #0B2248 100%)",
                    }}
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 left-4 z-10">
                    <span className="text-[#C8A25A] text-[10px] font-bold tracking-[0.22em] uppercase">
                      {category}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className="text-white font-semibold text-[16px] leading-snug mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed flex-1 mb-5">
                    {description}
                  </p>
                  <Link
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-1.5 text-[#C8A25A] text-[11px] font-bold tracking-[0.18em] uppercase group-hover:gap-3 transition-all duration-200"
                  >
                    LEARN MORE
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12,5 19,12 12,19" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
