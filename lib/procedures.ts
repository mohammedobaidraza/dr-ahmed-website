// Single source of truth for the 4 procedure cards + their matching blog posts.
// Import this from the homepage Procedures section AND app/blog/[slug]/page.tsx
// so the card grid and the blog posts never drift out of sync.

export type Procedure = {
  slug: string;
  label: string; // e.g. "KNEE · MINIMALLY INVASIVE"
  title: string; // exact procedure/blog name
  cardBlurb: string; // short blurb used on the homepage card
  metaDescription: string; // ~150-160 char SEO description for the blog post
  heroImage: string; // portrait card image — used on homepage grid + Related Procedures
  thumbnailImage: string; // clean crop for homepage/listing cards (no text overlay)
  blogHeroImage: string; // full 16:9 educational infographic — used on the blog post hero
  datePublished: string; // ISO 8601 date — required for YMYL medical E-E-A-T
  dateModified: string;  // ISO 8601 date — update whenever content changes
};

export const procedures: Procedure[] = [
  {
    slug: "muscle-tendon-sparing-subvastus-total-knee-replacement",
    label: "KNEE · MINIMALLY INVASIVE",
    title: "Muscle/Tendon Sparing Subvastus Total Knee Replacement",
    cardBlurb:
      "Works below the quadriceps tendon, avoiding cutting through it, for less pain, better early function, and a more natural feel after surgery.",
    metaDescription:
      "Dr. Mohammed Ahmed explains the muscle/tendon sparing subvastus approach to total knee replacement — a quad-sparing technique built for faster early recovery.",
    heroImage: "/assets/Muscle Sparing Image.png",
    thumbnailImage: "/assets/procedures/Muscle Sparing   Thumbanil.png",
    blogHeroImage: "/assets/Muscle Sparing Image.png",
    datePublished: "2026-06-15",
    dateModified: "2026-08-13",
  },
  {
    slug: "partial-knee-replacement",
    label: "KNEE",
    title: "Partial Knee Replacement",
    cardBlurb:
      "Resurface only the damaged compartment. Preserve healthy bone and ligaments for a more natural outcome.",
    metaDescription:
      "Learn who's a candidate for partial (unicompartmental) knee replacement, how it differs from total knee replacement, and what recovery looks like.",
    heroImage: "/assets/Patrial Knee Image.png",
    thumbnailImage: "/assets/procedures/Partial Knee Thumbnail.png",
    blogHeroImage: "/assets/Patrial Knee Image.png",
    datePublished: "2026-06-15",
    dateModified: "2026-08-13",
  },
  {
    slug: "bikini-incision-anterior-approach-total-hip-replacement",
    label: "HIP · MINIMALLY INVASIVE",
    title: "Bikini Incision Anterior Approach Total Hip Replacement",
    cardBlurb:
      "Muscle-sparing approach from the front with a cosmetically placed incision. Faster recovery, fewer restrictions, and reduced dislocation risk.",
    metaDescription:
      "What the bikini incision anterior approach to total hip replacement is, how it differs from posterior hip replacement, and why it's muscle-sparing.",
    heroImage: "/assets/Bikini Incision Image.png",
    thumbnailImage: "/assets/procedures/Bikini Thumbnail.png",
    blogHeroImage: "/assets/Bikini Incision Image.png",
    datePublished: "2026-06-15",
    dateModified: "2026-08-13",
  },
  {
    slug: "complex-revision-joint-replacement",
    label: "HIP & KNEE",
    title: "Complex & Revision Joint Replacement",
    cardBlurb:
      "Expertise in complex primary and revision surgery for challenging cases requiring advanced reconstruction.",
    metaDescription:
      "When revision hip or knee replacement is needed, why it differs from primary joint replacement, and why subspecialized expertise matters.",
    heroImage: "/assets/Complex Knee Image.png",
    thumbnailImage: "/assets/procedures/Complex Knee Thmbnail.png",
    blogHeroImage: "/assets/Complex Knee Image.png",
    datePublished: "2026-06-15",
    dateModified: "2026-08-13",
  },
];

export function getProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}
