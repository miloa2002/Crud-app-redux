import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { actualizarProducto, agregarProducto } from "../redux/slices/productoSlice"
import UseProductos from "../hook/UseProductos"


const Formulario = () => {

    const { nombre, setNombre, precio, setPrecio, editarProducto, setEditarProducto } = UseProductos()
    const [error, setError] = useState("")

    const dipatch = useDispatch()
    const navigate = useNavigate()
    const id = Math.random().toString().slice(2, 8);
    
    const handleSubmit = e => {
        e.preventDefault();

        if([nombre, precio].includes("")){
            setError("Todos los campos son obligatorios")
            return;
        }

        if(editarProducto !== null){
            const edicionProducto = {
                id: editarProducto,
                nombre,
                precio
            }

            dipatch(actualizarProducto(edicionProducto))
            setEditarProducto(null)
        }else{
            const producto = {
                id,
                nombre,
                precio
            }
            dipatch(agregarProducto(producto))
            navigate("/")
        }


        setNombre("")
        setPrecio("")
    }

    return (
        <>
        {error && <p className="font-bold text-center bg-red-600 p-3 rounded-md text-white mb-6">{error}</p>}
            <form
                onSubmit={handleSubmit}
            >
                <div className="mb-6">
                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del producto:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Ej: Papas de limón"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        />
                </div>
                <div className="mb-6">
                    <label htmlFor="precio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio del producto:</label>
                    <input 
                        type="number" 
                        id="precio" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Ej: 2.500" 
                        value={precio}
                        onChange={e => setPrecio(e.target.value)}
                    />
                </div>
                <input type="submit" value={editarProducto ? "Edita el producto" : "Crea un producto"} className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:bg-teal-800 cursor-pointer" />
            </form>

        </>
    )
}

export default Formulario