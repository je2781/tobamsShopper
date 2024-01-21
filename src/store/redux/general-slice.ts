import { createSlice } from "@reduxjs/toolkit";
import { menuItemProps } from "../../types/types";

interface initialStateProps{
  selectedProduct: menuItemProps;
}

const initialState: initialStateProps = {
  selectedProduct: {}
};

export const productSlice = createSlice({
  name: "detail",
  initialState: initialState,
  reducers: {
   toggleScreen(state, action){
    state.selectedProduct.id = action.payload.product.id;
    state.selectedProduct.title = action.payload.product.title;
    state.selectedProduct.imageUri = action.payload.product.imageUri;
    state.selectedProduct.price = action.payload.product.price;
    state.selectedProduct.info = action.payload.product.info;
  }
  },
});

export default productSlice.actions;
