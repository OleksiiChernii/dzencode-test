import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./slice";

export const store = configureStore({
    reducer: {
        orders: orderReducer
    },
});
