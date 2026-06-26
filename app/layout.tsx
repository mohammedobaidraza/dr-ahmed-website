import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
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
  name: "Mohammed Ahmed, MD",
  description:
    "Board-certified, fellowship-trained orthopedic surgeon specializing in minimally invasive robotic-assisted hip and knee replacement surgery.",
  medicalSpecialty: "Orthopedic Surgery",
  telephone: "+1-630-646-7000",
  image: "/assets/dr-hero.jpg",
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
};

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
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
