import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Mohammed Ahmed, MD",
  description: "Privacy policy for drmohammedahmed.com — a professional portfolio website for Dr. Mohammed Ahmed, MD, hip and knee replacement surgeon.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8F7F4]">
        <div className="max-w-[800px] mx-auto px-6 py-28">

          <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
            Legal
          </p>
          <h1
            className="text-[#061B33] font-bold leading-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            }}
          >
            Privacy Policy
          </h1>
          <p className="text-[#061B33]/40 text-[13px] mb-12">Last updated: June 2026</p>

          <div className="space-y-10 text-[#061B33]/70 text-[15px] leading-relaxed">

            <section>
              <h2 className="text-[#061B33] font-semibold text-[17px] mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Overview
              </h2>
              <p>
                This website (<strong>drmohammedahmed.com</strong>) is a professional portfolio
                site for Dr. Mohammed M. Ahmed, MD, a board-certified hip and knee replacement
                surgeon affiliated with Endeavor Health. It is intended to provide information
                about Dr. Ahmed's credentials, procedures, and clinic locations.
              </p>
            </section>

            <section>
              <h2 className="text-[#061B33] font-semibold text-[17px] mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                No Personal Data Collected
              </h2>
              <p>
                This website does <strong>not</strong> collect, store, or process any personal
                information. There are no contact forms, sign-up flows, account systems, or
                data submission mechanisms of any kind on this site.
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-[#061B33]/60">
                <li>No names, email addresses, or phone numbers are collected</li>
                <li>No cookies are set by this website</li>
                <li>No analytics or tracking scripts are used</li>
                <li>No third-party advertising networks are present</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[#061B33] font-semibold text-[17px] mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                External Links
              </h2>
              <p>
                This site contains links to external services, including:
              </p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-[#061B33]/60">
                <li>
                  <strong className="text-[#061B33]/80">Endeavor Health</strong> —
                  appointment booking and provider profile at{" "}
                  <a
                    href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A25A] hover:text-[#D9B96E] underline underline-offset-2"
                  >
                    endeavorhealth.org
                  </a>
                </li>
                <li>
                  <strong className="text-[#061B33]/80">Google Maps</strong> —
                  for directions to clinic locations
                </li>
                <li>
                  <strong className="text-[#061B33]/80">Stryker</strong> —
                  information about robotic surgery technology
                </li>
              </ul>
              <p className="mt-4">
                When you follow these links, you leave this site and are subject to the privacy
                policies of those external services. We have no control over, and assume no
                responsibility for, the content or practices of any third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-[#061B33] font-semibold text-[17px] mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Medical Disclaimer
              </h2>
              <p>
                The content on this website is for informational purposes only and does not
                constitute medical advice, diagnosis, or treatment. Always seek the advice of
                your physician or other qualified health provider with any questions you may
                have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-[#061B33] font-semibold text-[17px] mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Contact
              </h2>
              <p>
                For appointment requests or medical inquiries, please contact Dr. Ahmed's
                office directly:
              </p>
              <div className="mt-4 space-y-1 text-[#061B33]/60">
                <p><strong className="text-[#061B33]/80">Phone:</strong>{" "}
                  <a href="tel:+16306467000" className="text-[#C8A25A] hover:text-[#D9B96E]">
                    (630) 646-7000
                  </a>
                </p>
                <p><strong className="text-[#061B33]/80">Appointment booking:</strong>{" "}
                  <a
                    href="https://www.endeavorhealth.org/providers/mohammed-m-ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C8A25A] hover:text-[#D9B96E]"
                  >
                    Endeavor Health Provider Page
                  </a>
                </p>
              </div>
            </section>

            <div className="pt-6 border-t border-[#061B33]/10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#C8A25A] hover:text-[#D9B96E] text-[13px] font-semibold tracking-wide transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12,19 5,12 12,5" />
                </svg>
                Back to Home
              </Link>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
