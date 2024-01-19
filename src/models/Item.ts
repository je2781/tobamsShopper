class Item {
    id: string;
    title: string;
    imageUri: any;
    price: number;
    isFavorite: boolean;


    constructor(
      id: string,
      price: number,
      title: string,
      imageUri: any,
      isFavorite: boolean
    ) {
      this.id = id;
      this.title = title;
      this.imageUri = imageUri;
      this.isFavorite = isFavorite;
      this.price = price;
    }
  }
  
  export default Item;
  