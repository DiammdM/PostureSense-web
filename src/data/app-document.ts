import type { Locale } from '../i18n';

export type DocumentBlock =
  | { type: 'paragraph' | 'h2' | 'h3'; text: string }
  | { type: 'list'; items: readonly string[] };

export interface AppDocument {
  title: string;
  description: string;
  blocks: readonly DocumentBlock[];
}

export type AppDocumentTranslations = Record<Locale, AppDocument>;
