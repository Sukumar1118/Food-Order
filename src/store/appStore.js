import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSliceReducer";

const appStore = configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
  },
});

export default appStore;
