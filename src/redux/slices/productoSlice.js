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
        },

        obtenerProducto: (state, action) => {
            state.productosArray = action.payload
        },

        eliminarProducto: (state, action) => {
            state.productosArray = state.productosArray.filter(producto => producto.id !== action.payload)
        }
    }
})

export const { agregarProducto, obtenerProducto, eliminarProducto } = productoSlice.actions;

export default productoSlice.reducer