import './App.css';
import Conteiner from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-bootstrap';

function App(){
    return(
        <div className='App'>
            <Navbar>
                <Conteiner>
                    <Navbar.Brand className='logo' href='#home'>iShop</Navbar.Brand>
                    <Nav className='me-auto'>
                        <NavLink className='menu' href='#home'> Home</NavLink>
                        <NavLink className='menu' href='#features'> iPhone</NavLink>
                        <NavLink className='menu' href='#pricing'>Samsung</NavLink>
                    </Nav>
                </Conteiner>
            </Navbar>

        </div>
    )
}

export default App;