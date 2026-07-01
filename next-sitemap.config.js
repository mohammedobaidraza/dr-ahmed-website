/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://drmohammedahmed.com", // canonical apex domain — must match SITE_URL in lib/site-config.ts
  generateRobotsTxt: false, // we manage robots.txt manually in /public
  outDir: "out",            // static export output directory
  changefreq: "monthly",
  priority: 1.0,
};
