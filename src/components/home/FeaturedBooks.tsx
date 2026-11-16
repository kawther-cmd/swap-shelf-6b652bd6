import { SearchX } from "lucide-react";

import { BookGrid } from "@/components/books/BookGrid";
import { CategoryFilter } from "@/components/books/CategoryFilter";
import { filterBooks } from "@/lib/book-filters";
import type { Book, CategoryFilterValue } from "@/types/book";

interface FeaturedBooksProps {
  books: Book[];
  category: CategoryFilterValue;
  query?: string | undefined;
  onCategoryChange: (category: CategoryFilterValue) => void;
  onClearFilters: () => void;
}

/**
 * Category buttons + featured book grid. Filter state comes from props so the
 * page (URL) owns it — add sorting or availability filters the same way.
 */
export function FeaturedBooks({ books, category, query, onCategoryChange, onClearFilters }: FeaturedBooksProps) {
  const visibleBooks = filterBooks(books, { category, query });

  return (
    <section id="books" className="anchor-offset mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Browse the shelf</p>
          <h2 className="mt-2 text-4xl font-semibold text-foreground sm:text-5xl">Featured Books</h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Fresh picks from students on campus, ready to swap, buy, or borrow.
          </p>
        </div>
        {query && (
          <p className="text-sm text-muted-foreground">
            Results for <span className="font-semibold text-foreground">“{query}”</span>{" "}
            <button type="button" onClick={onClearFilters} className="ml-1 font-semibold text-primary hover:underline">
              Clear
            </button>
          </p>
        )}
      </div>

      <div className="mt-8">
        <CategoryFilter value={category} onChange={onCategoryChange} />
      </div>

      <div className="mt-10">
        {visibleBooks.length > 0 ? (
          <BookGrid books={visibleBooks} />
        ) : (
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-lavender-deep bg-cream px-6 py-16 text-center">
            <SearchX className="size-10 text-primary" />
            <h3 className="mt-4 text-xl font-semibold text-foreground">No books match yet</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Try another category or search term.
            </p>
            <button
              type="button"
              onClick={onClearFilters}
              className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-soft"
            >
              Show all books
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
