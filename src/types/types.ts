export interface menuItemProps {
  title?: string;
  imageUri?: any;
  price?: number;
  isFavorite?: boolean;
  id?: string;
  route?: any;
  navigation?: any;
  description?: string;
  info?: ProductInfo;
}

export type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export type GeneralContextType = {
  toggleScreen: () => void;
  isProductDetail: boolean;
};

export type ProductInfo = Record<
  | "Ingredients"
  | "Nutritional Information"
  | "How To Prepare"
  | "Dietary Information"
  | "Storage Information"
  | "Extra",
  string
>;
