import { createFileRoute } from "@tanstack/react-router";

import { CommunitySection } from "@/components/home/CommunitySection";
import { FeaturedBooks } from "@/components/home/FeaturedBooks";
import { HeroSection } from "@/components/home/HeroSection";
import { SAMPLE_BOOKS } from "@/data/books";
import { isCategoryFilterValue } from "@/data/categories";
import type { BookCategory, CategoryFilterValue } from "@/types/book";

interface HomeSearch {
  /** Search text from the navbar. */
  q?: string | undefined;
  /** Selected category; omitted means "All Books". */
  category?: BookCategory | undefined;
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): HomeSearch => {
    const q = search["q"];
    const category = search["category"];
    return {
      q: typeof q === "string" && q.trim() ? q : undefined,
      category: isCategoryFilterValue(category) && category !== "all" ? category : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Swap Shelf — Swap, buy & borrow university books" },
      {
        name: "description",
        content: "Give books a second life. Swap, buy, and borrow books easily with your university community.",
      },
      { property: "og:title", content: "Swap Shelf — Give Books a Second Life" },
      {
        property: "og:description",
        content: "Swap, buy, and borrow books easily with your university community.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { q, category } = Route.useSearch();
  const navigate = Route.useNavigate();

  const handleCategoryChange = (value: CategoryFilterValue) =>
    navigate({
      search: (prev) => ({ ...prev, category: value === "all" ? undefined : value }),
      resetScroll: false,
    });

  const handleClearFilters = () =>
    navigate({ search: { q: undefined, category: undefined }, resetScroll: false });

  return (
    <>
      <HeroSection />
      <FeaturedBooks
        books={SAMPLE_BOOKS}
        category={category ?? "all"}
        query={q}
        onCategoryChange={handleCategoryChange}
        onClearFilters={handleClearFilters}
      />
      <CommunitySection />
    </>
  );
}
