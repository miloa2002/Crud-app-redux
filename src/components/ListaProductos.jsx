import ResultadosData from "./ResultadosData"

// eslint-disable-next-line react/prop-types
const ListaProductos = ({ productosData }) => {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre del producto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // eslint-disable-next-line react/prop-types
                            productosData.map((producto) => (
                                <ResultadosData producto={producto} key={producto.id} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListaProductos