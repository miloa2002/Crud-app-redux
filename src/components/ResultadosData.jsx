/* eslint-disable react/prop-types */

const ResultadosData = ({ producto }) => {

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
                    >Eliminar</button>

                    <button 
                        className="bg-teal-600 text-white py-2 px-5 rounded-md"
                    >Editar</button>
                </td>
            </tr>
        </>
    )
}

export default ResultadosData