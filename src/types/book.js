/**
 * Shared book shapes, documented with JSDoc comments (no TypeScript).
 * Add new fields here first, then use them in src/data/books.js and the
 * components in src/components/books.
 *
 * @typedef {"textbooks" | "novels" | "self-help" | "science" | "others"} BookCategory
 *
 * "all" is a filter value only — a book always has a real category.
 * @typedef {BookCategory | "all"} CategoryFilterValue
 *
 * Sort orders for book lists. "featured" keeps the data file's order.
 * @typedef {"featured" | "title-asc" | "title-desc" | "price-asc" | "price-desc"} BookSort
 *
 * @typedef {"swap" | "buy" | "borrow"} Availability
 *
 * Index into the --cover-N palette in src/styles.css (1 to 6).
 * @typedef {1 | 2 | 3 | 4 | 5 | 6} CoverTone
 *
 * @typedef {object} Book
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {BookCategory} category
 * @property {Availability[]} availability
 * @property {number} [price] Asking price, only meaningful when availability includes "buy".
 * @property {string} [coverUrl] Optional real cover image URL. Without it a styled cover is drawn.
 * @property {CoverTone} coverTone
 */

export {};
