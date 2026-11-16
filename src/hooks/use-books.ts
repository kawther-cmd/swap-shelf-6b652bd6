import { useCallback, useState } from "react";

import { SAMPLE_BOOKS } from "@/data/books";
import type { Book } from "@/types/book";

/**
 * Book list + favorites held in React state, seeded from the sample data file.
 * setBooks is exposed so features like "add a listing" can update the list later.
 */
export function useBooks(initialBooks: Book[] = SAMPLE_BOOKS) {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => new Set());

  const isFavorite = useCallback((id: string) => favoriteIds.has(id), [favoriteIds]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return { books, setBooks, isFavorite, toggleFavorite, favoriteCount: favoriteIds.size };
}
