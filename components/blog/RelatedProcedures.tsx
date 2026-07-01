import Link from "next/link";
import { procedures } from "@/lib/procedures";

type RelatedProceduresProps = {
  currentSlug: string;
};

export default function RelatedProcedures({ currentSlug }: RelatedProceduresProps) {
  const related = procedures.filter((p) => p.slug !== currentSlug);

  return (
    <section className="mt-16 border-t border-slate-200 pt-12">
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
        Related Procedures
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block rounded-lg overflow-hidden bg-[#0e2038] hover:opacity-90 transition"
          >
            <div className="aspect-video">
              <img
                src={p.blogHeroImage}
                alt={p.title}
                width={480}
                height={270}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-[11px] tracking-wider font-bold text-[#c9974a] mb-1">
                {p.label}
              </p>
              <p className="text-white font-serif font-bold leading-snug">
                {p.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/procedures"
          className="text-[#c9974a] font-bold text-sm tracking-wide hover:underline"
        >
          &larr; View All Procedures
        </Link>
      </div>
    </section>
  );
}
