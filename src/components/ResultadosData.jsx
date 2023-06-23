/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import UseProductos from "../hook/UseProductos"
import { eliminarProducto } from "../redux/slices/productoSlice"
import { useNavigate } from "react-router-dom"

const ResultadosData = ({ producto }) => {

    const dispacth = useDispatch()
    const navigate = useNavigate()

    const productos = useSelector(state => state.producto.productosArray)

    const { setEditarProducto, setNombre, setPrecio } = UseProductos()

    const handleEliminar = id => {
        dispacth(eliminarProducto(id))
    }

    const handleEditar = id => {
        const productoEditado = productos.find((producto) => producto.id === id)

        setEditarProducto(id)
        setNombre(productoEditado.nombre)
        setPrecio(productoEditado.precio)

        navigate(`/productos/${id}`)
    }

    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {producto.nombre}
                </th>
                <td className="px-6 py-4">
                    {producto.precio}
                </td>
                <td className="px-6 py-4 flex md:flex-row flex-col gap-4">
                    <button 
                        className="bg-red-600 text-white py-2 px-5 rounded-md"
                        onClick={()=>handleEliminar(producto.id)}
                    >Eliminar</button>

                    <button 
                        className="bg-teal-600 text-white py-2 px-5 rounded-md"
                        onClick={() => handleEditar(producto.id)}
                    >Editar</button>
                </td>
            </tr>
        </>
    )
}

export default ResultadosData