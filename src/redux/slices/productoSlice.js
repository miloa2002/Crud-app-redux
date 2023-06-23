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
        },

        actualizarProducto: (state, action) => {
            const { id, nombre, precio } = action.payload;

            return {
                ...state,
                productosArray: state.productosArray.map((producto) => (
                    producto.id === id ? {...producto, nombre, precio} : producto
                ))
            }
            
        }
    }
})

export const { agregarProducto, obtenerProducto, eliminarProducto, actualizarProducto } =
  productoSlice.actions;

export default productoSlice.reducer