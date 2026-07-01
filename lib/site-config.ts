// Single source of truth for site-wide constants.
// Imported by app/layout.tsx, app/blog/[slug]/page.tsx, and ProcedureBreadcrumb.tsx.
// One place to update — everything else derives from it.

export const SITE_URL = "https://drmohammedahmed.com"; // canonical apex domain — no www

export const PHYSICIAN_NAME = "Dr. Mohammed Ahmed, MD";

// Matches the @id on the Physician JSON-LD block in app/layout.tsx.
// Blog pages reference this @id as `author` so Google resolves both
// to the same Knowledge Graph entity rather than two separate objects.
export const PHYSICIAN_ID = `${SITE_URL}/#physician`;
