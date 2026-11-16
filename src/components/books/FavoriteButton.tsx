import { Heart } from "lucide-react";

import { cn } from "@/lib/utils";

interface FavoriteButtonProps {
  active: boolean;
  onToggle: () => void;
  label: string;
  className?: string;
}

export function FavoriteButton({ active, onToggle, label, className }: FavoriteButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      aria-label={active ? `Remove ${label} from favorites` : `Add ${label} to favorites`}
      className={cn(
        "grid size-9 place-items-center rounded-full bg-card/90 shadow-soft backdrop-blur transition hover:scale-110",
        active ? "text-favorite" : "text-muted-foreground hover:text-favorite",
        className,
      )}
    >
      <Heart className={cn("size-4.5 transition", active && "fill-current")} />
    </button>
  );
}
