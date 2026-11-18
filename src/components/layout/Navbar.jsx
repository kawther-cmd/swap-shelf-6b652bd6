import { Link } from "@tanstack/react-router";
import { Menu, UserRound, X } from "lucide-react";
import { useState } from "react";

import { Logo } from "./Logo";
import { NavSearch } from "./NavSearch";
import { NAV_LINKS, REGISTER_LINK } from "./nav-links";

const linkClass =
  "rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground";
const activeLinkClass = "bg-secondary text-secondary-foreground";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo className="shrink-0" />

        <ul className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={linkClass}
                activeProps={{ className: activeLinkClass }}
                activeOptions={{ exact: true, includeSearch: false }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to={REGISTER_LINK.to}
              className="ml-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-soft"
            >
              {REGISTER_LINK.label}
            </Link>
          </li>
        </ul>

        <NavSearch className="ml-auto hidden w-full max-w-xs md:block" />

        <Link
          to="/login"
          aria-label="Your profile"
          className="ml-auto grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card text-secondary-foreground transition hover:border-ring hover:bg-secondary md:ml-0"
        >
          <UserRound className="size-5" />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="grid size-10 shrink-0 place-items-center rounded-full text-foreground transition hover:bg-accent lg:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background px-4 pb-5 pt-3 lg:hidden"
        >
          <NavSearch className="mb-3 md:hidden" onSubmitted={closeMenu} />
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={closeMenu}
                  className={`block ${linkClass}`}
                  activeProps={{ className: activeLinkClass }}
                  activeOptions={{ exact: true, includeSearch: false }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={REGISTER_LINK.to}
                onClick={closeMenu}
                className="mt-2 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                {REGISTER_LINK.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
