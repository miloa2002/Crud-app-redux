import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productosArray: []
}

export const productoSlice = createSlice({
    name: "producto",
    initialState,
    reducers:{
        agregarProducto: (state, action) => {
            state.productosArray = [...state.productosArray, action.payload]
        }
    }
})

export const { agregarProducto } = productoSlice.actions;

export default productoSlice.reducer