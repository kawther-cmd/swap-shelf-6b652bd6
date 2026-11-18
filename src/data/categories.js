/** Order here is the order of the category buttons on the home page. */
export const CATEGORY_OPTIONS = [
  { value: "all", label: "All Books" },
  { value: "textbooks", label: "Textbooks" },
  { value: "novels", label: "Novels" },
  { value: "self-help", label: "Self-Help" },
  { value: "science", label: "Science" },
  { value: "others", label: "Others" },
];

export const AVAILABILITY_LABELS = {
  swap: "Swap",
  buy: "Buy",
  borrow: "Borrow",
};

export function getCategoryLabel(value) {
  return CATEGORY_OPTIONS.find((option) => option.value === value)?.label ?? "Others";
}

export function isCategoryFilterValue(value) {
  return CATEGORY_OPTIONS.some((option) => option.value === value);
}
