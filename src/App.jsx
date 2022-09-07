import "./App.css";
import Navbar from "./components/NavBar.jsx/NavBar.jsx";
import "./components/NavBar.jsx/navBar.css"
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer.jsx/ItemListContainer";



const App = () => {
    return (
        <div>
            < Navbar/>
            <ItemListContainer />
            
        </div>
    )
}

export default App;
