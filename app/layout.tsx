import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  title: "Dr. Mohammed Ahmed, MD | Hip & Knee Replacement | Elmhurst · Addison · Lombard IL",
  description:
    "Board-certified, fellowship-trained orthopedic surgeon specializing in minimally invasive hip and knee replacement. Muscle/Tendon Sparing Subvastus Knee Replacement & Bikini Incision Anterior Hip Replacement. Robotic-assisted surgery. Serving Elmhurst, Addison, Lombard and the western Chicago suburbs. Call (630) 646-7000.",
  keywords: [
    "hip replacement surgeon Elmhurst IL",
    "knee replacement surgeon Chicago suburbs",
    "minimally invasive knee replacement Illinois",
    "subvastus total knee replacement",
    "bikini incision anterior hip replacement",
    "robotic assisted joint replacement Illinois",
    "Mohammed Ahmed MD orthopedic surgeon",
    "orthopedic surgeon Addison IL",
    "orthopedic surgeon Lombard IL",
    "Endeavor Health orthopedic surgeon",
    "fellowship trained hip knee surgeon Cleveland Clinic",
    "joint replacement western suburbs Chicago",
    "muscle sparing knee replacement",
    "anterior approach hip replacement Illinois",
    "Elmhurst Hospital orthopedic surgeon",
    "Edwards Hospital joint replacement",
  ],
  authors: [{ name: "Mohammed Ahmed, MD" }],
  creator: "Mohammed Ahmed, MD",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dr. Mohammed Ahmed, MD | Minimally Invasive Hip & Knee Replacement",
    description:
      "Fellowship-trained at Cleveland Clinic. Specializing in Subvastus Total Knee Replacement and Bikini Incision Anterior Hip Replacement. Robotic-assisted. Serving the Chicago western suburbs.",
    siteName: "Mohammed Ahmed, MD | Hip & Knee Replacement",
    images: [
      {
        url: "/assets/dr-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Mohammed Ahmed, MD | Hip & Knee Replacement Surgeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Mohammed Ahmed, MD | Hip & Knee Replacement | Chicago Suburbs",
    description:
      "Minimally invasive, robotic-assisted joint replacement. Fellowship-trained at Cleveland Clinic. Elmhurst · Addison · Lombard, IL.",
    images: ["/assets/dr-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${SITE_URL}/#physician`,
  name: "Mohammed Ahmed, MD",
  description:
    "Board-certified, fellowship-trained orthopedic surgeon specializing in minimally invasive robotic-assisted hip and knee replacement surgery.",
  medicalSpecialty: "Orthopedic Surgery",
  telephone: "+1-630-646-7000",
  url: SITE_URL,
  image: `${SITE_URL}/assets/dr-hero.jpg`,
  hasCredential: [
    "Board Certified, American Board of Orthopaedic Surgery",
    "Fellowship Training, Cleveland Clinic, Adult Reconstruction (Hip & Knee)",
    "Residency, Orthopedic Surgery, Saint Louis University",
    "MD, University of Illinois at Chicago, College of Medicine",
  ],
  memberOf: {
    "@type": "MedicalOrganization",
    name: "Endeavor Health Medical Group",
  },
  hospitalAffiliation: [
    { "@type": "Hospital", name: "Elmhurst Hospital", address: { "@type": "PostalAddress", streetAddress: "155 E. Brush Hill Rd.", addressLocality: "Elmhurst", addressRegion: "IL", postalCode: "60126" } },
    { "@type": "Hospital", name: "Edwards Hospital", address: { "@type": "PostalAddress", streetAddress: "801 S. Washington St.", addressLocality: "Naperville", addressRegion: "IL", postalCode: "60540" } },
    { "@type": "MedicalClinic", name: "Plainfield Surgical Center", address: { "@type": "PostalAddress", streetAddress: "24600 W. 127th St.", addressLocality: "Plainfield", addressRegion: "IL", postalCode: "60585" } },
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "1200 S. York St., Suite 2000",
      addressLocality: "Elmhurst",
      addressRegion: "IL",
      postalCode: "60126",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "303 W. Lake St., Suite 200",
      addressLocality: "Addison",
      addressRegion: "IL",
      postalCode: "60101",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "130 S. Main St., Suite 202",
      addressLocality: "Lombard",
      addressRegion: "IL",
      postalCode: "60148",
      addressCountry: "US",
    },
  ],
  areaServed: [
    "Elmhurst, IL", "Addison, IL", "Lombard, IL", "Naperville, IL",
    "Plainfield, IL", "Oak Brook, IL", "Downers Grove, IL", "Glen Ellyn, IL",
    "Wheaton, IL", "Westmont, IL", "Villa Park, IL",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "98",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Am I a candidate for joint replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Candidacy depends on the severity of your arthritis, your pain level, and how much your daily function is affected. If conservative treatments like physical therapy, injections, or medications have not provided lasting relief, a consultation can clarify whether replacement is the right next step.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Muscle/Tendon Sparing Subvastus approach for knee replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This technique works below the quadriceps tendon rather than cutting through it. By sparing this critical structure, patients typically experience less post-operative pain, better early quad function, and a more natural feel in the knee, while still achieving the same precision and implant longevity as a standard approach.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Bikini Incision Anterior Approach for hip replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This minimally invasive technique approaches the hip from the front, working between natural muscle planes instead of cutting through them. The incision is placed along a natural skin crease for a cosmetically favorable result. Benefits include faster recovery, fewer post-operative restrictions, and a lower risk of dislocation.",
      },
    },
    {
      "@type": "Question",
      name: "What makes robotic-assisted surgery different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Robotic assistance uses pre-operative 3D imaging to build a surgical plan customized to your anatomy, then guides placement with precision during the procedure. This means more accurate implant positioning, better joint balance, and a more predictable recovery, while I remain fully in control throughout the surgery.",
      },
    },
    {
      "@type": "Question",
      name: "How long is recovery after joint replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most patients walk the same day of surgery. Many return to driving within 2–4 weeks and to light activity within 6–8 weeks. Full return to sports or strenuous activity is typically 3–6 months depending on your procedure and overall health.",
      },
    },
    {
      "@type": "Question",
      name: "How long do joint replacements last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern implants are engineered for long-term durability. Studies show 90–95% of replacements remain functional at 15–20 years. Factors like activity level, weight, and implant selection all play a role.",
      },
    },
    {
      "@type": "Question",
      name: "Where will my surgery be performed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Surgery is performed at Elmhurst Hospital, Plainfield Surgical Center, or Edwards Hospital, depending on your procedure and health profile. Many patients qualify for same-day or next-day discharge through our rapid recovery program.",
      },
    },
    {
      "@type": "Question",
      name: "What should I expect at my first consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll meet directly with Dr. Ahmed, not a physician assistant or rotating provider. We'll review your imaging, discuss your symptoms and goals, and walk through your options in plain language. You'll leave with a clear picture of whether surgery is right for you and exactly what the process looks like.",
      },
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Mohammed Ahmed, MD | Hip & Knee Replacement",
  description:
    "Board-certified, fellowship-trained orthopedic surgeon specializing in minimally invasive robotic-assisted hip and knee replacement. Serving Elmhurst, Addison, and Lombard, IL.",
};

