import { createSlice } from "@reduxjs/toolkit";
import { orders, products } from "./app";

const orderSlice = createSlice({
  name: "orders",
  initialState: { orders, products },
  reducers: {
    removeOrder(state, action) {
      const orderId = action.payload;
      state.orders = state.orders.filter((order) => order.id !== orderId);
      state.products = state.products.filter(
        (product) => product.order !== orderId
      );
    },
    removeProduct(state, action) {
      const { orderId, productId } = action.payload;
      const predicate = (product) =>
        product.id !== productId && product.order !== orderId;
      state.products = state.products.filter(predicate);
    },
  },
});

export const { removeOrder, removeProduct } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
