import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cartItems.pop();
    },
    clearCart: (state) => {
      // state.cartItems.length = 0;
      return { cartItems: [] };
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
