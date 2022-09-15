import { ItemDetail } from "../ItemDetail.jsx/ItemDetail";
import React, { useEffect, useState } from "react";


const film = { id: 1, image: "https://eringpro.com/wp-content/uploads/2021/12/iphone-13-pro-max-gold-select.png", title: "iPhone 13 Pro Max" };

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
   
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(film);
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])
    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;