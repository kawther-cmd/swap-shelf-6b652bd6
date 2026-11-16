import { Search, X } from "lucide-react";

import { cn } from "@/lib/utils";

interface BookSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string | undefined;
}

/** Inline search box for a book list (title or author). */
export function BookSearch({ value, onChange, className }: BookSearchProps) {
  return (
    <div className={cn("relative", className)}>
      <label htmlFor="book-search" className="sr-only">
        Search books by title or author
      </label>
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        id="book-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by title or author"
        className="h-11 w-full rounded-full border border-input bg-card pl-11 pr-10 text-sm text-foreground shadow-soft placeholder:text-muted-foreground transition focus:border-ring focus:outline-none focus:ring-4 focus:ring-ring/20 [&::-webkit-search-cancel-button]:hidden"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
        >
          <X className="size-3.5" />
        </button>
      )}
    </div>
  );
}
