 import ItemCount from "../ItemCount.jsx/ItemCount";
 import React from "react";
 import Title from "../pages/title";

 
 export const ItemListContainer = ({greeting}) => {

    const onAdd = (quanity) => {
        console.log(`Compraste ${quanity} unidades`);
    }

    return (
        <>
        <Title greeting="Mundo de celulares"/>
        < ItemCount initial={1} stock={7} onAdd={onAdd} />
        </>
        
    );
    
}

export default ItemListContainer;


