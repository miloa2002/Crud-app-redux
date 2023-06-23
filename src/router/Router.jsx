import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductosForm from "../pages/ProductosForm";
import Home from "../pages/Home";
import Header from "../layout/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductosForm />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router