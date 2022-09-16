import { NavLink } from 'react-router-dom';
import React from 'react';
import CartWidget from "../CartWidget.jsx/CartWidget";

export const Navbar = () => {
    return (
        <div className="nav" >
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <NavLink className="logotipo" to='/'>iShop</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link"  to='/categoria/iphone'>iPhone</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link"  to='/categoria/motorola'>Motorola</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link"  to='/categoria/samsung'>Samsung</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex" role="cart">
                            <NavLink class="btn btn-outline-success"  to='/cart'type="submit"><CartWidget /></NavLink>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;