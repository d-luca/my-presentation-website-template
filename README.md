# Presentation Website Template

A data-driven, single-page portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Profile content and section visibility live in `src/data`. Update `site.json` first, especially the sample name, title, description, and canonical URL. Then replace the sample links and content in the remaining JSON files.

For deployments, set `NEXT_PUBLIC_SITE_URL` to the production origin before building. It overrides the fallback URL in `site.json` and is used for canonical metadata, Open Graph metadata, `robots.txt`, and `sitemap.xml`.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Links whose `href` is `#` are treated as inactive placeholders and are not rendered.

## Validate

```bash
pnpm lint
pnpm build
```
