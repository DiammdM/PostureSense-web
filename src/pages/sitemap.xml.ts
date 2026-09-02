import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

const baseStaticPaths = [
  '/',
  '/features/',
  '/how-it-works/',
  '/privacy/',
  '/support/',
  '/faq/',
  '/blog/',
];
const staticPaths = [
  ...baseStaticPaths,
  ...['zh', 'ja'].flatMap((locale) => baseStaticPaths.map((path) => `/${locale}${path}`)),
];

const escapeXml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const staticUrls = staticPaths.map((path) => ({ loc: new URL(path, siteConfig.siteUrl).toString() }));
  const postUrls = posts.map((post) => ({
    loc: new URL(post.data.canonical ?? `${post.data.locale === 'en' ? '' : `/${post.data.locale}`}/blog/${post.data.translationKey}/`, siteConfig.siteUrl).toString(),
    lastmod: (post.data.updatedDate ?? post.data.publishDate).toISOString(),
  }));
  const urls = [...staticUrls, ...postUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((item) => `  <url>\n    <loc>${escapeXml(item.loc)}</loc>${'lastmod' in item ? `\n    <lastmod>${item.lastmod}</lastmod>` : ''}\n  </url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
