import { describe, expect, it } from "vitest";

import { SAMPLE_BOOKS } from "@/data/books";
import { filterBooks, getVisibleBooks, sortBooks } from "@/lib/book-filters";

describe("filterBooks", () => {
  it("returns every book for All Books with no search", () => {
    expect(filterBooks(SAMPLE_BOOKS, { category: "all" })).toHaveLength(SAMPLE_BOOKS.length);
  });

  it("keeps only the chosen category", () => {
    const result = filterBooks(SAMPLE_BOOKS, { category: "novels" });
    expect(result.map((b) => b.id)).toEqual(["the-midnight-library", "pride-and-prejudice", "norwegian-wood"]);
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

describe("sortBooks", () => {
  it("keeps the data file order for Featured", () => {
    expect(sortBooks(SAMPLE_BOOKS, "featured").map((b) => b.id)).toEqual(SAMPLE_BOOKS.map((b) => b.id));
  });

  it("sorts titles A to Z and Z to A", () => {
    expect(sortBooks(SAMPLE_BOOKS, "title-asc")[0]?.title).toBe("A Brief History of Time");
    expect(sortBooks(SAMPLE_BOOKS, "title-desc")[0]?.title).toBe("The Selfish Gene");
  });

  it("sorts by price low to high with books not for sale last", () => {
    const prices = sortBooks(SAMPLE_BOOKS, "price-asc").map((b) => b.price);
    expect(prices.slice(0, 6)).toEqual([6, 9, 12, 14, 25, 30]);
    expect(prices.slice(6).every((p) => p === undefined)).toBe(true);
  });

  it("sorts by price high to low with books not for sale last", () => {
    expect(sortBooks(SAMPLE_BOOKS, "price-desc").map((b) => b.price).slice(0, 3)).toEqual([30, 25, 14]);
  });

  it("filters before sorting", () => {
    expect(getVisibleBooks(SAMPLE_BOOKS, { category: "science", sort: "price-asc" }).map((b) => b.id)).toEqual([
      "the-selfish-gene",
      "the-gene",
      "a-brief-history-of-time",
    ]);
  });
});

describe("sample data", () => {
  it("has at least 10 books", () => {
    expect(SAMPLE_BOOKS.length).toBeGreaterThanOrEqual(10);
  });
});

