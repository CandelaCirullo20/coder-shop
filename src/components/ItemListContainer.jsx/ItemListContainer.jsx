 
 import ItemList from "../ItemList.jsx/ItemList";
 import React, { useEffect, useState } from "react";
 import Title from "../pages/title";
 import { useParams } from 'react-router-dom';
 import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";


 export const ItemListContainer = ({greeting}) => {
    
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();
    
    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "celulares");
        if (categoriaId) {
        const queryFilter = query(queryCollection, where("category", "==", categoriaId))
        getDocs(queryFilter)
           .then(res => setData(res.docs.map(celulares => ({ id: celulares.id, ...celulares.data() }))))
    }else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(celulares => ({ id: celulares.id, ...celulares.data() }))))
    }
    }, [categoriaId])



    return (
        <>
        <Title greeting="Mundo de celulares"/>
        <ItemList data={data} />
        </>
        
    );
    
}

export default ItemListContainer;


