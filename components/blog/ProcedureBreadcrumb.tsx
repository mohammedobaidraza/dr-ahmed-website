import Link from "next/link";
import { SITE_URL } from "@/lib/site-config";

type BreadcrumbProps = {
  currentTitle: string;
  currentPath: string; // e.g. "/blog/partial-knee-replacement"
};

export default function ProcedureBreadcrumb({ currentTitle, currentPath }: BreadcrumbProps) {
  const items = [
    { name: "Home", item: `${SITE_URL}/` },
    { name: "Procedures", item: `${SITE_URL}/#procedures` },
    { name: currentTitle, item: `${SITE_URL}${currentPath}` },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-slate-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/#procedures" className="hover:text-slate-700">
          Procedures
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700 font-medium">{currentTitle}</span>
      </nav>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
