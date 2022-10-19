import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../CartContext.jsx/CartContext';
import ItemCart from '../ItemCart.jsx/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length ===0){
        return (
            <>
              <p>No hay productos en el carrito</p>
              <Link to='/'>Seleccionar producto</Link>
            </>
        );
    }
    return (
        <>
          {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
          }
          <p>
              total: {totalPrice()}
          </p>
        </>
    )
}

export default Cart