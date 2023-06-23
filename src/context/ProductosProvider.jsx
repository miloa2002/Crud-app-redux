import { createContext, useState } from "react"

const ProductosContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductosProvider = ({ children }) => {

  //estados
  const [ nombre, setNombre ] = useState("")
  const [ precio, setPrecio ] = useState("")


  return (
    <ProductosContext.Provider
      value={{
        nombre, setNombre,
        precio, setPrecio,
      }}
    >
        { children }
    </ProductosContext.Provider>
  )
}

export { ProductosContext }
export default ProductosProvider