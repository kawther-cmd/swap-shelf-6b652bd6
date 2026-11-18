import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";
import { ALL_PAGE_LINKS } from "./nav-links";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between lg:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A university book exchange where students swap, buy, and borrow books from each other.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium">
          {ALL_PAGE_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Swap Shelf · Made for students, by students.
      </div>
    </footer>
  );
}
