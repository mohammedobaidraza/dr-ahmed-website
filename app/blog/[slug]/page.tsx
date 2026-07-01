import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { procedures, getProcedureBySlug } from "@/lib/procedures";
import { blogContent } from "@/content/blog/procedureContent";
import { SITE_URL, PHYSICIAN_ID } from "@/lib/site-config";
import ProcedureBreadcrumb from "@/components/blog/ProcedureBreadcrumb";
import RelatedProcedures from "@/components/blog/RelatedProcedures";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) return {};

  const url = `${SITE_URL}/blog/${procedure.slug}`;

  return {
    title: `${procedure.title} | Dr. Mohammed Ahmed, MD`,
    description: procedure.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: procedure.title,
      description: procedure.metaDescription,
      // metadataBase is already set in app/layout.tsx (Phase 1), so this
      // resolves to an absolute URL automatically — no need to prefix
      // SITE_URL here again.
      images: [{ url: procedure.heroImage }],
      type: "article",
    },
  };
}

export default async function ProcedureBlogPost({ params }: Props) {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  const content = blogContent[slug];

  if (!procedure || !content) {
    notFound();
  }

  // Uses MedicalWebPage + references the existing Physician @id from
  // app/layout.tsx (Phase 1/3) as `author`, instead of redeclaring a
  // separate Physician object. Keeps every page pointing at one entity
  // in Google's Knowledge Graph rather than fragmenting it across pages.
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: procedure!.title,
    description: procedure!.metaDescription,
    url: `${SITE_URL}/blog/${procedure!.slug}`,
    image: `${SITE_URL}${procedure!.heroImage}`,
    author: { "@id": PHYSICIAN_ID },
    medicalAudience: "Patient",
  };

  return (
    <main className="min-h-screen bg-[#F8F7F4]">
    <div className="max-w-3xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <ProcedureBreadcrumb
        currentTitle={procedure!.title}
        currentPath={`/blog/${procedure!.slug}`}
      />

      <p className="text-xs tracking-widest font-bold text-[#c9974a] mb-3">
        {procedure!.label}
      </p>
      <h1 className="text-4xl font-serif font-bold text-slate-900 leading-tight mb-8">
        {procedure!.title}
      </h1>

      {/*
        Plain <img>, not next/image: this project is a static export
        (output: 'export' per the SEO report), and next/image's default
        loader does not run under static export unless
        images.unoptimized = true is set in next.config.js. Since these
        headers are hand-built SVGs (not raster photos needing responsive
        variants), a plain <img> avoids that config dependency entirely.
      */}
      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-10 bg-[#0e2038]">
        <img
          src={procedure!.blogHeroImage}
          alt={procedure!.title}
          width={1600}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-lg text-slate-700 leading-relaxed mb-10">
        {content.intro}
      </p>

      {content.sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
            {section.heading}
          </h2>
          {section.paragraphs.map((para, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-4">
              {para}
            </p>
          ))}
        </section>
      ))}

      <p className="text-slate-700 leading-relaxed mb-10">
        This is one of several{" "}
        <Link href="/#procedures" className="text-[#c9974a] font-semibold hover:underline">
          hip and knee replacement approaches
        </Link>{" "}
        offered, each selected based on your specific anatomy and goals.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3">Sources</h3>
        <ul className="space-y-2">
          {content.citations.map((c) => (
            <li key={c.url} className="text-sm">
              <a
                href={c.url}
                target="_blank"
                rel="noopener"
                className="text-[#0e2038] underline hover:text-[#c9974a]"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#0e2038] rounded-lg p-8 text-center mb-4">
        <h3 className="text-white text-xl font-serif font-bold mb-2">
          See if this approach is right for you
        </h3>
        <p className="text-slate-300 text-sm mb-5">
          Schedule a consultation to discuss your imaging, symptoms, and goals.
        </p>
        <Link
          href="/#contact" // TODO: point at real contact/scheduling route
          className="inline-block bg-[#c9974a] text-[#0e2038] font-bold text-sm px-6 py-3 rounded"
        >
          Request a Consultation
        </Link>
      </div>

      <RelatedProcedures currentSlug={procedure!.slug} />
    </div>
    </main>
  );
}
