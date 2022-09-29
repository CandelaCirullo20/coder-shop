import React from 'react';
import { useCartContext } from '../CartContext.jsx/CartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = ()  => {
    const {totalProducts} = useCartContext();
    return (
        <div class="icon">
            <FontAwesomeIcon icon={ faCartShopping } />
            <span>{totalProducts() || ''}</span>
        </div>
    );
}

export default CartWidget;