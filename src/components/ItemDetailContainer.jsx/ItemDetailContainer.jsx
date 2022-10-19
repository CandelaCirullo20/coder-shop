import { ItemDetail } from "../ItemDetail.jsx/ItemDetail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";




export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();
    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "celulares", detalleId);
        getDoc(queryDoc)
        .then(res => setData({ id: res.id, ...res.data() }))
    }, [detalleId])
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;