import {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  Table, TableRow, TableCell, WidthType, BorderStyle,
  AlignmentType, ShadingType, TableLayoutType,
} from "docx";
import { writeFileSync } from "fs";

const GOLD   = "C8A25A";
const NAVY   = "061B33";
const GREEN  = "1A7340";
const RED    = "C0392B";
const GRAY   = "F2F2F2";
const WHITE  = "FFFFFF";

function heading1(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 160 },
    run: { color: NAVY, bold: true },
  });
}

function heading2(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 120 },
    run: { color: NAVY },
  });
}

function heading3(text) {
  return new Paragraph({
    text,
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
    run: { color: NAVY },
  });
}

function body(text, options = {}) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, size: 22, color: "333333", ...options })],
  });
}

function bullet(text, bold = false) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 40, after: 40 },
    children: [new TextRun({ text, size: 22, color: "333333", bold })],
  });
}

function todo(text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 40, after: 40 },
    children: [
      new TextRun({ text: "☐  ", size: 22, color: RED, bold: true }),
      new TextRun({ text, size: 22, color: "333333" }),
    ],
  });
}

function done(text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 40, after: 40 },
    children: [
      new TextRun({ text: "✓  ", size: 22, color: GREEN, bold: true }),
      new TextRun({ text, size: 22, color: "555555" }),
    ],
  });
}

function divider() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD" } },
    spacing: { before: 160, after: 160 },
    children: [],
  });
}

function tableRow(col1, col2, header = false) {
  const shade = header ? { type: ShadingType.SOLID, color: NAVY } : { type: ShadingType.SOLID, color: GRAY };
  const textColor = header ? WHITE : "333333";
  const bold = header;
  return new TableRow({
    children: [
      new TableCell({
        width: { size: 35, type: WidthType.PERCENTAGE },
        shading: shade,
        children: [new Paragraph({ children: [new TextRun({ text: col1, size: 20, color: textColor, bold })] })],
      }),
      new TableCell({
        width: { size: 65, type: WidthType.PERCENTAGE },
        shading: header ? shade : undefined,
        children: [new Paragraph({ children: [new TextRun({ text: col2, size: 20, color: textColor, bold })] })],
      }),
    ],
  });
}

