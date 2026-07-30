import siteData from "@/data/site.json";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? siteData.url,
);