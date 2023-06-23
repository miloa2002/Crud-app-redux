import { useContext } from "react";
import { ProductosContext } from "../context/ProductosProvider";

const UseProductos = () => {
  return useContext(ProductosContext)
}

export default UseProductos