import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types/types";

interface initialStateProps {
  cartItems: CartItem[];
  totalAmount: number;
  quantity: number;
}

const initialState: initialStateProps = {
  cartItems: [],
  totalAmount: 0,
  quantity: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {

        //updating the amount of the total items added, and number of items
      state.totalAmount = state.totalAmount + action.payload.item.price;
      state.quantity += 1;

      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const existingCartItem: CartItem = state.cartItems[existingCartItemIndex];
      //checking if cart Item exists
      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.item.price,
        };
        //removing old item with outdated amount from the list
        state.cartItems.slice(state.cartItems.indexOf(existingCartItem), 1);
        //adding new item with current amount
        state.cartItems.push(updatedCartItem);
      } else {
        state.cartItems.push(action.payload.item);
      }
    },
    removeItem(state, action) {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem: CartItem = state.cartItems[existingCartItemIndex];
      //updating the amount of the total items added
      state.totalAmount = state.totalAmount - action.payload.item.price;
      state.quantity -= 1;

      if (existingCartItem.amount === 1) {
        state.cartItems.slice(state.cartItems.indexOf(existingCartItem), 1);
      } else {
        const updatedCartItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - action.payload.item.price,
        };
        //removing old item with outdated amount from the list
        state.cartItems.slice(state.cartItems.indexOf(existingCartItem), 1);
        //adding new item with current amount
        state.cartItems.push(updatedCartItem);
      }
    },
  },
});

export default cartSlice.actions;
