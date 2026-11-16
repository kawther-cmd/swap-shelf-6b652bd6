import { ArrowUpDown, ChevronDown } from "lucide-react";

import { isBookSort, SORT_OPTIONS } from "@/data/sort-options";
import { cn } from "@/lib/utils";
import type { BookSort } from "@/types/book";

interface SortSelectProps {
  value: BookSort;
  onChange: (value: BookSort) => void;
  className?: string | undefined;
}

export function SortSelect({ value, onChange, className }: SortSelectProps) {
  return (
    <div className={cn("relative", className)}>
      <label htmlFor="book-sort" className="sr-only">
        Sort books
      </label>
      <ArrowUpDown className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-primary" />
      <select
        id="book-sort"
        value={value}
        onChange={(event) => {
          if (isBookSort(event.target.value)) onChange(event.target.value);
        }}
        className="h-11 w-full cursor-pointer appearance-none rounded-full border border-input bg-card pl-11 pr-10 text-sm font-semibold text-secondary-foreground shadow-soft transition hover:border-lavender-deep focus:border-ring focus:outline-none focus:ring-4 focus:ring-ring/20"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}
