import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: null,
  },
  reducers: {
    productGetStart: (state) => {
      state.isFetching = true;
    },
    productGetSucces: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
      state.error = null;
    },
    productGetError: (state,action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const { productGetError, productGetSucces, productGetStart } =
  productSlice.actions;
export default productSlice.reducer;
