import { createSlice } from "@reduxjs/toolkit";
import { CartItem, initialStateProps } from "../../types/types";


const initialState: initialStateProps = {
  cartItems: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {

        //updating the amount of the total items added, and number of items
      state.totalAmount = state.totalAmount + action.payload.item.price;

      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.item.id
      );
      const existingCartItem: CartItem = state.cartItems[existingCartItemIndex];
      //checking if cart Item exists
      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.item.price,
          quantity: existingCartItem.quantity + action.payload.quantity
        };
        //updating item
        state.cartItems[existingCartItemIndex] = updatedCartItem;
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


      if (existingCartItem.quantity === 1) {
        state.cartItems.splice(state.cartItems.indexOf(existingCartItem), 1);
      }else {
        const updatedCartItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - action.payload.item.price,
          quantity: existingCartItem.quantity - action.payload.quantity
        };
        //updating item
        state.cartItems[existingCartItemIndex] = updatedCartItem;
      }
    },
    reset(state, action){
      state.totalAmount  = 0;
      state.cartItems.splice(0,state.cartItems.length);
    }
  },
});

export default cartSlice.actions;
