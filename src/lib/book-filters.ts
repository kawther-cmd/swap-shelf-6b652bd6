import type { Book, CategoryFilterValue } from "@/types/book";

export interface BookFilters {
  category?: CategoryFilterValue | undefined;
  /** Free-text search across title and author. */
  query?: string | undefined;
}

/**
 * Single place for book filtering. Extend BookFilters (availability, sort, ...)
 * and handle the new field here so every page filters the same way.
 */
export function filterBooks(books: Book[], { category = "all", query = "" }: BookFilters): Book[] {
  const needle = query.trim().toLowerCase();

  return books.filter((book) => {
    if (category !== "all" && book.category !== category) return false;
    if (!needle) return true;
    return (
      book.title.toLowerCase().includes(needle) || book.author.toLowerCase().includes(needle)
    );
  });
}
