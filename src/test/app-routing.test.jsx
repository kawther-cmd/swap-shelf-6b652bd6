import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { ALL_PAGE_LINKS } from "@/components/layout/nav-links";
import { routeTree } from "@/routeTree.gen";

const makeRouter = () => createRouter({ routeTree, context: { queryClient: new QueryClient() } });

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    expect(makeRouter().matchRoutes("/").at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(["/about", "/login", "/register"])("matches a page for %s", (path) => {
    expect(makeRouter().matchRoutes(path).at(-1)?.routeId).toBe(path);
  });

  it.each(ALL_PAGE_LINKS.map((link) => [link.label, link.to]))(
    "navbar link %s points to an existing page",
    (_label, to) => {
      expect(makeRouter().matchRoutes(to).at(-1)?.routeId).not.toBe(rootRouteId);
    },
  );
});