function table(headers, rows) {
  return new Table({
    layout: TableLayoutType.FIXED,
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      tableRow(headers[0], headers[1], true),
      ...rows.map(([a, b]) => tableRow(a, b)),
    ],
  });
}

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Calibri", size: 22 } },
    },
  },
  sections: [
    {
      children: [

        // ── COVER ──────────────────────────────────────────────────
        new Paragraph({
          spacing: { before: 0, after: 80 },
          children: [new TextRun({ text: "Dr. Mohammed Ahmed, MD", bold: true, size: 52, color: NAVY })],
        }),
        new Paragraph({
          spacing: { before: 0, after: 40 },
          children: [new TextRun({ text: "Website SEO Implementation Report", size: 36, color: GOLD })],
        }),
        new Paragraph({
          spacing: { before: 0, after: 40 },
          children: [new TextRun({ text: "drmohammedahmed.com  ·  Prepared June 2026", size: 22, color: "888888" })],
        }),
        divider(),

        // ── OVERVIEW ──────────────────────────────────────────────
        heading1("Overview"),
        body("This document summarises the six phases of SEO work completed on the Dr. Mohammed Ahmed website (Next.js 16, static export, Netlify). Each phase is documented with what was done, what files were changed, and what remains to be completed once a domain is confirmed and Google accounts are set up."),
        divider(),

        // ── P1 ────────────────────────────────────────────────────
        heading2("Phase 1 — Critical Technical Fixes"),
        heading3("What was done"),
        body("All changes were made in  app/layout.tsx."),

        table(["Fix", "Detail"], [
          ["metadataBase", "Added new URL(SITE_URL) so all Open Graph and Twitter image URLs resolve as absolute — required for social sharing previews to work."],
          ["Canonical tag", "Added alternates: { canonical: '/' } — Next.js outputs <link rel=\"canonical\"> in the HTML, preventing duplicate-content penalties."],
          ["JSON-LD @id + url", "Added @id and url fields to the Physician schema so Google can identify the entity in its Knowledge Graph."],
          ["JSON-LD image URL", "Changed image from relative '/assets/dr-hero.jpg' to absolute SITE_URL + path. Google silently ignores relative URLs in structured data."],
          ["FAQPage schema", "Added a complete FAQPage JSON-LD block with all 8 Q&As. Eligible for Google FAQ rich results — questions expand directly in search results."],
        ]),

        heading3("File changed"),
        bullet("app/layout.tsx"),

        heading3("SITE_URL placeholder"),
        body("A constant SITE_URL = 'https://www.drmohammedahmed.com' is at the top of layout.tsx (line 6). Update this one line when the real domain is confirmed — all canonical URLs, OG tags, and JSON-LD will update automatically."),

        divider(),

        // ── P2 ────────────────────────────────────────────────────
        heading2("Phase 2 — Sitemap & Robots.txt"),
        heading3("What was done"),

        table(["File", "Purpose"], [
          ["public/robots.txt", "Tells all crawlers they may index the entire site. Points to the sitemap URL."],
          ["next-sitemap.config.js", "Configures next-sitemap to generate sitemap.xml on every build. outDir is set to 'out' for the static export."],
          ["package.json postbuild", "Added \"postbuild\": \"next-sitemap\" so sitemap regenerates automatically on every npm run build."],
          ["out/sitemap.xml", "Index sitemap — submitted to Google Search Console after domain is live."],
          ["out/sitemap-0.xml", "Actual page URLs with changefreq and priority metadata."],
        ]),

        heading3("Files changed"),
        bullet("package.json"),
        bullet("next-sitemap.config.js  (new file)"),
        bullet("public/robots.txt  (new file)"),

        heading3("Note"),
        body("The siteUrl in next-sitemap.config.js must match the SITE_URL in layout.tsx. Both have TODO comments."),

        divider(),

        // ── P3 ────────────────────────────────────────────────────
        heading2("Phase 3 — Structured Data Upgrades"),
        heading3("What was done"),
        body("Three new JSON-LD blocks were added to app/layout.tsx:"),

        table(["Schema", "Google benefit"], [
          ["aggregateRating on Physician", "Can display star rating (4.7/5) directly in search results next to the doctor's name."],
          ["WebSite schema", "Registers the site as a named entity; enables Google Sitelinks Search Box."],
          ["MedicalClinic × 3 (Elmhurst, Addison, Lombard)", "Powers the local map pack — the listings that appear when someone searches 'orthopedic surgeon near Elmhurst IL'. Each clinic has address, geo coordinates, opening hours, and aggregate rating."],
        ]),

        heading3("Files changed"),
        bullet("app/layout.tsx"),

        heading3("Opening hours — action required"),
        body("Opening hours are currently set to Mon–Fri 08:00–17:00 as a placeholder. Confirm actual clinic hours and update the openingHoursSpecification arrays in the three MedicalClinic blocks in layout.tsx."),

        divider(),

        // ── P4 ────────────────────────────────────────────────────
        heading2("Phase 4 — On-Page Keyword Improvements"),
        heading3("What was done"),

        table(["File", "Change"], [
          ["HeroSection.tsx", "Added <h2> tag after both H1 lines (mobile + desktop): 'Board-Certified Hip & Knee Replacement Surgeon — Elmhurst · Addison · Lombard, IL'. Styled as a subtle white/45 byline — does not disrupt design."],
          ["ProceduresSection.tsx", "Eyebrow label: 'Procedures' → 'Hip & Knee Procedures'"],
          ["RoboticProcess.tsx", "Eyebrow label: 'My Approach' → 'Robotic-Assisted Surgery'"],
          ["LocationsSection.tsx", "H2: 'Three convenient clinic locations.' → 'Three convenient orthopedic clinic locations near Chicago.'"],
          ["SocialProof.tsx", "Eyebrow label: 'Patient Stories' → 'Patient Reviews — Hip & Knee Replacement'"],
        ]),

        heading3("Why it matters"),
        body("Google weights content in heading tags (H1–H3) more heavily than body text. Adding keywords to headings and eyebrow labels — without disrupting the design — improves topical relevance signals for 'hip replacement Elmhurst IL', 'robotic-assisted surgery', and similar queries."),

        divider(),

        // ── P5 ────────────────────────────────────────────────────
        heading2("Phase 5 — Core Web Vitals & Image Optimization"),
        heading3("What was done"),

        table(["Change", "Detail"], [
          ["dr-ahmed-cutout.webp", "Converted PNG (1,443 KB) to WebP (121 KB) — 92% smaller. This is the LCP element; a faster LCP image is the single biggest CWV improvement possible."],
          ["mma-logo.webp", "Converted PNG (516 KB) to WebP (68 KB) — 87% smaller."],
          ["<link rel=\"preload\">", "Added to <head> in layout.tsx pointing to dr-ahmed-cutout.webp. Browser starts fetching the LCP image before React renders, reducing Largest Contentful Paint."],
          ["font-display=swap", "Already present in Google Fonts URL — no FOIT (Flash of Invisible Text)."],
          ["Inter font", "Confirmed it is used as the body font in globals.css — not a redundant load."],
        ]),

        heading3("Files changed"),
        bullet("app/layout.tsx  (preload link)"),
        bullet("components/HeroSection.tsx  (image src updated to .webp)"),
        bullet("components/Footer.tsx  (logo src updated to .webp)"),
        bullet("public/assets/dr-ahmed-cutout.webp  (new file)"),
        bullet("public/assets/mma-logo.webp  (new file)"),

        heading3("LCP before vs after"),
        body("Before: dr-ahmed-cutout.png  →  1,443 KB  (slow on mobile / 4G)"),
        body("After:  dr-ahmed-cutout.webp →    121 KB  (~12× faster to download)"),

        divider(),

        // ── P6 STATUS ─────────────────────────────────────────────
        heading2("Phase 6 — Analytics & Search Console  (pending)"),
        body("Phase 6 was deferred because the website is not yet hosted and no Google accounts have been created. The code implementation is straightforward and can be added in under 30 minutes once the accounts exist."),

        divider(),

        // ── TODO LIST ─────────────────────────────────────────────
        heading1("Complete TODO List"),

        heading2("Before going live"),
        todo("Confirm the final domain name and update SITE_URL in app/layout.tsx (line 6)"),
        todo("Update siteUrl in next-sitemap.config.js to match the real domain"),
        todo("Update the Sitemap URL in public/robots.txt"),
        todo("Confirm clinic opening hours with the office and update openingHoursSpecification in the three MedicalClinic JSON-LD blocks in app/layout.tsx"),
        todo("Replace the OG image reference: /assets/dr-hero.jpg is used for Open Graph previews — verify this image exists and is sized 1200×630px"),
        todo("Fix footer dead links: Privacy Policy, Terms, and Accessibility links point to '#' — create dedicated pages or remove the links"),

        heading2("After the domain is live"),
        todo("Create a Google Analytics 4 property at analytics.google.com — get the Measurement ID (G-XXXXXXXXXX)"),
        todo("Add GA4 to the site: install the Next.js Script component with strategy='afterInteractive' and the gtag snippet"),
        todo("Create Google Search Console at search.google.com/search-console — verify ownership via the GA4 tag or HTML meta tag"),
        todo("Submit sitemap.xml to Google Search Console (URL: yourdomain.com/sitemap.xml)"),
        todo("Create or claim a Google Business Profile for each of the 3 clinic locations (Elmhurst, Addison, Lombard)"),
        todo("Ensure NAP consistency: Name, Address, Phone must match exactly across GBP, the website, Healthgrades, Zocdoc, and US News listings"),
        todo("Run Google Rich Results Test on the live URL to verify FAQPage and Physician schemas are eligible"),
        todo("Run PageSpeed Insights on the live URL to get real Core Web Vitals scores"),

        heading2("Ongoing"),
        todo("Monitor Google Search Console weekly for crawl errors, index coverage, and keyword impressions"),
        todo("Update the ratingCount in aggregateRating (currently set to 98) as more patient reviews accumulate"),
        todo("Refresh FAQ content if new common patient questions emerge"),

        divider(),

        // ── FILES SUMMARY ─────────────────────────────────────────
        heading1("Files Changed Summary"),

        table(["File", "What changed"], [
          ["app/layout.tsx", "metadataBase, canonical, FAQPage JSON-LD, MedicalClinic JSON-LD × 3, WebSite JSON-LD, aggregateRating, absolute image URLs, preload link"],
          ["next-sitemap.config.js", "New file — sitemap generation config"],
          ["public/robots.txt", "New file — crawler directives + sitemap pointer"],
          ["package.json", "Added postbuild script to auto-generate sitemap on build"],
          ["components/HeroSection.tsx", "Added keyword H2, updated image src to .webp"],
          ["components/ProceduresSection.tsx", "Updated eyebrow label to 'Hip & Knee Procedures'"],
          ["components/RoboticProcess.tsx", "Updated eyebrow label to 'Robotic-Assisted Surgery'"],
          ["components/LocationsSection.tsx", "Updated H2 to include 'orthopedic' and 'near Chicago'"],
          ["components/SocialProof.tsx", "Updated eyebrow label to include 'Patient Reviews'"],
          ["components/Footer.tsx", "Updated logo src to .webp"],
          ["public/assets/dr-ahmed-cutout.webp", "New file — compressed hero image (92% smaller than PNG)"],
          ["public/assets/mma-logo.webp", "New file — compressed logo (87% smaller than PNG)"],
        ]),

        divider(),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200 },
          children: [new TextRun({ text: "Document generated automatically from implementation · June 2026", size: 18, color: "AAAAAA" })],
        }),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
writeFileSync("C:/Users/Obaid Raza/Desktop/Dr-Ahmed-SEO-Report.docx", buffer);
console.log("Done → C:/Users/Obaid Raza/Desktop/Dr-Ahmed-SEO-Report.docx");
