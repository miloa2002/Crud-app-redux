import { createContext } from "react"

const ProductosContext = createContext()

// eslint-disable-next-line react/prop-types
const ProductosProvider = ({ children }) => {
  return (
    <ProductosContext.Provider
      value={{}}
    >
        { children }
    </ProductosContext.Provider>
  )
}

export { ProductosContext }
export default ProductosProvider