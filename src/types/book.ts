/**
 * Shared book types. Add new fields here first, then use them in
 * src/data/books.ts and the components in src/components/books.
 */

export type BookCategory = "textbooks" | "novels" | "self-help" | "science" | "others";

/** "all" is a filter value only — a book always has a real category. */
export type CategoryFilterValue = BookCategory | "all";

export type Availability = "swap" | "buy" | "borrow";

/** Index into the --cover-N palette in src/styles.css. */
export type CoverTone = 1 | 2 | 3 | 4 | 5 | 6;

export interface Book {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  availability: Availability[];
  /** Asking price, only meaningful when availability includes "buy". */
  price?: number;
  /** Optional real cover image URL. Without it a styled cover is drawn. */
  coverUrl?: string;
  coverTone: CoverTone;
}
