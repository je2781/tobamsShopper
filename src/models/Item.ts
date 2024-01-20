import { ProductInfo } from "../types/types";

class Item {
    id: string;
    title: string;
    imageUri: any;
    price: number;
    isFavorite: boolean;
    description: string;
    info?: ProductInfo


    constructor(
      id: string,
      price: number,
      title: string,
      imageUri: any,
      isFavorite: boolean,
      description: string,
      info?: ProductInfo
    ) {
      this.id = id;
      this.title = title;
      this.imageUri = imageUri;
      this.isFavorite = isFavorite;
      this.price = price;
      this.description = description;
      this.info = info
    }
  }
  
  export default Item;
  