import { SearchX } from "lucide-react";

import { BookList } from "@/components/books/BookList";
import { BookSearch } from "@/components/books/BookSearch";
import { CategoryFilter } from "@/components/books/CategoryFilter";
import { SortSelect } from "@/components/books/SortSelect";
import { useBooks } from "@/hooks/use-books";
import { getVisibleBooks } from "@/lib/book-filters";

/**
 * Featured Books: search, category buttons, sort menu and the book list.
 * Books + favorites live in React state (useBooks); filter values come from
 * props so the page (URL) owns them and the navbar search can set them too.
 */
export function FeaturedBooks({
  category,
  query,
  sort,
  onCategoryChange,
  onQueryChange,
  onSortChange,
  onClearFilters,
}) {
  const { books, isFavorite, toggleFavorite } = useBooks();
  const visibleBooks = getVisibleBooks(books, { category, query, sort });
  const isFiltered = category !== "all" || query.trim() !== "";

  return (
    <section id="books" className="anchor-offset mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Browse the shelf
          </p>
          <h2 className="mt-2 text-4xl font-semibold text-foreground sm:text-5xl">
            Featured Books
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Fresh picks from students on campus, ready to swap, buy, or borrow.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
          <BookSearch value={query} onChange={onQueryChange} className="sm:flex-1 lg:w-72" />
          <SortSelect value={sort} onChange={onSortChange} className="sm:w-56" />
        </div>
      </div>

      <div className="mt-8">
        <CategoryFilter value={category} onChange={onCategoryChange} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
        <p aria-live="polite">
          Showing <span className="font-semibold text-foreground">{visibleBooks.length}</span> of{" "}
          {books.length} books
          {query.trim() && (
            <>
              {" "}
              for <span className="font-semibold text-foreground">“{query.trim()}”</span>
            </>
          )}
        </p>
        {isFiltered && (
          <button
            type="button"
            onClick={onClearFilters}
            className="font-semibold text-primary hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      <div className="mt-6">
        {visibleBooks.length > 0 ? (
          <BookList
            books={visibleBooks}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
          />
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
