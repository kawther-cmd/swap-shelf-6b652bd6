/** Order here is the order in the "Sort by" menu. */
export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "title-asc", label: "Title: A to Z" },
  { value: "title-desc", label: "Title: Z to A" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export function isBookSort(value) {
  return SORT_OPTIONS.some((option) => option.value === value);
}
