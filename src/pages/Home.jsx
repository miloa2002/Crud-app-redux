import ListaProductos from "../components/ListaProductos"
import { useDispatch, useSelector } from "react-redux"
import { obtenerProducto } from "../redux/slices/productoSlice"
import { useEffect } from "react"

const Home = () => {

  const dispacth = useDispatch()
  const productosData = useSelector(state => state.producto.productosArray)

  useEffect(()=>{
    dispacth(obtenerProducto(productosData))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[dispacth])


  return (
    <div className="container">
      <ListaProductos />
    </div>
  )
}

export default Home