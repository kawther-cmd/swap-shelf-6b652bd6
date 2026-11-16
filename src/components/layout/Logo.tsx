import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5 font-display text-xl font-semibold", className)}
      aria-label="Swap Shelf home"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-transform duration-300 group-hover:-rotate-6">
        <BookOpen className="size-5" strokeWidth={2.2} />
      </span>
      <span className="tracking-tight text-foreground">
        Swap<span className="text-primary">Shelf</span>
      </span>
    </Link>
  );
}
