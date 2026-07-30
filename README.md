# Presentation Website Template

A data-driven, single-page portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

```bash
corepack enable
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Profile content and section visibility live in `src/data`, so you can build your own website without editing the React components. Start with `site.json`, then replace the sample links and content in the remaining JSON files.

See [Customize Your Website](CUSTOMIZATION.md) for beginner-friendly setup instructions, a description of every data file, and guides for adding projects, images, a CV, and contact links.

For deployments, set `NEXT_PUBLIC_SITE_URL` to the production origin before building. It overrides the fallback URL in `site.json` and is used for canonical metadata, Open Graph metadata, `robots.txt`, and `sitemap.xml`.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Project, contact, and CV links whose `href` is `#` are treated as inactive placeholders and are not rendered.

## Validate

```bash
pnpm lint
pnpm build
```

## License

This template is available under the [MIT License](LICENSE).
