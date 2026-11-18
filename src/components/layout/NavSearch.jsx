import { useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Navbar search. Submitting sends the query to the home page (?q=...),
 * where FeaturedBooks filters by it. Extend here for suggestions or a results page.
 */
export function NavSearch({ className, onSubmitted }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const q = value.trim();
    navigate({
      to: "/",
      search: { q: q || undefined, category: undefined },
      hash: "books",
    });
    onSubmitted?.();
  }

  return (
    <form role="search" onSubmit={handleSubmit} className={cn("relative", className)}>
      <label htmlFor="nav-search" className="sr-only">
        Search books
      </label>
      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        id="nav-search"
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search title or author…"
        className="h-10 w-full rounded-full border border-input bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground transition focus:border-ring focus:outline-none focus:ring-4 focus:ring-ring/20"
      />
    </form>
  );
}
