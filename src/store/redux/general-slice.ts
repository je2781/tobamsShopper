import { createSlice } from "@reduxjs/toolkit";
import { menuItemProps } from "../../types/types";

interface initialStateProps{
  isProductDetail: boolean;
  selectedProduct: menuItemProps;
}

const initialState: initialStateProps = {
  isProductDetail: false,
  selectedProduct: {}
};

export const generalSlice = createSlice({
  name: "detail",
  initialState: initialState,
  reducers: {
   toggleScreen(state, action){
    state.isProductDetail = !state.isProductDetail;
    state.selectedProduct.id = action.payload.id || state.selectedProduct.id;
    state.selectedProduct.title = action.payload.title || state.selectedProduct.title;
    state.selectedProduct.imageUri = action.payload.imageUri || state.selectedProduct.imageUri;
    state.selectedProduct.price = action.payload.price || state.selectedProduct.price;
    state.selectedProduct.isFavorite = action.payload.isFavorite || state.selectedProduct.isFavorite;
  }
  },
});

export default generalSlice.actions;
