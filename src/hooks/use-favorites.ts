import { useCallback, useState } from "react";

/**
 * Favorites kept in memory for this visit (no backend yet).
 * Replace the internals with storage or an API later; the returned API can stay the same.
 */
export function useFavorites(initial: string[] = []) {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(() => new Set(initial));

  const isFavorite = useCallback((id: string) => favoriteIds.has(id), [favoriteIds]);

  const toggleFavorite = useCallback((id: string) => {
    setFavoriteIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return { isFavorite, toggleFavorite, count: favoriteIds.size };
}
