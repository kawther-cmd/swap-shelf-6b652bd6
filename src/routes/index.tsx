import { createFileRoute } from "@tanstack/react-router";

import { CommunitySection } from "@/components/home/CommunitySection";
import { FeaturedBooks } from "@/components/home/FeaturedBooks";
import { HeroSection } from "@/components/home/HeroSection";
import { isCategoryFilterValue } from "@/data/categories";
import { isBookSort } from "@/data/sort-options";
import type { BookCategory, BookSort, CategoryFilterValue } from "@/types/book";

interface HomeSearch {
  /** Search text (navbar or Featured Books search box). */
  q?: string | undefined;
  /** Selected category; omitted means "All Books". */
  category?: BookCategory | undefined;
  /** Sort order; omitted means "featured". */
  sort?: BookSort | undefined;
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): HomeSearch => {
    const q = search["q"];
    const category = search["category"];
    const sort = search["sort"];
    return {
      q: typeof q === "string" && q.trim() ? q : undefined,
      category: isCategoryFilterValue(category) && category !== "all" ? category : undefined,
      sort: isBookSort(sort) && sort !== "featured" ? sort : undefined,
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
  const { q, category, sort } = Route.useSearch();
  const navigate = Route.useNavigate();

  // Filter changes update the URL (replace, no scroll jump) so they can be shared and bookmarked.
  const updateSearch = (patch: HomeSearch) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true, resetScroll: false });

  return (
    <>
      <HeroSection />
      <FeaturedBooks
        category={category ?? "all"}
        query={q ?? ""}
        sort={sort ?? "featured"}
        onCategoryChange={(value: CategoryFilterValue) =>
          updateSearch({ category: value === "all" ? undefined : value })
        }
        onQueryChange={(value) => updateSearch({ q: value || undefined })}
        onSortChange={(value: BookSort) => updateSearch({ sort: value === "featured" ? undefined : value })}
        onClearFilters={() => updateSearch({ q: undefined, category: undefined })}
      />
      <CommunitySection />
    </>
  );
}
