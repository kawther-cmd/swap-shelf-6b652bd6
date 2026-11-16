import { getCategoryLabel } from "@/data/categories";
import type { Book } from "@/types/book";

import { AvailabilityBadge } from "./AvailabilityBadge";
import { BookCover } from "./BookCover";
import { FavoriteButton } from "./FavoriteButton";

interface BookCardProps {
  book: Book;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function BookCard({ book, isFavorite, onToggleFavorite }: BookCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative overflow-hidden bg-cream p-4 pb-0">
        <div className="overflow-hidden rounded-t-xl shadow-soft transition duration-500 group-hover:scale-[1.03]">
          <BookCover book={book} />
        </div>
        <FavoriteButton
          active={isFavorite}
          onToggle={() => onToggleFavorite(book.id)}
          label={book.title}
          className="absolute right-6 top-6"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {getCategoryLabel(book.category)}
        </span>
        <div>
          <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-card-foreground">
            {book.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
          {book.availability.map((type) => (
            <AvailabilityBadge key={type} type={type} />
          ))}
          {book.price !== undefined && book.availability.includes("buy") && (
            <span className="ml-auto text-sm font-bold text-foreground">${book.price}</span>
          )}
        </div>
      </div>
    </article>
  );
}
