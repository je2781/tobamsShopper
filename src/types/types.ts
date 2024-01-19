export interface menuItemProps {
    title: string;
    imageUri: any;
    price: number;
    isFavorite: boolean;
    id: string
  }

export type FavoritesContextType = {
    ids: string[],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {},
}