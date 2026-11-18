import { CATEGORY_OPTIONS } from "@/data/categories";
import { cn } from "@/lib/utils";

export function CategoryFilter({ value, onChange }) {
  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2.5">
      {CATEGORY_OPTIONS.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={active}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition duration-200",
              active
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-secondary-foreground hover:-translate-y-0.5 hover:border-lavender-deep hover:bg-secondary",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
