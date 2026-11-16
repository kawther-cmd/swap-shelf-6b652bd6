import { useFavorites } from "@/hooks/use-favorites";
import type { Book } from "@/types/book";

import { BookCard } from "./BookCard";

/** Responsive grid of BookCards. Owns favorite state for the books it shows. */
export function BookGrid({ books }: { books: Book[] }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <ul className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} isFavorite={isFavorite(book.id)} onToggleFavorite={toggleFavorite} />
        </li>
      ))}
    </ul>
  );
}
