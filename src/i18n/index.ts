export const locales = ['en', 'zh', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
};

export const localeTags: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-Hans',
  ja: 'ja',
};

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname === '/zh' || pathname.startsWith('/zh/')) return 'zh';
  if (pathname === '/ja' || pathname.startsWith('/ja/')) return 'ja';
  return 'en';
}

export function stripLocalePath(pathname: string): string {
  const stripped = pathname.replace(/^\/(zh|ja)(?=\/|$)/, '');
  return stripped || '/';
}

export function localizedPath(pathname: string, locale: Locale): string {
  const base = stripLocalePath(pathname);
  return locale === 'en' ? base : `/${locale}${base === '/' ? '/' : base}`;
}

export const common = {
  en: {
    nav: ['Home', 'Features', 'How it works', 'Privacy', 'FAQ', 'Blog', 'Support'],
    downloadSmall: 'Download on the',
    appStore: 'App Store',
    footerLine: 'An on-device posture reminder app for iPhone and iPad.',
    medical: 'Posturely is not a medical product.',
    language: 'Language',
    menu: 'Menu',
    ctaEyebrow: 'Available on iOS',
    ctaTitle: 'Build better posture awareness into your desk time.',
    ctaDescription: 'Use Posturely while studying, reading, or working and receive a reminder when your posture noticeably changes.',
  },
  zh: {
    nav: ['首页', '功能', '工作原理', '隐私', '常见问题', '博客', '支持'],
    downloadSmall: '下载自',
    appStore: 'App Store',
    footerLine: '适用于 iPhone 和 iPad 的本地坐姿提醒 App。',
    medical: 'Posturely 不是医疗产品。',
    language: '语言',
    menu: '菜单',
    ctaEyebrow: '现已登陆 iOS',
    ctaTitle: '把坐姿觉察带进每一次专注。',
    ctaDescription: '学习、阅读或办公时使用 Posturely，在坐姿发生明显变化时获得提醒。',
  },
  ja: {
    nav: ['ホーム', '機能', '使い方', 'プライバシー', 'よくある質問', 'ブログ', 'サポート'],
    downloadSmall: 'ダウンロード',
    appStore: 'App Store',
    footerLine: 'iPhone と iPad のためのオンデバイス姿勢リマインダー。',
    medical: 'Posturely は医療製品ではありません。',
    language: '言語',
    menu: 'メニュー',
    ctaEyebrow: 'iOS で利用可能',
    ctaTitle: 'デスク時間に、自然な姿勢への気づきを。',
    ctaDescription: '勉強、読書、仕事中に Posturely を使い、姿勢が大きく変化したときに通知を受け取れます。',
  },
} as const;
