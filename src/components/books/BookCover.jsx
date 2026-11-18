import { cn } from "@/lib/utils";

/** Tones whose background is light enough to need dark text. */
const LIGHT_TONES = new Set([2, 3, 5]);

/**
 * Shows the real cover when book.coverUrl is set, otherwise draws a styled
 * placeholder cover from the --cover-N palette.
 */
export function BookCover({ book, className }) {
  if (book.coverUrl) {
    return (
      <img
        src={book.coverUrl}
        alt={`Cover of ${book.title}`}
        loading="lazy"
        className={cn("aspect-[3/4] w-full object-cover", className)}
      />
    );
  }

  const ink = LIGHT_TONES.has(book.coverTone) ? "var(--cover-ink-dark)" : "var(--cover-ink-light)";

  return (
    <div
      role="img"
      aria-label={`Cover of ${book.title}`}
      className={cn("relative aspect-[3/4] w-full overflow-hidden", className)}
      style={{ backgroundColor: `var(--cover-${book.coverTone})`, color: ink }}
    >
      {/* spine */}
      <div className="absolute inset-y-0 left-0 w-3 opacity-25" style={{ backgroundColor: ink }} />
      <div className="absolute inset-y-0 left-3 w-px opacity-30" style={{ backgroundColor: ink }} />
      {/* frame */}
      <div
        className="absolute inset-x-6 inset-y-5 rounded-sm border opacity-40"
        style={{ borderColor: ink }}
      />
      <div className="relative flex h-full flex-col justify-between px-9 py-9">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-75">
          {book.author}
        </span>
        <span className="font-display text-xl font-semibold leading-tight sm:text-2xl">
          {book.title}
        </span>
        <span className="h-px w-10 opacity-60" style={{ backgroundColor: ink }} />
      </div>
    </div>
  );
}
