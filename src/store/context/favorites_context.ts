import React, { createContext, useState } from "react";
import { FavoritesContextType } from "../../types/types";

export const FavoriteContext = createContext<FavoritesContextType | null>(null);

export default function FavoriteContextProvider({ children }: { children: React.ReactNode }) {
  const [favoriteMenuIds, setFavoriteMenuIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMenuIds((menuIds) => [...menuIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMenuIds((menuIds) => menuIds.filter((menuId) => menuId !== id));
  }

  const value = {
    ids: favoriteMenuIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
