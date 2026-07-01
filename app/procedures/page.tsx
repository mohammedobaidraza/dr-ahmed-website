import type { Metadata } from "next";
import Link from "next/link";
import { procedures } from "@/lib/procedures";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Hip & Knee Replacement Procedures | Dr. Mohammed Ahmed, MD",
  description:
    "Explore hip and knee replacement procedures performed by Dr. Mohammed Ahmed, MD — including partial knee, total knee, anterior hip, and revision joint replacement.",
  alternates: { canonical: `${SITE_URL}/procedures` },
};

export default function ProceduresPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <div className="max-w-[1200px] mx-auto px-6 py-20">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
            Hip &amp; Knee Procedures
          </p>
          <h1
            className="text-[#061B33] font-bold leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
            }}
          >
            All Procedures
          </h1>
          <p className="text-[#061B33]/60 text-[16px] max-w-xl leading-relaxed">
            Dr. Ahmed's practice is dedicated exclusively to hip and knee
            replacement — not a little bit of everything. Every procedure below
            is one he performs regularly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {procedures.map(({ slug, label, title, cardBlurb, blogHeroImage }) => (
            <Link key={slug} href={`/blog/${slug}`} className="block group">
              <div
                className="rounded-xl overflow-hidden flex flex-col h-full"
                style={{
                  background: "#0B2248",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={blogHeroImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(6,18,52,0.42)" }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, #0B2248 100%)",
                    }}
                  />
                  <div className="absolute top-3 left-4 z-10">
                    <span className="text-[#C8A25A] text-[10px] font-bold tracking-[0.22em] uppercase">
                      {label}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="p-5 flex flex-col flex-1">
                  <h2
                    className="text-white font-semibold text-[16px] leading-snug mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {title}
                  </h2>
                  <p className="text-white/50 text-[13px] leading-relaxed flex-1 mb-5">
                    {cardBlurb}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#C8A25A] text-[11px] font-bold tracking-[0.18em] uppercase group-hover:gap-3 transition-all duration-200">
                    LEARN MORE
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12,5 19,12 12,19" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/#contact"
            className="inline-block bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] text-[13px] font-bold px-8 py-4 rounded tracking-[0.1em] uppercase transition-colors"
          >
            Request a Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}
