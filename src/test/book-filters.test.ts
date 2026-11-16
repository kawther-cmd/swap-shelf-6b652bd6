import { describe, expect, it } from "vitest";

import { SAMPLE_BOOKS } from "@/data/books";
import { filterBooks } from "@/lib/book-filters";

describe("filterBooks", () => {
  it("returns every book for All Books with no search", () => {
    expect(filterBooks(SAMPLE_BOOKS, { category: "all" })).toHaveLength(SAMPLE_BOOKS.length);
  });

  it("keeps only the chosen category", () => {
    const result = filterBooks(SAMPLE_BOOKS, { category: "novels" });
    expect(result.map((b) => b.id)).toEqual(["the-midnight-library", "pride-and-prejudice"]);
  });

  it("matches search text against title or author, ignoring case", () => {
    expect(filterBooks(SAMPLE_BOOKS, { query: "HAWKING" }).map((b) => b.id)).toEqual([
      "a-brief-history-of-time",
    ]);
    expect(filterBooks(SAMPLE_BOOKS, { query: "atomic" }).map((b) => b.id)).toEqual(["atomic-habits"]);
  });

  it("combines category and search", () => {
    expect(filterBooks(SAMPLE_BOOKS, { category: "science", query: "austen" })).toEqual([]);
  });
});
