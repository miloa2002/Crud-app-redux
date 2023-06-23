import { configureStore } from "@reduxjs/toolkit";
import productoReducer from "./slices/productoSlice";

export const store = configureStore({
    reducer: {
        producto: productoReducer
    }
})