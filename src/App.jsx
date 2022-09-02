import "./App.css";
import "./components/NavBar/navBar.css"
import NavBar from "./components/NavBar/NavBar"
import "bootstrap/dist/css/bootstrap.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";




const App = () => {
    return (
        <div>
            <NavBar/>
            <ItemListContainer />
            
        </div>
    )
}

export default App;
