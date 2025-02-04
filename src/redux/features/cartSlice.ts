import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockCartItems } from "../../mock/mockProductCardTypeData";
import { CartItem } from "../../components/pages/user/cart";

const initialState = {
  // products: [] as Product[],
  products: mockCartItems,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index == -1) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        state.products[index].quantity++;
      }
    },
    reset: (state) => {
      state.products = initialState.products;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
    changeQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index].quantity = action.payload.quantity;
      }
    },
    getAll: (state, action: PayloadAction<CartItem>) => {
      state.products = [...state.products, action.payload];
    },
  },
});
export const { add, reset, remove, changeQuantity, getAll } = cartSlice.actions;
export default cartSlice.reducer;
