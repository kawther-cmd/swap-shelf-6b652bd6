import { createFileRoute } from "@tanstack/react-router";

import { AboutContent } from "@/components/about/AboutContent";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Swap Shelf" },
      {
        name: "description",
        content: "Swap Shelf helps university students share educational resources by exchanging, buying, and borrowing books.",
      },
      { property: "og:title", content: "About Swap Shelf" },
      {
        property: "og:description",
        content: "Helping university students share books through swapping, buying, and borrowing.",
      },
    ],
  }),
  component: AboutContent,
});
