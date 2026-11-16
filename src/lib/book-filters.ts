import type { Book, BookSort, CategoryFilterValue } from "@/types/book";

export interface BookFilters {
  category?: CategoryFilterValue | undefined;
  /** Free-text search across title and author. */
  query?: string | undefined;
}

/**
 * Single place for book filtering. Extend BookFilters (availability, ...)
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

/**
 * Returns a sorted copy. Price sorts put books that aren't for sale last,
 * then keep them in title order.
 */
export function sortBooks(books: Book[], sort: BookSort = "featured"): Book[] {
  const byTitle = (a: Book, b: Book) => a.title.localeCompare(b.title);
  const copy = [...books];

  switch (sort) {
    case "title-asc":
      return copy.sort(byTitle);
    case "title-desc":
      return copy.sort((a, b) => byTitle(b, a));
    case "price-asc":
    case "price-desc": {
      const direction = sort === "price-asc" ? 1 : -1;
      return copy.sort((a, b) => {
        if (a.price === undefined && b.price === undefined) return byTitle(a, b);
        if (a.price === undefined) return 1;
        if (b.price === undefined) return -1;
        return (a.price - b.price) * direction;
      });
    }
    default:
      return copy;
  }
}

/** Filter then sort — what the home page shows. */
export function getVisibleBooks(books: Book[], filters: BookFilters & { sort?: BookSort | undefined }): Book[] {
  return sortBooks(filterBooks(books, filters), filters.sort);
}
