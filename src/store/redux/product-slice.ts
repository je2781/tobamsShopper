import { createSlice } from "@reduxjs/toolkit";
import { menuItemProps } from "../../types/types";

interface initialStateProps {
  selectedProduct: menuItemProps;
}

const initialState: initialStateProps = {
  selectedProduct: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    saveProduct(state, action) {
      const updatedProduct = action.payload.product;

      state.selectedProduct.title = updatedProduct.title;
      state.selectedProduct.imageUri = updatedProduct.imageUri;
      state.selectedProduct.price = updatedProduct.price;
      state.selectedProduct.id = updatedProduct.id;
    },
  },
});

export default productSlice.actions;