// TODO: Confirm opening hours with the office before publishing
const clinicsJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${SITE_URL}/#clinic-elmhurst`,
    name: "Dr. Mohammed Ahmed, MD — Elmhurst Center For Health",
    url: SITE_URL,
    telephone: "+1-630-646-7000",
    image: `${SITE_URL}/assets/dr-hero.jpg`,
    description:
      "Board-certified, fellowship-trained orthopedic surgeon specializing in minimally invasive hip and knee replacement. Robotic-assisted surgery with Stryker Mako.",
    medicalSpecialty: "Orthopedic Surgery",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1200 S. York St., Suite 2000",
      addressLocality: "Elmhurst",
      addressRegion: "IL",
      postalCode: "60126",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8714,
      longitude: -87.9406,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "98",
    },
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: "Endeavor Health Medical Group",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${SITE_URL}/#clinic-addison`,
    name: "Dr. Mohammed Ahmed, MD — Addison Office",
    url: SITE_URL,
    telephone: "+1-630-646-7000",
    image: `${SITE_URL}/assets/dr-hero.jpg`,
    description:
      "Board-certified, fellowship-trained orthopedic surgeon specializing in minimally invasive hip and knee replacement. Serving Addison, IL and surrounding western suburbs.",
    medicalSpecialty: "Orthopedic Surgery",
    address: {
      "@type": "PostalAddress",
      streetAddress: "303 W. Lake St., Suite 200",
      addressLocality: "Addison",
      addressRegion: "IL",
      postalCode: "60101",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.9314,
      longitude: -87.9889,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "98",
    },
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: "Endeavor Health Medical Group",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${SITE_URL}/#clinic-lombard`,
    name: "Dr. Mohammed Ahmed, MD — Lombard Office",
    url: SITE_URL,
    telephone: "+1-630-646-7000",
    image: `${SITE_URL}/assets/dr-hero.jpg`,
    description:
      "Board-certified, fellowship-trained orthopedic surgeon specializing in minimally invasive hip and knee replacement. Serving Lombard, IL and surrounding western suburbs.",
    medicalSpecialty: "Orthopedic Surgery",
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 S. Main St., Suite 202",
      addressLocality: "Lombard",
      addressRegion: "IL",
      postalCode: "60148",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8803,
      longitude: -88.0075,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "17:00" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "98",
    },
    parentOrganization: {
      "@type": "MedicalOrganization",
      name: "Endeavor Health Medical Group",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* Preload the LCP hero image so it starts fetching immediately */}
        <link rel="preload" as="image" href="/assets/dr-ahmed-cutout.webp" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="Elmhurst, Illinois" />
        <meta name="geo.position" content="41.899;-87.940" />
        <meta name="ICBM" content="41.899, -87.940" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {clinicsJsonLd.map((clinic) => (
          <script
            key={clinic["@id"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(clinic) }}
          />
        ))}
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
