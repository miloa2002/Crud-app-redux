import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header
        className="w-full bg-teal-600 py-8 mb-12"
    >
        <nav className="container">
            <ul className="flex flex-col md:flex-row justify-between items-center uppercase text-white font-semibold">
                <Link 
                    to="/"
                    className="hover:border-b-2 hover:border-white hover:transition-all"
                >Crud redux toolkit</Link>
                <Link 
                    to="/productos"
                    className="bg-orange-400 p-3 rounded-md hover:bg-orange-500 hover:transition-colors mt-4 md:mt-0"
                >Crea un producto</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Header