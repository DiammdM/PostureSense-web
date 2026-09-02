# Posturely official website

The official multilingual website for Posturely, an iPhone and iPad posture reminder app. The site is built as static HTML for fast, low-maintenance deployment to Cloudflare Pages.

Production URL: `https://posturely.daimmd.com`

## Stack

- Astro with strict TypeScript
- Tailwind CSS 4 through the Vite integration
- Astro Content Collections for Markdown blog posts
- Static site generation only
- No React, database, CMS, analytics, external fonts, or client-side application bundle

## Languages and routes

English is the default language and is served without a locale prefix. Simplified Chinese and Japanese use locale-prefixed routes.

| Language | Home | Example page |
| --- | --- | --- |
| English | `/` | `/features/` |
| Simplified Chinese | `/zh/` | `/zh/features/` |
| Japanese | `/ja/` | `/ja/features/` |

The language switcher keeps the visitor on the equivalent route. Metadata includes `hreflang` links for `en`, `zh-Hans`, `ja`, and `x-default`.

## Install and develop

Requirements: Node.js 22.12 or newer and npm.

```bash
npm install
npm run dev
```

The local development server is normally available at `http://localhost:4321`.

## Build, type-check, and validate

```bash
npm run check
npm run build
npm run validate
```

- `npm run check` runs Astro and TypeScript diagnostics.
- `npm run build` generates the static website in `dist/`.
- `npm run validate` rebuilds the site and checks generated pages for titles, descriptions, canonical URLs, exactly one `h1`, internal links, image alt text, valid JSON-LD, `robots.txt`, `sitemap.xml`, and the Open Graph image.

## Cloudflare Pages deployment

Create a Cloudflare Pages project connected to this Git repository and use:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root
- Node.js version: `22.12` or newer

No server functions, database bindings, or runtime environment variables are required.

After the first successful deployment:

1. Open the Pages project in Cloudflare.
2. Go to **Custom domains**.
3. Add `posturely.daimmd.com`.
4. If `daimmd.com` already uses Cloudflare DNS, accept the proposed DNS record. Otherwise add the CNAME record Cloudflare provides at the current DNS provider.
5. Confirm HTTPS is active, then submit `https://posturely.daimmd.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

## Site configuration

Global product values live in `src/config/site.ts`:

- `siteName`
- `siteUrl`
- `description`
- `appStoreUrl`
- `supportEmail`
- `developerName`
- `socialLinks`

Replace the placeholder `appStoreUrl` as soon as the real listing URL is available. Confirm `supportEmail` and `developerName` before launch. Components and structured data read these values from the shared config, so they do not need to be replaced page by page.

## Content and translations

Shared English navigation is defined in `src/config/site.ts`. Localized interface copy and route helpers live under `src/i18n/`. Chinese and Japanese page content lives in `src/data/localized.ts`.

When changing a factual product claim, update all three languages in the same change. Keep descriptions direct and non-medical, and do not add claims about accuracy, outcomes, collected data, ratings, or pricing without verified source information.

## Add a blog post

Blog posts use Astro Content Collections. Add Markdown under:

- English: `src/content/blog/`
- Chinese: `src/content/blog/zh/`
- Japanese: `src/content/blog/ja/`

Required frontmatter:

```yaml
---
title: "Article title"
description: "A concise search description"
publishDate: 2026-08-31
updatedDate: 2026-09-15 # optional
author: "Posturely"
locale: "en" # en, zh, or ja
translationKey: "shared-slug-across-languages"
tags: ["posture", "iPhone"]
canonical: "https://example.com/original" # optional
image: "/images/article-name.webp" # optional
draft: false
---
```

Use the same `translationKey` for equivalent English, Chinese, and Japanese articles. The current routes use this shared slug, which lets the language switcher and `hreflang` metadata point to equivalent pages.

If an article has its own image, store a locally optimized WebP or AVIF file in `public/images/`, provide meaningful alt text in the article, and set `image` in frontmatter. Article pages intentionally omit a generic social image when no article-specific image exists.

## Add another SEO page

1. Create the English page in `src/pages/` with `BaseLayout`.
2. Add a localized dynamic route or page for `/zh/` and `/ja/`.
3. Give every version a unique, natural title and description.
4. Use one `h1`, semantic headings, and `Breadcrumbs` where appropriate.
5. Add the base route to `baseStaticPaths` in `src/pages/sitemap.xml.ts`.
6. Add the route to shared navigation only if it belongs in the primary navigation.
7. Run `npm run validate`.

## SEO implementation

- Unique title and meta description on every page
- Absolute canonical URLs
- Open Graph and X/Twitter metadata
- English, Simplified Chinese, Japanese, and `x-default` alternate links
- `SoftwareApplication`, `Organization`, `FAQPage`, `BlogPosting`, and `BreadcrumbList` structured data where relevant
- Generated `/sitemap.xml` containing all three language versions
- Simple `/robots.txt` that allows standard crawlers, including Googlebot, Bingbot, and OAI-SearchBot through the universal allow rule
- Semantic HTML, one primary `h1` per page, and static crawlable content
- Locally hosted favicon and social preview; no Google Fonts or third-party CDN requests

## Before production launch

The following values or facts still require confirmation:

- Real App Store URL
- Public support email
- Final legal developer name
- Final privacy-policy effective date and legal review
- Diagnostics, crash reports, usage analytics, identifiers, local history retention, purchase SDKs, age requirements, governing law, and any other data practices marked `TODO`
- Real product screenshots to replace the current screenshot placeholder
- Article-specific social images if desired

Do not publish the privacy policy as final until every visible `TODO` has been resolved against the actual shipping app and relevant legal requirements.
