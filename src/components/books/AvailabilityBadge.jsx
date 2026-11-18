import { ArrowLeftRight, BookMarked, ShoppingBag } from "lucide-react";

import { AVAILABILITY_LABELS } from "@/data/categories";
import { cn } from "@/lib/utils";

const STYLES = {
  swap: { className: "bg-swap text-swap-foreground", Icon: ArrowLeftRight },
  buy: { className: "bg-buy text-buy-foreground", Icon: ShoppingBag },
  borrow: { className: "bg-borrow text-borrow-foreground", Icon: BookMarked },
};

export function AvailabilityBadge({ type, className }) {
  const { className: tone, Icon } = STYLES[type];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
        tone,
        className,
      )}
    >
      <Icon className="size-3.5" />
      {AVAILABILITY_LABELS[type]}
    </span>
  );
}
