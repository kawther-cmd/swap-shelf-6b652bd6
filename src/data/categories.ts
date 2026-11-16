import type { Availability, CategoryFilterValue } from "@/types/book";

export interface CategoryOption {
  value: CategoryFilterValue;
  label: string;
}

/** Order here is the order of the category buttons on the home page. */
export const CATEGORY_OPTIONS: CategoryOption[] = [
  { value: "all", label: "All Books" },
  { value: "textbooks", label: "Textbooks" },
  { value: "novels", label: "Novels" },
  { value: "self-help", label: "Self-Help" },
  { value: "science", label: "Science" },
  { value: "others", label: "Others" },
];

export const AVAILABILITY_LABELS: Record<Availability, string> = {
  swap: "Swap",
  buy: "Buy",
  borrow: "Borrow",
};

export function getCategoryLabel(value: CategoryFilterValue): string {
  return CATEGORY_OPTIONS.find((option) => option.value === value)?.label ?? "Others";
}

export function isCategoryFilterValue(value: unknown): value is CategoryFilterValue {
  return CATEGORY_OPTIONS.some((option) => option.value === value);
}
