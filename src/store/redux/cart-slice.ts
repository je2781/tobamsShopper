import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  cartIds: string[];
}

const initialState: initialStateProps = {
  cartIds: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addFavorite(state, action) {
      state.cartIds.push(action.payload);
    },
    removeFavorite(state, action) {
      state.cartIds.slice(state.cartIds.indexOf(action.payload), 1);
    },
  },
});

export default cartSlice.actions;
