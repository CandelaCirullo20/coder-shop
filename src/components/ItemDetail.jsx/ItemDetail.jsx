import './ItemDetail.css';
import ItemCount from "../ItemCount.jsx/ItemCount";
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoCart] = useState (false);
    
    const onAdd = (quanity) => {
        setGoCart(true);
    }
    
    return (
        <div className='container'>
            <div className='detail'>
                <img className='detailImg' src={data.image} alt="" />
                <div className='content'>
                    <h1>{data.title}</h1>
                    {
                        goToCart 
                        ? <Link to='/cart'>Terminar compra</Link>
                        : <ItemCount initial={1} stock={7} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}