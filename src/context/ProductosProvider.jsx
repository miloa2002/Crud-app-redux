import { createContext, useState } from "react"

const ProductosContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductosProvider = ({ children }) => {

  //estados
  const [ nombre, setNombre ] = useState("")
  const [ precio, setPrecio ] = useState("")
  const [ editarProducto, setEditarProducto ] = useState(null)


  return (
    <ProductosContext.Provider
      value={{
        nombre, setNombre,
        precio, setPrecio,
        editarProducto, setEditarProducto
      }}
    >
        { children }
    </ProductosContext.Provider>
  )
}

export { ProductosContext }
export default ProductosProvider