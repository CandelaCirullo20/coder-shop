import "./App.css";
import Navbar from "./components/NavBar.jsx/NavBar.jsx";
import "./components/NavBar.jsx/navBar.css"
import "bootstrap/dist/css/bootstrap.css";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx/ItemDetailContainer";



const App = () => {
    return (
        <div>
            < Navbar/>
            < ItemDetailContainer />
            
        </div>
    )
}

export default App;
