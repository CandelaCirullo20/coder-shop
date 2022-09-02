import ItemListContainer from "../ItemListContainer/ItemListContainer";
import Navbar from "../NavBar/NavBar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="Mundo de celulares"/>
        </div>
    );
}

export default Home;