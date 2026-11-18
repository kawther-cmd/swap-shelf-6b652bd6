import { BookCard } from "./BookCard";

/** Responsive grid of BookCards. State lives in the parent (see useBooks). */
export function BookList({ books, isFavorite, onToggleFavorite }) {
  return (
    <ul className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <li key={book.id}>
          <BookCard
            book={book}
            isFavorite={isFavorite(book.id)}
            onToggleFavorite={onToggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
