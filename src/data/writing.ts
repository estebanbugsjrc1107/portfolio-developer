export interface WritingNote {
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  href: string | null;
}

export const writingNotes: readonly WritingNote[] = [];
