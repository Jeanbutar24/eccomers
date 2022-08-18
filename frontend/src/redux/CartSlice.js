import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products.splice(
        // state.products.filter((item) => item._id !== action.payload),
        // 1
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
      // state.products = [];
    },
  },
});

export const { addProducts, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
