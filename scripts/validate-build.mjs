import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const rootPath = decodeURIComponent(root.pathname);
const htmlFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (extname(entry.name) === '.html') htmlFiles.push(path);
  }
}

function targetExists(href) {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean || !clean.startsWith('/')) return true;
  if (clean === '/') return existsSync(join(rootPath, 'index.html'));
  const target = join(rootPath, clean.replace(/^\//, ''));
  return existsSync(target) || existsSync(join(target, 'index.html'));
}

const errors = [];
walk(rootPath);

const appStoreUrl = 'https://apps.apple.com/app/id6783193470';

for (const file of htmlFiles) {
  const name = relative(rootPath, file);
  const html = readFileSync(file, 'utf8');
  const requireMatch = (pattern, label) => {
    if (!pattern.test(html)) errors.push(`${name}: missing ${label}`);
  };

  requireMatch(/<title>[^<]+<\/title>/, 'title');
  requireMatch(/<meta name="description" content="[^"]+">/, 'meta description');
  requireMatch(/<link rel="canonical" href="https:\/\/posturely\.daimmd\.com\/[^"]*">/, 'canonical URL');
  requireMatch(/<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/, 'h1');

  if (name === 'index.html' || name === 'zh/index.html' || name === 'ja/index.html') {
    requireMatch(new RegExp(appStoreUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), 'global App Store link');
  }

  if (/https:\/\/apps\.apple\.com\/(?:cn|hk|tw|sg|jp|us)\//.test(html)) {
    errors.push(`${name}: contains a region-specific App Store link`);
  }

  const h1Count = (html.match(/<h1(?:\s[^>]*)?>/g) ?? []).length;
  if (h1Count !== 1) errors.push(`${name}: expected one h1, found ${h1Count}`);

  for (const match of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
    if (!targetExists(match[1])) errors.push(`${name}: broken internal link ${match[1]}`);
  }

  for (const match of html.matchAll(/<img\s[^>]*>/g)) {
    if (!/\salt="[^"]*"/.test(match[0])) errors.push(`${name}: image without alt`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch {
      errors.push(`${name}: invalid JSON-LD`);
    }
  }
}

for (const required of ['robots.txt', 'sitemap.xml', 'og.png']) {
  if (!existsSync(join(rootPath, required))) errors.push(`missing ${required}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages, internal links, metadata, image alt text, JSON-LD, robots.txt, sitemap.xml, and og.png.`);
