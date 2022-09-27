import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar.jsx/NavBar.jsx";
import "./components/NavBar.jsx/navBar.css"
import "bootstrap/dist/css/bootstrap.css";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";
import Cart from "./components/CartWidget.jsx/CartWidget";
import ItemListContainer from "./components/ItemListContainer.jsx/ItemListContainer";
import CartProvider from "./components/CartContext.jsx/CartContext";



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                < Navbar />
                <Routes>
                    <Route path='/' element={< ItemListContainer />} />
                    <Route path='/categoria/:categoriaId' element={< ItemListContainer />} />
                    <Route path='/cart' element={< Cart />} />
                    <Route path='/detalle/:detalleId' element={< ItemDetailContainer />} />
                </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;
