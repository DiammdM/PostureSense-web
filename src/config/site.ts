export const siteConfig = {
  siteName: 'Posturely',
  siteUrl: 'https://posturely.daimmd.com',
  description:
    'Posturely is an iOS posture reminder app that uses on-device detection to help you notice head-down, forward-leaning, and tilted posture during desk sessions.',
  supportEmail: 'diammd@icloud.com',
  developerName: 'DAIMMD',
  socialLinks: {} as Record<string, string>,
} as const;

export const appStore = {
  appId: '6783193470',
  url: 'https://apps.apple.com/app/id6783193470',
  qrImage: '/images/posturely-app-store-qr.png',
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/features/', label: 'Features' },
  { href: '/how-it-works/', label: 'How it works' },
  { href: '/privacy/', label: 'Privacy' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/support/', label: 'Support' },
] as const;
