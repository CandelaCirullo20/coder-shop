import Cart from "../CartWidget.jsx/CartWidget";
function Navbar() {
    return (
        <div class="nav" >
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="logo" href="#">iShop</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Motorola</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">iPhone</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Samsung</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">< Cart /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;